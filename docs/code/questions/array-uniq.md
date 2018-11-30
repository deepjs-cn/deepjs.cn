# 数组去重

source: https://segmentfault.com/a/1190000013192950

日常开发中或多或少都会碰到有对数据去重的需求，实际上，像是lodash这些工具库已经有成熟完备的实现，并且可以成熟地运用于生产环境。但是这并不妨碍我们从思维拓展的角度出发，看看去重可以用几种思路去实现。

1. 常规的双层循环比对的思路实现

```typescript
function doubleLoopUniq(arr) {
  let result = [];
  for (let i = 0, len = arr.length, isExist; i < len; i++) {
    // 定义一个变量表示当前元素在 result 中是否存在。
    isExist = false;
    for (let j = 0, rLen = result.length; j < rLen; j++) {
      if (result[j] === arr[i]) {
        // 依次对result 中的元素 和 原数组元素进行比对。
        isExist = true;
        break;
      }
    }
    // 最后判断如果不存在，则将此元素插入result
    !isExist && result.push(arr[i]);
  }
  return result;
}
```

2. 借助 js 内置的 indexOf 进行去重

```typescript
function indexOfUniq(arr) {
  let result = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    // 用indexOf 简化了二层循环的流程
    if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
  }
  return result;
}

const arr = [1, 3, 5, 3, 6, 5, 4];
const result = indexOfUniq(arr);
console.log(result);
```

3. 排序后前后比对去重

```typescript
function sortUniq(arr) {
  let result = [], last;
  // 这里解构是为了不对原数组产生副作用
  [ ...arr ].sort().forEach(item => {
    if (item != last) {
      result.push(item);
      last = item;
    }
  });
  return result;
}
```

4. 通过hashTable去重

```typescript
function hashUniq(arr) {
  let hashTable = arr.reduce((result, curr, index, array) => {
    result[curr] = true;
    return result;
  }, {})
  return Object.keys(hashTable).map(item => parseInt(item, 10));
}
```

5. ES6 SET一行代码实现去重

```typescript
function toSetUniq(arr) {
  return Array.from(new Set(arr));
}
```

6. splice 去重（直接操作数组本身，带副作用）

```typescript
function inPlaceUniq(arr) {
  let idx = 0;
  while (idx < arr.length) {
    let compare = idx + 1;
    while (compare < arr.length) {
      if (arr[idx] == arr[compare]) {
        arr.splice(compare, 1);
        continue;
      }
      ++compare
    }
    ++idx;
  }
  return arr;
}
```

最后在nodejs下面简单跑个测试，看看哪个效率高~

```nodejs
let data = [];
for (var i = 0; i < 100000; i++) {
  data.push(Math.random())
}

// 实现一个性能测试的装饰器
function performanceTest(fn, descript) {
  var a = new Date().getTime();
  return function () {
    fn.apply(this, [].slice.call(arguments, 0));
    console.log(descript, new Date().getTime() - a)
  }
}

performanceTest(hashUniq, "hashTable")(data)
performanceTest(sortUniq, "sortUniq")(data)
performanceTest(toSetUniq, "toSetUniq")(data)
performanceTest(indexOfUniq, "indexOfUniq")(data)
performanceTest(doubleLoopUniq, "doubleLoopUniq")(data)
performanceTest(inPlaceUniq, "inPlaceUniq")(data)
```

延伸思考： 如果数组内的元素是对象该怎么去重呢？

既然是引用类型，那么不免会使用到deepEqual，固然这种思路可以解答这道问题，但难免不够高效。

从上面的测试中也可见通过new Set 和 hashTable 去重是最高效的。
所以毫无疑问，我们要基于这两种方式去改造，我想用的是hashTable，
另一方面，为了降低深度比较带来的耗时，我尝试用JSON.stringify 将引用类型转化为基本类型。

```js
function collectionUniq(collection) {
  let hashTable = {};
  collection.forEach(item => {
    hashTable[JSON.stringify(item)] = true;
  })
  return Object.keys(hashTable).map(item => JSON.parse(item))
}
```

那么问题来了，我们都知道对象的属性是无序的，假如数据是这种情况，那就GG了。

let collection = [ { a: 1, b: 2, c: 3 }, { b: 2, c: 3, a: 1 } ]
有一种toHash的思路，在对这个数组进行一次基本的去重之后，为了保证准确，
先遍历JSON 字符串 =>
通过 charCodeAt()拿到每个字符串 的 unicode 编码 =>
相加得到一个总数，最后再两两进行比较，数值相等的就是重复的，这样就达到去重的效果了。

```js
function toHash(obj) {
  let power = 1;
  let res = 0;
  const string = JSON.stringify(obj, null, 2);
  for (let i = 0, l = string.length; i < l; i++) {
    switch (string[i]) {
      case '{':
        power *= 2
        break
      case '}':
        power /= 2
        break
      case ' ':
      case '\n':
      case '\r':
      case '\t':
      break
      default:
        res += string[i].charCodeAt(0) * power
    }
  }
  return res
}
```

这只是一个实现基本的思路，有很大的改进空间，为了减少hash碰撞的可能，可以对一些特殊字符进行权重的增减。

重点是保证碰撞的几率小到比中大奖还小就可以了。

2018.2.8

上面是一个比较清奇的思路，常规的做法，实际上还是应该从优化深度比较的效率入手。
看到一个很好的实现思路，是一个优先判错的思路，通过预设各种前置条件来避免高代价的循环，这种思路尽管在数据量小的时候因为前置判断可能有一些微乎其微的性能损耗，但是数据量越大，优势就越明显了。感兴趣的可以了解下。

- https://github.com/epoberezkin/fast-deep-equal


/**
 * 快速排序
 *
 * 大致分三步：
 * 1、找基准（一般是以中间项为基准）
 * 2、遍历数组，小于基准的放在left，大于基准的放在right
 * 3、递归
**/

function quickSort (arr) {
  // 如果数组<=1,则直接返回
  const len = arr.length
  if (len <= 1) {
    return arr
  }
  const pivotIndex = Math.floor(len / 2)
  // 找基准，并把基准从原数组删除
  const pivot = arr.splice(pivotIndex, 1)[0]
  // 定义左右数组
  const left = []
  const right = []

  // 比基准小的放在left，比基准大的放在right
  for (let i = 0; i < len; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  // 递归
  return quickSort(left).concat([pivot], quickSort(right))
}

const testArr = [2, 6, 3, 5, 9, 6, 8, 4, 1, 7]
const result = quickSort(testArr)
console.log(result)

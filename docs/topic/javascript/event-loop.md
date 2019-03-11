# 深入理解 JavaScript 事件循环（一）— event loop

- 摘自 [深入理解 JavaScript 事件循环（一）— event loop](https://www.cnblogs.com/dong-xu/p/7000163.html)
- [事件循环上下文中微任务和宏任务之间的区别](https://stackoverflow.com/questions/25915634/difference-between-microtask-and-macrotask-within-an-event-loop-context)
- [JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
- [W3C event-loops](https://www.w3.org/TR/2017/REC-html52-20171214/webappapis.html#event-loops)

- 宏任务 macrotasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI呈现
- 微任务 microtasks: process.nextTick, Promises, Object.observe, MutationObserver

## 引言

相信所有学过 JavaScript 都知道它是一门单线程的语言，这也就意味着 JS 无法进行多线程编程，但是 JS 当中却有着无处不在的异步概念 。在初期许多人会把异步理解成类似多线程的编程模式，其实他们中有着很大的差别，要完全理解异步，就需要了解 JS 的运行核心——**事件循环（event loop）**。在之前我对事件循环的认识也是一知半解的，直到我看了 Philip Roberts 的演讲 [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)，我才对事件循环有了一个全面的认识，所以我想写一篇介绍 JS 事件循环的文章，以供大家学习和参考。

## 一、为什么会有异步？

为什么 JS 当中会有异步？我们想象一下，如果我们同步的执行一下代码会发生什么：

```js
$.get(url, function(data) {
  //do something
});
```

在我们使用 ajax 进行通信的时候，我们都默认了它是异步的，但是如果我们设置其为同步执行，会发生什么？如果你自己写一个小的测试程序，将后台代码延迟5s你会发现浏览器会出现阻塞，直到 ajax 响应了之后才会正常运行。这便是异步模式要解决的首要问题，如何使浏览器非阻塞的运行任务。想象一下如果我们同步的执行 ajax 请求的话，我们的等待的时间是一个未知数，在网络通信中可能很快也可能很慢，也可能永远也不会响应，这也就会导致浏览器会阻塞在一个未知的任务上面，这也是我们不希望看到的。所以我们希望有一种方式能够异步的处理程序，我们并不需要关心一个 ajax 请求会在何时完成，甚至它可以永远不会响应，我们只需要知道在请求响应后该如何处理，并且在等待响应的这段时间内我们还可以做一些其他的工作。因此，便有了 JavaScript Event Loop。

## 二、什么是事件队列？

首先，我们先来看一段简单的代码：

```js
console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 1000);

console.log("script end");
```

你可以在这里查看结果：

demo1

我们可以看到，首先，程序输出 `script start` 和 `script end`，在大约1s之后输出了 `setTimeout` 。该程序的 `script end` 并没有等待1s之后输出，而是立即输出。这是因为 setTimeout 是一个异步的函数。意思也就是说当我们设置一个延迟函数的时候，当前脚本并不会阻塞，它只是会在浏览器的 **事件表** 中进行记录，程序会继续向下执行。当延迟的时间结束之后，事件表会将回调函数添加至 **事件队列（task queue）** 中，事件队列拿到了任务过后便将任务压入 **执行栈（stack）** 当中，执行栈执行任务，输出 `setTimeout`。

事件队列是一个存储着待执行任务的队列，其中的任务严格按照时间先后顺序执行，排在队头的任务将会率先执行，而排在队尾的任务会最后执行。事件队列每次仅执行一个任务，在该任务执行完毕之后，再执行下一个任务。执行栈则是一个类似于函数调用栈的运行容器，当执行栈为空时，JS 引擎便检查事件队列，如果不为空的话，事件队列便将第一个任务压入执行栈中运行。

现在，我们对上面的代码进行一点修改：

```js
console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

console.log("script end");
```

将延迟时间设置为0，看看程序会以何种顺序输出？无论我们设置多少的延迟时间，`setTimeout` 总是会在 `script end` 之后输出。有些浏览器可能会有一个最小延迟时间，有的是 15ms，有的是 10ms，这个在很多书当中都有提到，这可能会给同学们造成一种错觉：由于程序运行速度很快，并且有最小延迟时间，所以 `setTimeout` 会在 `script end` 之后输出。现在让我们在稍微变一下，来消除你的错觉：

```js
console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

// 具体数字不定，这取决于你的硬件配置和浏览器
for(var i = 0; i < 999999999; i ++){
  // do something
}

console.log("script end");
```

你可以在这里查看结果：

demo2

可以看出，无论后面我们做了多少延迟性的工作，`setTimeout` 总是会在 `script end` 之后输出。所以究竟发生了什么？这是因为 setTimeout 的回调函数只是会被添加至事件队列，而不是立即执行。由于当前的任务没有执行结束，所以 setTimeout 任务不会执行，直到输出了 `script end` 之后，当前任务执行完毕，执行栈为空，这时事件队列才会把 setTimeout 回调函数压入执行栈执行。

demo3

执行栈则像是函数的调用栈，是一个树状的栈：

demo4

## 三、事件队列有何作用？

通过以上的 demo 相信同学们都会对事件队列和执行栈有了一个基本的认识，那么事件队列有何作用？最简单易懂的一点就是之前我们所提到的异步问题。由于 JS 是单线程的，同步执行任务会造成浏览器的阻塞，所以我们将 JS 分成一个又一个的任务，通过不停的循环来执行事件队列中的任务。这就使得当我们 **挂起** 某一个任务的时候可以去做一些其他的事情，而不需要等待这个任务执行完毕。所以事件循环的运行机制大致分为以下步骤：

1. 检查事件队列是否为空，如果为空，则继续检查；如不为空，则执行 2；
2. 取出事件队列的首部，压入执行栈；
3. 执行任务；
4. 检查执行栈，如果执行栈为空，则跳回第 步；如不为空，则继续检查；

然而目前为止我们讨论的仅仅是 JS 引擎如何JS 代码，现在我们结合 Web APIs 来讨论事件循环在当中扮演的角色。

在开始我们讨论过 ajax 技术的异步性和同步性，通过事件循环机制，我们则不需要等待 ajax 响应之后再进行工作。我们则是设置一个回调函数，将 ajax 请求挂起，然后继续执行后面的代码，至于请求何时响应，对我们的程序不会有影响，甚至它可能永远也不响应，也不会使浏览器阻塞。而当响应成功了以后，浏览器的事件表则会将回调函数添加至事件队列中等待执行。事件监听器的回调函数也是一个任务，当我们注册了一个事件监听器时，浏览器事件表会进行登记，当我们触发事件时，事件表便将回调函数添加至事件队列当中。

demo5

我们知道 DOM 操作会触发浏览器对文档进行渲染，如修改排版规则，修改背景颜色等等，那么这类操作是如何在浏览器当中奏效的？至此我们已经知道了事件循环是如何执行的，事件循环器会不停的检查事件队列，如果不为空，则取出队首压入执行栈执行。当一个任务执行完毕之后，事件循环器又会继续不停的检查事件队列，不过在这间，浏览器会对页面进行渲染。这就保证了用户在浏览页面的时候不会出现页面阻塞的情况，这也使 JS 动画成为可能， jQuery 动画在底层均是使用 setTimeout 和 setInterval 来进行实现。想象一下如果我们同步的执行动画，那么我们不会看见任何渐变的效果，浏览器会在任务执行结束之后渲染窗口。反之我们使用异步的方法，浏览器会在每一个任务执行结束之后渲染窗口，这样我们就能看见动画的渐变效果了。

考虑如下两种遍历方式：

```js
var arr = new Array(999);
arr.fill(1);
function asyncForEach(array, handler){
  var t = setInterval(function () {
    if(array.length === 0){
      clearInterval(t);
    }else {
      handler(arr.shift());
    }
  }, 0);
}

//异步遍历
asyncForEach(arr, function (value) {
  console.log(value);
})；

//同步遍历
arr.forEach(function (value, index, arr) {
  console.log(value);
});
```

测试，我们可以看出，采用同步遍历的方法，当数组长度上升到3位数的时候，便会出现阻塞，但是异步遍历却不会出现阻塞现象（除非数组长度非常大，那是因为计算机的内存空间不足）。这是因为同步遍历方法是一个单独的任务，这个任务会将所有的数组元素遍历一遍，然后才会开始下一个任务。而异步遍历的方法将每一次遍历拆分成一个单独的任务，一个任务只遍历一个数组元素，所以在每个任务之间，我们的浏览器可以进行渲染，所以我们不会看见阻塞的情况。下面这个 demo 演示了在异步遍历前后发生的事情：

demo6

## 总结

现在，相信你已经认识了 JavaScript 的真实面目了吧。 JavaScript 是一门单线程的语言，但是其事件循环的特性使得我们可以异步的执行程序。这些异步的程序也就是一个又一个独立的任务，这些任务包括了 setTimeout、setInterval、ajax、eventListener 等等。关于事件循环，我们需要记住以下几点：

- 事件队列严格按照时间先后顺序将任务压入执行栈执行；
- 当执行栈为空时，浏览器会一直不停的检查事件队列，如果不为空，则取出第一个任务；
- 在每一个任务结束之后，浏览器会对页面进行渲染；

本文 demo 放在 jsfiddle 上，如需转载，注明下出处就好了。若您发现本文有所纰漏，欢迎在评论区指出。

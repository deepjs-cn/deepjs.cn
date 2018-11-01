'use strict';
(function () {
  var taskContent = document.getElementById("task-content");
  var microContent = document.getElementById("microtask-content");
  var stackContent = document.getElementById("stack-content");
  var logContent = document.getElementById("log-content");
  var nextBtn = document.getElementById("next-btn");
  var prevBtn = document.getElementById("prev-btn");
  var $alert = $(".alert-window");
  //语句高亮器
  var mark = function (selector) {
    $(".code-source span").removeClass('selected');
    $(selector).addClass('selected');
    location.hash = selector.substring(selector.lastIndexOf("#"), selector.length);
  }
  //事件循环器
  var eventLoop = (function () {
    var events = [];
    var domBackups = [];
    var eventBackups = [];

    return {
      length: 0,
      push: function (event) {
        events.push(event);
        this.length++;
        return this;
      },
      next: function () {
        var event = events.shift();
        if (!event) {
          return;
        }
        var content = document.getElementById("content");
        $(content).find('*').stop(false, true);
        var temp = content.cloneNode(true);
        domBackups.push(temp);
        eventBackups.push(event);
        this.length--;
        event();
      },
      rollback: function () {
        var temp = domBackups.pop();
        if (!temp) {
          return;
        }
        this.length++;
        events = Array.from([eventBackups.pop()]).concat(events);
        var content = document.getElementById("content");
        document.body.insertBefore(temp, content);
        document.body.removeChild(content);
        taskContent = document.getElementById("task-content");
        microContent = document.getElementById("microtask-content");
        stackContent = document.getElementById("stack-content");
        logContent = document.getElementById("log-content");
        nextBtn = document.getElementById("next-btn");
        prevBtn = document.getElementById("prev-btn");
        $alert = $(".alert-window");
        nextBtn.addEventListener("click", function (event) {
          eventLoop.next();
        }, false);
        prevBtn.addEventListener("click", function (event) {
          eventLoop.rollback();
        }, false);
      }
    }

  })();
  //操作器
  var container = function (container) {
    var $container = $(container);
    return {
      push: function (text, then) {
        var span = document.createElement("span");
        span.setAttribute("class", "queue-item");
        span.style.display = 'none';
        span.innerText = text;
        container.appendChild(span);
        $(span).fadeIn(200);
      },
      pop: function (fn) {
        var lastChild = container.lastChild;
        var copy = lastChild.cloneNode(true);
        $(lastChild).animate({
          width: 0
        }, 400, function () {
          $(lastChild).remove();
          fn ? fn() : 0;
        });
        /*
        $(lastChild).fadeOut(400, function() {
        	$(lastChild).remove();
        	fn ? fn() : 0;
        });
        */
        return copy;
      },
      shift: function (fn) {
        var shiftChild;
        var children = container.children;
        if (children.length === 0) {
          return;
        }
        for (var i = 0, length1 = children.length; i < length1; i++) {
          var flag = children[i].getAttribute("flag");
          if (flag == "1") {
            continue;
          } else {
            children[i].setAttribute("flag", "1");
            shiftChild = children[i];
            break;
          }
        }
        var copy = shiftChild.cloneNode(true);
        $(shiftChild).animate({
          width: 0
        }, 400, function () {
          $(shiftChild).remove();
          fn ? fn() : 0;
        });
        // $(shiftChild).fadeOut(400, function() {
        // 	$(shiftChild).remove();
        // 	fn ? fn() : 0;
        // });
        return copy;
      },
      highlight: function (index) {
        if (index != undefined) {
          $container.find('span.queue-item').removeClass('queue-highlighted');
          $container.find('span.queue-item').eq(index).addClass('queue-highlighted');
        } else {
          $container.find('span.queue-item').addClass('queue-highlighted');
        }
      }
    }
  }

  function addEvent() {
    eventLoop.push(function () {
      container(taskContent).push("click callback");
    });
    eventLoop.push(function () {
      container(stackContent).push("click callback");
    });
    eventLoop.push(function () {
      container(taskContent).push("setTimeout callback");
    });
    eventLoop.push(function () {
      container(stackContent).push("foo");
    });
    eventLoop.push(function () {
      container(logContent).push("foo");
    });
    eventLoop.push(function () {
      container(stackContent).pop();
    });
    eventLoop.push(function () {
      container(stackContent).pop();
    });
    eventLoop.push(function () {
      container(taskContent).shift();
    });
    eventLoop.push(function () {
      container(stackContent).push("setTimeout callback");
    });
    eventLoop.push(function () {
      container(logContent).push("setTimeout");
    });
    eventLoop.push(function () {
      container(stackContent).pop();
    });
    eventLoop.push(function () {
      container(taskContent).shift();
      $alert.text("执行完毕");
      $alert.fadeIn(200);
    });
  }

  var button = document.getElementById("test-btn");
  $(button).one('click', function (event) {
    addEvent();
    var deg = 1;
    var t = setInterval(function () {
      if (eventLoop.length === 0) {
        clearInterval(t);
      }
      eventLoop.next();
      $(".cycle-icon").css({
        transform: 'rotate(' + deg * 360 + 'deg)',
      });
      deg++;
    }, 1500);
  });
})();

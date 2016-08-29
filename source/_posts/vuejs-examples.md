title: "Vue.js 不完全体验" 
date: 2016-08-28 11:10:01
tags:  
  - Vue.js
  - 前端
  - JavaScript
categories: 学习笔记
---
![](http://vuejs.org/images/logo.png "Vue.js")
刚刚看了下之前发文章的时间，发现好久都没写文章了。。。断断续续的，也不知道在忙些什么<BR> -_-!!!!。

最近公司项目上用到了 [Vue.js][vue] ,秉着`好记性比如烂笔头`的原则，准备在这里把 [Vue.js][vue] 的例子挨个敲一遍，学习学习，顺带也算做个记录，方便以后查找 (会不会很蠢啊 \#_\#)。

<!--more-->
## Install Vue.js
[官网][install]提供了`Vue.js`的各种安装方式，这里就不赘述了。

## Hello Vue.js
```HTML
<div id="app">
  {{msg}}
</div>
```

```js
new Vue({
  el:'#app',
  data:{
    msg:'hello Vue.js!'
  }
});
```
<iframe width="100%" height="200" src="//jsfiddle.net/LNing/1nkLex6d/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Two-way Binging(双向绑定)
```HTML
<div id="app">
  <p>{{msg}}</p>
  <input v-model="msg">
</div>
```

```js
new Vue({
  el:'#app',
  data:{
    msg:'hello Vue.js!'
  }
});
```
<iframe width="100%" height="200" src="//jsfiddle.net/LNing/rwz3qw8L/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Render a List(列表渲染)
```html
<div id="app">
  <ul>
    <li v-for="todo in todos">
      {{todo.text  }}
    </li>
  </ul>
</div>
```

```js
new Vue({
  el:'#app',
  data:{
    todos:[
      {text:'Learn JavaScript'},
      {text:'Learn Vue.js'},
      {text:'Build Something Awesome'}
    ]
  }
});
```
<iframe width="100%" height="300" src="//jsfiddle.net/LNing/3hmnuhgm/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Handle User Input(处理用户输入)
```html
<div id="app">
  <p>{{msg}}</p>
  <button v-on:click="reverseMsg">Reverse Msg</button>
</div>
```
```js
new Vue({
  el:'#app',
  data:{
    msg:'hello Vue.js!'
  },
  methods:{
    reverseMsg:function(){
      this.msg = this.msg.split('').reverse().join('')
    } 
  }
});
```
<iframe width="100%" height="300" src="//jsfiddle.net/LNing/n36u9sn5/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## All Together Now(综合)
```html
<div id="app">
  <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo">
  <ul>
    <li v-for="todo in todos">
      <span>{{todo.text}}</span>
      <button v-on:click="removeTodo($index)">X</button>
    </li>
  </ul>
</div>
```

```js
new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      { text: 'Add some todos' }
    ]
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
})
```
<iframe width="100%" height="300" src="//jsfiddle.net/LNing/9L9jr9q2/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


## Computed Properties(计算属性)
```html
<div id="app">
  a={{ a }}, b={{ b }}
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    a: 1
  },
  computed: {
    // a computed getter
    b: function () {
      // `this` points to the vm instance
      return this.a + 1
    }
  }
})
```
<iframe width="100%" height="300" src="//jsfiddle.net/LNing/jr2fsarp/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Method Handler(方法处理器)
```html
<div id="app">
  <button v-on:click="greet">Click Me</button>
</div>
```
```js
var vm = new Vue({
  el: '#app',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // `this` inside methods point to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      alert(event.target.tagName)
    }
  }
})
// you can invoke methods in JavaScript too
//vm.greet() // alert -> 'Hello Vue.js!'
```
<iframe width="100%" height="300" src="//jsfiddle.net/LNing/0byww9p5/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Inline Statement Handler(内联语句处理器)
```html
<div id="app">
  <button v-on:click="say('hi')">Say Hi</button>
  <button v-on:click="say('what')">Say What</button>
</div>
```
```js
new Vue({
  el: '#app',
  methods: {
    say: function (msg) {
      alert(msg)
    }
  }
})
```
<iframe width="100%" height="300" src="//jsfiddle.net/LNing/5jzd19kx/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Events & Keys Modifiers(事件&按键修饰符)
> Events Modifiers

```html
<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis"></a>
<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat">
<!-- just the modifier -->
<form v-on:submit.prevent></form>
```
> 1.0.16 新增的两个修饰符

```html
<!-- use capture mode when adding the event listener -->
<div v-on:click.capture="doThis">...</div>
<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">...</div>
```
> Keys Modifiers

```html
<!-- only call vm.submit() when the keyCode is 13 -->
<input v-on:keyup.13="submit">
<!-- same as above -->
<input v-on:keyup.enter="submit">
<!-- also works for shorthand -->
<input @keyup.enter="submit">
```
**全部的按键别名：**  
- enter
- tab
- delete
- esc
- space
- up
- down
- left
- right  

> ** 1.0.8+: ** 支持单字母按键别名
  ** 1.0.17+: ** 支持自定义按键别名:

```js
// 可以使用 @keyup.f1
Vue.directive('on').keyCodes.f1 = 112
```

> 未完，待续...

[vue]:http://vuejs.org "Vue.js 官网"
[install]:http://vuejs.org/guide/installation.html "installation"
//创建组件构造器
var myComponent=Vue.extend({
    template:"<p>这是一个全局注册的组件。</p>"
});

//注册组件
Vue.component('my-component',myComponent);

//使用组件
var vm=new Vue({
    el: '#app',

});


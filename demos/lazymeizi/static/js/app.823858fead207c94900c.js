webpackJsonp([1],{37:function(t,e,a){a(63);var n=a(60)(a(94),a(61),null,null);t.exports=n.exports},38:function(t,e,a){"use strict";var n=a(16),i=a(64);n.a.use(i.a),e.a=new i.a({routes:[{path:"/"}]})},61:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("ul",{attrs:{id:"container"}},t._l(t.img_list,function(t){return a("li",{staticClass:"img_item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"img"}]})])})),t._v(" "),a("button",{staticClass:"get_more",on:{click:t.get_more}},[t._v("点击加载更多")])])},staticRenderFns:[]}},63:function(t,e){},94:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(93),i=a.n(n);e.default={name:"app",data:function(){return{img_list:[],page:1}},mounted:function(){this.get_data()},methods:{get_data:function(){var t=this,e=this.page;this.$http.get("https://yokaki.github.io/demos/meizidata/meizi"+e+".json").then(function(e){t.img_list=[].concat(i()(t.img_list),i()(e.data))}).catch(function(t){console.log(t)})},get_more:function(){this.page+=1,this.get_data()}}}},95:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(16),i=a(37),o=a.n(i),s=a(38),r=a(35),u=a.n(r),c=a(36),p=a.n(c);n.a.prototype.$http=u.a,n.a.use(p.a,{preLoad:1.3,try:3}),new n.a({el:"#app",router:s.a,template:"<App/>",components:{App:o.a}})}},[95]);
//# sourceMappingURL=app.823858fead207c94900c.js.map
webpackJsonp([1],{"9CAc":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=a("AYPi"),n=a.n(s),r=[{id:1,title:"Marília Mendonça,Zé Neto & Cristiano,Maiara & Maraísa,Léo Santana,Dilsinho",slug:"marília-ze-neto-cristiano",thumbnail:"https://i.ytimg.com/vi/Wx1tVvXF4Io/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA5hTiwkz4Tr1w1hSMhPlwtmQeyYw",youtubeURL:"https://www.youtube.com/embed/Wx1tVvXF4Io",creator:"Marília Mendonça,Zé Neto & Cristiano,Maiara & Maraísa,Léo Santana,Dilsinho",likes:0,views:0},{id:2,title:"Bruno e Marrone",slug:"bruno-e-marrone",thumbnail:"https://i.ytimg.com/vi/kURJHBpUwzw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDnlrC2rVwXamNkicEEbc3Mf4T0w",youtubeURL:"https://www.youtube.com/embed/kURJHBpUwzw",creator:"Bruno e Marrone",likes:0,views:0},{id:3,title:"Jorge e Mateus",slug:"jorge-e-mateus",thumbnail:"https://i.ytimg.com/vi/q5Ee0NFNiVE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDnlrC2rVwXamNkicEEbc3Mf4T0w",youtubeURL:"https://www.youtube.com/embed/q5Ee0NFNiVE",creator:"Jorge e Mateus",likes:0,views:0},{id:4,title:"César Menotti e Fabiano",slug:"cesar-menotti-e-fabiano",thumbnail:"https://i.ytimg.com/vi/xxZlDxj3wqE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDnlrC2rVwXamNkicEEbc3Mf4T0w",youtubeURL:"https://www.youtube.com/embed/xxZlDxj3wqE",creator:"César Menotti e Fabiano",likes:0,views:0},{id:5,title:"Gustavo Lima",slug:"gustavo-lima",thumbnail:"https://i.ytimg.com/vi/WaPBJ_vXcoA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCCxXm7aoPShOwON74nhMlGYMUkHw",youtubeURL:"https://www.youtube.com/embed/WaPBJ_vXcoA",creator:"Gustavo Lima",likes:0,views:0}],o={name:"VideoPlayer",data:function(){return{videos:r,activeVideo:r[0]}},methods:{chooseVideo:function(t){this.activeVideo=t,t.views+=1,Object(s.page)("/"+t.slug)},addLike:function(){this.activeVideo.likes+=1}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticClass:"container"},[t._m(1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"container-video col-sm-12 col-md-8 col-lg-8 col-xl-8"},[a("iframe",{attrs:{width:"100%",height:"100%",src:this.activeVideo.youtubeURL,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}}),t._v(" "),a("h2",[t._v(t._s(this.activeVideo.title))])]),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"col-sm-8 col-md-4 col-lg-4 col-xl-4"},[a("div",{staticClass:"playlist"},[t._m(3),t._v(" "),t._l(t.videos,function(e){return a("div",{key:e.id,staticClass:"thumbnail",on:{click:function(a){return t.chooseVideo(e)}}},[a("div",{staticClass:"thumbnail-img"},[a("img",{attrs:{title:e.title,alt:e.title,src:e.thumbnail}})]),t._v(" "),a("div",{staticClass:"thumbnail-info"},[a("h2",[t._v(t._s(e.title))])])])})],2)]),t._v(" "),t._m(4)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leaderbord"},[e("div",{attrs:{"data-mvc-banner":"leaderboard"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("span",[e("h1",[this._v("As Melhores Lives da Quarentena")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-rectangle col-sm-12"},[e("div",{staticClass:"medium-rectangle-middle",attrs:{"data-mvc-banner":"medium-rectangle"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-side"},[e("div",{staticClass:"medium-rectangle",attrs:{"data-mvc-banner":"medium-rectangle"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-3 sky-wide"},[e("div",{attrs:{"data-mvc-banner":"sky-wide"}})])}]},c=a("VU/8")(o,l,!1,null,null,null).exports,u=(a("9CAc"),a("griA"),{name:"App",components:{VideoPlayer:c}}),m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("VideoPlayer")],1)},staticRenderFns:[]},d=a("VU/8")(u,m,!1,null,null,null).exports,v=a("/ocq");i.a.use(v.a);var w=new v.a({routes:[{path:"/",name:"VideoPlayer",component:c}]});i.a.config.productionTip=!1,i.a.use(n.a,{id:"UA-163936919-1"}),new i.a({el:"#app",router:w,components:{App:d},template:"<App/>"})},griA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1a9df01db1df6a0c4012.js.map
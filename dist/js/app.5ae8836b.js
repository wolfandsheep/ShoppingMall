(function(e){function t(t){for(var r,a,u=t[0],s=t[1],d=t[2],i=0,l=[];i<u.length;i++)a=u[i],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);h&&h(t);while(l.length)l.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-058850bd":"adf8cf08","chunk-0e79dc3f":"98b80d1d","chunk-198caeee":"4c42af7e","chunk-24b6d4b8":"8b105ab2","chunk-2d0ab84e":"0e55456a","chunk-2d0d0623":"446485f1","chunk-2d0e1d52":"36a627e0","chunk-2d2089b3":"ed50e99d","chunk-4c9f943e":"568a2117","chunk-6163b6e0":"8b8f8110","chunk-bfb57bca":"d4253667","chunk-403ace00":"93747907"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-058850bd":1,"chunk-0e79dc3f":1,"chunk-198caeee":1,"chunk-24b6d4b8":1,"chunk-4c9f943e":1,"chunk-6163b6e0":1,"chunk-bfb57bca":1,"chunk-403ace00":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-058850bd":"4e5bc361","chunk-0e79dc3f":"8e07b7b9","chunk-198caeee":"807bc845","chunk-24b6d4b8":"6342f937","chunk-2d0ab84e":"31d6cfe0","chunk-2d0d0623":"31d6cfe0","chunk-2d0e1d52":"31d6cfe0","chunk-2d2089b3":"31d6cfe0","chunk-4c9f943e":"13d7f849","chunk-6163b6e0":"6528dde5","chunk-bfb57bca":"188b8204","chunk-403ace00":"6609fc5d"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var d=c[u],i=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(i===r||i===o))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){d=l[u],i=d.getAttribute("data-href");if(i===r||i===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var d,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=u(e);var l=new Error;d=function(t){i.onerror=i.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:i})}),12e4);i.onerror=i.onload=d,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var h=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c6d":function(e,t,n){"use strict";n("e7e5");var r=n("d399"),a=n("cee4"),o=n("4360");const c=a["a"].create({baseURL:"http://smart-shop.itheima.net/index.php?s=/api",timeout:2e3,headers:{platform:"h5"}});c.interceptors.request.use(e=>(r["a"].loading({message:"加载中...",forbidClick:!0,duration:0}),o["a"].getters.token&&(e.headers["Access-Token"]=""+o["a"].getters.token,e.headers.platform="H5"),e),e=>Promise.reject(e)),c.interceptors.response.use(e=>(e=e.data,200!==e.status?(Object(r["a"])(e.message),Promise.reject(e.message)):(r["a"].clear(),e.data)),e=>(Object(r["a"])("响应失败了哦 !"),Promise.reject(e))),t["a"]=c},1543:function(e,t,n){},2166:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u}));var r=n("0c6d");function a(e,t,n){return r["a"].post("/cart/add",{goodsId:e,goodsNum:t,goodsSkuId:n})}function o(){return r["a"].get("cart/list")}const c=(e,t,n)=>r["a"].post("/cart/update",{goodsId:e,goodsNum:t,goodsSkuId:n}),u=e=>r["a"].post("/cart/clear",{cartIds:e})},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),o=n("5d2d"),c={namespaced:!0,state(){return{userInfo:Object(o["b"])()}},mutations:{setUserInfo(e,t){e.userInfo=t,Object(o["d"])(t)}},actions:{},getters:{}},u=(n("e7e5"),n("d399")),s=(n("13d5"),n("2166")),d={namespaced:!0,state(){return{cartList:[]}},mutations:{setCartList(e,t){e.cartList=t.list},toggleCheck(e,t){const n=e.cartList.find(e=>e.goods_id===t);n.isChecked=!n.isChecked},allCheck(e,t){e.cartList.forEach(e=>{e.isChecked=!t})},changeCount(e,t){const{goodsId:n,goodsNum:r}=t,a=e.cartList.find(e=>e.goods_id===n);a.goods_num=r}},actions:{async getCartListAction(e){const t=await Object(s["d"])();t.list.forEach(e=>{e.isChecked=!0}),e.commit("setCartList",t)},async changeCountAction(e,t){const{goodsNum:n,goodsId:r,goodsSkuId:a}=t;e.commit("changeCount",{goodsId:r,goodsNum:n}),await Object(s["b"])(r,n,a)},async delSelectAction(e){const t=e.getters.selCartList,n=t.map(e=>e.id);await Object(s["c"])(n),Object(u["a"])("删除成功!"),e.dispatch("getCartListAction")}},getters:{cartTotal(e){return e.cartList.reduce((e,t)=>e+t.goods_num,0)},selCartList(e){return e.cartList.filter(e=>!0===e.isChecked)},selCartTotal(e,t){return t.selCartList.reduce((e,t)=>e+t.goods_num,0)},selCartPrice(e,t){return t.selCartList.reduce((e,t)=>e+t.goods_num*t.goods.goods_price_min,0)},selAll(e,t){return e.cartList.every(e=>e.isChecked)}}};r["a"].use(a["a"]);t["a"]=new a["a"].Store({state:{},mutations:{},actions:{},getters:{token(e){return e.user.userInfo.token}},modules:{user:c,cart:d}})},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],c={name:"loginIndex",data(){return{}}},u=c,s=n("2877"),d=Object(s["a"])(u,a,o,!1,null,null,null),i=d.exports,l=n("8c4f"),h=n("4360");r["a"].use(l["a"]);const f=[{path:"/",component:()=>n.e("chunk-2d0ab84e").then(n.bind(null,"162e")),redirect:"/home",children:[{path:"/home",component:()=>n.e("chunk-6163b6e0").then(n.bind(null,"6733"))},{path:"/cart",component:()=>n.e("chunk-bfb57bca").then(n.bind(null,"154d"))},{path:"/category",component:()=>n.e("chunk-24b6d4b8").then(n.bind(null,"40eb"))},{path:"/user",component:()=>n.e("chunk-2d2089b3").then(n.bind(null,"a608"))}]},{path:"/layout",component:()=>n.e("chunk-2d0ab84e").then(n.bind(null,"162e"))},{path:"/login",component:()=>n.e("chunk-4c9f943e").then(n.bind(null,"9ed6"))},{path:"/myorder",component:()=>n.e("chunk-2d0d0623").then(n.bind(null,"686a"))},{path:"/pay",component:()=>n.e("chunk-2d0e1d52").then(n.bind(null,"7bb3"))},{path:"/search",component:()=>n.e("chunk-198caeee").then(n.bind(null,"efe3"))},{path:"/searchlist",component:()=>n.e("chunk-058850bd").then(n.bind(null,"fec8"))},{path:"/prodetail/:id?",component:()=>n.e("chunk-0e79dc3f").then(n.bind(null,"15cc"))}],p=new l["a"]({routes:f}),b=["/pay","/myorder","/user"];p.beforeEach((e,t,n)=>{if(!b.includes(e.path))return void n();const r=h["a"].state.user.userInfo.token;r?n():n("/login")});var m=p,g=(n("3c32"),n("417e")),k=(n("e17f"),n("2241")),y=(n("2cbd"),n("ab2c")),v=(n("4142"),n("39d1")),C=(n("66cf"),n("343b")),O=(n("c3a6"),n("ad06")),j=(n("3df5"),n("2830")),w=(n("4b0a"),n("2bb1")),L=(n("7844"),n("5596")),S=(n("5852"),n("d961")),_=(n("0ec5"),n("21ab")),I=(n("5246"),n("6b41")),N=(n("a52c"),n("2ed4")),P=(n("537a"),n("ac28")),A=(n("66b9"),n("b650"));r["a"].use(A["a"]),r["a"].use(P["a"]),r["a"].use(N["a"]),r["a"].use(I["a"]),r["a"].use(_["a"]),r["a"].use(S["a"]),r["a"].use(L["a"]),r["a"].use(w["a"]),r["a"].use(j["a"]),r["a"].use(O["a"]),r["a"].use(C["a"]),r["a"].use(v["a"]),r["a"].use(y["a"]),r["a"].use(k["a"]),r["a"].use(g["a"]);n("1543");r["a"].config.productionTip=!1,new r["a"]({router:m,store:h["a"],render:e=>e(i)}).$mount("#app")},"5d2d":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return s}));const r="my_shopping_info",a="my_history";function o(){const e={token:"",userId:""},t=JSON.parse(localStorage.getItem(r));return t||e}function c(e){localStorage.setItem(r,JSON.stringify(e))}function u(){const e=[],t=JSON.parse(localStorage.getItem(a));return t||e}function s(e){localStorage.setItem(a,JSON.stringify(e))}}});
//# sourceMappingURL=app.5ae8836b.js.map
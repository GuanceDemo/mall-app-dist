(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-productCollection"],{"0b22":function(t,e,a){"use strict";a.r(e);var o=a("9f22"),n=a("e237");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("840b");var r,l=a("f0c5"),c=Object(l["a"])(n["default"],o["b"],o["c"],!1,null,"2142b41d",null,!1,o["a"],r);e["default"]=c.exports},"38c7":function(t,e,a){var o=a("df6e");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=a("4f06").default;n("026b9992",o,!0,{sourceMap:!1,shadowMode:!1})},"706a":function(t,e,a){"use strict";var o=a("4ea4");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=o(a("1da1")),i=o(a("6fd1")),r=o(a("d3ff")),l=a("d8fd"),c=a("9f47"),d=getApp().globalData,u={components:{uniLoadMore:r.default,empty:i.default},data:function(){return{loadingType:"more",productList:[],searchParam:{pageNum:1,pageSize:6},global:d}},onLoad:function(t){this.loadData()},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.searchParam.pageNum++,this.loadData()},onNavigationBarButtonTap:function(t){var e=t.index,a=this;0===e&&uni.showModal({title:d.language.tips,content:d.language.clearAll,success:function(t){t.confirm&&(0,c.clearProductCollection)().then((function(t){a.loadData("refresh")}))}})},filters:{formatDateTime:function(t){if(null==t||""===t)return"N/A";var e=new Date(t);return(0,l.formatDate)(e,"yyyy-MM-dd hh:mm:ss")}},methods:{loadData:function(){var t=arguments,e=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var o,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(o=t.length>0&&void 0!==t[0]?t[0]:"add",n=t.length>1?t[1]:void 0,"add"!==o){a.next=8;break}if("nomore"!==e.loadingType){a.next=5;break}return a.abrupt("return");case 5:e.loadingType="loading",a.next=9;break;case 8:e.loadingType="more";case 9:"refresh"===o&&(e.searchParam.pageNum=1,e.productList=[]),(0,c.fetchProductCollectionList)(e.searchParam).then((function(t){var a=t.data.list;0===a.length?(e.loadingType="nomore",e.searchParam.pageNum--):(a.length<e.searchParam.pageSize?(e.loadingType="nomore",e.searchParam.pageNum--):e.loadingType="more",e.productList=e.productList.concat(a)),"refresh"===o&&(1==n?uni.hideLoading():uni.stopPullDownRefresh())}));case 11:case"end":return a.stop()}}),a)})))()},navToDetailPage:function(t){var e=t.productId;uni.navigateTo({url:"/pages/product/product?id=".concat(e)})},stopPrevent:function(){}}};e.default=u},"840b":function(t,e,a){"use strict";var o=a("38c7"),n=a.n(o);n.a},"9f22":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return o}));var o={uniLoadMore:a("d3ff").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[null==t.productList||0===t.productList.length?a("empty"):t._e(),a("v-uni-view",{staticClass:"hot-section"},t._l(t.productList,(function(e,o){return a("v-uni-view",{key:o,staticClass:"guess-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage(e)}}},[a("v-uni-view",{staticClass:"image-wrapper"},[a("v-uni-image",{attrs:{src:e.productPic,mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"txt"},[a("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.productName))]),a("v-uni-text",{staticClass:"title2"},[t._v(t._s(e.productSubTitle))]),a("v-uni-view",{staticClass:"hor-txt"},[a("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.productPrice))])],1)],1)],1)})),1),a("uni-load-more",{attrs:{status:t.loadingType}})],1)},i=[]},"9f47":function(t,e,a){"use strict";var o=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.createProductCollection=i,e.deleteProductCollection=r,e.fetchProductCollectionList=l,e.productCollectionDetail=c,e.clearProductCollection=d;var n=o(a("f96d"));function i(t){return(0,n.default)({method:"POST",url:"/mall-portal/member/productCollection/add",data:t})}function r(t){return(0,n.default)({method:"POST",url:"/mall-portal/member/productCollection/delete",params:t})}function l(t){return(0,n.default)({method:"GET",url:"/mall-portal/member/productCollection/list",params:t})}function c(t){return(0,n.default)({method:"GET",url:"/mall-portal/member/productCollection/detail",params:t})}function d(){return(0,n.default)({method:"POST",url:"/mall-portal/member/productCollection/clear"})}},df6e:function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-2142b41d],\n.content[data-v-2142b41d]{background:#f8f8f8}.hot-section[data-v-2142b41d]{display:flex;flex-wrap:wrap;padding:0 %?30?%;margin-top:%?16?%;background:#fff}.hot-section .guess-item[data-v-2142b41d]{display:flex;flex-direction:row;width:100%;padding-bottom:%?40?%}.hot-section .image-wrapper[data-v-2142b41d]{width:30%;height:%?250?%;border-radius:3px;overflow:hidden}.hot-section .image-wrapper uni-image[data-v-2142b41d]{width:100%;height:100%;opacity:1}.hot-section .title[data-v-2142b41d]{font-size:%?32?%;color:#303133;line-height:%?80?%}.hot-section .title2[data-v-2142b41d]{font-size:%?24?%;color:#909399;line-height:%?40?%;height:%?80?%;overflow:hidden;text-overflow:ellipsis;display:block}.hot-section .price[data-v-2142b41d]{font-size:%?32?%;color:#fa436a;line-height:%?80?%}.hot-section .txt[data-v-2142b41d]{width:70%;display:flex;flex-direction:column;padding-left:%?40?%}.hot-section .hor-txt[data-v-2142b41d]{display:flex;justify-content:space-between}.hot-section .time[data-v-2142b41d]{font-size:%?24?%;color:#303133;line-height:%?80?%}body.?%PAGE?%[data-v-2142b41d]{background:#f8f8f8}',""]),t.exports=e},e237:function(t,e,a){"use strict";a.r(e);var o=a("706a"),n=a.n(o);for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);e["default"]=n.a}}]);
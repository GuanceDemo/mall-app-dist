(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-newProductList"],{"0f13":function(t,a,e){"use strict";var n=e("4ea4");e("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var i=n(e("1da1")),o=e("66c8"),d=n(e("d3ff")),r=getApp().globalData,l={components:{uniLoadMore:d.default},data:function(){return{loadingType:"more",productList:[],searchParam:{pageNum:1,pageSize:6},global:r}},onLoad:function(t){this.loadData()},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.searchParam.pageNum++,this.loadData()},methods:{loadData:function(){var t=arguments,a=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:"add",i=t.length>1?t[1]:void 0,"add"!==n){e.next=8;break}if("nomore"!==a.loadingType){e.next=5;break}return e.abrupt("return");case 5:a.loadingType="loading",e.next=9;break;case 8:a.loadingType="more";case 9:"refresh"===n&&(a.searchParam.pageNum=1,a.productList=[]),(0,o.fetchNewProductList)(a.searchParam).then((function(t){var e=t.data;0===t.data.length?(a.loadingType="nomore",a.searchParam.pageNum--):(t.data.length<a.searchParam.pageSize?(a.loadingType="nomore",a.searchParam.pageNum--):a.loadingType="more",a.productList=a.productList.concat(e)),"refresh"===n&&(1==i?uni.hideLoading():uni.stopPullDownRefresh())}));case 11:case"end":return e.stop()}}),e)})))()},navToDetailPage:function(t){var a=t.id;uni.navigateTo({url:"/pages/product/product?id=".concat(a)})},stopPrevent:function(){}}};a.default=l},"2b11":function(t,a,e){"use strict";e.r(a);var n=e("c432"),i=e("dee0");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("329c");var d,r=e("f0c5"),l=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"d0e73198",null,!1,n["a"],d);a["default"]=l.exports},"329c":function(t,a,e){"use strict";var n=e("43ce"),i=e.n(n);i.a},"43ce":function(t,a,e){var n=e("8efe");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("197d77d2",n,!0,{sourceMap:!1,shadowMode:!1})},4600:function(t,a,e){"use strict";var n=e("aac2"),i=e.n(n);i.a},"54e4":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=getApp().globalData,i={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:n.language.contentDown,contentrefresh:n.language.contentRefresh,contentnomore:n.language.contentNoMore}}}},data:function(){return{}}};a.default=i},"66c8":function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.fetchContent=o,a.fetchRecommendProductList=d,a.fetchProductCateList=r,a.fetchNewProductList=l,a.fetchHotProductList=s;var i=n(e("f96d"));function o(){return(0,i.default)({method:"GET",url:"/mall-portal/home/content"})}function d(t){return(0,i.default)({method:"GET",url:"/mall-portal/home/recommendProductList",params:t})}function r(t){return(0,i.default)({method:"GET",url:"/mall-portal/home/productCateList/"+t})}function l(t){return(0,i.default)({method:"GET",url:"/mall-portal/home/newProductList",params:t})}function s(t){return(0,i.default)({method:"GET",url:"/mall-portal/home/hotProductList",params:t})}},"7f0d":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".uni-load-more[data-v-562bd89f]{display:flex;flex-direction:row;height:%?80?%;align-items:center;justify-content:center}.uni-load-more__text[data-v-562bd89f]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-562bd89f]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-562bd89f]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-562bd89f]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-562bd89f 1.56s ease infinite;animation:load-data-v-562bd89f 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-562bd89f]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-562bd89f]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-562bd89f]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-562bd89f]:nth-child(4){top:11px;left:0}.load1[data-v-562bd89f],\n.load2[data-v-562bd89f],\n.load3[data-v-562bd89f]{height:24px;width:24px}.load2[data-v-562bd89f]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-562bd89f]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-562bd89f]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-562bd89f]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-562bd89f]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-562bd89f]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-562bd89f]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-562bd89f]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-562bd89f]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-562bd89f]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-562bd89f]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-562bd89f]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-562bd89f]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-562bd89f]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-562bd89f{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=a},"8efe":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-d0e73198],\n.content[data-v-d0e73198]{background:#f8f8f8}.banner-image[data-v-d0e73198]{width:100%}.section-tit[data-v-d0e73198]{font-size:%?30?%;color:#303133;background:#fff;margin-top:%?16?%;text-align:center;padding-top:%?20?%;padding-bottom:%?20?%}\n/* 商品列表 */.goods-list[data-v-d0e73198]{display:flex;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.goods-list .goods-item[data-v-d0e73198]{display:flex;flex-direction:column;width:48%;padding-bottom:%?40?%}.goods-list .goods-item[data-v-d0e73198]:nth-child(2n+1){margin-right:4%}.goods-list .image-wrapper[data-v-d0e73198]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden;background-color:#fff}.goods-list .image-wrapper uni-image[data-v-d0e73198]{width:100%;height:100%;opacity:1}.goods-list .title[data-v-d0e73198]{font-size:%?32?%;color:#303133;line-height:%?80?%}.goods-list .title2[data-v-d0e73198]{font-size:%?24?%;color:#909399;line-height:%?40?%;height:%?80?%;overflow:hidden;text-overflow:ellipsis;display:block}.goods-list .price-box[data-v-d0e73198]{display:flex;align-items:center;justify-content:space-between;padding-right:%?10?%;font-size:%?24?%;color:#909399}.goods-list .price[data-v-d0e73198]{font-size:%?32?%;color:#fa436a;line-height:1}.goods-list .price[data-v-d0e73198]:before{content:"￥";font-size:%?26?%}body.?%PAGE?%[data-v-d0e73198]{background:#f8f8f8}',""]),t.exports=a},"8fc3":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-load-more"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"load1"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load2"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load3"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1)],1),e("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},o=[]},aac2:function(t,a,e){var n=e("7f0d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("efd9eb22",n,!0,{sourceMap:!1,shadowMode:!1})},b810:function(t,a,e){"use strict";e.r(a);var n=e("54e4"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},c432:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={uniLoadMore:e("d3ff").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content"},[e("v-uni-image",{staticClass:"banner-image",attrs:{src:"/static/new_product_banner.png"}}),e("v-uni-view",{staticClass:"section-tit"},[t._v(t._s(t.global.language.relatedProducts))]),e("v-uni-view",{staticClass:"goods-list"},t._l(t.productList,(function(a,n){return e("v-uni-view",{key:n,staticClass:"goods-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage(a)}}},[e("v-uni-view",{staticClass:"image-wrapper"},[e("v-uni-image",{attrs:{src:a.pic,mode:"aspectFit"}})],1),e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(a.name))]),e("v-uni-text",{staticClass:"title2"},[t._v(t._s(a.subTitle))]),e("v-uni-view",{staticClass:"price-box"},[e("v-uni-text",{staticClass:"price"},[t._v(t._s(a.price))]),e("v-uni-text",[t._v(t._s(t.global.language.soldOut)+" "+t._s(a.sale))])],1)],1)})),1),e("uni-load-more",{attrs:{status:t.loadingType}})],1)},o=[]},d3ff:function(t,a,e){"use strict";e.r(a);var n=e("8fc3"),i=e("b810");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("4600");var d,r=e("f0c5"),l=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"562bd89f",null,!1,n["a"],d);a["default"]=l.exports},dee0:function(t,a,e){"use strict";e.r(a);var n=e("0f13"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-brandAttention"],{"1ce1":function(t,e,a){"use strict";var n=a("4ea4");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),r=n(a("6fd1")),o=n(a("d3ff")),d=a("d8fd"),c=a("2be6"),l=getApp().globalData,s={components:{uniLoadMore:o.default,empty:r.default},data:function(){return{loadingType:"more",brandList:[],searchParam:{pageNum:1,pageSize:6},global:l}},onLoad:function(t){this.loadData()},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.searchParam.pageNum++,this.loadData()},onNavigationBarButtonTap:function(t){var e=t.index,a=this;0===e&&uni.showModal({title:l.language.tips,content:l.language.clearAll,success:function(t){t.confirm&&(0,c.clearBrandAttention)().then((function(t){a.loadData("refresh")}))}})},filters:{formatDateTime:function(t){if(null==t||""===t)return"N/A";var e=new Date(t);return(0,d.formatDate)(e,"yyyy-MM-dd hh:mm:ss")}},methods:{loadData:function(){var t=arguments,e=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:"add",i=t.length>1?t[1]:void 0,"add"!==n){a.next=8;break}if("nomore"!==e.loadingType){a.next=5;break}return a.abrupt("return");case 5:e.loadingType="loading",a.next=9;break;case 8:e.loadingType="more";case 9:"refresh"===n&&(e.searchParam.pageNum=1,e.brandList=[]),(0,c.fetchBrandAttentionList)(e.searchParam).then((function(t){var a=t.data.list;0===a.length?(e.loadingType="nomore",e.searchParam.pageNum--):(a.length<e.searchParam.pageSize?(e.loadingType="nomore",e.searchParam.pageNum--):e.loadingType="more",e.brandList=e.brandList.concat(a)),"refresh"===n&&(1==i?uni.hideLoading():uni.stopPullDownRefresh())}));case 11:case"end":return a.stop()}}),a)})))()},navToDetailPage:function(t){var e=t.brandId;uni.navigateTo({url:"/pages/brand/brandDetail?id=".concat(e)})},stopPrevent:function(){}}};e.default=s},"2be6":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.createBrandAttention=r,e.deleteBrandAttention=o,e.fetchBrandAttentionList=d,e.brandAttentionDetail=c,e.clearBrandAttention=l;var i=n(a("f96d"));function r(t){return(0,i.default)({method:"POST",url:"/mall-portal/member/attention/add",data:t})}function o(t){return(0,i.default)({method:"POST",url:"/mall-portal/member/attention/delete",params:t})}function d(t){return(0,i.default)({method:"GET",url:"/mall-portal/member/attention/list",params:t})}function c(t){return(0,i.default)({method:"GET",url:"/mall-portal/member/attention/detail",params:t})}function l(){return(0,i.default)({method:"POST",url:"/mall-portal/member/attention/clear"})}},"425b":function(t,e,a){"use strict";a.r(e);var n=a("77d1"),i=a("f19a");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("62cb");var o,d=a("f0c5"),c=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"4cfcbd03",null,!1,n["a"],o);e["default"]=c.exports},"62cb":function(t,e,a){"use strict";var n=a("f8a0"),i=a.n(n);i.a},"77d1":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniLoadMore:a("d3ff").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[null==t.brandList||0===t.brandList.length?a("empty"):t._e(),a("v-uni-view",{staticClass:"hot-section"},t._l(t.brandList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"guess-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage(e)}}},[a("v-uni-view",{staticClass:"image-wrapper"},[a("v-uni-image",{attrs:{src:e.brandLogo,mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"txt"},[a("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.brandName))])],1)],1)})),1),a("uni-load-more",{attrs:{status:t.loadingType}})],1)},r=[]},"9e85":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-4cfcbd03],\n.content[data-v-4cfcbd03]{background:#f8f8f8}.hot-section[data-v-4cfcbd03]{display:flex;flex-wrap:wrap;margin-top:%?16?%}.hot-section .guess-item[data-v-4cfcbd03]{display:flex;flex-direction:row;width:100%;padding:0 %?30?%;margin-bottom:%?16?%;background-color:#fff;align-items:center}.hot-section .image-wrapper[data-v-4cfcbd03]{width:30%;height:%?170?%;border-radius:3px;overflow:hidden;background:#fff}.hot-section .image-wrapper uni-image[data-v-4cfcbd03]{width:100%;height:100%;opacity:1}.hot-section .title[data-v-4cfcbd03]{font-size:%?32?%;color:#303133;line-height:%?80?%}.hot-section .title2[data-v-4cfcbd03]{font-size:%?24?%;color:#909399;line-height:%?40?%;height:%?80?%;overflow:hidden;text-overflow:ellipsis;display:block}.hot-section .price[data-v-4cfcbd03]{font-size:%?32?%;color:#fa436a;line-height:%?80?%}.hot-section .txt[data-v-4cfcbd03]{width:70%;display:flex;flex-direction:row;padding-left:%?40?%;align-items:center}.hot-section .hor-txt[data-v-4cfcbd03]{display:flex;justify-content:space-between}.hot-section .time[data-v-4cfcbd03]{font-size:%?24?%;color:#303133;line-height:%?80?%}body.?%PAGE?%[data-v-4cfcbd03]{background:#f8f8f8}',""]),t.exports=e},f19a:function(t,e,a){"use strict";a.r(e);var n=a("1ce1"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},f8a0:function(t,e,a){var n=a("9e85");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("13eb1f8d",n,!0,{sourceMap:!1,shadowMode:!1})}}]);
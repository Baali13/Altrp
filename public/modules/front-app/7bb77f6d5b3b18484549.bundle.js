(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{132:function(t,e,r){"use strict";r.r(e);var n=r(3),a=r.n(n),c=r(4),o=r.n(c),u=r(1),i=r.n(u),s=r(6),l=r.n(s),f=r(7),p=r.n(f),y=r(2),h=r.n(y),d=r(0),m=r.n(d),v=r(16),b=r(75),O=r(20),g=r(8),w=r(79),j=r(63),R=r.n(j),E=r(64),P=r.n(E),k=r(9),S=r.n(k),D=r(5),x=r.n(D),N=r(11),C=r.n(N);function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=h()(t);if(e){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return p()(this,r)}}var A=function(t){l()(r,t);var e=I(r);function r(){return a()(this,r),e.apply(this,arguments)}return o()(r,[{key:"render",value:function(){var t=["app-area","app-area_".concat(this.props.id)];if(!this.props.template.data)return m.a.createElement("div",{className:t.join(" ")});var e=window.frontElementsFabric.parseData(this.props.template.data,null,this.props.page,this.props.models);return m.a.createElement("div",{className:t.join(" ")},m.a.createElement(e.componentClass,{element:e,children:e.children}))}}]),r}(d.Component),H=r(80),M=r(21),F=new(function(){function t(){a()(this,t),this.resource=new M.a({route:"/ajax/pages"}),this.pagesStorage={}}var e;return o()(t,[{key:"loadPage",value:(e=C()(S.a.mark((function t(e){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!_.isObject(this.pagesStorage[e])){t.next=2;break}return t.abrupt("return",this.pagesStorage[e]);case 2:return t.next=4,this.resource.get(e);case 4:return r=t.sent,this.pagesStorage[e]=r,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),t}()),J=r(76);function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){x()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=h()(t);if(e){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return p()(this,r)}}var U=function(t){l()(n,t);var e,r=G(n);function n(t){var e;return a()(this,n),e=r.call(this,t),Object(v.d)(e.props.title),e.state={areas:e.props.areas||[]},e}return o()(n,[{key:"componentDidMount",value:(e=C()(S.a.mark((function t(){var e,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(v.d)(this.props.title),!this.props.lazy||!this.props.allowed){t.next=7;break}return t.next=4,F.loadPage(this.props.id);case 4:e=t.sent,r=e.areas.map((function(t){return J.a.areaFabric(t)})),this.setState((function(t){return z(z({},t),{},{areas:r})}));case 7:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t=this;return this.props.allowed?m.a.createElement(H.Scrollbars,{style:{zIndex:99999},autoHide:!0,autoHideTimeout:500,autoHideDuration:200,renderTrackVertical:function(t){var e=t.style,r=P()(t,["style"]);return m.a.createElement("div",R()({className:"altrp-scroll__vertical-track",style:e},r))}},m.a.createElement("div",{className:"route-content"},this.state.areas.map((function(e){return m.a.createElement(A,R()({},e,{page:t.props.id,models:t.props.models,key:"appArea_"+e.id}))})))):m.a.createElement(g.a,{to:this.props.redirect||"/"})}}]),n}(d.Component),V=r(97),q=r.n(V);function B(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function K(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?B(Object(r),!0).forEach((function(e){x()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function L(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=h()(t);if(e){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return p()(this,r)}}var Q=function(t){l()(r,t);var e=L(r);function r(t){var n;return a()(this,r),(n=e.call(this,t)).state={elementStyles:[]},window.stylesModule=i()(n),window.stylesModuleResolve(i()(n)),n}return o()(r,[{key:"addElementStyles",value:function(t,e){if(e){var r=!1,n=q()(this.state.elementStyles);n.forEach((function(n){n.elementId===t&&(r=!0,n.styles=e)})),r||n.push({elementId:t,styles:e}),this.setState(K(K({},this.state),{},{elementStyles:n}))}}},{key:"render",value:function(){return m.a.createElement("div",{className:"styles-container"},this.state.elementStyles.map((function(t){return m.a.createElement("style",{"data-styles-id":t.elementId,key:t.elementId},t.styles)})))}}]),r}(d.Component);function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=h()(t);if(e){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return p()(this,r)}}var X=function(t){l()(r,t);var e=W(r);function r(t){return a()(this,r),e.call(this,t)}return o()(r,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement(O.a,null,m.a.createElement("div",{className:"front-app-content"},m.a.createElement(g.d,null,this.props.routes.map((function(t){return m.a.createElement(g.b,{key:t.id,children:m.a.createElement(U,t),path:t.path,exact:!0})})))),m.a.createElement(Q,null))}}]),r}(d.Component);var Y,Z=Object(w.b)((function(t){return{routes:t.appRoutes.routes}}))(X);function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=h()(t);if(e){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return p()(this,r)}}Y=function(t){l()(r,t);var e=$(r);function r(t){var n;return a()(this,r),n=e.call(this,t),window.frontApp=i()(n),n.getRoutes(),n}return o()(r,[{key:"getRoutes",value:function(){var t=this;return Object(v.a)().then((function(e){t.routes=e.default}))}},{key:"render",value:function(){return m.a.createElement(w.a,{store:b.a},m.a.createElement(Z,null))}}]),r}(d.Component);e.default=Y},65:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));var n="CHANGE_APP_ROUTES";function a(t){return{type:n,routes:t}}},75:function(t,e,r){"use strict";var n=r(18),a=r(65),c={routes:[]};var o=Object(n.combineReducers)({appRoutes:function(t,e){switch(t=t||c,e.type){case a.a:t={routes:e.routes}}return t}}),u=Object(n.createStore)(o);e.a=u},76:function(t,e,r){"use strict";var n=r(3),a=r.n(n),c=r(4),o=r.n(c),u=function t(){a()(this,t)},i=function(){function t(){a()(this,t)}return o()(t,null,[{key:"areaFabric",value:function(e){var r=new t;return r.settings=e.settings,r.id=e.id,r.template=new u,r.template.data=e.template?JSON.parse(e.template.data):null,r.template.id=e.template?e.template.id:null,r}}]),t}();e.a=i}}]);
//# sourceMappingURL=7bb77f6d5b3b18484549.bundle.js.map
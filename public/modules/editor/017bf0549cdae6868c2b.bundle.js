(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{530:function(t,e,n){(t.exports=n(106)(!1)).push([t.i,"",""])},531:function(t,e,n){(t.exports=n(106)(!1)).push([t.i,"",""])},532:function(t,e,n){(t.exports=n(106)(!1)).push([t.i,"",""])},533:function(t,e,n){(t.exports=n(106)(!1)).push([t.i,"",""])},559:function(t,e,n){var r=n(530);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},s=n(107)(r,a);r.locals&&(t.exports=r.locals),t.hot.accept(530,(function(){var e=n(530);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(e)})),t.hot.dispose((function(){s()}))},560:function(t,e,n){var r=n(531);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},s=n(107)(r,a);r.locals&&(t.exports=r.locals),t.hot.accept(531,(function(){var e=n(531);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(e)})),t.hot.dispose((function(){s()}))},561:function(t,e,n){var r=n(532);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},s=n(107)(r,a);r.locals&&(t.exports=r.locals),t.hot.accept(532,(function(){var e=n(532);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(e)})),t.hot.dispose((function(){s()}))},562:function(t,e,n){var r=n(533);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},s=n(107)(r,a);r.locals&&(t.exports=r.locals),t.hot.accept(533,(function(){var e=n(533);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(e)})),t.hot.dispose((function(){s()}))},596:function(t,e,n){"use strict";n.r(e);var r=n(10),a=n.n(r),s=n(4),c=n.n(s),o=n(5),i=n.n(o),l=n(2),u=n.n(l),f=n(6),p=n.n(f),m=n(7),h=n.n(m),d=n(3),v=n.n(d),b=(n(228),n(0)),y=n.n(b),g=n(11),E=function t(e){c()(this,t),this.modules=e},w=n(13);function O(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){o=!0,s=t},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw s}}}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var D=function(t){p()(n,t);var e=j(n);function n(){return c()(this,n),e.apply(this,arguments)}return i()(n,[{key:"parseData",value:function(t,e){var n=[],r=window.elementsManager,a=new(r.getElementClass(t.name));if(t.children&&t.children.length){var s,c=O(t.children);try{for(c.s();!(s=c.n()).done;){var o=s.value;r.checkElementExists(o.name)&&n.push(this.parseData(o,a))}}catch(t){c.e(t)}finally{c.f()}}a.id=t.id,a.children=n;var i=0===t.settings.length?{}:t.settings;return a.setSettings(i),t.dynamicContentSettings&&(a.dynamicContentSettings=0===t.dynamicContentSettings.length?{}:t.dynamicContentSettings),e&&(a.parent=e),a.update(),a}},{key:"duplicateElement",value:function(t,e){var n=this._duplicateElement(t);e.insertNewChildAfter(t.getId(),n);var r=Object(w.b)().modules.templateDataStorage;return r.elementsIds=_.union(r.elementsIds,n.getIds()),n}},{key:"_duplicateElement",value:function(t){var e=this,n=new(elementsManager.getElementClass(t.getName())),r=[];return t.children.map((function(t){var a=e._duplicateElement(t);a.setParent(n),r.push(a)})),n.setChildren(r),n.settings=_.cloneDeep(t.settings),t.dynamicContentSettings&&(n.dynamicContentSettings=_.cloneDeep(t.dynamicContentSettings)),n.children=r,n}}]),n}(E),P=n(28),k=n(36),N=n(86),R=n(19),T=n(55),C=n(37);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var x=function(t){p()(n,t);var e=A(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).resource=new P.a({route:"/admin/ajax/templates"}),r}return i()(n,[{key:"load",value:function(){var t=this;if(this.template_id=Object(w.f)(),R.a.dispatch(Object(T.b)(k.a.TEMPLATE_SAVING)),this.template_id)this.resource.get(this.template_id).then((function(e){Object(C.c)(e.title);var n=JSON.parse(e.data),r=t.modules.elementsFactory.parseData(n),a=Object(w.b)().modules.templateDataStorage;a.replaceAll(r),a.setTitle(e.title),a.setName(e.name),Object(w.b)().endLoading(),R.a.dispatch(Object(T.b)(k.a.TEMPLATE_UPDATED))})).catch((function(t){console.error(t),R.a.dispatch(Object(T.b)(k.a.TEMPLATE_UPDATED))}))}},{key:"saveTemplate",value:function(){R.a.dispatch(Object(T.b)(k.a.TEMPLATE_SAVING));var t=Object(w.b)().modules.templateDataStorage.getTemplateDataForSave();this.resource.put(this.template_id,t).then((function(t){R.a.dispatch(Object(T.b)(k.a.TEMPLATE_UPDATED))})).catch((function(t){console.error(t),R.a.dispatch(Object(T.b)(k.a.TEMPLATE_UPDATED))}))}}]),n}(E),M=function t(){c()(this,t)},I=function t(){c()(this,t)},L=n(110),U=n(15),B=n(103),H=n(61);function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var F=function(t){p()(n,t);var e=W(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).elementsIds=[],r}return i()(n,[{key:"replaceAll",value:function(t){if(!t instanceof N.a)throw"Expect Root Element as root element;)";this.rootElement=t,this.elementsIds=t.getIds(),this.setCurrentRootElement()}},{key:"getTemplateData",value:function(){return this.rootElement.toObject()}},{key:"getTemplateDataForSave",value:function(){var t={};return t.data=this.getTemplateData(),t.title=this.title||"testtitle",t.name=this.name||"testname",t}},{key:"setTitle",value:function(t){this.title=t}},{key:"setName",value:function(t){this.name=t}},{key:"setCurrentRootElement",value:function(){return this.currentElement=this.rootElement,R.a.dispatch(Object(L.b)(this.currentElement)),this.currentElement}},{key:"setCurrentElement",value:function(t){if(!t instanceof U.a)throw"Only Base Element Can Be Set as Default";this.currentElement=t,R.a.dispatch(Object(L.b)(t))}},{key:"getCurrentElement",value:function(){return this.currentElement?this.currentElement:this.setCurrentRootElement()}},{key:"getRootElement",value:function(){return this.rootElement}},{key:"addWidgetInSection",value:function(t){var e=new B.a;this.elementsIds.push(e.getId());var n=new H.a;this.elementsIds.push(n.getId());var r=new(window.elementsManager.getElementClass(t));this.elementsIds.push(r.getId()),n.appendWidget(r),e.appendColumn(n),this.rootElement.appendNewSection(e),this.setCurrentElement(r),R.a.dispatch(Object(T.b)(k.a.TEMPLATE_NEED_UPDATE)),Object(w.b)().showSettingsPanel()}}]),n}(E),G=function(){function t(e){c()(this,t),this.elementsFactory=new D(this),this.saveImportModule=new x(this),this.settingsChangeModule=new M(this),this.templateSettingsChangeModule=new I(this),this.templateDataStorage=new F(this)}return i()(t,[{key:"loaded",value:function(){this.saveImportModule.load()}}]),t}(),J=n(43);function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var $=function(t){p()(n,t);var e=V(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={element:r.props.element},r.onDragStart=r.onDragStart.bind(u()(r)),r}return i()(n,[{key:"onDragStart",value:function(t){R.a.dispatch(Object(J.c)(null)),t.dataTransfer.effectAllowed="copy",t.dataTransfer.setData("text/plain",this.state.element.getName())}},{key:"render",value:function(){if(!this.state.element instanceof U.a)throw"Widget Component must has Element in props";return y.a.createElement("div",{className:"widget-icon",draggable:"true",onDragStart:this.onDragStart},y.a.createElement(this.state.element.getIconComponent(),{height:35}),y.a.createElement("div",{className:"widget-icon__title"},this.state.element.getTitle()))}}]),n}(b.Component);function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var z=function(t){p()(n,t);var e=q(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={widgets:window.elementsManager.getWidgetsList()},r}return i()(n,[{key:"render",value:function(){return y.a.createElement("div",{className:"widget-panel"},this.state.widgets.map((function(t){return y.a.createElement($,{element:t,key:t.getName()})})))}}]),n}(b.Component),K=n(44),Q=n.n(K),X=n(45),Y=n(172),Z=n(163),tt=n(1),et=n(156),nt=n(160);function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function at(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function st(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var ct=function(t){p()(n,t);var e=st(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={open:t.open,active:t.open},r.toggle=r.toggle.bind(u()(r)),r}return i()(n,[{key:"componentDidMount",value:function(){}},{key:"toggle",value:function(t){this.props.dispatch(Object(nt.b)(Object(R.b)().getName(),Object(R.c)(),this.props.sectionID))}},{key:"render",value:function(){var t=Object(R.b)().getName(),e=Object(R.c)(),n=0;this.props.settingSection[t]&&this.props.settingSection[t][e]&&(n=this.props.settingSection[t][e]);var r=this.props.controls||[];return y.a.createElement("div",{className:"settings-section "+(n===this.props.sectionID?"open":"")},y.a.createElement("div",{className:"settings-section__title d-flex ","data-open":!0,"data-key":this.props.active,onClick:this.toggle},y.a.createElement("div",{className:"settings-section__icon d-flex "},y.a.createElement(et.a,null)),y.a.createElement("div",{className:"settings-section__label"},this.props.label)),y.a.createElement("div",{className:"controllers-wrapper"},r.map((function(t){var e=window.controllersManager.getController(t.type);return y.a.createElement(e,at(at({},t),{},{key:t.controlId}))}))))}}]),n}(b.Component),ot=Object(g.b)((function(t){return{settingSection:t.settingSectionMenu}}),null)(ct),it=n(542),lt=n(16),ut=n.n(lt),ft=n(23),pt=n.n(ft),mt=(n(559),n(560),n(56));function ht(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function dt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ht(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ht(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function vt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var bt=function(t){p()(r,t);var e,n=vt(r);function r(t){var e;return c()(this,r),(e=n.call(this,t)).state={models:[]},e.select=e.select.bind(u()(e)),e.resource=new P.a({route:"/admin/ajax/models_with_fields_options"}),e}return i()(r,[{key:"componentDidMount",value:(e=pt()(ut.a.mark((function t(){var e;return ut.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.resource.getAll();case 2:e=t.sent,this.setState((function(t){return dt(dt({},t),{},{models:e})}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"select",value:function(t){t.stopPropagation();var e={};e.modelName=t.target.dataset.modelname,e.modelTitle=t.target.dataset.modeltitle,e.fieldName=t.target.dataset.fieldname,e.fieldTitle=t.target.dataset.fieldtitle,e.settingName=this.props.params.settingName,e.dynamic=!0,this.props.params.onSelect(e),R.a.dispatch(Object(mt.d)()),Object(R.b)().setModelsSettings(e)}},{key:"getPositionProps",value:function(){var t=this.props.element;return t?{top:t.offsetTop+t.offsetHeight+2,left:7}:{top:0,left:7}}},{key:"render",value:function(){var t=this,e=["altrp-dynamic-content"];return this.props.show&&e.push("altrp-dynamic-content_show"),y.a.createElement("div",{className:e.join(" "),style:this.getPositionProps()},y.a.createElement("div",{className:"altrp-menu"},this.state.models.map((function(e){return y.a.createElement("div",{className:"altrp-menu-group",key:e.modelName},y.a.createElement("div",{className:"altrp-menu__title",key:e.modelName},e.title),e.fields.map((function(n){return y.a.createElement("div",{className:"altrp-menu__item","data-fieldname":n.fieldName,"data-fieldtitle":n.title,"data-modelname":e.modelName,"data-modeltitle":e.title,onClick:t.select,key:n.fieldName},n.title)})))}))))}}]),r}(b.Component);var yt=Object(g.b)((function(t){return dt({},t.dynamicContentState)}))(bt),gt=(n(561),n(162));function Et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var wt=function(t){p()(n,t);var e=Et(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={buttons:[{title:"Normal",value:""},{title:"Hover",value:":hover"},{title:"Active",value:":active"},{title:"Disabled",value:".disabled"}]},r}return i()(n,[{key:"setCurrentState",value:function(t){this.props.dispatch(Object(gt.b)(t.title,t.value))}},{key:"render",value:function(){var t=this;return y.a.createElement("div",{className:"state-section"},y.a.createElement("div",{className:"state-section__wrapper"},this.state.buttons.map((function(e,n){return y.a.createElement("button",{key:n,className:"state-section__button "+(t.props.currentState.title===e.title?"state-section__button_active":""),onClick:function(){return t.setCurrentState(e)}},e.title)}))))}}]),n}(b.Component),Ot=Object(g.b)((function(t){return{currentState:t.currentState}}),null)(wt);function St(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function jt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?St(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):St(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Dt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var Pt=function(t){p()(n,t);var e=Dt(n);function n(){return c()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){var t=this.props.sections||[];return y.a.createElement("div",{className:"settings-controllers"},y.a.createElement(it.Scrollbars,{autoHide:!0,autoHideTimeout:500,autoHideDuration:200},y.a.createElement("div",{id:"settingsControllers"},t.map((function(t,e){return y.a.createElement(ot,jt(jt({},t),{},{key:t.sectionId,sectionID:e}))})),y.a.createElement(yt,null))))}}]),n}(b.Component),kt=n(146),Nt=n(161);function _t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_t(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_t(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Tt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var Ct=function(t){p()(n,t);var e=Tt(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={activeTab:"content"},r}return i()(n,[{key:"setActiveTab",value:function(t){this.setState(Rt(Rt({},this.state),{},{activeTab:t})),this.props.setCurrentTab(t)}},{key:"componentDidMount",value:function(){this.props.setCurrentTab(this.state.activeTab)}},{key:"render",value:function(){var t=this,e=window.controllersManager,n=[];this.props.currentElement.getName&&_.toPairs(e.getControls(this.props.currentElement.getName())).forEach((function(e){e[1].forEach((function(t){t.controls=t.controls.map((function(t){return Rt(Rt({},t),{},{controller:new kt.a(t)})}))})),e[0]===t.state.activeTab&&(n=Q()(e[1]))}));var r="panel-tab d-flex "+(this.state.activeTab===tt.w?"active":""),a="panel-tab d-flex "+(this.state.activeTab===tt.x?"active":""),s="panel-tab d-flex "+(this.state.activeTab===tt.v?"active":"");return y.a.createElement("div",{className:"panel settings-panel d-flex"},y.a.createElement("div",{className:"panel-tabs d-flex"},y.a.createElement("button",{className:r,onClick:function(){return t.setActiveTab(tt.w)}},y.a.createElement("span",{className:"panel-tab__icon"},y.a.createElement(X.a,null)),y.a.createElement("span",{className:"panel-tab__text"},"Content")),y.a.createElement("button",{className:a,onClick:function(){return t.setActiveTab(tt.x)}},y.a.createElement("span",{className:"panel-tab__icon"},y.a.createElement(Y.a,null)),y.a.createElement("span",{className:"panel-tab__text"},"Style")),y.a.createElement("button",{className:s,onClick:function(){return t.setActiveTab(tt.v)}},y.a.createElement("span",{className:"panel-tab__icon"},y.a.createElement(Z.a,null)),y.a.createElement("span",{className:"panel-tab__text"},"Advanced"))),y.a.createElement(Ot,null),y.a.createElement(Pt,{sections:n}))}}]),n}(b.Component);var At=Object(g.b)((function(t){return{currentElement:t.currentElement.currentElement}}),{setCurrentTab:Nt.b})(Ct);function xt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var Mt=function(t){p()(n,t);var e=xt(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={},r}return i()(n,[{key:"render",value:function(){return y.a.createElement("div",{className:"editor-window",id:"editorWindow"},y.a.createElement("iframe",{src:"/admin/editor-content",width:"100%"}))}}]),n}(b.Component);function It(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}b.Component;function Lt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var Ut=function(t){p()(n,t);var e=Lt(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).saveTemplate=r.saveTemplate.bind(u()(r)),r}return i()(n,[{key:"saveTemplate",value:function(t){Object(w.b)().modules.saveImportModule.saveTemplate()}},{key:"render",value:function(){var t="btn font_montserrat font_500 btn_grey";switch(this.props.templateStatus){case k.a.TEMPLATE_UPDATED:t+=" btn_disabled ";break;case k.a.TEMPLATE_NEED_UPDATE:t+=" btn_active "}return y.a.createElement("div",{className:"control-group d-flex"},y.a.createElement("button",{className:t,onClick:this.saveTemplate},"UPDATE"),y.a.createElement("button",{className:"btn btn_grey"},y.a.createElement(et.a,{className:"icon"})))}}]),n}(b.Component);var Bt=Object(g.b)((function(t){return{templateStatus:t.templateStatus.status}}))(Ut),Ht=n(147),Wt=n(68);n(562);function Ft(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Gt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ft(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ft(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Jt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var Vt=function(t){p()(r,t);var e,n=Jt(r);function r(t){var e;return c()(this,r),(e=n.call(this,t)).tabClick=e.tabClick.bind(u()(e)),e.toggleBrowser=e.toggleBrowser.bind(u()(e)),e.selectAsset=e.selectAsset.bind(u()(e)),e.chooseAsset=e.chooseAsset.bind(u()(e)),e.state={activeTab:"media",tabs:[{name:"icons",title:"Icons Library"},{name:"media",title:"Media Library"}],assets:e.getAssets("media"),selectedAsset:null,mediaAssets:[]},e.mediaResource=new P.a({route:"/admin/ajax/media"}),e}return i()(r,[{key:"componentDidMount",value:(e=pt()(ut.a.mark((function t(){var e;return ut.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.mediaResource.getAll();case 3:e=t.sent,this.setState((function(t){return"media"===(t=Gt(Gt({},t),{},{mediaAssets:e})).activeTab&&(t.assets=e),t})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])}))),function(){return e.apply(this,arguments)})},{key:"getAssets",value:function(t){switch(t||(t=this.state.activeTab),t){case"icons":return Object(w.h)().getIconsList();case"media":return this.state?this.state.mediaAssets:[]}return[]}},{key:"selectAsset",value:function(t){var e=t.currentTarget.dataset.assetname;this.setState((function(t){return Gt(Gt({},t),{},{selectedAsset:e})}))}},{key:"tabClick",value:function(t){this.setActiveTab(t.target.dataset.tab)}},{key:"setActiveTab",value:function(t){var e=this;this.setState((function(n){return Gt(Gt({},n),{},{activeTab:t,assets:e.getAssets(t)})}))}},{key:"toggleBrowser",value:function(){this.setState((function(t){return Gt(Gt({},t),{},{selectedAsset:null})})),this.props.dispatch(Object(Wt.d)())}},{key:"chooseAsset",value:function(){var t,e=this;if(this.state.assets.forEach((function(n){n.name===e.state.selectedAsset&&(t=n)})),!t)throw"Asset with name ".concat(this.state.selectedAsset," not found in Assets Browser (").concat(this.state.activeTab,")!");this.props.onChoose(t),this.setState((function(t){return Gt(Gt({},t),{},{selectedAsset:null})})),this.props.dispatch(Object(Wt.d)())}},{key:"render",value:function(){var t=this,e="assets-browser";this.props.active&&(e+=" assets-browser_active");var n="btn";return this.state.selectedAsset?n+=" btn_success":n+=" btn_disabled",y.a.createElement("div",{className:e},y.a.createElement("div",{className:"assets-browser__bg",onClick:this.toggleBrowser}),y.a.createElement("div",{className:"assets-browser-content"},y.a.createElement("div",{className:"assets-browser-top"},y.a.createElement("div",{className:"caption"},"Append Media"),y.a.createElement("button",{className:"btn btn_bare assets-browser__close",onClick:this.toggleBrowser},y.a.createElement(Ht.a,{className:"icon"})),y.a.createElement("div",{className:"assets-browser-nav"},this.state.tabs.map((function(e){var n="assets-browser__tab";return t.state.activeTab===e.name&&(n+=" assets-browser__tab_active"),y.a.createElement("button",{className:n,onClick:t.tabClick,key:e.name,"data-tab":e.name},e.title)})))),this.state.assets.length?y.a.createElement("div",{className:"assets-browser-choose-frame"},this.state.assets.map((function(e){var n,r="asset-choose",a={className:"asset-choose__content"};return"icons"===t.state.activeTab&&(n=e.iconComponent,r+=" asset-choose_icon",a.width="20",a.height="20"),"media"===t.state.activeTab&&(n="img",a.src=e.url,r+=" asset-choose_media",e.name=e.filename,e.assetType="media"),t.state.selectedAsset===e.name&&(r+=" asset-choose_selected"),y.a.createElement("div",{className:r,"data-assetname":e.name,key:e.name,onClick:t.selectAsset},y.a.createElement(n,a))}))):"",y.a.createElement("div",{className:"assets-browser-bottom"},y.a.createElement("button",{className:n,onClick:this.chooseAsset},"Choose"))))}}]),r}(b.Component);var $t,qt=Object(g.b)((function(t){return Gt({},t.assetsManagerSettings)}))(Vt),zt=n(164),Kt=n(168),Qt=n(169),Xt=n(64),Yt=n(171),Zt=n(90),te=n(165),ee=n(167),ne=n(108);n(89);function re(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ae(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?re(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function se(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}$t=function(t){p()(n,t);var e=se(n);function n(t){var r;return c()(this,n),r=e.call(this,t),window.altrpEditor=u()(r),r.state={activePanel:"settings",templateStatus:k.a.TEMPLATE_UPDATED},r.openPageSettings=r.openPageSettings.bind(u()(r)),r.showSettingsPanel=r.showSettingsPanel.bind(u()(r)),r.showWidgetsPanel=r.showWidgetsPanel.bind(u()(r)),r.onDragEnd=r.onDragEnd.bind(u()(r)),r.onClick=r.onClick.bind(u()(r)),R.a.subscribe(r.templateStatus.bind(u()(r))),r}return i()(n,[{key:"templateStatus",value:function(){var t=R.a.getState().templateStatus.status;t!==this.state.templateStatus&&this.setState(ae(ae({},this.state),{},{templateStatus:t}))}},{key:"initModules",value:function(){this.modules=new G(this),this.modules.loaded()}},{key:"showWidgetsPanel",value:function(){this.setState(ae(ae({},this.state),{},{activePanel:"widgets"}))}},{key:"showSettingsPanel",value:function(){this.setState(ae(ae({},this.state),{},{activePanel:"settings"}))}},{key:"onClick",value:function(){ne.contextMenu.hideAll(),R.a.dispatch(Object(mt.d)())}},{key:"onDragEnd",value:function(){var t=R.a.getState().elementDrag.element;t&&t.stopDrag&&t.stopDrag(),R.a.dispatch(Object(J.d)())}},{key:"endLoading",value:function(){console.log("editor loaded")}},{key:"componentDidMount",value:function(){this.initModules()}},{key:"openPageSettings",value:function(){this.modules.templateDataStorage.setCurrentRootElement(),this.showSettingsPanel()}},{key:"render",value:function(){var t="",e="editor ";return this.state.templateStatus===k.a.TEMPLATE_SAVING&&(e+=" editor_saving"),R.a.getState().currentElement.currentElement.getType&&"root-element"===R.a.getState().currentElement.currentElement.getType()&&"settings"===this.state.activePanel&&(t=" active"),y.a.createElement(g.a,{store:R.a},y.a.createElement("div",{className:e,onClick:this.onClick,onDragEnd:this.onDragEnd},y.a.createElement("div",{className:"left-panel"},y.a.createElement("div",{className:"editor-top-panel"},y.a.createElement("button",{className:"btn btn_hamburger"},y.a.createElement(ee.a,{className:"icon"})),y.a.createElement("a",{href:"/admin/templates",target:"_blank",className:"logo"},window.admin_logo?Object(w.i)(window.admin_logo,{className:"editor__logo"}):y.a.createElement(Kt.a,{viewBox:"0 0 97 35",className:"editor__logo"})),y.a.createElement("button",{className:"btn btn_dots",onClick:this.showWidgetsPanel},y.a.createElement(te.a,{className:"icon"}))),y.a.createElement("div",{className:"left-panel-main"},"widgets"===this.state.activePanel&&y.a.createElement(z,null),"settings"===this.state.activePanel&&y.a.createElement(At,null)),y.a.createElement("div",{className:"editor-bottom-panel d-flex align-content-center justify-center"},y.a.createElement("button",{className:"btn btn_settings"+t,onClick:this.openPageSettings},y.a.createElement(Zt.a,{className:"icon"})),y.a.createElement("button",{className:"btn "},y.a.createElement(Qt.a,{className:"icon"})),y.a.createElement("button",{className:"btn "},y.a.createElement(Xt.a,{className:"icon"})),y.a.createElement("button",{className:"btn "},y.a.createElement(zt.a,{className:"icon"})),y.a.createElement("button",{className:"btn "},y.a.createElement(Yt.a,{className:"icon"})),y.a.createElement(Bt,null))),y.a.createElement("div",{className:"right-panel"},y.a.createElement(Mt,null))),y.a.createElement(qt,null))}}]),n}(b.Component);e.default=$t}}]);
//# sourceMappingURL=017bf0549cdae6868c2b.bundle.js.map
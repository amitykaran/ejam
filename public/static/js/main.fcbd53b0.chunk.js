(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{30:function(e,t,n){e.exports=n(43)},39:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(9),c=n(10),r=n(23),o=n(11),s=n.n(o),m=(n(39),n(7)),u=n(24),d=n.n(u),p="https://techamity-ejam.herokuapp.com";function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2?arguments[2]:void 0,a=window.localStorage.getItem("token")?window.localStorage.getItem("token"):"",i={"content-type":"application/json"};return a&&""!==a&&(i.Authorization="Bearer ".concat(a)),d()("".concat(p,"/").concat(e),{headers:i,method:t,body:JSON.stringify(n)}).then((function(e){return e.json().then((function(t){return{json:t,response:e}}))})).then((function(e){var t=e.json;return e.response.ok?t:Promise.reject(t)})).then((function(e){return e}),(function(e){return e}))}function g(e){return{type:"LOAD_DEPLOYMENT_FETCHING_STATUS",isFetchingDeployment:!!e}}function f(e,t){return{type:"LOAD_DEPLOYMENT_DELETE_STATUS",id:e,status:!!t}}function h(e){return{type:"LOAD_ADD_ITEM_STATUS",isAdding:!!e}}var y=n(6),v=n(16),D=n.n(v),N={items:[],count:0,pageNum:1,pageSize:15,isFetchingDeployment:!1,isDeleting:{},isAdding:!1,templates:[]},O=function(e){return e.items},b=function(e){return e.pageNum},A=function(e){return e.pageSize},S=function(e){return e.count},x=function(e){return e.isFetchingDeployment},T=function(e){return e.isDeleting},j=function(e){return e.isAdding},_=function(e){return e.templates},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=e.isDeleting,a=D.a.clone(e.items);switch(t.type){case"LOAD_DEPLOYMENT_LIST":return Object(y.a)(Object(y.a)({},e),{},{items:t.items,count:t.count,pageNum:t.pageNum,isFetchingDeployment:!1});case"LOAD_DEPLOYMENT_FETCHING_STATUS":return Object(y.a)(Object(y.a)({},e),{},{isFetchingDeployment:t.isFetchingDeployment});case"LOAD_DEPLOYMENT_DELETE_STATUS":return n[t.id]=t.status,Object(y.a)(Object(y.a)({},e),{},{isDeleting:n});case"LOAD_DELETE_DEPLOYMENT":return n[t.id]=!1,a=a.filter((function(e){return e._id!==t.id})),Object(y.a)(Object(y.a)({},e),{},{items:a,count:e.count-1});case"LOAD_ADD_ITEM_STATUS":return Object(y.a)(Object(y.a)({},e),{},{isAdding:t.isAdding});case"LOAD_ADD_ITEM":return a.push(t.item),Object(y.a)(Object(y.a)({},e),{},{items:a,count:e.count+1,isAdding:t.isAdding});case"LOAD_TEMPLATE":return Object(y.a)(Object(y.a)({},e),{},{templates:t.templates});default:return Object(y.a)({},e)}},w=n(45);function I(e){return i.a.createElement("div",{className:"panel"},i.a.createElement("div",{className:"panel-header"},i.a.createElement("div",{style:{display:"inline-flex",width:"100%",justifyContent:"space-between"}},i.a.createElement("div",null,"Showing Item ( ".concat(e.currentCount," )")),i.a.createElement("div",null,i.a.createElement(w.a,{onClick:function(){return e.openAddItemForm()}},"Add Item")))),i.a.createElement("div",{className:"panel-body"},i.a.createElement("table",{className:"table",style:{width:"100%",textAlign:"left",border:"1px solid #cdcdcd",borderRadius:"3px"}},i.a.createElement("tr",null,i.a.createElement("th",{style:{padding:"8px 10px",minWidth:"30px"}},"Sr. No"),i.a.createElement("th",{style:{padding:"8px",minWidth:"50px"}},"Url"),i.a.createElement("th",{style:{padding:"8px 10px",minWidth:"50px"}},"Template Name"),i.a.createElement("th",{style:{padding:"8px 10px",minWidth:"50px"}},"Version"),i.a.createElement("th",{style:{padding:"8px 10px",minWidth:"50px"}},"Action")),e.list&&e.list.length>0?e.list.map((function(t,n){return i.a.createElement("tr",{style:{color:"#737373"}},i.a.createElement("td",{style:{padding:"8px 10px",minWidth:"30px"}},n+1),i.a.createElement("td",{style:{padding:"8px 10px",minWidth:"50px"}},t.url),i.a.createElement("td",{style:{padding:"8px 10px",minWidth:"30px"}},t.templateName),i.a.createElement("td",{style:{padding:"8px 10px",minWidth:"30px"}},t.version),i.a.createElement("td",{style:{padding:"8px 10px",minWidth:"30px"}},i.a.createElement(w.a,{onClick:function(){return e.deleteItem(t._id)},disabled:e.isDeleting[t._id]},e.isDeleting[t._id]?"Deleting":"Delete")))})):i.a.createElement("tr",null,i.a.createElement("td",{colSpan:17,style:{textAlign:"center"}},i.a.createElement("h1",null,"No data"))))),i.a.createElement("div",{className:"panel-footer"},i.a.createElement("span",null,"Showing ".concat((e.pageNum-1)*e.pageSize," to ").concat(e.currentCount," of ").concat(e.count," entries"))))}var C=n(44),k=n(26),F=n(27),M=n(28);var W=function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),l=n[0],c=n[1],r=Object(a.useState)(""),o=Object(m.a)(r,2),s=o[0],u=o[1],d=Object(a.useState)(""),p=Object(m.a)(d,2),E=p[0],g=p[1],f=Object(a.useState)({}),h=Object(m.a)(f,2),y=h[0],v=h[1];return i.a.createElement("div",{className:"add-overlay"},i.a.createElement("div",{onClick:function(){return e.close()},className:"add-overlay-background"}),i.a.createElement("div",{className:"overlay-wrapper"},i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"overlay-header"},"Add Deployment"),i.a.createElement("div",{className:"overlay-body"},i.a.createElement(C.a,{horizontal:!0},i.a.createElement(k.a,{style:{marginBottom:"15px"}},i.a.createElement("div",{className:"input-label"},"URL ",i.a.createElement("span",{style:{color:"red"}},"*")),i.a.createElement("div",null,i.a.createElement(F.a,{onChange:function(e){return g(e.target.value)},type:"text",className:"input-style",placeholder:"Enter Url "}))),i.a.createElement(k.a,{style:{marginBottom:"15px"}},i.a.createElement("div",{className:"input-label"},"Template Name ",i.a.createElement("span",{style:{color:"red"}},"*")),i.a.createElement(M.a,{sm:7},i.a.createElement("select",{className:"input-style",name:"",id:"",onChange:function(t){var n;""===(n=t.target.value)?(v({}),c([]),u("")):e.templates.forEach((function(e){e._id===n&&(v(e),c(e.versions))}))}},i.a.createElement("option",{value:""},"-- Select Template --"),e.templates&&e.templates.length>0&&e.templates.map((function(e){return i.a.createElement("option",{value:e._id},e.name)}))))),i.a.createElement(k.a,{style:{marginBottom:"15px"}},i.a.createElement("div",{className:"input-label"},"Version ",i.a.createElement("span",{style:{color:"red"}},"*")),i.a.createElement(M.a,{sm:7},i.a.createElement("select",{className:"input-style",disabled:0===l.length,name:"",id:"",onChange:function(e){return u(e.target.value)}},i.a.createElement("option",{value:""},"-- Select Version --"),l&&l.length>0&&l.map((function(e){return i.a.createElement("option",{value:e},e)}))))))),i.a.createElement("div",{className:"overlay-footer"},i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"}},i.a.createElement(w.a,{onClick:function(){return e.close()}},"Close"),i.a.createElement(w.a,{disabled:e.isAdding,onClick:function(){return function(){var t={};t.url=E,t.templateName=y.name,t.version=s,function(e){var t=!0;return e.url&&e.templateName&&e.version||(t=!1),t}(t)&&e.addItem(t)}()}},e.isAdding?"Adding":"Add"))))))};function z(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),l=n[0],r=n[1],o=Object(c.b)(),s=Object(c.c)((function(e){return{list:O(e),pageNum:b(e),pageSize:A(e),count:S(e),isFetching:x(e),isDeleting:T(e),isAdding:j(e),templates:_(e)}}));return Object(a.useEffect)((function(){var e={};e.pageNum=s.pageNum,e.pageSize=s.pageSize,o((function(e){E("api/templates/list","post",{}).then((function(t){t&&"Success"===t.status&&e({type:"LOAD_TEMPLATE",templates:t.data.templates})}))})),o(function(e){return function(t){t(g(!0)),E("api/deployments/list","post",e).then((function(n){var a,i;console.log("res",n),n&&"Success"===n.status?t((a=n.data,i=e.pageNum,{type:"LOAD_DEPLOYMENT_LIST",items:a.deployments,count:a.count,pageNum:i,isFetchingDeployment:!1})):t(g(!1))}))}}(e))}),[s.count]),console.log("deployment list",s,e),i.a.createElement("div",{className:"deployment"},i.a.createElement("div",null,i.a.createElement("h2",null,"Deployment List")),i.a.createElement("div",null,i.a.createElement(I,{count:s.count,list:s.list,currentCount:s.list&&s.list.length>0?s.list.length:0,pageNum:s.pageNum,pageSize:s.pageSize,isDeleting:s.isDeleting,isFetching:s.isFetching,deleteItem:function(e){o(function(e){return function(t){t(f(e,!0)),E("api/deployments/".concat(e,"/remove"),"post",{}).then((function(n){n&&"Success"===n.status?t(function(e){return{type:"LOAD_DELETE_DEPLOYMENT",id:e}}(e)):t(f(e,!1))}))}}(e))},openAddItemForm:function(){return r(!0)}}),l?i.a.createElement(W,{showModal:l,close:function(){return r(!1)},addItem:function(e){o(function(e){return function(t){t(h(!0)),E("api/deployments/new","post",{deployment:e}).then((function(e){e&&"Success"===e.status?t(function(e){return{type:"LOAD_ADD_ITEM",item:e,isAdding:!1}}(e.data.deployment)):t(h(!1))}))}}(e))},templates:s.templates}):null))}function P(e){return i.a.createElement("div",{className:"header"},i.a.createElement("span",null,"E-Jam"))}function U(e){return i.a.createElement("div",{className:"footer"},i.a.createElement("span",null,"Copyright@2020"))}function Y(e){return i.a.createElement("div",{style:{backgroundColor:"#fff",width:"100%",position:"relative"}},i.a.createElement("div",null,i.a.createElement(P,null)),i.a.createElement("div",{className:"container"},i.a.createElement(z,null)),i.a.createElement("div",null,i.a.createElement(U,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=[Object(l.a)(r.a)],J=Object(l.d)(L,{items:[],count:0,pageNum:1,pageSize:15,isFetchingDeployment:!1,isDeleting:{},isAdding:!1,templates:[]},l.c.apply(void 0,B));s.a.render(i.a.createElement(c.a,{store:J},i.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.fcbd53b0.chunk.js.map
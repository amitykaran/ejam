(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{30:function(e,t,n){e.exports=n(43)},39:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(9),c=n(10),r=n(23),o=n(11),s=n.n(o),m=(n(39),n(7)),u=n(24),d=n.n(u),p="https://techamity-ejam.herokuapp.com";function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2?arguments[2]:void 0,a=window.localStorage.getItem("token")?window.localStorage.getItem("token"):"",l={"content-type":"application/json"};return a&&""!==a&&(l.Authorization="Bearer ".concat(a)),d()("".concat(p,"/").concat(e),{headers:l,method:t,body:JSON.stringify(n)}).then((function(e){return e.json().then((function(t){return{json:t,response:e}}))})).then((function(e){var t=e.json;return e.response.ok?t:Promise.reject(t)})).then((function(e){return e}),(function(e){return e}))}function g(e){return{type:"LOAD_DEPLOYMENT_FETCHING_STATUS",isFetchingDeployment:!!e}}function h(e,t){return{type:"LOAD_DEPLOYMENT_DELETE_STATUS",id:e,status:!!t}}function f(e){return{type:"LOAD_ADD_ITEM_STATUS",isAdding:!!e}}var v=n(6),y=n(16),D=n.n(y),b={items:[],count:0,pageNum:1,pageSize:15,isFetchingDeployment:!1,isDeleting:{},isAdding:!1,templates:[]},N=function(e){return e.items},A=function(e){return e.pageNum},O=function(e){return e.pageSize},S=function(e){return e.count},x=function(e){return e.isFetchingDeployment},_=function(e){return e.isDeleting},j=function(e){return e.isAdding},T=function(e){return e.templates},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=e.isDeleting,a=D.a.clone(e.items);switch(t.type){case"LOAD_DEPLOYMENT_LIST":return Object(v.a)(Object(v.a)({},e),{},{items:t.items,count:t.count,pageNum:t.pageNum,isFetchingDeployment:!1});case"LOAD_DEPLOYMENT_FETCHING_STATUS":return Object(v.a)(Object(v.a)({},e),{},{isFetchingDeployment:t.isFetchingDeployment});case"LOAD_DEPLOYMENT_DELETE_STATUS":return n[t.id]=t.status,Object(v.a)(Object(v.a)({},e),{},{isDeleting:n});case"LOAD_DELETE_DEPLOYMENT":return n[t.id]=!1,a=a.filter((function(e){return e._id!==t.id})),Object(v.a)(Object(v.a)({},e),{},{items:a,count:e.count-1});case"LOAD_ADD_ITEM_STATUS":return Object(v.a)(Object(v.a)({},e),{},{isAdding:t.isAdding});case"LOAD_ADD_ITEM":return a.push(t.item),Object(v.a)(Object(v.a)({},e),{},{items:a,count:e.count+1,isAdding:t.isAdding});case"LOAD_TEMPLATE":return Object(v.a)(Object(v.a)({},e),{},{templates:t.templates});default:return Object(v.a)({},e)}},L=n(45);function I(e){return l.a.createElement("div",{className:"panel"},l.a.createElement("div",{className:"panel-header"},l.a.createElement("div",{style:{display:"inline-flex",width:"100%",justifyContent:"space-between"}},l.a.createElement("div",null,"Showing Item ( ".concat(e.currentCount," )")),l.a.createElement("div",null,l.a.createElement(L.a,{className:"btn",onClick:function(){return e.openAddItemForm()}},"Add Item")))),l.a.createElement("div",{className:"panel-body"},l.a.createElement("table",{className:"table",style:{width:"100%",textAlign:"left",border:"1px solid #cdcdcd",borderRadius:"3px"}},l.a.createElement("tr",null,l.a.createElement("th",{style:{padding:"8px 10px",minWidth:"30px"}},"Sr. No"),l.a.createElement("th",{style:{padding:"8px",minWidth:"50px"}},"Url"),l.a.createElement("th",{style:{padding:"8px 10px",minWidth:"50px"}},"Template Name"),l.a.createElement("th",{style:{padding:"8px 10px",minWidth:"50px"}},"Version"),l.a.createElement("th",{style:{padding:"8px 10px",minWidth:"50px"}},"Action")),e.list&&e.list.length>0?e.list.map((function(t,n){return l.a.createElement("tr",{style:{color:"#737373"}},l.a.createElement("td",{style:{padding:"8px 10px",minWidth:"30px"}},n+1),l.a.createElement("td",{style:{padding:"8px 10px",minWidth:"50px"}},t.url),l.a.createElement("td",{style:{padding:"8px 10px",minWidth:"30px"}},t.templateName),l.a.createElement("td",{style:{padding:"8px 10px",minWidth:"30px"}},t.version),l.a.createElement("td",{style:{padding:"8px 10px",minWidth:"30px"}},l.a.createElement(L.a,{className:"btn btn-danger",onClick:function(){return e.deleteItem(t._id)},disabled:e.isDeleting[t._id]},e.isDeleting[t._id]?"Deleting":"Delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:17,style:{textAlign:"center"}},e.isFetching?l.a.createElement("h2",{style:{color:"#cdcdcd"}},"Fetching....."):l.a.createElement("h1",null," No data"))))),l.a.createElement("div",{className:"panel-footer"},l.a.createElement("span",null,"Showing ".concat((e.pageNum-1)*e.pageSize," to ").concat(e.currentCount," of ").concat(e.count," entries"))))}var C=n(44),F=n(26),k=n(27),M=n(28);var P=function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),i=n[0],c=n[1],r=Object(a.useState)(""),o=Object(m.a)(r,2),s=o[0],u=o[1],d=Object(a.useState)(""),p=Object(m.a)(d,2),E=p[0],g=p[1],h=Object(a.useState)({}),f=Object(m.a)(h,2),v=f[0],y=f[1],D=function(){var t={};t.url=E,t.templateName=v.name,t.version=s,function(e){var t=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,n=!0;return console.log("valid",t.test(e.url),e.url),e.url?t.test(e.url)?e.templateName?e.version||(n=!1,window.alert("Please select valid version")):(n=!1,window.alert("Please select valid template name")):(n=!1,window.alert("Please enter valid URL")):(window.alert("Please enter url"),n=!1),n}(t)&&e.addItem(t)};return l.a.createElement("div",{className:"add-overlay"},l.a.createElement("div",{onClick:function(){return e.close()},className:"add-overlay-background"}),l.a.createElement("div",{className:"overlay-wrapper"},l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay-header"},"Add Deployment"),l.a.createElement("div",{className:"overlay-body"},l.a.createElement(C.a,{horizontal:!0},l.a.createElement(F.a,{style:{marginBottom:"15px"}},l.a.createElement("div",{className:"input-label"},"URL ",l.a.createElement("span",{style:{color:"red"}},"*")),l.a.createElement("div",null,l.a.createElement(k.a,{onChange:function(e){return g(e.target.value)},type:"text",className:"input-style",placeholder:"Enter Url "}))),l.a.createElement(F.a,{style:{marginBottom:"15px"}},l.a.createElement("div",{className:"input-label"},"Template Name ",l.a.createElement("span",{style:{color:"red"}},"*")),l.a.createElement(M.a,{sm:7},l.a.createElement("select",{className:"input-style",name:"",id:"",onChange:function(t){var n;""===(n=t.target.value)?(y({}),c([]),u("")):e.templates.forEach((function(e){e._id===n&&(y(e),c(e.versions))}))}},l.a.createElement("option",{value:""},"-- Select Template --"),e.templates&&e.templates.length>0&&e.templates.map((function(e){return l.a.createElement("option",{value:e._id},e.name)}))))),l.a.createElement(F.a,{style:{marginBottom:"15px"}},l.a.createElement("div",{className:"input-label"},"Version ",l.a.createElement("span",{style:{color:"red"}},"*")),l.a.createElement(M.a,{sm:7},l.a.createElement("select",{className:"input-style",disabled:0===i.length,name:"",id:"",onChange:function(e){return u(e.target.value)}},l.a.createElement("option",{value:""},"-- Select Version --"),i&&i.length>0&&i.map((function(e){return l.a.createElement("option",{value:e},e)}))))))),l.a.createElement("div",{className:"overlay-footer"},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"}},l.a.createElement(L.a,{onClick:function(){return e.close()}},"Close"),l.a.createElement(L.a,{disabled:e.isAdding,onClick:function(){return D()}},e.isAdding?"Adding":"Add"))))))};function z(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),i=n[0],r=n[1],o=Object(c.b)(),s=Object(c.c)((function(e){return{list:N(e),pageNum:A(e),pageSize:O(e),count:S(e),isFetching:x(e),isDeleting:_(e),isAdding:j(e),templates:T(e)}}));return Object(a.useEffect)((function(){var e={};e.pageNum=s.pageNum,e.pageSize=s.pageSize,o((function(e){E("api/templates/list","post",{}).then((function(t){t&&"Success"===t.status&&e({type:"LOAD_TEMPLATE",templates:t.data.templates})}))})),o(function(e){return function(t){t(g(!0)),E("api/deployments/list","post",e).then((function(n){var a,l;console.log("res",n),n&&"Success"===n.status?t((a=n.data,l=e.pageNum,{type:"LOAD_DEPLOYMENT_LIST",items:a.deployments,count:a.count,pageNum:l,isFetchingDeployment:!1})):t(g(!1))}))}}(e))}),[s.count]),Object(a.useEffect)((function(){s.isAdding||r(!1)}),[s.isAdding]),l.a.createElement("div",{className:"deployment"},l.a.createElement("div",null,l.a.createElement("h2",null,"Deployment List")),l.a.createElement("div",null,l.a.createElement(I,{count:s.count,list:s.list,currentCount:s.list&&s.list.length>0?s.list.length:0,pageNum:s.pageNum,pageSize:s.pageSize,isDeleting:s.isDeleting,isFetching:s.isFetching,deleteItem:function(e){o(function(e){return function(t){t(h(e,!0)),E("api/deployments/".concat(e,"/remove"),"post",{}).then((function(n){n&&"Success"===n.status?t(function(e){return{type:"LOAD_DELETE_DEPLOYMENT",id:e}}(e)):t(h(e,!1))}))}}(e))},openAddItemForm:function(){return r(!0)}}),i?l.a.createElement(P,{showModal:i,close:function(){return r(!1)},addItem:function(e){o(function(e){return function(t){t(f(!0)),E("api/deployments/new","post",{deployment:e}).then((function(e){e&&"Success"===e.status?t(function(e){return{type:"LOAD_ADD_ITEM",item:e,isAdding:!1}}(e.data.deployment)):t(f(!1))}))}}(e))},isAdding:s.isAdding,templates:s.templates}):null))}function W(e){return l.a.createElement("div",{className:"header"},l.a.createElement("span",null,"E-Jam"))}function U(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("span",null,"Copyright@2020"))}function Y(e){return l.a.createElement("div",{style:{backgroundColor:"#fff",width:"100%",position:"relative"}},l.a.createElement("div",null,l.a.createElement(W,null)),l.a.createElement("div",{className:"container"},l.a.createElement(z,null)),l.a.createElement("div",null,l.a.createElement(U,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=[Object(i.a)(r.a)],J=Object(i.d)(w,{items:[],count:0,pageNum:1,pageSize:15,isFetchingDeployment:!1,isDeleting:{},isAdding:!1,templates:[]},i.c.apply(void 0,B));s.a.render(l.a.createElement(c.a,{store:J},l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.dd61853d.chunk.js.map
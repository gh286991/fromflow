(this.webpackJsonpfromflow=this.webpackJsonpfromflow||[]).push([[0],{142:function(t,e,n){},143:function(t,e,n){},257:function(t,e,n){"use strict";n.r(e),n.d(e,"store",(function(){return Ut}));var r=n(1),c=n.n(r),a=n(14),o=n.n(a),i=(n(142),n(143),n(124)),s=n(31),l=n(70),u=n(54),d=n(264),j=function(t){return{RESET:"".concat(t,"_RESET"),REQUEST:"".concat(t,"_REQUEST"),SUCCESS:"".concat(t,"_SUCCESS"),FAILURE:"".concat(t,"_FAILURE")}},x=function(t){return Object.values(j(t))},p=d.a.apply(void 0,Object(u.a)(x("GET_TAG")).concat(Object(u.a)(x("GET_TAG_FLOW")),["RESET_STATUS",{prefix:"TAG"}])),O=n(85),b=n.n(O),f=n(75),h=n(13),S=n(126),y=n.n(S),m=(n(194),n(97)),w=n.n(m),g=(n(195),n(96)),T=n.n(g),F=n(20),v=Object(F.a)({},"STATUS_OBJFLOW_ONGOING","\u9032\u884c\u4e2d"),E=n(7),_={mainContainer:{padding:30},newFlowButton:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",margin:"20px 0px"},formContainer:{width:"50%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",margin:0},dateContainer:{width:"40%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},blank:{width:"10%"},searchContainer:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",margin:"20px 0px"},inputSelect:{margin:"0px 10px"},operationButton:{margin:"0px 2px"},tdStyle:{height:"100%",verticalAlign:"middle"}},A=function(t){var e=t.data,n=Object(r.useState)("flow"),c=Object(f.a)(n,2),a=c[0],o=c[1],i=Object(r.useState)(new Date),s=Object(f.a)(i,2),l=s[0],u=s[1],d=Object(r.useState)(new Date),j=Object(f.a)(d,2),x=j[0],p=j[1],O=[{dataField:"",text:"\u5230\u671f\u65e5",sort:!0,headerStyle:function(t,e){return{width:"100px"}}},{dataField:"objectFormFlowCaseName",text:"\u500b\u6848",sort:!0},{dataField:"objectFormFlowCase",text:"\u540d\u7a31",sort:!0},{dataField:"",text:"\u985e\u5225",sort:!0,headerStyle:function(t,e){return{width:"120px"}}},{dataField:"startDate",text:"\u555f\u52d5\u6642\u9593",sort:!0,headerStyle:function(t,e){return{width:"160px"}},formatter:function(t){return T()(t).format("YYYY-MM-DD HH:mm")}},{dataField:"statusProcessing",text:"\u72c0\u614b",sort:!0,headerStyle:function(){return{width:"120px"}},formatter:function(t){return v[t]}},{isDummyField:!0,text:"\u64cd\u4f5c",formatter:function(t,e){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(h.a,{color:"primary",style:_.operationButton,children:"\u64a4\u56de"}),Object(E.jsx)(h.a,{color:"primary",style:_.operationButton,children:"\u505c\u6b62"}),Object(E.jsx)(h.a,{color:"primary",style:_.operationButton,children:"\u6b77\u7a0b"})]})}}],S=[{dataField:"",text:"\u5230\u671f\u65e5",sort:!0,headerStyle:function(t,e){return{width:"100px"}},style:function(){return _.tdStyle}},{dataField:"objectFormFlowCaseName",text:"\u500b\u6848",sort:!0,style:function(){return _.tdStyle}},{dataField:"objectFormFlowCase",text:"\u540d\u7a31",sort:!0,style:function(){return _.tdStyle}},{dataField:"type",text:"\u985e\u5225",sort:!0,headerStyle:function(){return{width:"120px"}},style:function(){return _.tdStyle}},{dataField:"",text:"\u8ca0\u8cac\u4eba",sort:!0,headerStyle:function(){return{width:"120px"}},style:function(){return _.tdStyle}},{dataField:"startDate",text:"\u9001\u51fa\u6642\u9593",sort:!0,headerStyle:function(){return{width:"160px"}},formatter:function(t){return T()(t).format("YYYY-MM-DD HH:mm")},style:function(){return _.tdStyle}},{dataField:"statusProcessing",text:"\u72c0\u614b",sort:!0,headerStyle:function(){return{width:"120px"}},formatter:function(t){return v[t]},style:function(){return _.tdStyle}},{isDummyField:!0,text:"\u64cd\u4f5c",style:function(){return _.tdStyle},formatter:function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{style:{margin:"2px 0px"},children:[Object(E.jsx)(h.a,{color:"primary",style:_.operationButton,children:"\u4fee\u6539"}),Object(E.jsx)(h.a,{color:"primary",style:_.operationButton,children:"\u6307\u6d3e"})]}),Object(E.jsxs)("div",{style:{margin:"2px 0px"},children:[Object(E.jsx)(h.a,{color:"primary",style:_.operationButton,children:"\u6838\u51c6"}),Object(E.jsx)(h.a,{color:"primary",style:_.operationButton,children:"\u99c1\u56de"})]})]})}}];return Object(E.jsxs)("div",{style:_.mainContainer,children:[Object(E.jsxs)(h.d,{tabs:!0,children:[Object(E.jsx)(h.e,{children:Object(E.jsx)(h.f,{className:"flow"===a?"active":"",onClick:function(){o("flow")},children:"\u8868\u55ae\u6d41\u7a0b\u7ba1\u7406"})}),Object(E.jsx)(h.e,{children:Object(E.jsx)(h.f,{className:"waitAccess"===a?"active":"",onClick:function(){o("waitAccess")},children:"\u5f85\u6838\u51c6\u8868\u55ae"})})]}),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{style:_.newFlowButton,children:Object(E.jsx)(h.a,{color:"primary",children:"\u555f\u52d5\u8868\u55ae\u65b0\u6d41\u7a0b"})}),Object(E.jsxs)("div",{style:_.searchContainer,children:[Object(E.jsxs)(h.b,{style:_.formContainer,children:[Object(E.jsxs)(h.c,{id:"exampleSelect",name:"select",type:"select",style:_.inputSelect,children:[Object(E.jsx)("option",{children:"\u500b\u6848\u540d\u7a31"}),Object(E.jsx)("option",{children:"2"}),Object(E.jsx)("option",{children:"3"}),Object(E.jsx)("option",{children:"4"}),Object(E.jsx)("option",{children:"5"})]}),Object(E.jsxs)(h.c,{id:"exampleSelect",name:"select",type:"select",style:_.inputSelect,children:[Object(E.jsx)("option",{children:"\u6d41\u7a0b\u540d\u7a31"}),Object(E.jsx)("option",{children:"2"}),Object(E.jsx)("option",{children:"3"}),Object(E.jsx)("option",{children:"4"}),Object(E.jsx)("option",{children:"5"})]}),Object(E.jsxs)(h.c,{id:"exampleSelect",name:"select",type:"select",style:_.inputSelect,children:[Object(E.jsx)("option",{children:"\u6d41\u7a0b\u985e\u5225"}),Object(E.jsx)("option",{children:"2"}),Object(E.jsx)("option",{children:"3"}),Object(E.jsx)("option",{children:"4"}),Object(E.jsx)("option",{children:"5"})]}),Object(E.jsxs)(h.c,{id:"exampleSelect",name:"select",type:"select",style:_.inputSelect,children:[Object(E.jsx)("option",{children:"\u6d41\u7a0b\u72c0\u614b"}),Object(E.jsx)("option",{children:"2"}),Object(E.jsx)("option",{children:"3"}),Object(E.jsx)("option",{children:"4"}),Object(E.jsx)("option",{children:"5"})]})]}),Object(E.jsx)("div",{style:_.blank}),Object(E.jsxs)("div",{style:_.dateContainer,children:[Object(E.jsx)("div",{style:{width:"200px"},children:"\u5230\u671f\u65e5:"}),Object(E.jsx)(w.a,{selected:l,onChange:function(t){return u(t)}}),"~",Object(E.jsx)(w.a,{selected:x,onChange:function(t){return p(t)}}),Object(E.jsx)(h.a,{color:"primary",style:{width:"120px"},children:"\u67e5\u8a62"})]})]})]}),Object(E.jsx)(y.a,{bootstrap4:!0,keyField:"id",data:e,columns:"flow"===a?O:S,defaultSorted:[{dataField:"name",order:"desc"}],pagination:b()()})]},"baseContainer")};A.defaultProps={};var C=A,R=n(266),D=n(131),I=n(76),U=function(t){return t.flow},L=Object(I.a)(U,(function(t){return D.a(["reduxStatus"],t)})),N=Object(I.a)(U,(function(t){return D.a(["error","message"],t)})),k=Object(I.a)(U,(function(t){return D.a(["data"],t)})),B=function(t){var e=t.reduxStatus,n=t.reduxError,c=t.actions,a=t.data,o=c.getTagFlowRequest,i=R.a([],["tags","data"],a);return Object(r.useEffect)((function(){o()}),[o]),Object(E.jsx)(C,{reduxStatus:e,reduxError:n,data:i})};B.defaultProps={reduxStatus:null,reduxError:null};var G=Object(l.b)((function(t){return{reduxStatus:L(t),reduxError:N(t),data:k(t)}}),(function(t){return{actions:Object(s.b)(Object(i.a)({},p),t)}}))(B);var M,P,Y,$=function(){return Object(E.jsx)("div",{children:Object(E.jsx)(G,{})})},q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,268)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))},H=n(132),X=n(265),J=n(267),z=n(74),Q=n.n(z),V="STATUS_INITIAL",W="STATUS_LOADING",K="STATUS_NORMAL",Z="STATUS_ERROR",tt=(M={},Object(F.a)(M,V,0),Object(F.a)(M,K,1),Object(F.a)(M,W,2),Object(F.a)(M,Z,3),{STATUS_INITIAL:V,STATUS_LOADING:W,STATUS_NORMAL:K,STATUS_ERROR:Z}),et=p.getTagFlowRequest,nt=p.getTagFlowSuccess,rt=p.getTagFlowFailure,ct={reduxStatus:tt.STATUS_INITIAL,error:null,data:null},at=Object(X.a)((P={},Object(F.a)(P,Object(J.a)(et),(function(t){return Q()(t,{reduxStatus:{$set:tt.STATUS_LOADING},error:{$set:null}})})),Object(F.a)(P,Object(J.a)(rt),(function(t,e){var n=e.payload;return Q()(t,{reduxStatus:{$set:tt.STATUS_ERROR},error:{$set:n}})})),Object(F.a)(P,nt,(function(t,e){var n=e.payload;return Q()(t,{reduxStatus:{$set:tt.STATUS_NORMAL},data:{$set:n},error:{$set:null}})})),P),ct),ot=Object(s.c)({flow:at}),it=function(t,e){return ot(t,e)},st=n(26),lt=n.n(st),ut=n(27),dt=n(129),jt=n(130),xt=null,pt=n.n(jt).a.create({baseURL:"https://337bf18b-3eae-41fd-8c34-4edae8fde525.mock.pstmn.io",timeout:6e5});pt.setToken=function(t){xt=t},pt.interceptors.request.use((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(xt){var e=t.headers,n=void 0===e?{}:e;n.Authorization=xt}return t})),pt.setAuthenticationErrorHandler=function(t){Y=t},pt.interceptors.response.use((function(t){return t}),(function(t){return Y&&t&&t.response&&401===t.response.status&&Y(),Promise.reject(t.response.data.error)}));var Ot=pt,bt={getFlowList:function(){var t=Object(dt.a)(lt.a.mark((function t(){return lt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Ot.get("api/getFlowData"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},ft=lt.a.mark(Ft),ht=lt.a.mark(vt),St=p.getTagRequest,yt=p.getTagSuccess,mt=p.getTagFailure,wt=p.getTagFlowRequest,gt=p.getTagFlowSuccess,Tt=p.getTagFlowFailure;function Ft(t){var e;return lt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ut.c)(St(t));case 2:return n.prev=2,n.next=5,Object(ut.b)(bt.getFlowList);case 5:return e=n.sent,n.next=8,Object(ut.c)(yt(e.data));case 8:return n.abrupt("return",e);case 11:return n.prev=11,n.t0=n.catch(2),n.next=15,Object(ut.c)(mt(n.t0));case 15:throw n.t0;case 16:case"end":return n.stop()}}),ft,null,[[2,11]])}function vt(t){var e,n;return lt.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.payload,console.log("getSaga"),r.prev=2,r.next=5,Object(ut.b)(Ft,e);case 5:return n=r.sent,r.next=8,Object(ut.c)(gt({tags:n}));case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(2),r.next=14,Object(ut.c)(Tt(r.t0));case 14:case"end":return r.stop()}}),ht,null,[[2,10]])}var Et=[Object(ut.d)(wt,vt)],_t=lt.a.mark(At);function At(){return lt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ut.a)(Object(u.a)(Et));case 2:case"end":return t.stop()}}),_t)}var Ct=Object(H.a)(),Rt=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({serialize:!0}):null)||s.d,Dt=[Ct],It=Rt(s.a.apply(void 0,Dt));n(256);var Ut=function(t){var e=Object(s.e)(it,t,It);return Ct.run(At),e}();o.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(l.a,{store:Ut,children:Object(E.jsx)($,{})})}),document.getElementById("root")),q()}},[[257,1,2]]]);
//# sourceMappingURL=main.f9ae5c53.chunk.js.map
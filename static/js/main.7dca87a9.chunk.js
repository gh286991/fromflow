(this.webpackJsonpfromflow=this.webpackJsonpfromflow||[]).push([[0],{143:function(t,e,n){},144:function(t,e,n){},258:function(t,e,n){"use strict";n.r(e),n.d(e,"store",(function(){return Lt}));var r=n(1),c=n.n(r),a=n(14),i=n.n(a),o=(n(143),n(144),n(124)),s=n(125),l=n(31),u=n(71),d=n(55),j=n(265),x=function(t){return{RESET:"".concat(t,"_RESET"),REQUEST:"".concat(t,"_REQUEST"),SUCCESS:"".concat(t,"_SUCCESS"),FAILURE:"".concat(t,"_FAILURE")}},p=function(t){return Object.values(x(t))},b=j.a.apply(void 0,Object(d.a)(p("GET_TAG")).concat(Object(d.a)(p("GET_TAG_FLOW")),["RESET_STATUS",{prefix:"TAG"}])),O=n(85),f=n.n(O),h=n(76),S=n(13),y=n(127),m=n.n(y),w=(n(195),n(97)),g=n.n(w),T=(n(196),n(96)),F=n.n(T),v=n(20),E=Object(v.a)({},"STATUS_OBJFLOW_ONGOING","\u9032\u884c\u4e2d"),_=n(7),A={mainContainer:{padding:30},newFlowButton:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",margin:"20px 0px"},formContainer:{width:"50%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",margin:0},dateContainer:{width:"40%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},blank:{width:"10%"},searchContainer:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",margin:"20px 0px"},inputSelect:{margin:"0px 10px"},operationButton:{margin:"0px 2px"},tdStyle:{height:"100%",verticalAlign:"middle"}},C=function(t){var e=t.data,n=Object(r.useState)("flow"),c=Object(h.a)(n,2),a=c[0],i=c[1],o=Object(r.useState)(new Date),s=Object(h.a)(o,2),l=s[0],u=s[1],d=Object(r.useState)(new Date),j=Object(h.a)(d,2),x=j[0],p=j[1],b=[{dataField:"",text:"\u5230\u671f\u65e5",sort:!0,headerStyle:function(t,e){return{width:"100px"}}},{dataField:"objectFormFlowCaseName",text:"\u500b\u6848",sort:!0},{dataField:"objectFormFlowCase",text:"\u540d\u7a31",sort:!0},{dataField:"",text:"\u985e\u5225",sort:!0,headerStyle:function(t,e){return{width:"120px"}}},{dataField:"startDate",text:"\u555f\u52d5\u6642\u9593",sort:!0,headerStyle:function(t,e){return{width:"160px"}},formatter:function(t){return F()(t).format("YYYY-MM-DD HH:mm")}},{dataField:"statusProcessing",text:"\u72c0\u614b",sort:!0,headerStyle:function(){return{width:"120px"}},formatter:function(t){return E[t]}},{isDummyField:!0,text:"\u64cd\u4f5c",formatter:function(t,e){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(S.a,{color:"primary",style:A.operationButton,children:"\u64a4\u56de"}),Object(_.jsx)(S.a,{color:"primary",style:A.operationButton,children:"\u505c\u6b62"}),Object(_.jsx)(S.a,{color:"primary",style:A.operationButton,children:"\u6b77\u7a0b"})]})}}],O=[{dataField:"",text:"\u5230\u671f\u65e5",sort:!0,headerStyle:function(t,e){return{width:"100px"}},style:function(){return A.tdStyle}},{dataField:"objectFormFlowCaseName",text:"\u500b\u6848",sort:!0,style:function(){return A.tdStyle}},{dataField:"objectFormFlowCase",text:"\u540d\u7a31",sort:!0,style:function(){return A.tdStyle}},{dataField:"type",text:"\u985e\u5225",sort:!0,headerStyle:function(){return{width:"120px"}},style:function(){return A.tdStyle}},{dataField:"",text:"\u8ca0\u8cac\u4eba",sort:!0,headerStyle:function(){return{width:"120px"}},style:function(){return A.tdStyle}},{dataField:"startDate",text:"\u9001\u51fa\u6642\u9593",sort:!0,headerStyle:function(){return{width:"160px"}},formatter:function(t){return F()(t).format("YYYY-MM-DD HH:mm")},style:function(){return A.tdStyle}},{dataField:"statusProcessing",text:"\u72c0\u614b",sort:!0,headerStyle:function(){return{width:"120px"}},formatter:function(t){return E[t]},style:function(){return A.tdStyle}},{isDummyField:!0,text:"\u64cd\u4f5c",style:function(){return A.tdStyle},formatter:function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{style:{margin:"2px 0px"},children:[Object(_.jsx)(S.a,{color:"primary",style:A.operationButton,children:"\u4fee\u6539"}),Object(_.jsx)(S.a,{color:"primary",style:A.operationButton,children:"\u6307\u6d3e"})]}),Object(_.jsxs)("div",{style:{margin:"2px 0px"},children:[Object(_.jsx)(S.a,{color:"primary",style:A.operationButton,children:"\u6838\u51c6"}),Object(_.jsx)(S.a,{color:"primary",style:A.operationButton,children:"\u99c1\u56de"})]})]})}}];return Object(_.jsxs)("div",{style:A.mainContainer,children:[Object(_.jsxs)(S.d,{tabs:!0,children:[Object(_.jsx)(S.e,{children:Object(_.jsx)(S.f,{className:"flow"===a?"active":"",onClick:function(){i("flow")},children:"\u8868\u55ae\u6d41\u7a0b\u7ba1\u7406"})}),Object(_.jsx)(S.e,{children:Object(_.jsx)(S.f,{className:"waitAccess"===a?"active":"",onClick:function(){i("waitAccess")},children:"\u5f85\u6838\u51c6\u8868\u55ae"})})]}),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{style:A.newFlowButton,children:Object(_.jsx)(S.a,{color:"primary",children:"\u555f\u52d5\u8868\u55ae\u65b0\u6d41\u7a0b"})}),Object(_.jsxs)("div",{style:A.searchContainer,children:[Object(_.jsxs)(S.b,{style:A.formContainer,children:[Object(_.jsxs)(S.c,{id:"exampleSelect",name:"select",type:"select",style:A.inputSelect,children:[Object(_.jsx)("option",{children:"\u500b\u6848\u540d\u7a31"}),Object(_.jsx)("option",{children:"2"}),Object(_.jsx)("option",{children:"3"}),Object(_.jsx)("option",{children:"4"}),Object(_.jsx)("option",{children:"5"})]}),Object(_.jsxs)(S.c,{id:"exampleSelect",name:"select",type:"select",style:A.inputSelect,children:[Object(_.jsx)("option",{children:"\u6d41\u7a0b\u540d\u7a31"}),Object(_.jsx)("option",{children:"2"}),Object(_.jsx)("option",{children:"3"}),Object(_.jsx)("option",{children:"4"}),Object(_.jsx)("option",{children:"5"})]}),Object(_.jsxs)(S.c,{id:"exampleSelect",name:"select",type:"select",style:A.inputSelect,children:[Object(_.jsx)("option",{children:"\u6d41\u7a0b\u985e\u5225"}),Object(_.jsx)("option",{children:"2"}),Object(_.jsx)("option",{children:"3"}),Object(_.jsx)("option",{children:"4"}),Object(_.jsx)("option",{children:"5"})]}),Object(_.jsxs)(S.c,{id:"exampleSelect",name:"select",type:"select",style:A.inputSelect,children:[Object(_.jsx)("option",{children:"\u6d41\u7a0b\u72c0\u614b"}),Object(_.jsx)("option",{children:"2"}),Object(_.jsx)("option",{children:"3"}),Object(_.jsx)("option",{children:"4"}),Object(_.jsx)("option",{children:"5"})]})]}),Object(_.jsx)("div",{style:A.blank}),Object(_.jsxs)("div",{style:A.dateContainer,children:[Object(_.jsx)("div",{style:{width:"200px"},children:"\u5230\u671f\u65e5:"}),Object(_.jsx)(g.a,{selected:l,onChange:function(t){return u(t)}}),"~",Object(_.jsx)(g.a,{selected:x,onChange:function(t){return p(t)}}),Object(_.jsx)(S.a,{color:"primary",style:{width:"120px"},children:"\u67e5\u8a62"})]})]})]}),Object(_.jsx)(m.a,{bootstrap4:!0,keyField:"id",data:e,columns:"flow"===a?b:O,defaultSorted:[{dataField:"name",order:"desc"}],pagination:f()()})]},"baseContainer")};C.defaultProps={};var R=C,I=n(267),D=n(132),U=n(77),L=function(t){return t.flow},N=Object(U.a)(L,(function(t){return D.a(["reduxStatus"],t)})),k=Object(U.a)(L,(function(t){return D.a(["error","message"],t)})),B=Object(U.a)(L,(function(t){return D.a(["data"],t)})),G=function(t){var e=t.reduxStatus,n=t.reduxError,c=t.actions,a=t.data,i=c.getTagFlowRequest,o=I.a([],["tags","data"],a);return Object(r.useEffect)((function(){i()}),[i]),Object(_.jsx)(R,{reduxStatus:e,reduxError:n,data:o})};G.defaultProps={reduxStatus:null,reduxError:null};var M=Object(u.b)((function(t){return{reduxStatus:N(t),reduxError:k(t),data:B(t)}}),(function(t){return{actions:Object(l.b)(Object(s.a)({},b),t)}}))(G);var P,Y,$,q=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(M,{}),Object(_.jsx)(o.a,{url:"https://gh286991.github.io/iframeTest/",width:"450px",height:"450px",id:"myId",className:"myClassname",styles:{frameBorder:"0"},position:"relative"})]})},H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,269)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),a(t),i(t)}))},X=n(133),J=n(266),z=n(268),Q=n(75),V=n.n(Q),W="STATUS_INITIAL",K="STATUS_LOADING",Z="STATUS_NORMAL",tt="STATUS_ERROR",et=(P={},Object(v.a)(P,W,0),Object(v.a)(P,Z,1),Object(v.a)(P,K,2),Object(v.a)(P,tt,3),{STATUS_INITIAL:W,STATUS_LOADING:K,STATUS_NORMAL:Z,STATUS_ERROR:tt}),nt=b.getTagFlowRequest,rt=b.getTagFlowSuccess,ct=b.getTagFlowFailure,at={reduxStatus:et.STATUS_INITIAL,error:null,data:null},it=Object(J.a)((Y={},Object(v.a)(Y,Object(z.a)(nt),(function(t){return V()(t,{reduxStatus:{$set:et.STATUS_LOADING},error:{$set:null}})})),Object(v.a)(Y,Object(z.a)(ct),(function(t,e){var n=e.payload;return V()(t,{reduxStatus:{$set:et.STATUS_ERROR},error:{$set:n}})})),Object(v.a)(Y,rt,(function(t,e){var n=e.payload;return V()(t,{reduxStatus:{$set:et.STATUS_NORMAL},data:{$set:n},error:{$set:null}})})),Y),at),ot=Object(l.c)({flow:it}),st=function(t,e){return ot(t,e)},lt=n(26),ut=n.n(lt),dt=n(27),jt=n(130),xt=n(131),pt=null,bt=n.n(xt).a.create({baseURL:"https://337bf18b-3eae-41fd-8c34-4edae8fde525.mock.pstmn.io",timeout:6e5});bt.setToken=function(t){pt=t},bt.interceptors.request.use((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(pt){var e=t.headers,n=void 0===e?{}:e;n.Authorization=pt}return t})),bt.setAuthenticationErrorHandler=function(t){$=t},bt.interceptors.response.use((function(t){return t}),(function(t){return $&&t&&t.response&&401===t.response.status&&$(),Promise.reject(t.response.data.error)}));var Ot=bt,ft={getFlowList:function(){var t=Object(jt.a)(ut.a.mark((function t(){return ut.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Ot.get("api/getFlowData"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},ht=ut.a.mark(vt),St=ut.a.mark(Et),yt=b.getTagRequest,mt=b.getTagSuccess,wt=b.getTagFailure,gt=b.getTagFlowRequest,Tt=b.getTagFlowSuccess,Ft=b.getTagFlowFailure;function vt(t){var e;return ut.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(dt.c)(yt(t));case 2:return n.prev=2,n.next=5,Object(dt.b)(ft.getFlowList);case 5:return e=n.sent,n.next=8,Object(dt.c)(mt(e.data));case 8:return n.abrupt("return",e);case 11:return n.prev=11,n.t0=n.catch(2),n.next=15,Object(dt.c)(wt(n.t0));case 15:throw n.t0;case 16:case"end":return n.stop()}}),ht,null,[[2,11]])}function Et(t){var e,n;return ut.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.payload,console.log("getSaga"),r.prev=2,r.next=5,Object(dt.b)(vt,e);case 5:return n=r.sent,r.next=8,Object(dt.c)(Tt({tags:n}));case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(2),r.next=14,Object(dt.c)(Ft(r.t0));case 14:case"end":return r.stop()}}),St,null,[[2,10]])}var _t=[Object(dt.d)(gt,Et)],At=ut.a.mark(Ct);function Ct(){return ut.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(dt.a)(Object(d.a)(_t));case 2:case"end":return t.stop()}}),At)}var Rt=Object(X.a)(),It=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({serialize:!0}):null)||l.d,Dt=[Rt],Ut=It(l.a.apply(void 0,Dt));n(257);var Lt=function(t){var e=Object(l.e)(st,t,Ut);return Rt.run(Ct),e}();i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(u.a,{store:Lt,children:Object(_.jsx)(q,{})})}),document.getElementById("root")),H()}},[[258,1,2]]]);
//# sourceMappingURL=main.7dca87a9.chunk.js.map
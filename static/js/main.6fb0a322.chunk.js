(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{10:function(e,t,n){e.exports={sideBar:"SideBar_sideBar__2slkt",contactWrap:"SideBar_contactWrap__2Y-I7",contact:"SideBar_contact__1-7hI",contactForm:"SideBar_contactForm__7wYwQ",clicked:"SideBar_clicked__2Bril",details:"SideBar_details__2WCzg"}},3:function(e,t,n){e.exports={containerLog:"Login_containerLog__1PFQW",containerSub:"Login_containerSub__2QA6V",container:"Login_container__BVt0Q",h2:"Login_h2__3qes3",form:"Login_form__20mDi",field:"Login_field__36tDz",input:"Login_input__2OHlW",hover:"Login_hover__i5Kgl",label:"Login_label__11nFr",button:"Login_button__3zOW1",create:"Login_create__2Dm5R"}},45:function(e,t,n){e.exports={chatInput:"ChatInput_chatInput__2u11C"}},46:function(e,t,n){e.exports={chat:"Chat_chat__11avm"}},47:function(e,t,n){e.exports={container:"Error_container__1pJlb"}},52:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(43),s=n.n(a),o=n(2),i=(n(52),n(44)),u=n.n(i),l="https://immense-fjord-53526.herokuapp.com/",d={postLogin:l,postSub:l+"sub",cookieValidate:l+"cookie",getContacts:l+"contact",postContacts:l+"contact/post",getMessages:l+"message"},j=n(0),f=Object(c.createContext)(null);function h(){return Object(c.useContext)(f)}function b(e){var t=e.id,n=e.children,r=Object(c.useState)(),a=Object(o.a)(r,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("token"),n=u()(l,{query:{id:t,token:e}});return i(n),function(){n.close()}}),[t]),Object(j.jsx)(f.Provider,{value:s,children:n})}var p=Object(c.createContext)(""),O=function(e){var t=e.children,n=Object(c.useState)(""),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(j.jsx)(p.Provider,{value:[a,s],children:t})},v=n(22),m=n(23),_=function(){function e(t,n,c,r){Object(v.a)(this,e),this._chat=void 0,this._sender_ID=void 0,this._receiver_ID=void 0,this._date=void 0,this._chat=t,this._sender_ID=n,this._receiver_ID=c,this._date=r}return Object(m.a)(e,[{key:"chat",get:function(){return this._chat}},{key:"sender_ID",get:function(){return this._sender_ID}},{key:"receiver_ID",get:function(){return this._receiver_ID}},{key:"date",get:function(){return this._date}}]),e}(),g=n(9),x=n.n(g);function C(e){var t=e.chatting,n=e.messages,r=e.setMessages,a=Object(c.useRef)(null),s=(h(),Object(c.useContext)(p)),i=Object(o.a)(s,2),u=i[0];i[1];return Object(c.useEffect)((function(){!function(){var e;null===(e=a.current)||void 0===e||e.scrollIntoView()}()}),[n]),Object(c.useEffect)((function(){t&&function(e,t,n){return console.log(e),new Promise((function(c,r){fetch(t,{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({receiver_ID:e,token:n})}).then((function(e){return e.json()})).then((function(e){e.err?r(e):c(e)}))}))}(t,d.getMessages,u).then((function(e){var t=e.res.map((function(e){return new _(e.chat,e.sender_ID,e.receiver_ID,new Date(e.date))}));r(t)})).catch((function(e){return console.log(e)}))}),[t,r]),Object(j.jsx)("div",{className:x.a.chatBar,children:(null===n||void 0===n?void 0:n.length)?Object(j.jsxs)("ul",{children:[n.map((function(e){return Object(j.jsx)(w,{chatting:t,chat:e.chat,receiver_ID:e.receiver_ID,date:e.date},Math.random())})),Object(j.jsx)("li",{ref:a})]}):Object(j.jsx)("h6",{children:"Connect with your friends"})})}function w(e){var t=e.chat,n=e.receiver_ID,r=e.date,a=e.chatting,s=Object(c.useRef)(null);return Object(j.jsxs)("li",{className:n===a?x.a.sent:x.a.received,onClick:function(){var e,t,n;(null===(e=s.current)||void 0===e?void 0:e.classList.contains(x.a.timeShow))?null===(t=s.current)||void 0===t||t.classList.remove(x.a.timeShow):null===(n=s.current)||void 0===n||n.classList.add(x.a.timeShow)},children:[Object(j.jsx)("p",{children:t}),Object(j.jsxs)("p",{ref:s,className:x.a.time,children:[r.getHours(),"h",r.getMinutes()]})]})}var S=n(19),k=Object(c.createContext)(""),y=function(e){var t=e.children,n=Object(c.useState)(""),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(j.jsx)(k.Provider,{value:[a,s],children:t})},I=n(45),D=n.n(I);function N(e){var t=e.chatting,n=e.setMessages,r=e.id,a=h(),s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],d=Object(c.useContext)(k),f=Object(o.a)(d,2),b=(f[0],f[1]),p=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(a)return a.on("newMessage",(function(e){if(e.sender_ID===t){var c=new _(e.chat,e.sender_ID,e.receiver_ID,new Date(e.date));n((function(e){return[].concat(Object(S.a)(e),[c])}))}})),function(){a.off("newMessage")}}),[a,t,n]),Object(j.jsx)("div",{className:D.a.chatInput,children:Object(j.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),t)if(u){a.emit("emit",{msg:u,receiver_ID:t});var c=new _(u,r,t,new Date);n((function(e){return[].concat(Object(S.a)(e),[c])})),l("")}else b("Please input your message.");else b("Please choose a contact.")}(e)},children:[Object(j.jsx)("input",{type:"text",placeholder:"Type your message",value:u,onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("input",{ref:p,type:"submit",value:"Send"})]})})}var L=n(13),B=n.n(L),P=n(24),E=function(e,t){return console.log("posting"),new Promise((function(n,c){fetch(t,{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"},body:JSON.stringify({username:e.username,password:e.password})}).then((function(e){return e.json()})).then((function(e){e.err?c(e):n(e)})).catch((function(e){return c(e)}))}))},M=n(29),A=function(e,t,n){var c=e.contact?{contact:e.contact}:{contact_ID:e.contact_ID};return new Promise((function(e,r){fetch(t,{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"},body:JSON.stringify(Object(M.a)(Object(M.a)({},c),{},{token:n}))}).then((function(e){return e.json()})).then((function(t){t.err?r(t):e(t)})).catch((function(e){return r(e)}))}))},F=function(e,t){var n=!1;return console.log("contacts",e),e.forEach((function(e){e.id===t&&(n=!0)})),n},J=function(){function e(t,n){Object(v.a)(this,e),this._id=void 0,this._username=void 0,this._pic=void 0,this._id=t,this._username=n,this._pic="https://randomuser.me/api/portraits/med/women/".concat(Math.floor(75*Math.random()),".jpg")}return Object(m.a)(e,[{key:"id",get:function(){return this._id}},{key:"username",get:function(){return this._username}},{key:"pic",get:function(){return this._pic}}]),e}(),T=n(10),R=n.n(T);function W(e){var t=e.setContacts,n=e.contacts,r=e.chatting,a=e.setChatting,s=h(),i=Object(c.useContext)(k),u=Object(o.a)(i,2),l=(u[0],u[1]),f=Object(c.useState)(""),b=Object(o.a)(f,2),O=b[0],v=b[1],m=Object(c.useState)(0),_=Object(o.a)(m,2),g=_[0],x=_[1],C=Object(c.useContext)(p),w=Object(o.a)(C,2),y=w[0];w[1];return Object(c.useEffect)((function(){t([]),function(e,t){return new Promise((function(n,c){fetch(e,{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:t})}).then((function(e){return e.json()})).then((function(e){return e.err?c(e):n(e)})).catch((function(e){return c(e)}))}))}(d.getContacts,y).then((function(e){console.log(e),e.length&&e.forEach((function(e){t((function(t){return[].concat(Object(S.a)(t),[new J(e.id,e.username)])}))}))})).catch((function(e){return console.log("rejected",e)}))}),[t,g]),Object(c.useEffect)((function(){if(s)return s.on("newMessage",function(){var e=Object(P.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.sender_ID===r||F(n,t.sender_ID)){e.next=12;break}return console.log("posting contact"),e.prev=2,e.next=5,A({contact_ID:t.sender_ID},d.postContacts,y);case 5:l("New connexion sent a message"),x((function(e){return e+1})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()),function(){s.off("newMessage")}}),[s,r,n,x]),Object(j.jsxs)("div",{className:R.a.sideBar,children:[Object(j.jsx)("div",{className:R.a.contactWrap,children:n.map((function(e){return Object(j.jsx)(Q,{contact:e,chatting:r,setChatting:a},e.id)}))}),Object(j.jsxs)("form",{className:R.a.contactForm,onSubmit:function(e){return function(e){e.preventDefault(),A({contact:O},d.postContacts,y).then((function(e){l(e.res)})).catch((function(e){l(e.err)})).finally((function(){v(""),x((function(e){return e+1}))}))}(e)},children:[Object(j.jsx)("input",{type:"submit",value:"Send"}),Object(j.jsx)("input",{type:"text",value:O,onChange:function(e){return v(e.target.value)},placeholder:"Add contact"})]})]})}function Q(e){var t=e.contact,n=e.chatting,c=e.setChatting;return Object(j.jsxs)("button",{onClick:function(e){c(t.id)},className:n===t.id?"".concat(R.a.contact," ").concat(R.a.clicked):R.a.contact,children:[Object(j.jsx)("img",{alt:t.username,src:t.pic}),Object(j.jsxs)("div",{className:R.a.details,children:[Object(j.jsx)("h5",{children:t.username}),Object(j.jsx)("h6",{children:t.username})]})]},t.id)}var V=n(46),q=n.n(V);function z(e){var t=e.id,n=Object(c.useState)(""),r=Object(o.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)([]),u=Object(o.a)(i,2),l=u[0],d=u[1],f=Object(c.useState)([]),h=Object(o.a)(f,2),p=h[0],O=h[1];return Object(j.jsx)(b,{id:t,children:Object(j.jsxs)("div",{className:q.a.chat,children:[Object(j.jsx)(W,{setContacts:d,contacts:l,chatting:a,setChatting:s}),Object(j.jsx)(C,{chatting:a,messages:p,setMessages:O}),Object(j.jsx)(N,{chatting:a,id:t,setMessages:O})]})})}var K=n(47),U=n.n(K);function Y(){var e=Object(c.useContext)(k),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{className:U.a.container,children:[Object(j.jsx)("p",{children:n}),Object(j.jsx)("button",{autoFocus:!0,onClick:function(){return r("")},children:"OK"})]})}var H=n(3),G=n.n(H);function X(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],f=Object(c.useState)(""),h=Object(o.a)(f,2),b=h[0],O=h[1],v=Object(c.useState)(!1),m=Object(o.a)(v,2),_=m[0],g=m[1],x=Object(c.useContext)(p),C=Object(o.a)(x,2),w=(C[0],C[1]),S=Object(c.useRef)(null),k=Object(c.useRef)(null),y=Object(c.useRef)(null),I=function(){var t=Object(P.a)(B.a.mark((function t(n){var c,s,o,i,j;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r){t.next=4;break}return e.setErr("Username cannot be empty."),t.abrupt("return");case 4:if(u){t.next=7;break}return e.setErr("Password cannot be empty."),t.abrupt("return");case 7:if(!(u.length<8)){t.next=10;break}return e.setErr("Password needs to be at least 8 characters long."),t.abrupt("return");case 10:if(t.prev=10,!_){t.next=22;break}if(u===b){t.next=15;break}return e.setErr("Password confirmation is not equal to password."),t.abrupt("return");case 15:return t.next=17,E({username:r,password:u},d.postSub);case 17:i=t.sent,e.setErr(i.res),g(!1),t.next=28;break;case 22:return t.next=24,E({username:r,password:u},d.postLogin);case 24:j=t.sent,e.setId(j.id),localStorage.setItem("token",j.token),w(j.token);case 28:t.next=33;break;case 30:t.prev=30,t.t0=t.catch(10),e.setErr(t.t0.err);case 33:l(""),a(""),O(""),null===(c=S.current)||void 0===c||c.blur(),null===(s=k.current)||void 0===s||s.blur(),null===(o=y.current)||void 0===o||o.blur();case 39:case"end":return t.stop()}}),t,null,[[10,30]])})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:G.a.container,children:[Object(j.jsx)("h2",{className:G.a.h2,children:_?"Create Account":"Log In"}),Object(j.jsxs)("form",{className:G.a.form,onSubmit:function(e){return I(e)},children:[Object(j.jsxs)("div",{className:G.a.field,children:[Object(j.jsx)("label",{className:G.a.label,htmlFor:"username",ref:S,children:"Username"}),Object(j.jsx)("input",{autoComplete:"off",className:G.a.input,type:"text",name:"username",id:"username",value:r,onChange:function(e){return a(e.target.value)},onFocus:function(){var e;return null===(e=S.current)||void 0===e?void 0:e.classList.add(G.a.hover)},onBlur:function(){var e;return r?"":null===(e=S.current)||void 0===e?void 0:e.classList.remove(G.a.hover)}})]}),Object(j.jsxs)("div",{className:G.a.field,children:[Object(j.jsx)("label",{className:G.a.label,htmlFor:"password",ref:k,children:"Password"}),Object(j.jsx)("input",{autoComplete:"off",className:G.a.input,type:"password",name:"password",id:"password",value:u,onChange:function(e){return l(e.target.value)},onFocus:function(){var e;return null===(e=k.current)||void 0===e?void 0:e.classList.add(G.a.hover)},onBlur:function(){var e;return u?"":null===(e=k.current)||void 0===e?void 0:e.classList.remove(G.a.hover)}})]}),_?Object(j.jsxs)("div",{className:G.a.field,children:[Object(j.jsx)("label",{className:G.a.label,htmlFor:"passConf",ref:y,children:"Confirm Password"}),Object(j.jsx)("input",{autoComplete:"off",className:G.a.input,type:"password",name:"passConf",id:"passConf",value:b,onChange:function(e){return O(e.target.value)},onFocus:function(){var e;return null===(e=y.current)||void 0===e?void 0:e.classList.add(G.a.hover)},onBlur:function(){var e;return b?"":null===(e=y.current)||void 0===e?void 0:e.classList.remove(G.a.hover)}})]}):"",Object(j.jsx)("input",{className:G.a.button,type:"submit",value:_?"Create account":"Log In"})]}),Object(j.jsx)("button",{className:G.a.create,onClick:function(){return g(!_)},children:_?"Log in":"Create Account"})]})}var Z=function(){var e=Object(c.useContext)(k),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useContext)(p),s=Object(o.a)(a,2),i=s[0],u=s[1],l=Object(c.useState)(""),d=Object(o.a)(l,2),f=d[0],h=d[1];return Object(c.useEffect)((function(){if(!i){var e=localStorage.getItem("token");e&&u(e)}}),[i]),Object(j.jsxs)("div",{className:"App",children:[n?Object(j.jsx)(Y,{}):"",i?Object(j.jsx)(z,{id:f}):Object(j.jsx)(X,{setId:h,err:n,setErr:r})]})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(y,{children:Object(j.jsx)(O,{children:Object(j.jsx)(Z,{})})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={chatBar:"ChatBox_chatBar__2ADuJ",sent:"ChatBox_sent__-lKmg",received:"ChatBox_received__24wL9",time:"ChatBox_time__UDysP",timeShow:"ChatBox_timeShow__1YP1J"}}},[[86,1,2]]]);
//# sourceMappingURL=main.6fb0a322.chunk.js.map
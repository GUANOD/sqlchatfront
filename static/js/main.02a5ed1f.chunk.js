(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{10:function(e,t,n){e.exports={sideBar:"SideBar_sideBar__2slkt",contactWrap:"SideBar_contactWrap__2Y-I7",contact:"SideBar_contact__1-7hI",contactForm:"SideBar_contactForm__7wYwQ",clicked:"SideBar_clicked__2Bril",details:"SideBar_details__2WCzg"}},3:function(e,t,n){e.exports={containerLog:"Login_containerLog__1PFQW",containerSub:"Login_containerSub__2QA6V",container:"Login_container__BVt0Q",h2:"Login_h2__3qes3",form:"Login_form__20mDi",field:"Login_field__36tDz",input:"Login_input__2OHlW",hover:"Login_hover__i5Kgl",label:"Login_label__11nFr",button:"Login_button__3zOW1",create:"Login_create__2Dm5R"}},45:function(e,t,n){e.exports={chatInput:"ChatInput_chatInput__2u11C"}},46:function(e,t,n){e.exports={chat:"Chat_chat__11avm"}},47:function(e,t,n){e.exports={container:"Error_container__1pJlb"}},52:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(43),s=n.n(a),o=n(2),i=function(e,t){return console.log("posting"),new Promise((function(n,c){fetch(t,{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"},body:JSON.stringify({username:e.username,password:e.password})}).then((function(e){return e.json()})).then((function(e){e.err?c(e):n(e)})).catch((function(e){return c(e)}))}))},u=function(e,t){return new Promise((function(n,c){fetch(e,{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:t})}).then((function(e){return e.json()})).then((function(e){return e.err?c(e):n(e)})).catch((function(e){return c(e)}))}))},l=(n(52),n(44)),d=n.n(l),j="https://immense-fjord-53526.herokuapp.com/",f={postLogin:j,postSub:j+"sub",cookieValidate:j+"cookie",getContacts:j+"contact",postContacts:j+"contact/post",getMessages:j+"message"},h=n(0),b=Object(c.createContext)(null);function p(){return Object(c.useContext)(b)}function O(e){var t=e.id,n=e.children,r=Object(c.useState)(),a=Object(o.a)(r,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("token"),n=d()(j,{query:{id:t,token:e}});return i(n),function(){n.close()}}),[t]),Object(h.jsx)(b.Provider,{value:s,children:n})}var v=Object(c.createContext)(""),m=function(e){var t=e.children,n=Object(c.useState)(""),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(h.jsx)(v.Provider,{value:[a,s],children:t})},_=n(22),g=n(23),x=function(){function e(t,n,c,r){Object(_.a)(this,e),this._chat=void 0,this._sender_ID=void 0,this._receiver_ID=void 0,this._date=void 0,this._chat=t,this._sender_ID=n,this._receiver_ID=c,this._date=r}return Object(g.a)(e,[{key:"chat",get:function(){return this._chat}},{key:"sender_ID",get:function(){return this._sender_ID}},{key:"receiver_ID",get:function(){return this._receiver_ID}},{key:"date",get:function(){return this._date}}]),e}(),C=n(9),w=n.n(C);function S(e){var t=e.chatting,n=e.messages,r=e.setMessages,a=Object(c.useRef)(null),s=(p(),Object(c.useContext)(v)),i=Object(o.a)(s,2),u=i[0];i[1];return Object(c.useEffect)((function(){!function(){var e;null===(e=a.current)||void 0===e||e.scrollIntoView()}()}),[n]),Object(c.useEffect)((function(){t&&function(e,t,n){return console.log(e),new Promise((function(c,r){fetch(t,{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({receiver_ID:e,token:n})}).then((function(e){return e.json()})).then((function(e){e.err?r(e):c(e)}))}))}(t,f.getMessages,u).then((function(e){var t=e.res.map((function(e){return new x(e.chat,e.sender_ID,e.receiver_ID,new Date(e.date))}));r(t)})).catch((function(e){return console.log(e)}))}),[t,r]),Object(h.jsx)("div",{className:w.a.chatBar,children:(null===n||void 0===n?void 0:n.length)?Object(h.jsxs)("ul",{children:[n.map((function(e){return Object(h.jsx)(k,{chatting:t,chat:e.chat,receiver_ID:e.receiver_ID,date:e.date},Math.random())})),Object(h.jsx)("li",{ref:a})]}):Object(h.jsx)("h6",{children:"Connect with your friends"})})}function k(e){var t=e.chat,n=e.receiver_ID,r=e.date,a=e.chatting,s=Object(c.useRef)(null);return Object(h.jsxs)("li",{className:n===a?w.a.sent:w.a.received,onClick:function(){var e,t,n;(null===(e=s.current)||void 0===e?void 0:e.classList.contains(w.a.timeShow))?null===(t=s.current)||void 0===t||t.classList.remove(w.a.timeShow):null===(n=s.current)||void 0===n||n.classList.add(w.a.timeShow)},children:[Object(h.jsx)("p",{children:t}),Object(h.jsxs)("p",{ref:s,className:w.a.time,children:[r.getHours(),"h",r.getMinutes()]})]})}var y=n(19),I=Object(c.createContext)(""),D=function(e){var t=e.children,n=Object(c.useState)(""),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(h.jsx)(I.Provider,{value:[a,s],children:t})},N=n(45),L=n.n(N);function B(e){var t=e.chatting,n=e.setMessages,r=e.id,a=p(),s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],d=Object(c.useContext)(I),j=Object(o.a)(d,2),f=(j[0],j[1]),b=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(a)return a.on("newMessage",(function(e){if(e.sender_ID===t){var c=new x(e.chat,e.sender_ID,e.receiver_ID,new Date(e.date));n((function(e){return[].concat(Object(y.a)(e),[c])}))}})),function(){a.off("newMessage")}}),[a,t,n]),Object(h.jsx)("div",{className:L.a.chatInput,children:Object(h.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),t)if(u){a.emit("emit",{msg:u,receiver_ID:t});var c=new x(u,r,t,new Date);n((function(e){return[].concat(Object(y.a)(e),[c])})),l("")}else f("Please input your message.");else f("Please choose a contact.")}(e)},children:[Object(h.jsx)("input",{type:"text",placeholder:"Type your message",value:u,onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("input",{ref:b,type:"submit",value:"Send"})]})})}var P=n(13),E=n.n(P),M=n(24),A=n(29),F=function(e,t,n){var c=e.contact?{contact:e.contact}:{contact_ID:e.contact_ID};return new Promise((function(e,r){fetch(t,{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"},body:JSON.stringify(Object(A.a)(Object(A.a)({},c),{},{token:n}))}).then((function(e){return e.json()})).then((function(t){t.err?r(t):e(t)})).catch((function(e){return r(e)}))}))},J=function(e,t){var n=!1;return console.log("contacts",e),e.forEach((function(e){e.id===t&&(n=!0)})),n},T=function(){function e(t,n){Object(_.a)(this,e),this._id=void 0,this._username=void 0,this._pic=void 0,this._id=t,this._username=n,this._pic="https://randomuser.me/api/portraits/med/women/".concat(Math.floor(75*Math.random()),".jpg")}return Object(g.a)(e,[{key:"id",get:function(){return this._id}},{key:"username",get:function(){return this._username}},{key:"pic",get:function(){return this._pic}}]),e}(),R=n(10),W=n.n(R);function V(e){var t=e.setContacts,n=e.contacts,r=e.chatting,a=e.setChatting,s=p(),i=Object(c.useContext)(I),l=Object(o.a)(i,2),d=(l[0],l[1]),j=Object(c.useState)(""),b=Object(o.a)(j,2),O=b[0],m=b[1],_=Object(c.useState)(0),g=Object(o.a)(_,2),x=g[0],C=g[1],w=Object(c.useContext)(v),S=Object(o.a)(w,2),k=S[0];S[1];return Object(c.useEffect)((function(){t([]),u(f.getContacts,k).then((function(e){console.log(e),e.length&&e.forEach((function(e){t((function(t){return[].concat(Object(y.a)(t),[new T(e.id,e.username)])}))}))})).catch((function(e){return console.log("rejected",e)}))}),[t,x]),Object(c.useEffect)((function(){if(s)return s.on("newMessage",function(){var e=Object(M.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.sender_ID===r||J(n,t.sender_ID)){e.next=12;break}return console.log("posting contact"),e.prev=2,e.next=5,F({contact_ID:t.sender_ID},f.postContacts,k);case 5:d("New connexion sent a message"),C((function(e){return e+1})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()),function(){s.off("newMessage")}}),[s,r,n,C]),Object(h.jsxs)("div",{className:W.a.sideBar,children:[Object(h.jsx)("div",{className:W.a.contactWrap,children:n.map((function(e){return Object(h.jsx)(Q,{contact:e,chatting:r,setChatting:a},e.id)}))}),Object(h.jsxs)("form",{className:W.a.contactForm,onSubmit:function(e){return function(e){e.preventDefault(),F({contact:O},f.postContacts,k).then((function(e){d(e.res)})).catch((function(e){d(e.err)})).finally((function(){m(""),C((function(e){return e+1}))}))}(e)},children:[Object(h.jsx)("input",{type:"submit",value:"Send"}),Object(h.jsx)("input",{type:"text",value:O,onChange:function(e){return m(e.target.value)},placeholder:"Add contact"})]})]})}function Q(e){var t=e.contact,n=e.chatting,c=e.setChatting;return Object(h.jsxs)("button",{onClick:function(e){c(t.id)},className:n===t.id?"".concat(W.a.contact," ").concat(W.a.clicked):W.a.contact,children:[Object(h.jsx)("img",{alt:t.username,src:t.pic}),Object(h.jsxs)("div",{className:W.a.details,children:[Object(h.jsx)("h5",{children:t.username}),Object(h.jsx)("h6",{children:t.username})]})]},t.id)}var q=n(46),z=n.n(q);function K(e){var t=e.id,n=Object(c.useState)(""),r=Object(o.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)([]),u=Object(o.a)(i,2),l=u[0],d=u[1],j=Object(c.useState)([]),f=Object(o.a)(j,2),b=f[0],p=f[1];return Object(h.jsx)(O,{id:t,children:Object(h.jsxs)("div",{className:z.a.chat,children:[Object(h.jsx)(V,{setContacts:d,contacts:l,chatting:a,setChatting:s}),Object(h.jsx)(S,{chatting:a,messages:b,setMessages:p}),Object(h.jsx)(B,{chatting:a,id:t,setMessages:p})]})})}var U=n(47),Y=n.n(U);function H(){var e=Object(c.useContext)(I),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(h.jsxs)("div",{className:Y.a.container,children:[Object(h.jsx)("p",{children:n}),Object(h.jsx)("button",{autoFocus:!0,onClick:function(){return r("")},children:"OK"})]})}var G=n(3),X=n.n(G);function Z(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),u=Object(o.a)(s,2),l=u[0],d=u[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),p=b[0],O=b[1],m=Object(c.useState)(!1),_=Object(o.a)(m,2),g=_[0],x=_[1],C=Object(c.useContext)(v),w=Object(o.a)(C,2),S=(w[0],w[1]),k=Object(c.useRef)(null),y=Object(c.useRef)(null),I=Object(c.useRef)(null),D=function(){var t=Object(M.a)(E.a.mark((function t(n){var c,s,o,u,j;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r){t.next=4;break}return e.setErr("Username cannot be empty."),t.abrupt("return");case 4:if(l){t.next=7;break}return e.setErr("Password cannot be empty."),t.abrupt("return");case 7:if(!(l.length<8)){t.next=10;break}return e.setErr("Password needs to be at least 8 characters long."),t.abrupt("return");case 10:if(t.prev=10,!g){t.next=22;break}if(l===p){t.next=15;break}return e.setErr("Password confirmation is not equal to password."),t.abrupt("return");case 15:return t.next=17,i({username:r,password:l},f.postSub);case 17:u=t.sent,e.setErr(u.res),x(!1),t.next=28;break;case 22:return t.next=24,i({username:r,password:l},f.postLogin);case 24:j=t.sent,e.setId(j.id),localStorage.setItem("token",j.token),S(j.token);case 28:t.next=33;break;case 30:t.prev=30,t.t0=t.catch(10),e.setErr(t.t0.err);case 33:d(""),a(""),O(""),null===(c=k.current)||void 0===c||c.blur(),null===(s=y.current)||void 0===s||s.blur(),null===(o=I.current)||void 0===o||o.blur();case 39:case"end":return t.stop()}}),t,null,[[10,30]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:X.a.container,children:[Object(h.jsx)("h2",{className:X.a.h2,children:g?"Create Account":"Log In"}),Object(h.jsxs)("form",{className:X.a.form,onSubmit:function(e){return D(e)},children:[Object(h.jsxs)("div",{className:X.a.field,children:[Object(h.jsx)("label",{className:X.a.label,htmlFor:"username",ref:k,children:"Username"}),Object(h.jsx)("input",{autoComplete:"off",className:X.a.input,type:"text",name:"username",id:"username",value:r,onChange:function(e){return a(e.target.value)},onFocus:function(){var e;return null===(e=k.current)||void 0===e?void 0:e.classList.add(X.a.hover)},onBlur:function(){var e;return r?"":null===(e=k.current)||void 0===e?void 0:e.classList.remove(X.a.hover)}})]}),Object(h.jsxs)("div",{className:X.a.field,children:[Object(h.jsx)("label",{className:X.a.label,htmlFor:"password",ref:y,children:"Password"}),Object(h.jsx)("input",{autoComplete:"off",className:X.a.input,type:"password",name:"password",id:"password",value:l,onChange:function(e){return d(e.target.value)},onFocus:function(){var e;return null===(e=y.current)||void 0===e?void 0:e.classList.add(X.a.hover)},onBlur:function(){var e;return l?"":null===(e=y.current)||void 0===e?void 0:e.classList.remove(X.a.hover)}})]}),g?Object(h.jsxs)("div",{className:X.a.field,children:[Object(h.jsx)("label",{className:X.a.label,htmlFor:"passConf",ref:I,children:"Confirm Password"}),Object(h.jsx)("input",{autoComplete:"off",className:X.a.input,type:"password",name:"passConf",id:"passConf",value:p,onChange:function(e){return O(e.target.value)},onFocus:function(){var e;return null===(e=I.current)||void 0===e?void 0:e.classList.add(X.a.hover)},onBlur:function(){var e;return p?"":null===(e=I.current)||void 0===e?void 0:e.classList.remove(X.a.hover)}})]}):"",Object(h.jsx)("input",{className:X.a.button,type:"submit",value:g?"Create account":"Log In"})]}),Object(h.jsx)("button",{className:X.a.create,onClick:function(){return x(!g)},children:g?"Log in":"Create Account"})]})}var $=function(){var e=Object(c.useContext)(I),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useContext)(v),s=Object(o.a)(a,2),i=s[0],l=s[1],d=Object(c.useState)(""),j=Object(o.a)(d,2),b=j[0],p=j[1];return Object(c.useEffect)((function(){if(!i){var e=localStorage.getItem("token");e&&u(f.cookieValidate,e).then((function(t){p(t.id),l(e)}))}}),[i]),Object(h.jsxs)("div",{className:"App",children:[n?Object(h.jsx)(H,{}):"",i?Object(h.jsx)(K,{id:b}):Object(h.jsx)(Z,{setId:p,err:n,setErr:r})]})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(D,{children:Object(h.jsx)(m,{children:Object(h.jsx)($,{})})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={chatBar:"ChatBox_chatBar__2ADuJ",sent:"ChatBox_sent__-lKmg",received:"ChatBox_received__24wL9",time:"ChatBox_time__UDysP",timeShow:"ChatBox_timeShow__1YP1J"}}},[[86,1,2]]]);
//# sourceMappingURL=main.02a5ed1f.chunk.js.map
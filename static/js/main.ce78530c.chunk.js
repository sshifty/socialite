(this["webpackJsonpsocial-site"]=this["webpackJsonpsocial-site"]||[]).push([[0],{42:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),r=n(43),s=n.n(r),i=n(0),o=n.n(i),u=n(1),l=n(16),j=n(11),b=n(23),d=n(13),p=(n(50),n(15)),O=n(44),f=n(25),m=n(27),h=(Object(O.a)({apiKey:"AIzaSyCqwurAoUtTmnIn_PhuZrZ5Z_1Ih647Nc0",authDomain:"socialite-adbf5.firebaseapp.com",projectId:"socialite-adbf5",storageBucket:"socialite-adbf5.appspot.com",messagingSenderId:"17842913995",appId:"1:17842913995:web:70a4c7963d399447b7d14e"}),Object(p.b)()),x=Object(f.d)(),v=Object(m.b)(),g=function(e,t){return Object(p.d)(h,e,t)},N=function(){var e=Object(u.a)(o.a.mark((function e(t,n,a,c){var r,s,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)(h,a,c);case 2:return r=e.sent,s=r.user,i=Object(f.c)(x,"users/".concat(s.uid)),u={name:t,username:n,posts:[{}],desc:{text:""},email:s.email},e.next=8,Object(f.g)(i,u);case 8:return e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(o.a.mark((function e(t,n,a){var c,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Date.now(),r=(new Date).toLocaleDateString(),s=Object(f.c)(x,"users/".concat(t)),e.next=5,Object(f.h)(s,{posts:Object(f.a)({post:n,date:r,dt:c})});case 5:a();case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(o.a.mark((function e(t,n,a){var c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Date.now(),c=(new Date).toLocaleDateString(),r=Object(f.c)(x,"users/".concat(t)),e.next=5,Object(f.h)(r,{desc:{text:n,date:c}});case 5:a();case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),C=function(){var e,t=Object(a.useState)(null),n=Object(j.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){return function(){var t=Object(f.f)(Object(f.b)(x,"users"));e=Object(f.e)(t,(function(e){var t=[];e.forEach((function(e){t.push([{id:e.id,data:e.data()}])})),r(t)}))}(),function(){e()}}),[]),[c,r]},S=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(m.c)(v,"files/".concat(t)),e.next=3,Object(m.a)(n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=n.p+"static/media/dummy.8973ad91.png",I=n(5),U=function(e){var t=Object(a.useState)(!0),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(d.g)(),i=Object(a.useRef)(),b=Object(a.useRef)(),O=Object(a.useRef)(),f=Object(a.useRef)(),m=Object(a.useRef)(""),h=Object(a.useRef)(),x=Object(a.useRef)(""),v=Object(a.useRef)(),g=Object(a.useRef)(),y=Object(a.useRef)(),w=Object(a.useRef)(""),C=Object(p.b)(),S=e.setSignInfo,U=e.signInfo,E=e.handleName,P=e.handleEmail,k=e.handlePassword,R=e.handleUser,D=e.handleConfirm;Object(a.useEffect)((function(){Object(p.c)(C,(function(e){e?s("/"):r(!1)}))}),[]);var T=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),t.preventDefault(),e.prev=2,e.next=5,N(U.name,U.user,U.email,U.password);case 5:S((function(e){return Object(l.a)(Object(l.a)({},e),{},{avatar:L})})),s("/"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),alert("errorxd",e.t0),r(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),A=function(e){m.current.validity.valueMissing?h.current.textContent="Cannot be empty":m.current.validity.tooShort?(e.target.setCustomValidity("email must be valid"),h.current.textContent="Email must be valid"):m.current.validity.tooLong?h.current.textContent="To long":m.current.validity.typeMismatch?h.current.textContent="Enter an email":(e.target.setCustomValidity(""),h.current.textContent=""),i.current.validity.valueMissing?b.current.textContent="Cannot be empty":i.current.validity.tooShort?b.current.textContent="To short":i.current.validity.tooLong?b.current.textContent="To long":i.current.validity.typeMismatch?b.current.textContent="Enter an name":b.current.textContent="",O.current.validity.valueMissing?f.current.textContent="Cannot be empty":O.current.validity.tooShort?f.current.textContent="To short":O.current.validity.tooLong?f.current.textContent="To long":O.current.validity.typeMismatch?f.current.textContent="Enter an user":f.current.textContent="",x.current.validity.valueMissing?v.current.textContent="Cannot be empty":x.current.validity.tooShort?v.current.textContent="To short":x.current.validity.tooLong?v.current.textContent="To long":x.current.validity.typeMismatch?v.current.textContent="Enter an password":v.current.textContent="",g.current.validity.valueMissing?y.current.textContent="Cannot be empty":g.current.validity.tooShort?y.current.textContent="Too short":g.current.validity.tooLong?y.current.textContent="Too long":g.current.validity.typeMismatch?y.current.textContent="Enter an confirm":g.current.value!==x.current.value?(e.target.setCustomValidity("Password must match"),y.current.textContent="Password must match"):y.current.textContent=""};return Object(a.useEffect)((function(){if(!c){var e=w.current;return w.current.addEventListener("input",(function(e){A(e)})),function(){e.removeEventListener("input",(function(e){A(e)}))}}})),c?Object(I.jsx)("h1",{children:"Loading..."}):Object(I.jsx)("div",{className:"form-page",children:Object(I.jsxs)("form",{ref:w,onSubmit:T,className:"form-container",children:[Object(I.jsx)("h1",{className:"app-name",children:"Socialite"}),Object(I.jsxs)("div",{className:"input-wrapper",children:[Object(I.jsx)("label",{htmlFor:"signUp-fullName",children:"Full Name"}),Object(I.jsx)("input",{ref:i,onChange:E,type:"text",minLength:2,maxLength:30,name:"name",id:"signUp-fullName",required:!0}),Object(I.jsx)("span",{ref:b,className:"error span-error"})]}),Object(I.jsxs)("div",{className:"input-wrapper",children:[Object(I.jsx)("label",{htmlFor:"signUp-userName",children:"User Name"}),Object(I.jsx)("input",{ref:O,onChange:R,minLength:2,maxLength:20,type:"text",name:"user",id:"signUp-userName",required:!0}),Object(I.jsx)("span",{ref:f,className:"error span-username"})]}),Object(I.jsxs)("div",{className:"input-wrapper",children:[Object(I.jsx)("label",{htmlFor:"signUp-email",children:"Email"}),Object(I.jsx)("input",{ref:m,onChange:P,minLength:7,maxLength:30,type:"email",name:"email",id:"signUp-email",required:!0}),Object(I.jsx)("span",{ref:h,className:"error span-email"})]}),Object(I.jsxs)("div",{className:"input-wrapper",children:[Object(I.jsx)("label",{htmlFor:"signUp-password",children:"Password"}),Object(I.jsx)("input",{ref:x,onChange:k,minLength:6,maxLength:20,type:"password",name:"password",id:"signUp-password",required:!0}),Object(I.jsx)("span",{ref:v,className:"error span-password"})]}),Object(I.jsxs)("div",{className:"input-wrapper",children:[Object(I.jsx)("label",{htmlFor:"signUp-confirm",children:"Confirm Password"}),Object(I.jsx)("input",{ref:g,onChange:D,minLength:6,maxLength:20,type:"password",name:"confirm",id:"signUp-confirm",required:!0}),Object(I.jsx)("span",{ref:y,className:"error span-confirm"})]}),Object(I.jsxs)("div",{className:"button-flex-container",children:[Object(I.jsx)("button",{className:"btn btn-signup",disabled:c,type:"submit",children:"Sign Up"}),Object(I.jsx)("button",{className:"btn btn-submit",onClick:function(){return s("../login")},disabled:c,type:"submit",children:"Back To Login"})]})]})})},E=function(e){var t=e.handleEmail,n=e.handlePassword,c=e.signInfo,r=Object(a.useRef)(),s=Object(a.useRef)(),i=Object(a.useRef)(),l=Object(a.useRef)(),O=Object(a.useRef)(),f=Object(d.g)(),m=Object(p.b)(),h=Object(a.useState)(!0),x=Object(j.a)(h,2),v=x[0],N=x[1];Object(a.useEffect)((function(){var e=Object(p.c)(m,(function(e){e?f("/"):N(!1)}));return function(){return e}}),[]);var y=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,g(c.email,c.password);case 4:f("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert("Could not login");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,g("test@test.com","password");case 4:f("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert("Could not login");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),C=function(e){r.current.validity.valueMissing?s.current.textContent="Cannot be empty":r.current.validity.tooShort?(e.target.setCustomValidity("email must be valid"),s.current.textContent="Email must be valid"):r.current.validity.tooLong?s.current.textContent="To long":r.current.validity.typeMismatch?s.current.textContent="Enter an email":(e.target.setCustomValidity(""),s.current.textContent="")};return Object(a.useEffect)((function(){if(!v){var e=O.current;return O.current.addEventListener("input",(function(e){C(e)})),function(){e.removeEventListener("input",(function(e){C(e)}))}}})),v?Object(I.jsx)("h1",{children:"Loading..."}):Object(I.jsx)("div",{className:"form-page",children:Object(I.jsxs)("form",{onSubmit:y,ref:O,className:"form-container login",children:[Object(I.jsx)("h1",{className:"app-name",children:"Socialite"}),Object(I.jsxs)("div",{className:"input-wrapper",children:[Object(I.jsx)("label",{htmlFor:"login-email",children:"Email"}),Object(I.jsx)("input",{onChange:t,ref:r,minLength:7,maxLength:30,type:"email",name:"email",id:"login-email",placeholder:"Type your email",required:!0}),Object(I.jsx)("span",{ref:s,className:"error span-email"})]}),Object(I.jsxs)("div",{className:"input-wrapper",children:[Object(I.jsx)("label",{htmlFor:"login-password",children:"Password"}),Object(I.jsx)("input",{onChange:n,ref:i,minLength:6,maxLength:20,type:"password",name:"password",id:"login-password",placeholder:"Type your password",required:!0}),Object(I.jsx)("span",{ref:l,className:"error span-password"})]}),Object(I.jsxs)("div",{className:"button-flex-container",children:[Object(I.jsx)("div",{className:"btn-div",children:Object(I.jsx)("button",{onClick:w,className:"btn btn-submit",children:"Login with Example User"})}),Object(I.jsx)("div",{className:"btn-div",children:Object(I.jsx)("button",{type:"submit",className:"btn btn-submit",children:"Login"})}),Object(I.jsx)("div",{className:"btn-div",children:Object(I.jsx)(b.b,{to:"../signup",children:Object(I.jsx)("button",{className:"btn btn-signup",children:"Sign up"})})})]})]})})},P=(n(52),n(30)),k=n(31),R=function(e){e.setAvatar;var t,n,a=e.signInfo,c=e.userInfo;c?(t=c[0].data.name,n=c[0].id):(t="",n="");var r=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.e)(h);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("ERROR LOGGING OUT");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)("nav",{className:"navbar",children:Object(I.jsxs)("div",{className:"nav-container",children:[Object(I.jsx)(b.b,{className:"app-logo",to:"",children:Object(I.jsx)("h1",{children:"Socialite"})}),Object(I.jsxs)("div",{className:"nav-right",children:[Object(I.jsx)("div",{className:"avatar-container container",children:Object(I.jsx)("img",{src:a.avatar?a.avatar:L,alt:""})}),Object(I.jsx)(b.b,{className:"username",to:n,children:Object(I.jsx)("div",{children:t})}),Object(I.jsx)("div",{className:"settings-container container",children:Object(I.jsx)("button",{onClick:r,className:"btn-settings ",children:Object(I.jsx)(P.a,{icon:k.a})})})]})]})})},D=(n(42),function(e){var t,n=e.setAvatar,c=e.signInfo,r=Object(p.b)(),s=Object(a.useState)(!0),i=Object(j.a)(s,2),l=i[0],b=i[1],O=Object(a.useState)(),f=Object(j.a)(O,2),m=f[0],h=f[1],x=Object(d.g)(),v=C(),g=Object(j.a)(v,2),N=g[0];g[1];return Object(a.useEffect)((function(){Object(p.c)(r,function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t?(n(t.uid),h(t),b(!1)):x("/login");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),N&&m&&N.map((function(e){e[0].id===m.uid&&(t=e)})),l?Object(I.jsx)("h1",{children:"Loading..."}):Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(R,{setAvatar:n,signInfo:c,userInfo:t,currentUser:m}),Object(I.jsx)("div",{className:"center",children:Object(I.jsx)(d.a,{})})]})}),T=function(e){var t=e.clearPost,n=e.handlePost,a=e.createPost,c=e.currentUser,r=e.postInfo;return Object(I.jsxs)("div",{className:"post-textarea",children:[Object(I.jsx)("textarea",{value:r.post,className:"textarea-style",onChange:n,name:"",id:"",placeholder:"Make A post"}),Object(I.jsx)("div",{className:"btn-post-container",children:Object(I.jsx)("button",{onClick:a.bind(undefined,c.uid,r.post,t),className:"btn btn-post",children:"Post"})})]})},A=function(e){var t=Object(d.g)(),n=Object(a.useState)(),c=Object(j.a)(n,2),r=c[0],s=c[1],i=e.name,o=e.id,u=e.post,l=e.date,b=e.currentUser;if(o&&S(o).then((function(e){s(e)})),b){var p=b.uid===o?Object(I.jsx)("button",{className:"btn-del",children:Object(I.jsx)(P.a,{icon:k.b})}):null;return u?Object(I.jsxs)("div",{className:"post-card",children:[Object(I.jsxs)("div",{className:"post-header",children:[Object(I.jsxs)("div",{className:"user-avatar",children:[Object(I.jsx)("div",{className:"post-avatar-container",children:Object(I.jsx)("img",{src:r||L,alt:"avatar pics",className:"post-avatar"})}),Object(I.jsx)("p",{className:"post-name",onClick:function(){return t("../../".concat(o))},children:i}),Object(I.jsxs)("p",{className:"date",children:["posted ",l]})]}),Object(I.jsx)("div",{className:"delete-btn-container",children:p})]}),Object(I.jsx)("div",{className:"post-content",children:u})]}):null}return Object(I.jsx)("h1",{children:"Loading..."})},M=function(e){var t=e.queryResults,n=Object(p.b)(),c=Object(a.useState)(),r=Object(j.a)(c,2),s=r[0],i=r[1];Object(a.useEffect)((function(){Object(p.c)(n,function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&i(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var l,b=[];return t?(JSON.parse(JSON.stringify(t)).map((function(e){e[0]?e[0].data.posts.map((function(t){b.push({name:e[0].data.name,id:e[0].id,date:t.date,dt:t.dt,post:t.post})})):e.data.posts.map((function(t){b.push({name:e.data.name,id:e.id,date:t.date,dt:t.dt,post:t.post})}))})),l=b.sort((function(e,t){return e.dt>=t.dt?-1:1})),Object(I.jsx)("div",{className:"posts-container",children:l.map((function(e){return Object(I.jsx)(A,{name:e.name,id:e.id,post:e.post,date:e.date,currentUser:s})}))})):Object(I.jsx)("h1",{children:"Something happened"})},F=n(37),q=n.n(F),B=function(e){var t=Object(d.g)(),n=e.displayUser,a=e.currentUser,c=Object(I.jsx)(q.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3});if(a&&n){var r=a.auth.currentUser.metadata.createdAt,s=n[0].id===a.uid?Object(I.jsx)("div",{className:"btn-edit-container",children:Object(I.jsx)("button",{onClick:function(){t("../settings")},className:"btn-edit",children:Object(I.jsx)(P.a,{icon:k.c})})}):null,i=new Date(1*r).toLocaleDateString();return Object(I.jsxs)("div",{className:"info",children:[Object(I.jsxs)("div",{className:"info-header",children:[Object(I.jsx)("h3",{children:"About Me"}),s]}),Object(I.jsx)("div",{className:"info-description",children:n[0].data.desc.text}),Object(I.jsx)("div",{className:"line-break"}),Object(I.jsxs)("p",{className:"created-p",children:["Created on: ",i]})]})}return c},J=function(e){var t,n,c=Object(d.h)().id,r=Object(p.b)(),s=C(),i=Object(j.a)(s,2),l=i[0],b=(i[1],Object(a.useState)()),O=Object(j.a)(b,2),f=O[0],m=O[1],h=Object(a.useState)(),x=Object(j.a)(h,2),v=x[0],g=x[1],N=(function(){var e,t=Object(p.b)(),n=Object(a.useState)(),c=Object(j.a)(n,2),r=c[0],s=c[1],i=C(),l=Object(j.a)(i,2),b=l[0];l[1],Object(a.useEffect)((function(){Object(p.c)(t,function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&s(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),b&&r&&b.map((function(t){t[0].id===r.uid&&(e=t)}))}(),e.fillAvatar),w=e.clearPost,U=e.handlePost,E=e.postInfo;return Object(a.useEffect)((function(){Object(p.c)(r,function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&m(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),l&&f&&(S(c).then((function(e){g(e)})),l.map((function(e){e[0].id===f.uid&&(t=e),e[0].id===c&&(n=e)}))),t&&n?Object(I.jsxs)("div",{className:"about-page",children:[Object(I.jsxs)("div",{className:"about-header",children:[Object(I.jsx)("div",{className:"about-img-container",children:Object(I.jsx)("img",{src:v||L,alt:"",className:"avatar"})}),Object(I.jsx)("h1",{className:"about-name",children:n[0].data.name})]}),Object(I.jsxs)("div",{className:"about-main",children:[Object(I.jsx)("div",{className:"about-info",children:Object(I.jsx)(B,{displayUser:n,currentUser:f,fillAvatar:N})}),Object(I.jsxs)("div",{className:"about-posts",children:[f.uid===c?Object(I.jsx)(T,{clearPost:w,handlePost:U,createPost:y,postInfo:E,currentUser:f}):null,Object(I.jsx)(M,{queryResults:n})]})]})]}):Object(I.jsx)("h1",{children:"Loading..."})},V=function(e){var t=e.signInfo,n=e.clearPost,c=e.handlePost,r=e.postInfo,s=Object(p.b)(),i=Object(a.useState)(),l=Object(j.a)(i,2),b=l[0],d=l[1],O=Object(a.useState)(!0),f=Object(j.a)(O,2),m=f[0],h=f[1],x=C(),v=Object(j.a)(x,2),g=v[0];v[1];return Object(a.useEffect)((function(){Object(p.c)(s,function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(d(t),h(!1));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),g&&b&&g.map((function(e){e[0].id===b.uid&&e})),m?Object(I.jsx)("h1",{children:"Loading..."}):Object(I.jsxs)("div",{className:"social-page",children:[Object(I.jsx)(T,{handlePost:c,createPost:y,currentUser:b,postInfo:r,clearPost:n}),Object(I.jsx)(M,{signInfo:t,queryResults:g})]})},G=function(e){var t=e.clearDesc,n=e.handleDesc,a=e.createDesc,c=e.currentUser,r=e.signInfo;return c?Object(I.jsxs)("div",{className:"post-textarea",children:[Object(I.jsx)("textarea",{id:"about-textarea",value:r.desc,onChange:n,placeholder:"Share something about yourself!:)"}),Object(I.jsx)("div",{className:"btn-post-container",children:Object(I.jsx)("button",{className:"btn",onClick:a.bind(undefined,c.uid,r.desc,t),children:"Post"})})]}):Object(I.jsx)("h1",{children:"Loading..."})},Z=function(e){var t=e.fillAvatar,n=e.signInfo,c=e.handleDesc,r=e.clearDesc,s=Object(a.useState)(),i=Object(j.a)(s,2),l=i[0],b=i[1],O=Object(a.useState)(),f=Object(j.a)(O,2),m=f[0],h=f[1],x=Object(p.b)(),v=Object(d.g)();return Object(a.useEffect)((function(){Object(p.c)(x,function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t?(b(t),h(!1)):v("/login");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),!m&&l?Object(I.jsxs)("div",{className:"settings",children:[Object(I.jsx)("h1",{className:"settings-name",children:"Settings"}),Object(I.jsx)("h3",{children:"Profile Picture"}),Object(I.jsxs)("div",{className:"settings-picture",children:[Object(I.jsx)("div",{className:"settings-picture-container",children:Object(I.jsx)("img",{src:n.avatar,alt:""})}),Object(I.jsx)("input",{onChange:t.bind(undefined,l.uid),type:"file"})]}),Object(I.jsxs)("div",{className:"settings-about",children:[Object(I.jsx)("h4",{children:"About me"}),Object(I.jsx)(G,{clearDesc:r,handleDesc:c,createDesc:w,currentUser:l,signInfo:n})]})]}):Object(I.jsx)("div",{children:Object(I.jsx)(q.a,{className:"settings-loading",type:"TailSpin",color:"#00BFFF",height:50,width:50,timeout:3e3})})},_=function(e){var t=Object(a.useState)({}),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)({}),i=Object(j.a)(s,2),p=i[0],O=i[1],f=Object(a.useState)(),h=Object(j.a)(f,2),x=h[0],g=(h[1],function(e,t){r((function(n){var a=t.target.files[0];return console.log("type",t.target.files[0]),function(e,t){if(e){console.log(e);var n={contentType:e.type},a=Object(m.c)(v,"files/".concat(t));Object(m.e)(a,e),Object(m.d)(a,e,n).then((function(e){console.log("Uploaded a blob or file!",e)}))}}(a,e),Object(l.a)(Object(l.a)({},n),{},{avatar:URL.createObjectURL(a)})}))}),N=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:n=e.sent,console.log(JSON.stringify(n)),r(n?function(e){return Object(l.a)(Object(l.a)({},e),{},{avatar:n})}:function(e){return Object(l.a)(Object(l.a)({},e),{},{avatar:L})});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){O((function(e){return Object(l.a)(Object(l.a)({},e),{},{post:""})}))},w=function(e){O((function(t){return Object(l.a)(Object(l.a)({},t),{},{post:e.target.value})}))},C=function(e){r((function(t){return Object(l.a)(Object(l.a)({},t),{},{email:e.target.value})}))},P=function(e){r((function(t){return Object(l.a)(Object(l.a)({},t),{},{password:e.target.value})}))};return Object(I.jsx)(b.a,{basename:"/",children:Object(I.jsxs)(d.d,{children:[Object(I.jsxs)(d.b,{path:"/",element:Object(I.jsx)(D,{signInfo:c,postInfo:p,handlePost:w,setAvatar:N}),children:[Object(I.jsx)(d.b,{path:"",element:Object(I.jsx)(V,{clearPost:y,postInfo:p,signInfo:c,handlePost:w})}),Object(I.jsx)(d.b,{path:":id",element:Object(I.jsx)(J,{fillAvatar:g,clearPost:y,handlePost:w,postInfo:p})}),Object(I.jsx)(d.b,{path:"settings",element:Object(I.jsx)(Z,{signInfo:c,handleDesc:function(e){r((function(t){return Object(l.a)(Object(l.a)({},t),{},{desc:e.target.value})}))},clearDesc:function(e){r((function(e){return Object(l.a)(Object(l.a)({},e),{},{desc:""})}))},currentUser:x,fillAvatar:g})})]}),Object(I.jsx)(d.b,{path:"signup",element:Object(I.jsx)(U,{signInfo:c,handleName:function(e){r((function(t){return Object(l.a)(Object(l.a)({},t),{},{name:e.target.value})}))},handleEmail:C,handlePassword:P,handleConfirm:function(e){r((function(t){return Object(l.a)(Object(l.a)({},t),{},{confirm:e.target.value})}))},handleUser:function(e){r((function(t){return Object(l.a)(Object(l.a)({},t),{},{user:e.target.value})}))},setSignInfo:r})}),Object(I.jsx)(d.b,{path:"login",element:Object(I.jsx)(E,{signInfo:c,handleEmail:C,handlePassword:P})})]})})};s.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(_,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.ce78530c.chunk.js.map
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"1B9r":function(e,t,r){e.exports={container:"social-button_container__1Bwsz"}},DS9z:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("xvJW");function o(){n.a.signInWithPopup(new n.c.auth.GoogleAuthProvider).then((function(e){n.b.collection("Users").doc(e.user.uid).get().then((function(t){t.exists||(console.log("Document data:",t.data()),n.b.collection("Users").doc(e.user.uid).set({email:e.additionalUserInfo.profile.email,name:e.additionalUserInfo.profile.given_name,surname:e.additionalUserInfo.profile.family_name,addresses:[],cart:{},favorites:[],orders:[],phoneNumber:"",photoUrl:null}))}))})).catch((function(e){console.log(e)}))}},QfRx:function(e,t,r){e.exports={container:"login_container__2WOIf",logo:"login_logo__1PDG-",content:"login_content__kqLbP",switchContainer:"login_switchContainer__2k_De",switchButton:"login_switchButton__2V-Ps"}},SkIn:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var n=r("nKUr"),o=r("q1tI"),i=r("NKCw"),s=r("bgvd"),c=r("UGp+"),a=r("Wc11"),l=r("co3k"),u=r("r0EL"),d=r("xvJW");var f=r("DS9z"),p=c.a().shape({name:c.c().required("* Name is required.").min(2,"* Name is too short"),surname:c.c().required("* Surname is required.").min(2,"* Surname is too short"),email:c.c().email().required("* Email is required."),password:c.c().required("* Password is required.").min(8,"* Password is too short - should be 8 chars minimum.")});function h(){var e=Object(o.useState)(),t=e[0],r=e[1],c=Object(i.useForm)({resolver:Object(s.yupResolver)(p)}),h=c.register,j=c.handleSubmit,m=(c.watch,c.errors);return Object(n.jsxs)("form",{onSubmit:j((function(e){var t=e.email,n=e.password,o=e.name,i=e.surname;return function(e){var t=e.email,r=e.password;return d.a.createUserWithEmailAndPassword(t,r)}({email:t,password:n}).then((function(e){(function(e){var t=e.id,r=e.email,n=e.name,o=e.surname;return d.b.collection("Users").doc(t).set({name:n,surname:o,email:r,addresses:[],cart:{},favorites:[],orders:[],phoneNumber:"",photoUrl:null})})({id:e.user.uid,email:t,name:o,surname:i}).then((function(){return r("You have registered succesfully. You can login now")})).catch((function(e){return r(e.message)}))})).catch((function(e){return r(e.message)}))})),style:{display:"flex",flexDirection:"column",paddingTop:30},children:[Object(n.jsx)("hr",{style:{width:"100%",height:1,color:"#f6f6f655"}}),Object(n.jsx)("span",{style:{textAlign:"center",marginTop:-35,padding:15,backgroundColor:"white",display:"flex",alignSelf:"center",width:"max-content",fontWeight:"500"},children:"Register with social media"}),Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)(u.a,{style:{marginRight:20},icon:"google",onClick:f.a,children:"Google"}),Object(n.jsx)(u.a,{icon:"apple",children:"Apple"})]}),Object(n.jsx)("hr",{style:{width:"100%",height:1,color:"#f6f6f655",marginTop:50}}),Object(n.jsx)("span",{style:{textAlign:"center",marginTop:-35,padding:15,backgroundColor:"white",display:"flex",alignSelf:"center",width:"max-content",fontWeight:"500"},children:"Register with E-mail"}),Object(n.jsx)(a.a,{name:"name",register:h,placeholder:"Name",error:m.name}),m.name&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:m.name.message}),Object(n.jsx)(a.a,{name:"surname",register:h,placeholder:"Surname",error:m.surname}),m.surname&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:m.surname.message}),Object(n.jsx)(a.a,{name:"email",register:h,placeholder:"E-mail",error:m.email}),m.email&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:m.email.message}),Object(n.jsx)(a.a,{name:"password",register:h,placeholder:"Password",type:"password",error:m.password}),m.password&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:m.password.message}),m.exampleRequired&&Object(n.jsx)("span",{children:"This field is required"}),t&&Object(n.jsx)("span",{style:{color:"red",marginTop:20,fontSize:14,marginBottom:-10},children:t}),Object(n.jsx)(l.a,{type:"submit",children:"Register"}),Object(n.jsx)("div",{style:{fontSize:12,display:"flex"},children:"By clicking Register, you agree to use out Terms and that you have read our Data Use Policy, including our Cookie Use"})]})}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),o=r("284h");t.__esModule=!0,t.default=void 0;var i,s=o(r("q1tI")),c=r("elyg"),a=r("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var r=i||(u?i=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),l.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,r,n){(0,c.isLocalURL)(t)&&(e.prefetch(t,r,n).catch((function(e){0})),d[t+"%"+r]=!0)}var h=function(e){var t=!1!==e.prefetch,r=s.default.useState(),o=n(r,2),i=o[0],l=o[1],h=(0,a.useRouter)(),j=h&&h.pathname||"/",m=s.default.useMemo((function(){var t=(0,c.resolveHref)(j,e.href);return{href:t,as:e.as?(0,c.resolveHref)(j,e.as):t}}),[j,e.href,e.as]),b=m.href,g=m.as;s.default.useEffect((function(){if(t&&u&&i&&i.tagName&&(0,c.isLocalURL)(b)&&!d[b+"%"+g])return f(i,(function(){p(h,b,g)}))}),[t,i,b,g,h]);var O=e.children,w=e.replace,y=e.shallow,x=e.scroll;"string"===typeof O&&(O=s.default.createElement("a",null,O));var v=s.Children.only(O),P={ref:function(e){e&&l(e),v&&"object"===typeof v&&v.ref&&("function"===typeof v.ref?v.ref(e):"object"===typeof v.ref&&(v.ref.current=e))},onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==s&&(s=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:i}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,b,g,w,y,x)}};return t&&(P.onMouseEnter=function(e){(0,c.isLocalURL)(b)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),p(h,b,g,{priority:!0}))}),(e.passHref||"a"===v.type&&!("href"in v.props))&&(P.href=(0,c.addBasePath)(g)),s.default.cloneElement(v,P)};t.default=h},pL4V:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var n=r("nKUr"),o=r("q1tI"),i=r("NKCw"),s=r("bgvd"),c=r("UGp+"),a=r("Wc11"),l=r("co3k"),u=r("YFqc"),d=r.n(u),f=r("r0EL"),p=r("xvJW");var h=r("DS9z"),j=c.a().shape({email:c.c().email().required("* Email is required."),password:c.c().required("* Password is required.").min(8,"* Password is too short - should be 8 chars minimum.")});function m(){var e=Object(o.useState)(),t=e[0],r=e[1],c=Object(i.useForm)({resolver:Object(s.yupResolver)(j)}),u=c.register,m=c.handleSubmit,b=(c.watch,c.errors);return Object(n.jsxs)("form",{onSubmit:m((function(e){(function(e){var t=e.email,r=e.password;return p.a.signInWithEmailAndPassword(t,r)})({email:e.email,password:e.password}).catch((function(e){return r(e.message)}))})),style:{display:"flex",flexDirection:"column"},children:[Object(n.jsx)(a.a,{name:"email",register:u,placeholder:"E-mail",error:b.email}),b.email&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:b.email.message}),Object(n.jsx)(a.a,{name:"password",register:u,placeholder:"Password",type:"password",error:b.password}),b.password&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:b.password.message}),Object(n.jsx)(l.a,{type:"submit",children:"Login"}),t&&Object(n.jsx)("span",{style:{color:"red",marginTop:-10,fontSize:14,marginBottom:10},children:t}),Object(n.jsx)("span",{style:{fontWeight:"bold",marginBottom:60},children:Object(n.jsx)(d.a,{href:"/forgot-password",children:"Forgot Password?"})}),Object(n.jsx)("hr",{style:{width:"100%",height:1,color:"#f6f6f655"}}),Object(n.jsx)("span",{style:{textAlign:"center",marginTop:-35,padding:15,backgroundColor:"white",display:"flex",alignSelf:"center",width:"max-content",fontWeight:"500"},children:"Login with social media"}),Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)(f.a,{style:{marginRight:20},icon:"google",onClick:h.a,children:"Google"}),Object(n.jsx)(f.a,{icon:"apple",children:"Apple"})]})]})}},pqMH:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r("yfTL")}])},r0EL:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r("rePB"),o=r("Ff2n"),i=r("nKUr"),s=(r("q1tI"),r("1B9r")),c=r.n(s);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){return Object(i.jsx)("svg",l(l({width:24,height:25,viewBox:"0 0 24 25"},e),{},{children:Object(i.jsxs)("g",{fill:"none",children:[Object(i.jsx)("path",{fill:"#4285F4",d:"M23.989 12.511c0-1.006-.082-1.74-.259-2.502H12.24v4.542h6.744c-.136 1.129-.87 2.828-2.502 3.97l-.023.153 3.633 2.814.252.026c2.312-2.136 3.645-5.277 3.645-9.003"}),Object(i.jsx)("path",{fill:"#34A853",d:"M12.24 24.478c3.304 0 6.078-1.088 8.104-2.964l-3.862-2.992c-1.034.72-2.42 1.224-4.243 1.224-3.236 0-5.983-2.135-6.963-5.086l-.143.012-3.778 2.924-.05.137c2.013 3.998 6.147 6.745 10.934 6.745"}),Object(i.jsx)("path",{fill:"#FBBC05",d:"M5.276 14.66a7.549 7.549 0 01-.408-2.42c0-.844.15-1.66.395-2.422l-.007-.162-3.825-2.97-.126.059C.476 8.405 0 10.267 0 12.239s.476 3.835 1.305 5.494l3.971-3.073"}),Object(i.jsx)("path",{fill:"#EB4335",d:"M12.24 4.732c2.297 0 3.847.993 4.731 1.823l3.455-3.373C18.304 1.21 15.544 0 12.239 0 7.452 0 3.32 2.747 1.305 6.745l3.958 3.073c.993-2.95 3.74-5.086 6.976-5.086"})]})}))};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){return Object(i.jsx)("svg",f(f({width:23,height:28,viewBox:"0 0 23 28"},e),{},{children:Object(i.jsx)("path",{d:"M19.041 14.876c.04 4.237 3.717 5.647 3.758 5.665-.031.1-.588 2.01-1.938 3.982-1.167 1.706-2.378 3.405-4.286 3.44-1.875.035-2.478-1.111-4.621-1.111-2.143 0-2.813 1.076-4.588 1.146-1.841.07-3.244-1.844-4.42-3.544C.54 20.978-1.296 14.631 1.17 10.347c1.226-2.128 3.416-3.475 5.794-3.51 1.808-.034 3.515 1.217 4.62 1.217 1.106 0 3.18-1.505 5.36-1.284.914.038 3.476.37 5.122 2.778-.133.082-3.058 1.785-3.026 5.328M15.517 4.47c.978-1.184 1.636-2.832 1.457-4.471-1.41.057-3.114.94-4.125 2.122-.906 1.048-1.7 2.724-1.485 4.331 1.57.122 3.176-.798 4.153-1.982"})}))};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){var t=e.icon,r=e.children,n=Object(o.a)(e,["icon","children"]);return Object(i.jsxs)("button",j(j({className:c.a.container},n),{},{children:["google"===t&&Object(i.jsx)(u,{}),"apple"===t&&Object(i.jsx)(p,{}),r]}))}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},yfTL:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var n=r("nKUr"),o=r("q1tI"),i=r("nOHt"),s=r("QfRx"),c=r.n(s),a=r("pL4V"),l=r("SkIn"),u=r("xvJW");function d(){var e=Object(o.useState)("login"),t=e[0],r=e[1],s=Object(i.useRouter)();return u.a.onAuthStateChanged((function(e){e&&(console.log(e),s.push("/"))})),Object(n.jsxs)("div",{className:c.a.container,children:[Object(n.jsx)("a",{className:c.a.logo,children:"Shopping"}),Object(n.jsxs)("div",{className:c.a.content,children:[Object(n.jsxs)("div",{className:c.a.switchContainer,children:[Object(n.jsx)("button",{className:c.a.switchButton,onClick:function(){return r("login")},style:{backgroundColor:"login"===t?"white":"#f6f6f6"},children:Object(n.jsx)("span",{children:"Login"})}),Object(n.jsx)("button",{className:c.a.switchButton,onClick:function(){return r("register")},style:{backgroundColor:"register"===t?"white":"#f6f6f6"},children:Object(n.jsx)("span",{children:"Register"})})]}),"login"===t?Object(n.jsx)(a.default,{}):Object(n.jsx)(l.default,{})]})]})}}},[["pqMH",0,1,3,5,4,2,6,8]]]);
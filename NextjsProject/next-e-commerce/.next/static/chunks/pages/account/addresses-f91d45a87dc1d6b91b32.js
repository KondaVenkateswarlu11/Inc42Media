_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"7+z0":function(e,t,r){e.exports={container:"add_container__3aubm",content:"add_content__3PzfP",header:"add_header__3jyxR",inputContainer:"add_inputContainer__1D-av"}},CuyG:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var n=r("nKUr"),i=(r("q1tI"),r("NKCw")),s=r("bgvd"),c=r("UGp+"),a=r("7+z0"),d=r.n(a),o=r("Wc11"),l=r("co3k"),u=r("F9Sl"),j=c.a().shape({title:c.c().required("* Title is required.").min(2,"* Title is too short"),city:c.c().required("* City is required.").min(2,"* City is too short"),region:c.c().required("* Region is required."),zipcode:c.c().required("* Zip Code is required."),full_address:c.c().required("* Address Line is required.")});function b(e){var t=e.closeEvent,r=Object(i.useForm)({resolver:Object(s.yupResolver)(j)}),c=r.register,a=r.handleSubmit,b=r.errors;return Object(n.jsx)("div",{className:d.a.container,id:"container",onClick:function(e){var r;"container"===(null===(r=e.target)||void 0===r?void 0:r.id)&&t()},children:Object(n.jsxs)("div",{className:d.a.content,children:[Object(n.jsxs)("div",{className:d.a.header,children:[Object(n.jsx)("h4",{children:"Add New Address"}),Object(n.jsx)("div",{onClick:t,children:"\xd7"})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{onSubmit:a((function(e){return Object(u.a)(e)})),style:{display:"flex",flexDirection:"column",paddingTop:30},children:[Object(n.jsxs)("div",{className:d.a.inputContainer,children:[Object(n.jsx)("span",{children:"Address Title"}),Object(n.jsx)(o.a,{name:"title",noMargin:!0,register:c,placeholder:"Home, Office, etc.",error:b.title})]}),b.title&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:b.title.message}),Object(n.jsxs)("div",{className:d.a.inputContainer,children:[Object(n.jsx)("span",{children:"City"}),Object(n.jsx)(o.a,{name:"city",noMargin:!0,register:c,placeholder:"New York, London, etc.",error:b.city})]}),b.city&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:b.city.message}),Object(n.jsxs)("div",{className:d.a.inputContainer,children:[Object(n.jsx)("span",{children:"Region"}),Object(n.jsx)(o.a,{name:"region",noMargin:!0,register:c,placeholder:"France, Italy, etc.",error:b.region})]}),b.region&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:b.region.message}),Object(n.jsxs)("div",{className:d.a.inputContainer,children:[Object(n.jsx)("span",{children:"Zip Code"}),Object(n.jsx)(o.a,{name:"zipcode",noMargin:!0,register:c,placeholder:"",error:b.zipcode})]}),b.zipcode&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:b.zipcode.message}),Object(n.jsxs)("div",{className:d.a.inputContainer,children:[Object(n.jsx)("span",{children:"Address Line"}),Object(n.jsx)(o.a,{name:"full_address",noMargin:!0,register:c,placeholder:"123 Main Street, New York, NY 10030, etc.",error:b.full_address})]}),b.full_address&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:b.full_address.message}),Object(n.jsx)(l.a,{type:"submit",style:{marginBottom:0},children:"Add Address"})]})]})})}},F9Sl:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return c}));var n=r("xvJW"),i=function(e){var t=e.title,r=e.city,i=e.region,s=e.zipcode,c=e.full_address;n.b.collection("Addresses").add({title:t,city:r,region:i,zipcode:s,full_address:c}).then((function(e){n.b.collection("Users").doc(n.a.currentUser.uid).update({addresses:n.c.firestore.FieldValue.arrayUnion(e.id)}).finally((function(){return window.location.reload(!1)}))}))},s=function(e){var t=e.id,r=e.title,i=e.city,s=e.region,c=e.zipcode,a=e.full_address;return n.b.collection("Addresses").doc(t).update({title:r,city:i,region:s,zipcode:c,full_address:a})},c=function(e){var t=e.id;return n.b.collection("Addresses").doc(t).delete().then((function(){n.b.collection("Users").doc(n.a.currentUser.uid).update({addresses:n.c.firestore.FieldValue.arrayRemove(t)}).finally((function(){return window.location.reload(!1)}))}))}},RLKc:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return j}));var n=r("o0o1"),i=r.n(n),s=r("rePB"),c=r("HaE+"),a=r("q1tI"),d=r("xvJW");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(){var e=Object(a.useState)([]),t=e[0],r=e[1],n=Object(a.useState)(!0),s=n[0],o=n[1],u=Object(a.useState)(null),j=u[0];u[1];return Object(a.useEffect)((function(){function e(){return(e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.a.currentUser&&d.b.collection("Users").doc(d.a.currentUser.uid).get().then((function(e){var t=e.data().addresses;t&&d.b.collection("Addresses").get().then((function(e){var n=e.docs.filter((function(e){return t.includes(e.id)})).map((function(e){return l({id:e.id},e.data())}));r(n),o(!1)}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[d.a.currentUser]),{data:t,loading:s,error:j}},j=function(e){var t=Object(a.useState)([]),r=t[0],n=t[1],s=Object(a.useState)(!0),o=s[0],l=s[1],u=Object(a.useState)(null),j=u[0],b=u[1];return Object(a.useEffect)((function(){function t(){return(t=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d.a.currentUser&&d.b.collection("Addresses").doc(e).get().then((function(e){n(e.data()),l(!1)})).catch((function(e){return b(e)}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[d.a.currentUser]),{data:r,loading:o,error:j}}},"at/q":function(e,t,r){e.exports={container:"address_container__2Wz0J",title:"address_title__1hLGY",content:"address_content__2Tmj0",addresses:"address_addresses__2KLA9",addAddress:"address_addAddress__3eRwg"}},l1Gy:function(e,t,r){e.exports={container:"update_container__VhsRC",content:"update_content__2ji8k",header:"update_header__1Rx4Z",inputContainer:"update_inputContainer__Oaq4v"}},opIc:function(e,t,r){e.exports={container:"address-card_container__ncGxu",header:"address-card_header__1o8YW",addressContainer:"address-card_addressContainer__TpeHe",buttons:"address-card_buttons__2mwmr",delete:"address-card_delete__3YbCk",update:"address-card_update__zLi08"}},pKDN:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/addresses",function(){return r("tk2f")}])},qO9p:function(e,t,r){e.exports={container:"sidebar_container__1Q1WF",title:"sidebar_title__8opfW",categories:"sidebar_categories__1jgND",sidebarItem:"sidebar_sidebarItem__1UuRg",emoji:"sidebar_emoji__yH9m8",helpContainer:"sidebar_helpContainer__2Du0F",helpIcon:"sidebar_helpIcon__3gHpn"}},tk2f:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S}));var n=r("nKUr"),i=r("q1tI"),s=r("vgGx"),c=r("G9T2"),a=r("opIc"),d=r.n(a),o=r("rePB"),l=r("NKCw"),u=r("bgvd"),j=r("UGp+"),b=r("l1Gy"),p=r.n(b),O=r("Wc11"),f=r("co3k"),h=r("F9Sl");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var x=j.a().shape({title:j.c().required("* Title is required.").min(2,"* Title is too short"),city:j.c().required("* City is required.").min(2,"* City is too short"),region:j.c().required("* Region is required."),zipcode:j.c().required("* Zip Code is required."),full_address:j.c().required("* Address Line is required.")});function g(e){var t=e.addressData,r=e.closeEvent,i=t.id,s=t.title,c=t.full_address,a=t.zipcode,d=t.region,j=t.city,b=Object(l.useForm)({resolver:Object(u.yupResolver)(x)}),g=b.register,_=b.handleSubmit,v=b.errors;return Object(n.jsx)("div",{className:p.a.container,id:"container",onClick:function(e){var t;"container"===(null===(t=e.target)||void 0===t?void 0:t.id)&&r()},children:Object(n.jsxs)("div",{className:p.a.content,children:[Object(n.jsxs)("div",{className:p.a.header,children:[Object(n.jsx)("h4",{children:"Update Address"}),Object(n.jsx)("div",{onClick:r,children:"\xd7"})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{onSubmit:_((function(e){return Object(h.c)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:i},e)).finally((function(){return window.location.reload(!1)}))})),style:{display:"flex",flexDirection:"column",paddingTop:30},children:[Object(n.jsxs)("div",{className:p.a.inputContainer,children:[Object(n.jsx)("span",{children:"Address Title"}),Object(n.jsx)(O.a,{name:"title",noMargin:!0,register:g,placeholder:"Home, Office, etc.",defaultValue:s,error:v.title})]}),v.title&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:v.title.message}),Object(n.jsxs)("div",{className:p.a.inputContainer,children:[Object(n.jsx)("span",{children:"City"}),Object(n.jsx)(O.a,{name:"city",noMargin:!0,register:g,defaultValue:j,placeholder:"New York, London, etc.",error:v.city})]}),v.city&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:v.city.message}),Object(n.jsxs)("div",{className:p.a.inputContainer,children:[Object(n.jsx)("span",{children:"Region"}),Object(n.jsx)(O.a,{name:"region",noMargin:!0,register:g,defaultValue:d,placeholder:"France, Italy, etc.",error:v.region})]}),v.region&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:v.region.message}),Object(n.jsxs)("div",{className:p.a.inputContainer,children:[Object(n.jsx)("span",{children:"Zip Code"}),Object(n.jsx)(O.a,{name:"zipcode",noMargin:!0,register:g,defaultValue:a,placeholder:"",error:v.zipcode})]}),v.zipcode&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:v.zipcode.message}),Object(n.jsxs)("div",{className:p.a.inputContainer,children:[Object(n.jsx)("span",{children:"Address Line"}),Object(n.jsx)(O.a,{name:"full_address",noMargin:!0,register:g,defaultValue:c,placeholder:"123 Main Street, New York, NY 10030, etc.",error:v.full_address})]}),v.full_address&&Object(n.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:v.full_address.message}),Object(n.jsx)(f.a,{type:"submit",style:{marginBottom:0},children:"Update Address"})]})]})})}function _(e){var t=e.data,r=Object(i.useState)(!1),s=r[0],c=r[1],a=t.id,o=t.title,l=t.full_address,u=t.zipcode,j=t.region,b=t.city;return Object(n.jsxs)("div",{className:d.a.container,children:[Object(n.jsx)("div",{className:d.a.header,children:Object(n.jsx)("h4",{children:o||"Title"})}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:d.a.addressContainer,children:[Object(n.jsx)("p",{children:l||"Full address"}),Object(n.jsx)("p",{children:b+" / "+u||"City / Zipcode"}),Object(n.jsx)("p",{children:j||"Region"})]}),Object(n.jsxs)("div",{className:d.a.buttons,children:[Object(n.jsx)("button",{className:d.a.delete,onClick:function(){return Object(h.b)({id:a})},children:"Delete"}),Object(n.jsx)("button",{className:d.a.update,onClick:function(){return c(!0)},children:"Update"})]}),s&&Object(n.jsx)(g,{addressData:t,closeEvent:function(){return c(!1)}})]})}var v=r("CuyG"),y=r("at/q"),N=r.n(y),C=r("HvpM"),w=r("RLKc"),z=r("nOHt");function S(){var e=Object(i.useState)(!1),t=e[0],r=e[1],a=Object(C.b)().user,d=Object(C.b)().loading,o=Object(w.b)(),l=o.data,u=o.loading;return a||d||Object(z.useRouter)().push("/login"),Object(n.jsxs)(c.a,{noCategories:!0,children:[Object(n.jsx)(s.a,{}),Object(n.jsxs)("main",{className:N.a.container,children:[Object(n.jsx)("h1",{className:N.a.title,children:"My Addresses"}),Object(n.jsx)("div",{className:N.a.content,children:u?Object(n.jsx)("span",{children:"Loading..."}):0===l.length?Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(n.jsx)("p",{children:"You have not any address"}),Object(n.jsxs)("button",{className:N.a.addAddress,onClick:function(){return r(!0)},children:[Object(n.jsx)("p",{children:"+"}),"Add New Address"]})]}):Object(n.jsxs)("div",{className:N.a.addresses,children:[Object(n.jsxs)("button",{className:N.a.addAddress,onClick:function(){return r(!0)},children:[Object(n.jsx)("p",{children:"+"}),"Add New Address"]}),null===l||void 0===l?void 0:l.map((function(e){return Object(n.jsx)(_,{data:e})}))]})}),t&&Object(n.jsx)(v.default,{closeEvent:function(){return r(!1)}})]})]})}},vgGx:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("nKUr"),i=(r("q1tI"),r("qO9p")),s=r.n(i),c=r("YFqc"),a=r.n(c),d=r("H5F+"),o=r("HvpM"),l=function(e){var t=e.name,r=e.link,i=e.emoji;return Object(n.jsx)("li",{className:s.a.sidebarItem,children:Object(n.jsx)(a.a,{href:r||"/account",children:Object(n.jsxs)("a",{children:[Object(n.jsx)("span",{className:s.a.emoji,children:i}),Object(n.jsx)("span",{className:s.a.categoryName,children:t})]})})})};function u(){Object(o.b)().user;return Object(n.jsxs)("div",{className:s.a.container,children:[Object(n.jsx)("h2",{className:s.a.title,children:"Menu"}),Object(n.jsxs)("ul",{className:s.a.categories,children:[Object(n.jsx)(l,{name:"Account",emoji:"\ud83d\udd12"}),Object(n.jsx)(l,{name:"Orders",emoji:"\ud83d\udce6",link:"/account/orders"}),Object(n.jsx)(l,{name:"Favorites",emoji:"\u2764\ufe0f",link:"/account/favorites"}),Object(n.jsx)(l,{name:"Addresses",emoji:"\ud83c\udfd8\ufe0f",link:"/account/addresses"}),Object(n.jsx)(l,{name:"Logout",emoji:"\ud83d\udeaa",link:"/account/logout"})]}),Object(n.jsxs)("div",{className:s.a.helpContainer,children:[Object(n.jsx)("div",{className:s.a.helpIcon,children:Object(n.jsx)(d.a,{width:18,height:18})}),Object(n.jsx)("span",{children:"Help Center"})]})]})}}},[["pKDN",0,1,3,5,4,2,6,7,8]]]);
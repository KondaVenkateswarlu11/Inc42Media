_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"7+z0":function(e,r,n){e.exports={container:"add_container__3aubm",content:"add_content__3PzfP",header:"add_header__3jyxR",inputContainer:"add_inputContainer__1D-av"}},CuyG:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return p}));var i=n("nKUr"),t=(n("q1tI"),n("NKCw")),s=n("bgvd"),c=n("UGp+"),d=n("7+z0"),o=n.n(d),a=n("Wc11"),l=n("co3k"),u=n("F9Sl"),j=c.a().shape({title:c.c().required("* Title is required.").min(2,"* Title is too short"),city:c.c().required("* City is required.").min(2,"* City is too short"),region:c.c().required("* Region is required."),zipcode:c.c().required("* Zip Code is required."),full_address:c.c().required("* Address Line is required.")});function p(e){var r=e.closeEvent,n=Object(t.useForm)({resolver:Object(s.yupResolver)(j)}),c=n.register,d=n.handleSubmit,p=n.errors;return Object(i.jsx)("div",{className:o.a.container,id:"container",onClick:function(e){var n;"container"===(null===(n=e.target)||void 0===n?void 0:n.id)&&r()},children:Object(i.jsxs)("div",{className:o.a.content,children:[Object(i.jsxs)("div",{className:o.a.header,children:[Object(i.jsx)("h4",{children:"Add New Address"}),Object(i.jsx)("div",{onClick:r,children:"\xd7"})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("form",{onSubmit:d((function(e){return Object(u.a)(e)})),style:{display:"flex",flexDirection:"column",paddingTop:30},children:[Object(i.jsxs)("div",{className:o.a.inputContainer,children:[Object(i.jsx)("span",{children:"Address Title"}),Object(i.jsx)(a.a,{name:"title",noMargin:!0,register:c,placeholder:"Home, Office, etc.",error:p.title})]}),p.title&&Object(i.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:p.title.message}),Object(i.jsxs)("div",{className:o.a.inputContainer,children:[Object(i.jsx)("span",{children:"City"}),Object(i.jsx)(a.a,{name:"city",noMargin:!0,register:c,placeholder:"New York, London, etc.",error:p.city})]}),p.city&&Object(i.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:p.city.message}),Object(i.jsxs)("div",{className:o.a.inputContainer,children:[Object(i.jsx)("span",{children:"Region"}),Object(i.jsx)(a.a,{name:"region",noMargin:!0,register:c,placeholder:"France, Italy, etc.",error:p.region})]}),p.region&&Object(i.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:p.region.message}),Object(i.jsxs)("div",{className:o.a.inputContainer,children:[Object(i.jsx)("span",{children:"Zip Code"}),Object(i.jsx)(a.a,{name:"zipcode",noMargin:!0,register:c,placeholder:"",error:p.zipcode})]}),p.zipcode&&Object(i.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:p.zipcode.message}),Object(i.jsxs)("div",{className:o.a.inputContainer,children:[Object(i.jsx)("span",{children:"Address Line"}),Object(i.jsx)(a.a,{name:"full_address",noMargin:!0,register:c,placeholder:"123 Main Street, New York, NY 10030, etc.",error:p.full_address})]}),p.full_address&&Object(i.jsx)("span",{style:{color:"red",marginTop:4,fontSize:14},children:p.full_address.message}),Object(i.jsx)(l.a,{type:"submit",style:{marginBottom:0},children:"Add Address"})]})]})})}},F9Sl:function(e,r,n){"use strict";n.d(r,"a",(function(){return t})),n.d(r,"c",(function(){return s})),n.d(r,"b",(function(){return c}));var i=n("xvJW"),t=function(e){var r=e.title,n=e.city,t=e.region,s=e.zipcode,c=e.full_address;i.b.collection("Addresses").add({title:r,city:n,region:t,zipcode:s,full_address:c}).then((function(e){i.b.collection("Users").doc(i.a.currentUser.uid).update({addresses:i.c.firestore.FieldValue.arrayUnion(e.id)}).finally((function(){return window.location.reload(!1)}))}))},s=function(e){var r=e.id,n=e.title,t=e.city,s=e.region,c=e.zipcode,d=e.full_address;return i.b.collection("Addresses").doc(r).update({title:n,city:t,region:s,zipcode:c,full_address:d})},c=function(e){var r=e.id;return i.b.collection("Addresses").doc(r).delete().then((function(){i.b.collection("Users").doc(i.a.currentUser.uid).update({addresses:i.c.firestore.FieldValue.arrayRemove(r)}).finally((function(){return window.location.reload(!1)}))}))}},o1z5:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/addresses/add-address",function(){return n("CuyG")}])},rePB:function(e,r,n){"use strict";function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}n.d(r,"a",(function(){return i}))}},[["o1z5",0,1,3,5,4,2,8]]]);
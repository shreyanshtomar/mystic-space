(this["webpackJsonpmystic-space"]=this["webpackJsonpmystic-space"]||[]).push([[0],{45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a,r,i=n(1),c=n.n(i),s=n(31),l=n.n(s),o=n(20),p=n(26),u=n(30),m=n(8),b="SET_CURRENT_USER",d={currentUser:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(m.a)(Object(m.a)({},e),{},{currentUser:t.payload});default:return e}},g=Object(u.b)({user:h}),j=n(37),f=[n.n(j).a],O=Object(u.c)(g,u.a.apply(void 0,f)),x=(n(45),n(21)),v=n.n(x),w=n(25),y=n(15),k=n(16),N=n(18),U=n(17),S=n(6),E=(n(47),n(19)),C=(n(48),n(49),n(2)),B=Object(S.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,r=e.history,i=e.linkUrl,c=e.match;return Object(C.jsxs)("div",{className:"".concat(a," menu-item"),onClick:function(){return r.push("".concat(c.url).concat(i))},children:[Object(C.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(C.jsxs)("div",{className:"content",children:[Object(C.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(C.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),M=function(e){Object(N.a)(n,e);var t=Object(U.a)(n);function n(){var e;return Object(y.a)(this,n),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://images.unsplash.com/photo-1565839412225-98641b2d7b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",id:1,linkUrl:"hats"},{title:"jackets",imageUrl:"https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",id:2,linkUrl:""},{title:"sneakers",imageUrl:"https://images.unsplash.com/photo-1580813089076-7a92471e7074?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=80",id:3,linkUrl:""},{title:"women",imageUrl:"https://images.unsplash.com/photo-1596725649320-7f257a9da04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",size:"large",id:4,linkUrl:""},{title:"men",imageUrl:"https://images.unsplash.com/photo-1532789207428-eb0c63ae912a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",size:"large",id:5,linkUrl:""}]},e}return Object(k.a)(n,[{key:"render",value:function(){return Object(C.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,n=Object(E.a)(e,["id"]);return Object(C.jsx)(B,Object(m.a)({},n),t)}))})}}]),n}(c.a.Component),P=(n(52),function(){return Object(C.jsx)("div",{className:"homepage",children:Object(C.jsx)(M,{})})}),H=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:1,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:2,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:3,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:4,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:5,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:6,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:7,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:8,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:1,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:2,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:3,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:4,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:5,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:1,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:2,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:3,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:4,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:5,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:6,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:7,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:1,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:2,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:3,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:4,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:5,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:6,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],G=(n(53),function(e){e.id;var t=e.name,n=e.price,a=e.imageUrl;return Object(C.jsxs)("div",{className:"collection-item",children:[Object(C.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(C.jsxs)("div",{className:"collection-footer",children:[Object(C.jsx)("span",{className:"name",children:t}),Object(C.jsx)("span",{className:"price",children:n})]})]})}),W=(n(54),function(e){var t=e.title,n=e.items;return Object(C.jsxs)("div",{className:"collection-preview",children:[Object(C.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(C.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){var t=e.id,n=Object(E.a)(e,["id"]);return Object(C.jsx)(G,Object(m.a)({},n),t)}))})]})}),A=function(e){Object(N.a)(n,e);var t=Object(U.a)(n);function n(e){var a;return Object(y.a)(this,n),(a=t.call(this,e)).state={collections:H},a}return Object(k.a)(n,[{key:"render",value:function(){var e=this.state.collections;return Object(C.jsx)("div",{className:"shop-page",children:e.map((function(e){var t=e.id,n=Object(E.a)(e,["id"]);return Object(C.jsx)(W,Object(m.a)({},n),t)}))})}}]),n}(c.a.Component);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function T(e,t){var n=e.title,c=e.titleId,s=D(e,["title","titleId"]);return i.createElement("svg",I({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},s),void 0===n?i.createElement("title",{id:c},"Group"):n?i.createElement("title",{id:c},n):null,a||(a=i.createElement("desc",null,"Created with Sketch.")),r||(r=i.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},i.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},i.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},i.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),i.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),i.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),i.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),i.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var V=i.forwardRef(T),J=(n.p,n(27)),z=(n(66),n(56),function(){var e=Object(w.a)(v.a.mark((function e(t,n){var a,r,i,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=R.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,i=t.email,c=new Date,e.prev=9,e.next=12,a.set(Object(m.a)({displayName:r,email:i,createdAt:c},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());J.a.initializeApp({apiKey:"AIzaSyAr9wPSeopoiGeyOn84spy_kV-ivqkVN_g",authDomain:"mystic-space.firebaseapp.com",projectId:"mystic-space",storageBucket:"mystic-space.appspot.com",messagingSenderId:"58367590686",appId:"1:58367590686:web:ed29ef72542bb47558490f",measurementId:"G-7X4Z2RM7CT"});var q=J.a.auth(),R=J.a.firestore(),F=new J.a.auth.GoogleAuthProvider;F.setCustomParameters({prompt:"select_account"});var Y,L,X,K,_,Q,Z,$,ee,te,ne,ae,re,ie,ce,se=function(){return q.signInWithPopup(F)};J.a;function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function pe(e,t){var n=e.title,a=e.titleId,r=oe(e,["title","titleId"]);return i.createElement("svg",le({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),n?i.createElement("title",{id:a},n):null,i.createElement("g",null,i.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),i.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),i.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),i.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),i.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Y||(Y=i.createElement("g",null)),L||(L=i.createElement("g",null)),X||(X=i.createElement("g",null)),K||(K=i.createElement("g",null)),_||(_=i.createElement("g",null)),Q||(Q=i.createElement("g",null)),Z||(Z=i.createElement("g",null)),$||($=i.createElement("g",null)),ee||(ee=i.createElement("g",null)),te||(te=i.createElement("g",null)),ne||(ne=i.createElement("g",null)),ae||(ae=i.createElement("g",null)),re||(re=i.createElement("g",null)),ie||(ie=i.createElement("g",null)),ce||(ce=i.createElement("g",null)))}var ue=i.forwardRef(pe),me=(n.p,n(58),function(){return Object(C.jsxs)("div",{className:"cart-item",children:[Object(C.jsx)(ue,{className:"shopping-icon"}),Object(C.jsx)("span",{className:"item-count",children:" 0 "})]})}),be=(n(59),Object(p.b)((function(e){return{currentUser:e.user.currentUser}}))((function(e){var t=e.currentUser;return Object(C.jsxs)("div",{className:"header",children:[Object(C.jsx)(o.b,{className:"logo-container",to:"/",children:Object(C.jsx)(V,{className:"logo"})}),Object(C.jsxs)("div",{className:"options",children:[Object(C.jsx)(o.b,{className:"option",to:"/shop",children:"SHOP"}),Object(C.jsx)(o.b,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(C.jsx)("div",{className:"option",onClick:function(){return q.signOut()},children:"SIGN OUT"}):Object(C.jsx)(o.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(C.jsx)(me,{})]})]})}))),de=(n(60),n(24)),he=(n(61),function(e){var t=e.handleChange,n=e.label,a=Object(E.a)(e,["handleChange","label"]);return Object(C.jsxs)("div",{className:"group",children:[Object(C.jsx)("input",Object(m.a)({className:"form-input",onChange:t},a)),n?Object(C.jsx)("label",{className:"".concat(a.value.length?"shrink":""," form-input-label"),children:n}):null]})}),ge=(n(62),function(e){var t=e.children,n=e.isGoogleSignIn,a=Object(E.a)(e,["children","isGoogleSignIn"]);return Object(C.jsx)("button",Object(m.a)(Object(m.a)({className:"".concat(n?"google-sign-in":""," custom-button")},a),{},{children:t}))}),je=(n(63),function(e){Object(N.a)(n,e);var t=Object(U.a)(n);function n(e){var a;return Object(y.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;try{q.signInWithEmailAndPassword(n,r).catch((function(e){var t=e.code,n=e.message;"auth/wrong-password"===t?alert("Wrong password."):alert(n)})),a.setState({email:"",password:""})}catch(i){console.log(i)}},a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(de.a)({},r,n))},a.state={email:"",password:""},a}return Object(k.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"sign-in",children:[Object(C.jsx)("h1",{children:"I already have an account"}),Object(C.jsx)("span",{children:"Sign in with your email and password."}),Object(C.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(C.jsx)(he,{name:"email",type:"email",value:this.state.email,label:"Email",handleChange:this.handleChange,required:!0}),Object(C.jsx)(he,{name:"password",type:"password",label:"Password",value:this.state.password,handleChange:this.handleChange,required:!0}),Object(C.jsxs)("div",{className:"buttons",children:[Object(C.jsx)(ge,{type:"submit",children:"Sign In"}),Object(C.jsx)(ge,{onClick:se,type:"button",isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(c.a.Component)),fe=(n(64),function(e){Object(N.a)(n,e);var t=Object(U.a)(n);function n(){var e;return Object(y.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(w.a)(v.a.mark((function t(n){var a,r,i,c,s,l,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,i=a.email,c=a.password,s=a.confirmPassword,c===s){t.next=5;break}return alert("Passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,q.createUserWithEmailAndPassword(i,c);case 8:return l=t.sent,o=l.user,t.next=12,z(o,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(de.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(k.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,r=e.confirmPassword;return Object(C.jsxs)("div",{className:"sign-up",children:[Object(C.jsx)("h2",{className:"title",children:"I don't have an account"}),Object(C.jsx)("span",{children:"Sign up with your email and password"}),Object(C.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(C.jsx)(he,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(C.jsx)(he,{type:"text",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(C.jsx)(he,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),Object(C.jsx)(he,{type:"password",name:"confirmPassword",value:r,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(C.jsx)(ge,{type:"submit",children:" Sign Up "})]})]})}}]),n}(c.a.Component)),Oe=function(){return Object(C.jsxs)("div",{className:"sign-in-sign-up",children:[Object(C.jsx)(je,{}),Object(C.jsx)(fe,{})]})},xe=function(e){Object(N.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).unSubscribeFromAuth=null,e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unSubscribeFromAuth=q.onAuthStateChanged(function(){var t=Object(w.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,z(n);case 3:t.sent.onSnapshot((function(t){e({currentUser:Object(m.a)({id:t.id},t.data())})})),t.next=8;break;case 7:e(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unSubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(C.jsxs)("div",{children:[Object(C.jsx)(be,{}),Object(C.jsxs)(S.d,{children:[Object(C.jsx)(S.b,{exact:!0,path:"/",component:P}),Object(C.jsx)(S.b,{path:"/shop",component:A}),Object(C.jsx)(S.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(C.jsx)(S.a,{to:"/"}):Object(C.jsx)(Oe,{})}})]})]})}}]),n}(c.a.Component),ve=Object(p.b)((function(e){return{currentUser:e.user.currentUser}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:b,payload:e}}(t))}}}))(xe);l.a.render(Object(C.jsxs)(p.a,{store:O,children:[Object(C.jsx)(o.a,{children:Object(C.jsx)(ve,{})}),","]}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.b6445064.chunk.js.map
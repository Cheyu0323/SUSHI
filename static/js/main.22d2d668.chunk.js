(this.webpackJsonp1122sushi=this.webpackJsonp1122sushi||[]).push([[0],{41:function(e,t,n){},61:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var i=n(6),c=n(19),o=n.n(c),r=n(12),a=n(2),s=n(14),d=(n(87),n(88),n(90)),l=n(89),j=n(91),u=n(1),p=function(e){var t=e.orbitRef,n=e.cameraRef,c=e.modelRef,o=function(){return Object(u.jsx)("div",{className:"loading",children:"Loading ..."})},r=function(e){var t=e.modelPath,n=Object(d.a)(t);return n.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0)})),Object(u.jsx)("primitive",{object:n.scene,dispose:null,scale:.01,position:[-1,0,2.5]})},p=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ambientLight",{color:"#FFFFFF",intensity:2.5}),Object(u.jsx)("directionalLight",{color:"#F7A950",intensity:5,position:[3,8,5],castShadow:!0})]})},f=function(){return Object(u.jsxs)("mesh",{scale:[12,.2,12],position:[0,-.1,-1],receiveShadow:!0,children:[Object(u.jsx)("boxBufferGeometry",{}),Object(u.jsx)("meshPhongMaterial",{color:"#2B3646",transparent:!0})]})};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(i.Suspense,{fallback:Object(u.jsx)(o,{}),children:Object(u.jsxs)(s.a,{colorManagement:!1,pixelRatio:window.devicePixelRatio,shadows:"true",shadowMap:!0,onCreated:function(e){e.gl.physicallyCorrectLights=!0,e.gl.toneMapping=a.CineonToneMapping,e.gl.toneMappingExposure=.8},children:[Object(u.jsx)(l.a,{makeDefault:!0,position:[10,6,20],fov:75,zoom:1,ref:n}),Object(u.jsx)(j.a,{target:[0,3,0],enableDamping:!0,enablePan:!0,enableZoom:!0,maxDistance:15,minDistance:10,autoRotate:!1,autoRotateSpeed:2,ref:t}),Object(u.jsx)("color",{attach:"background",args:["#D8C9AD"]}),Object(u.jsx)(p,{}),Object(u.jsx)(f,{}),Object(u.jsx)("mesh",{ref:c,children:Object(u.jsx)(r,{modelPath:"/model/scene.gltf"})})]})})})},f=(n(41),function(e){var t=e.childRef,n=e.startOrder;return Object(u.jsxs)("header",{ref:t,children:[Object(u.jsxs)("div",{className:"logo",children:[Object(u.jsx)("div",{children:"CHEYU's"}),Object(u.jsx)("div",{children:"SUSHI"})]}),Object(u.jsxs)("div",{className:"navBtn",children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{})]}),Object(u.jsxs)("nav",{children:[Object(u.jsx)("li",{onClick:n,children:"MENU"}),Object(u.jsx)("li",{children:"ABOUT AS"}),Object(u.jsx)("li",{children:"CONTACT US"})]})]})}),m=function(e){var t=e.startBtnRef,n=e.onclick;return Object(u.jsx)("div",{ref:t,style:{position:"fixed",zIndex:"2",left:"50%",bottom:"3%",transform:"translateX(-50%)",backgroundColor:"#000000",color:"white",maxWidth:"400px",width:"80%",height:"10%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"300",cursor:"pointer"},onPointerDown:function(){n()},children:"ONLINE ORDER"})},O=n(15),b=n(11),g=n(16),h=function(e){var t=e.data,n=e.onAddData,c=Object(i.useRef)();return Object(u.jsxs)("div",{className:"item",ref:c,children:[Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:t.img_url,alt:t.food_name})}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:t.food_name}),Object(u.jsx)("div",{children:t.food_japanese})]}),Object(u.jsxs)("div",{children:["$",t.price]})]}),Object(u.jsx)("div",{className:"add",onClick:function(){n(t),g.a.timeline({ease:"Power0.easeNone"}).to(c.current,.1,{scale:.95}).to(c.current,.1,{scale:1})},children:"+ ADD"})]})},v=function(e){var t=e.data,n=e.onAddClick,c=e.onMinusClick,o=e.onDeleteClick,r=Object(i.useRef)();return Object(i.useEffect)((function(){g.a.from(r.current,{duration:.5,opacity:0})}),[]),Object(u.jsxs)("div",{className:"order-item",ref:r,children:[Object(u.jsx)("div",{className:"number",children:t.count}),Object(u.jsxs)("div",{className:"message",children:[Object(u.jsx)("div",{children:t.food_name}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:["$",t.price*t.count]}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)("div",{onClick:function(){return n(t)},children:"+"}),Object(u.jsx)("div",{onClick:function(){return c(t)},children:"-"})]})]})]}),Object(u.jsxs)("div",{className:"close",onClick:function(){return o(t)},children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{})]})]})},x=(n(61),n(40)),_=n.n(x),y=n(52),N=function(e){var t=e.street,n=e.onSave,c=e.onClose,o=Object(i.useState)(""),a=Object(r.a)(o,2),s=a[0],d=a[1],l=Object(i.useRef)(null);Object(i.useEffect)((function(){d(t),j()}),[]),Object(i.useEffect)((function(){new window.google.maps.places.Autocomplete(l.current,{componentRestrictions:{country:"tw"}})}),[s]);var j=function(){g.a.timeline({ease:"Power0.easeNone"}).from(".pop-message",.5,{opacity:0,y:100})},p=function(){g.a.timeline({ease:"Power0.easeNone"}).to(".pop-message",.5,{opacity:0,y:100,onComplete:function(){c(!1)}})};return Object(u.jsxs)("div",{className:"pop-message",children:[Object(u.jsx)("div",{children:Object(u.jsx)("input",{ref:l,value:s,onChange:function(e){d(e.target.value)},onClick:function(e){d(e.target.value)}})}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)("div",{onClick:function(){p(),n(l.current.value)},children:"SAVE"}),Object(u.jsx)("div",{onClick:function(){p()},children:"CLOSE"})]})]})},k=function(e){var t=e.card,n=e.setCard,c=e.onClose,o=Object(i.useState)(""),a=Object(r.a)(o,2),s=a[0],d=a[1],l=Object(i.useState)(""),j=Object(r.a)(l,2),p=j[0],f=j[1],m=Object(i.useState)(""),O=Object(r.a)(m,2),b=O[0],h=O[1],v=Object(i.useState)(""),x=Object(r.a)(v,2),_=x[0],y=x[1],N=Object(i.useState)(""),k=Object(r.a)(N,2),C=k[0],S=k[1],T=Object(i.useState)(!1),D=Object(r.a)(T,2),E=D[0],R=D[1],w=Object(i.useState)(!1),A=Object(r.a)(w,2),B=A[0],L=A[1],U=Object(i.useState)(!1),M=Object(r.a)(U,2),I=M[0],P=M[1],F=Object(i.useState)(!1),G=Object(r.a)(F,2),z=G[0],H=G[1];Object(i.useEffect)((function(){f(""),d(""),y(""),h(""),S("")}),[E]),Object(i.useEffect)((function(){f(t.number),d(t.number),y(t.date),h(t.date),S(t.code),X()}),[]);var X=function(){g.a.timeline({ease:"Power0.easeNone"}).from(".pop-message",.5,{opacity:0,y:100})},Y=function(){g.a.timeline({ease:"Power0.easeNone"}).to(".pop-message",.5,{opacity:0,y:100,onComplete:function(){c(!1)}})};return Object(u.jsxs)("div",{className:"pop-message",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",id:"cash",value:"cash",name:"pay",defaultChecked:E}),Object(u.jsx)("label",{htmlFor:"cash",onClick:function(){R(!0)},children:"CASH"})]}),Object(u.jsxs)("div",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",id:"debit",value:"debit",name:"pay",defaultChecked:!E}),Object(u.jsx)("label",{htmlFor:"debit",onClick:function(){R(!1)},children:"DEBIT CARD"})]}),Object(u.jsxs)("div",{className:"card-edit",style:E?{display:"none"}:{display:"block"},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Card Number"}),Object(u.jsx)("input",{value:p,type:"text",pattern:"[0-9]*",maxLength:"19",inputMode:"numeric",style:B?{border:"1px solid red"}:{border:"1px solid black"},onInput:function(e){var t;L(!1),d(e.target.value),t=e.target.value,f(t),t.length%5===0&&" "!==t[t.length-1]&&0!==t.length&&f(s+" ")}})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Expires(mm/yy)"}),Object(u.jsx)("input",{type:"text",maxLength:"5",style:I?{border:"1px solid red"}:{border:"1px solid black"},value:_,onInput:function(e){var t;P(!1),h(e.target.value),t=e.target.value,y(t),t.length%3===0&&"/"!==t[t.length-1]&&0!==t.length&&y(b+"/")}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Security Code"}),Object(u.jsx)("input",{type:"text",maxLength:"3",value:C,style:z?{border:"1px solid red"}:{border:"1px solid black"},onInput:function(e){H(!1),S(e.target.value)}})]})]})]})]}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)("div",{onClick:function(){!function(){var e=!1;if(E)return n({isCash:E,number:"",date:"",code:""}),void Y();(""===p||p.length>19)&&(L(!0),e=!0),""===_&&(P(!0),e=!0),""===C&&(H(!0),e=!0),e||(n({isCash:E,number:p,date:_,code:C}),Y())}()},children:"SAVE"}),Object(u.jsx)("div",{onClick:function(){Y()},children:"CLOSE"})]})]})},C=function(e){var t=e.price,n=e.switchMap,c=e.switchSuccess,o=Object(i.useState)({lat:0,lng:0}),a=Object(r.a)(o,2),s=a[0],d=a[1],l=Object(i.useState)(""),j=Object(r.a)(l,2),p=j[0],f=j[1],m=Object(i.useState)(""),O=Object(r.a)(m,2),b=O[0],g=O[1],h=Object(i.useState)({isCash:!1,number:"**** **** **** 1242",date:"01/01",code:"123"}),v=Object(r.a)(h,2),x=v[0],C=v[1],S=Object(i.useState)(!1),T=Object(r.a)(S,2),D=T[0],E=T[1],R=Object(i.useState)(!1),w=Object(r.a)(R,2),A=w[0],B=w[1],L=Object(i.useState)(!1),U=Object(r.a)(L,2),M=U[0],I=U[1];Object(i.useEffect)((function(){P().then((function(e){d(e),F(e)})).catch((function(e){E(!1)})),g(z())}),[]);var P=function(){return new Promise((function(e,t){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){e({lat:t.coords.latitude,lng:t.coords.longitude})})):t("Not Have Loaction")}))},F=function(e){var t=e.lat,n=e.lng;_()("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(t,",").concat(n,"&key=AIzaSyDYVrwktD2gl-lodOon-ZTn3nliSkaReEg")).then((function(e){f(e.data.results[0].formatted_address),E(!0)})).catch((function(e){console.log("CoverToAddress ",e),E(!1)}))},G=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"pin"})})},z=function(){return Math.floor(2e4*Math.random())};return Object(u.jsxs)("div",{className:"map-container",children:[Object(u.jsxs)("div",{children:[A?Object(u.jsx)(N,{street:p,onSave:function(e){!function(e){_()("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(e,"&key=AIzaSyDYVrwktD2gl-lodOon-ZTn3nliSkaReEg")).then((function(e){d(e.data.results[0].geometry.location)})).catch((function(e){console.log("CoverToLatLng ",e)}))}(e),f(e)},onClose:B}):"",M?Object(u.jsx)(k,{card:x,setCard:C,onClose:I}):"",Object(u.jsx)("div",{className:"title",children:"CHECKOUT"}),Object(u.jsxs)("div",{className:"details",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"DELVERY DETAILS"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"font-red",children:["guest ",b]}),Object(u.jsx)("div",{className:"font-style",children:p})]})]}),Object(u.jsx)("div",{onClick:function(){B(!0)},children:"EDIT"})]}),Object(u.jsx)("div",{className:"map",children:D?Object(u.jsx)(y.a,{bootstrapURLKeys:{key:"AIzaSyDYVrwktD2gl-lodOon-ZTn3nliSkaReEg"},center:s,defaultZoom:16,children:Object(u.jsx)(G,{lat:s.lat,lng:s.lng})}):Object(u.jsxs)("div",{className:"err",children:[Object(u.jsx)("div",{children:"Browser doesn't support Geolocation"}),Object(u.jsx)("div",{onClick:function(){P().then((function(e){d(e),F(e)})).catch((function(e){E(!1)}))},children:"Try Again"})]})}),Object(u.jsxs)("div",{className:"details",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"PAYMENT METHOD"}),x.isCash?Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"font-style",children:"CASH"})}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"font-red",children:[x.number,Object(u.jsx)("div",{className:"master-card"})]}),Object(u.jsx)("div",{className:"font-style",children:"DEBIT CARD"})]})]}),Object(u.jsx)("div",{onClick:function(){I(!0)},children:"EDIT"})]})]}),Object(u.jsxs)("div",{className:"btns-containers",children:[Object(u.jsx)("div",{onClick:function(){n(!1)},children:"BACK TO MENU"}),Object(u.jsxs)("div",{onClick:function(){c()},children:["PLACE ORDER - $",t.TOTAL]})]})]})},S=(n(82),n(83),function(){return Object(u.jsxs)("div",{className:"success-container",children:[Object(u.jsx)("div",{children:"YOUR ORDER IS ACCEPTED"}),Object(u.jsx)("div",{children:"Our courier will deliver your order within an hour"})]})}),T=function(e){var t=e.menuRef,n=e.endOrder,c=Object(i.useRef)(),o=Object(i.useRef)(),a=Object(i.useRef)(),s=Object(i.useState)("Nigiri"),d=Object(r.a)(s,2),l=d[0],j=d[1],p=Object(i.useState)([]),f=Object(r.a)(p,2),m=f[0],x=f[1],_=Object(i.useState)({SUBTOTAL:"",TAX:"",DISCOUNT:"",TOTAL:""}),y=Object(r.a)(_,2),N=y[0],k=y[1],T=Object(i.useState)("Delivery"),D=Object(r.a)(T,2),E=D[0],R=D[1];Object(i.useEffect)((function(){if(0!==m.length){var e=0,t=0,n=0,i=0,c=.05;c="Delivery"===E?.05:.07,m.forEach((function(o){e+=+o.price*o.count,t=Math.round(.167*e*100)/100,n=Math.round(e*c*100)/100,i=Math.round(100*(e+t-n))/100})),k({SUBTOTAL:e,TAX:t,DISCOUNT:n,TOTAL:i})}}),[m,E]),Object(i.useEffect)((function(){for(var e=0;e<c.current.children.length;e++){var t=c.current.children[e];g.a.from(t,{duration:.5,y:50,opacity:0,delay:e/10})}}),[l]);var w=function(e){var t=m.find((function(t){return t.food_name===e.food_name}));if(void 0===t){var n=Object(b.a)(Object(b.a)({},e),{},{count:1});x((function(e){return[].concat(Object(O.a)(e),[Object(b.a)({},n)])}))}else t.count++,x((function(e){return Object(O.a)(e)}))},A=function(e){var t=m.find((function(t){return t.food_name===e.food_name}));t.count--,x((function(e){return Object(O.a)(e)})),t.count<=0&&B(e)},B=function(e){x(m.filter((function(t){return t.food_name!==e.food_name})))},L=function(e){e?g.a.to(a.current,{duration:.5,left:0}):g.a.to(a.current,{duration:.5,left:"150%"})},U=function(e){e?g.a.timeline().to(".list",1,{left:"-150%"},0).to(".cover",.1,{opacity:"1"},.5).to(".cover",1,{left:"-150%"},.5).to(".map-container",1,{left:"0%",opacity:1},1).to(".cover",1,{opacity:"0"},1).to(".cover",1,{left:"100%"},2):g.a.timeline().to(".map-container",1,{left:"150%"},0).to(".cover",.1,{opacity:"1"},.5).to(".cover",1,{left:"-100%"},.5).to(".list",1,{left:"0%",opacity:1},1).to(".cover",1,{opacity:"0"},1).to(".cover",1,{left:"100%"},2)},M=function(){j("Nigiri"),x([]),k({SUBTOTAL:"",TAX:"",DISCOUNT:"",TOTAL:""}),R("Delivery")};return Object(u.jsxs)("div",{className:"menu-container",ref:t,children:[Object(u.jsx)("div",{className:"cover"}),Object(u.jsxs)("div",{className:"list",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"menu-list",ref:o,children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"logo",children:[Object(u.jsx)("div",{children:"CHEYU's"}),Object(u.jsx)("div",{children:"MENU"})]}),Object(u.jsx)("div",{className:"shop-icon",onClick:function(){return L(!0)}})]}),Object(u.jsxs)("div",{className:"type",children:[Object(u.jsx)("div",{className:"Nigiri"===l?"active":"",onClick:function(){return j("Nigiri")},children:"Nigiri"}),Object(u.jsx)("div",{className:"Gunkan"===l?"active":"",onClick:function(){return j("Gunkan")},children:"Gunkan"}),Object(u.jsx)("div",{className:"Drinks"===l?"active":"",onClick:function(){return j("Drinks")},children:"Drinks"}),Object(u.jsx)("div",{className:"BENTO BOX"===l?"active":"",onClick:function(){return j("BENTO BOX")},children:"BENTO BOX"})]})]}),Object(u.jsx)("div",{ref:c,children:[{type:"Nigiri",food_name:"Salmon",food_japanese:"\u30b5\u30fc\u30e2\u30f3",price:"1.5",img_url:"/img/3962_s.png"},{type:"Nigiri",food_name:"Grilled Salmon Belly",food_japanese:"\u7099\u308a\u30b5\u30fc\u30e2\u30f3\u30cf\u30e9\u30b9",price:"1.5",img_url:"/img/3964_s.png"},{type:"Nigiri",food_name:"Tuna",food_japanese:"\u307e\u3050\u308d",price:"1.5",img_url:"/img/3968_s.png"},{type:"Nigiri",food_name:"Shrimp",food_japanese:"\u3059\u3057\u30a8\u30d3",price:"1.5",img_url:"/img/3970_s.png"},{type:"Nigiri",food_name:"Farrer\u2019s Scallops",food_japanese:"\u30d9\u30d3\u30fc\u30db\u30bf\u30c6",price:"1.5",img_url:"/img/3974_s.png"},{type:"Nigiri",food_name:"Loligo Squid",food_japanese:"\u30e4\u30ea\u30a4\u30ab\u59ff",price:"1.5",img_url:"/img/4348_s.png"},{type:"Nigiri",food_name:"Chashu (Roasted Pork)",food_japanese:"\u8c5a\u306e\u30c1\u30e3\u30fc\u30b7\u30e5\u30fc",price:"1.5",img_url:"/img/3976_s.png"},{type:"Nigiri",food_name:"Grilled Pickled Mackerel",food_japanese:"\u713c\u304d\u3006\u9bd6",price:"1.5",img_url:"/img/3973_s.png"},{type:"Nigiri",food_name:"Beef Plate Slices",food_japanese:"\u725b\u30ab\u30eb\u30d3",price:"1.5",img_url:"/img/3977_s.png"},{type:"Nigiri",food_name:"Pacific Flying Squid",food_japanese:"\u30b9\u30eb\u30e1\u30a4\u30ab",price:"1.5",img_url:"/img/4113_s.png"},{type:"Nigiri",food_name:"Arctic Surf Clam",food_japanese:"\u5317\u5bc4\u8c9d",price:"1.5",img_url:"/img/3978_s.png"},{type:"Nigiri",food_name:"Kabayaki Tilapia",food_japanese:"\u30c6\u30a3\u30e9\u30d4\u30a2\u9bdb\u306e\u84b2\u713c",price:"1.5",img_url:"/img/3981_s.png"},{type:"Nigiri",food_name:"Tamagoyaki",food_japanese:"\u7389\u5b50\u713c",price:"1.5",img_url:"/img/3980_s.png"},{type:"Nigiri",food_name:"Imitation Crab Meat",food_japanese:"\u304b\u306b\u84b2\u927e",price:"1.5",img_url:"/img/3979_s.png"},{type:"Nigiri",food_name:"Velvet Shrimp",food_japanese:"\u8d64\u30a8\u30d3",price:"1.5",img_url:"/img/4347_s.png"},{type:"Nigiri",food_name:"Scallop",food_japanese:"\u30db\u30bf\u30c6",price:"1.5",img_url:"/img/3984_s.png"},{type:"Nigiri",food_name:"Salmon Belly",food_japanese:"\u30b5\u30fc\u30e2\u30f3\u30cf\u30e9\u30b9",price:"1.5",img_url:"/img/3985_s.png"},{type:"Nigiri",food_name:"Glazed Salmon Belly",food_japanese:"\u7099\u308a\u30b5\u30fc\u30e2\u30f3\u30cf\u30e9\u30b9\u30de\u30e8\u30cd\u30fc\u30ba",price:"1.5",img_url:"/img/3957_s.png"},{type:"Nigiri",food_name:"Halibut",food_japanese:"\u30ab\u30e9\u30b9\u30ac\u30ec\u30a4",price:"1.5",img_url:"/img/3986_s.png"},{type:"Nigiri",food_name:"Shrimp Satay Sushi Wrap",food_japanese:"\u30b5\u30c6\u6d77\u8001\u5305\u307f",price:"1.5",img_url:"/img/3989_s.png"},{type:"Nigiri",food_name:"Pan Fried Bay Scallop",food_japanese:"\u30a4\u30bf\u30e4\u8c9d\u5305\u307f",price:"1.5",img_url:"/img/3988_s.png"},{type:"Gunkan",food_name:"Salmon Roe",food_japanese:"\u3044\u304f\u3089",price:"1.5",img_url:"/img/3918_s.png"},{type:"Gunkan",food_name:"Smoked Salmon",food_japanese:"\u30b9\u30e2\u30fc\u30af\u30b5\u30fc\u30e2\u30f3",price:"1.5",img_url:"/img/3926_s.png"},{type:"Gunkan",food_name:"Farrers Scallops w\uff0f Asian Dipping Sauce",food_japanese:"\u4e94\u5473\u30bd\u30fc\u30b9\u30d9\u30d3\u30fc\u30db\u30bf\u30c6",price:"1.5",img_url:"/img/3921_s.png"},{type:"Gunkan",food_name:"Cooked Octopus\uff06Wasabi Salad",food_japanese:"\u305f\u3053\u308f\u3055\u3073",price:"1.5",img_url:"/img/3920_s.png"},{type:"Gunkan",food_name:"Crawfish Salad",food_japanese:"\u30af\u30ed\u30fc\u30d5\u30a3\u30c3\u30b7\u30e5\u30b5\u30e9\u30c0",price:"1.5",img_url:"/img/3922_s.png"},{type:"Gunkan",food_name:"Seasoned HerringCapelin Roe",food_japanese:"\u5473\u4ed8\u3051\u6570\u306e\u5b50\u5473\u4ed8\u3051\u3057\u3057\u3083\u3082\u3063\u3053",price:"1.5",img_url:"/img/3924_s.png"},{type:"Gunkan",food_name:"Tuna Salad",food_japanese:"\u30c4\u30ca\u30b5\u30e9\u30c0",price:"1.5",img_url:"/img/3919_s.png"},{type:"Gunkan",food_name:"Fried Fish Flake",food_japanese:"\u30ab\u30b8\u30ad\u3067\u3093\u3076",price:"1.5",img_url:"/img/3925_s.png"},{type:"Gunkan",food_name:"Corn Salad",food_japanese:"\u30b3\u30fc\u30f3\u30de\u30e8\u30cd\u30fc\u30ba",price:"1.5",img_url:"/img/3923_s.png"},{type:"Gunkan",food_name:"Soft-Boiled Golden Eggs",food_japanese:"\u5473\u4ed8\u3051\u305f\u307e\u3054",price:"1.5",img_url:"/img/3927_s.png"},{type:"Drinks",food_name:"Mineral Water",food_japanese:"",price:"0.5",img_url:"/img/3609_s.png"},{type:"Drinks",food_name:"Sparkling Water",food_japanese:"",price:"0.8",img_url:"/img/3564_s.png"},{type:"Drinks",food_name:"Grape Vinegar Drink",food_japanese:"",price:"0.8",img_url:"/img/3610_s.png"},{type:"Drinks",food_name:"Apple Vinegar Drink",food_japanese:"",price:"0.8",img_url:"/img/3611_s.png"},{type:"Drinks",food_name:"Lactic Acid Drink",food_japanese:"",price:"1.2",img_url:"/img/3566_s.png"},{type:"Drinks",food_name:"Oolong Tea",food_japanese:"",price:"1",img_url:"/img/3612_s.png"},{type:"BENTO BOX",food_name:"Sushi Bento Box #1",food_japanese:"\u5bff\u53f8\u30bb\u30c3\u30c81",price:"4.5",img_url:"/img/3558_s.png"},{type:"BENTO BOX",food_name:"Sushi Bento Box #2",food_japanese:"\u5bff\u53f8\u30bb\u30c3\u30c82",price:"4.5",img_url:"/img/3559_s.png"},{type:"BENTO BOX",food_name:"Sushi Bento Box #3",food_japanese:"\u30c7\u30e9\u30c3\u30af\u30b9\u30bb\u30c3\u30c8",price:"16.5",img_url:"/img/3560_s.png"}].map((function(e,t){return e.type===l&&Object(u.jsx)(h,{data:e,onAddData:w},t)}))})]}),Object(u.jsxs)("div",{className:"order-list",ref:a,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"title",children:"YOU ORDER"}),Object(u.jsx)("div",{className:"list-icon",onClick:function(){return L(!1)}})]}),Object(u.jsxs)("div",{className:"transports",children:[Object(u.jsx)("div",{className:"Delivery"===E?"active":"",onClick:function(){return R("Delivery")},children:"Delivery"}),Object(u.jsx)("div",{className:"Pick up"===E?"active":"",onClick:function(){return R("Pick up")},children:"Pick up"})]}),Object(u.jsx)("hr",{}),0===m.length?Object(u.jsx)("div",{className:"tooltip",children:Object(u.jsx)("div",{children:"You cart is empty. Select from the menu to start an order."})}):Object(u.jsx)("div",{className:"order-items",children:m.map((function(e,t){return Object(u.jsx)(v,{data:e,onAddClick:w,onMinusClick:A,onDeleteClick:B},t)}))}),Object(u.jsxs)("div",{className:"price",style:0===m.length?{display:"none"}:{},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"SUBTOTAL"}),Object(u.jsxs)("div",{children:["$",N.SUBTOTAL]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"TAX"}),Object(u.jsxs)("div",{children:["$",N.TAX]})]}),"Delivery"===E?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"DELIVERY"}),Object(u.jsx)("div",{children:"FREE"})]}):"",Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:["DISCOUNT"," ","Delivery"===E?"5%":"7%"]}),Object(u.jsxs)("div",{children:["- $",N.DISCOUNT]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"TOTAL"}),Object(u.jsxs)("div",{children:["$",N.TOTAL]})]})]})]})]}),Object(u.jsxs)("div",{className:"btns-container",children:[Object(u.jsx)("div",{onClick:function(){n(),M()},children:"BACK TO HOME"}),Object(u.jsx)("div",{className:0===m.length?"disable":"",onClick:function(){U(!0)},children:"TO CHECKOUT"})]})]}),Object(u.jsx)(C,{price:N,switchMap:U,switchSuccess:function(){g.a.timeline().to(".map-container",1,{left:"-150%"},0).to(".cover",.1,{opacity:"1"},.5).to(".cover",1,{left:"-150%"},.5).to(".success-container",1,{left:"0%",opacity:1,onComplete:function(){n(),M()}},1)}}),Object(u.jsx)(S,{})]})},D=function(){var e=Object(i.useRef)(),t=Object(i.useRef)(),n=Object(i.useRef)(),c=Object(i.useRef)(),o=Object(i.useRef)(),a=Object(i.useRef)(),s=function(){var e=Object(i.useState)({width:void 0,height:void 0}),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){c({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),d=function(){var i,r;t.current.minDistance=0,t.current.autoRotate=!1,n.current.position.set(10,6,20),c.current.traverse((function(e){"blinds_Material_#0_0"===e.name?((i=e.material.clone()).transparent=!0,i.opacity=1,e.material=i):"Box017_Material_#186_0"===e.name&&(r=e)})),g.a.timeline({defaults:{duration:1,ease:"Power1.easeInOut"}}).to(e.current,{y:-200},0).to(".list",{left:"0%"},0).to(".map-container",{left:"150%"},0).to(".success-container",{left:"150%"},0).to(e.current,{y:-200},0).to(o.current,{y:200},0).to(n.current.position,{x:3},0).to(t.current.target,{x:3,onUpdate:function(){t.current.update()}},0).to(n.current.position,{y:1.65},1).to(t.current.target,{y:1.65,onUpdate:function(){t.current.update()}},1).to(n.current.position,{duration:2,z:0},2).to(i,{opacity:0},2.3).to(r.position,{x:100},2.7).to(t.current.target,{duration:2,z:-2,onUpdate:function(){t.current.update()}},2).to(t.current.target,{x:0,onUpdate:function(){t.current.update()},onComplete:function(){t.current.enabled=!1}},4).to(a.current,1,{border:"1"},5).to(a.current,1,{height:"95%"},5).to(a.current,1,{width:"93%"},6).to(a.current,1,{border:"0"},6.5).to(a.current.children[0],1,{opacity:0},7).to(a.current.children[1],1,{opacity:1},7).to(a.current.children[0],.1,{left:"100%"},8).to(a.current.children[0],.1,{opacity:1},8.1).play()};return Object(u.jsxs)("div",{style:{height:s.height+"px"},children:[Object(u.jsx)(f,{childRef:e,startOrder:d}),Object(u.jsx)("div",{className:"model-container",children:Object(u.jsx)(p,{orbitRef:t,cameraRef:n,modelRef:c})}),Object(u.jsx)(m,{startBtnRef:o,onclick:d}),Object(u.jsx)(T,{menuRef:a,endOrder:function(){var i,r;c.current.traverse((function(e){"blinds_Material_#0_0"===e.name?((i=e.material.clone()).transparent=!0,i.opacity=1,e.material=i):"Box017_Material_#186_0"===e.name&&(r=e)})),g.a.timeline({defaults:{duration:1,ease:"Power1.easeInOut"}}).to(a.current.children[0],.1,{opacity:0},0).to(a.current.children[0],.1,{left:"0%"},.1).to(a.current.children[0],1,{opacity:1},.3).to(a.current,1,{border:"1"},0).to(a.current,1,{width:"0%"},1).to(a.current,1,{height:"0%"},2).to(a.current,1,{border:"0"},2.5).to(t.current.target,1,{z:-5,x:3,onUpdate:function(){t.current.update()}},3).to(n.current.position,1,{z:15},4).to(t.current.target,1,{z:0,onUpdate:function(){t.current.update()}},4).to(n.current.position,{y:6},5).to(t.current.target,{y:3,onUpdate:function(){t.current.update()}},5).to(r.position,{x:0},5.5).to(i,{opacity:1},5.7).to(n.current.position,{x:10},6).to(t.current.target,{x:0,onUpdate:function(){t.current.update()},onComplete:function(){t.current.minDistance=10,t.current.enabled=!0}},6).to(o.current,{y:0},7).to(e.current,{y:0},7)}})]})};n(84);o.a.render(Object(u.jsx)(D,{}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.22d2d668.chunk.js.map
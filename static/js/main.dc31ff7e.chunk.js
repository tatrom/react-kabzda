(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t(1),l=t.n(c),r=t(4),o=t.n(r),s=(t(10),t(2));t(11);function d(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(a,{title:e.titleValue,onClick:e.onChange,color:e.color}),!e.collapsed&&Object(i.jsx)(u,{items:e.items})]})}function a(e){return console.log("Accordion title rendering"),Object(i.jsxs)("h3",{style:{color:e.color?e.color:"black"},onClick:e.onClick,children:["--",e.title,"--"]})}function u(e){return Object(i.jsx)("ul",{children:e.items.map((function(e){return Object(i.jsx)("li",{children:e.title})}))})}function j(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(b,{onClick:e.onClick,selected:e.value>0,value:1}),Object(i.jsx)(b,{onClick:e.onClick,selected:e.value>1,value:2}),Object(i.jsx)(b,{onClick:e.onClick,selected:e.value>2,value:3}),Object(i.jsx)(b,{onClick:e.onClick,selected:e.value>3,value:4}),Object(i.jsx)(b,{onClick:e.onClick,selected:e.value>4,value:5})]})}function b(e){return Object(i.jsx)("span",{onClick:function(){return e.onClick(e.value)},children:e.selected?Object(i.jsx)("b",{children:" star "}):" star "})}function x(e){var n={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",cursor:"pointer",background:e.on?"green":"white"},t={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",marginLeft:"2px",cursor:"pointer",background:e.on?"white":"red"},c={width:"10px",height:"10px",borderRadius:"10px",border:"1px solid black",display:"inline-block",padding:"2px",marginLeft:"5px",cursor:"pointer",background:e.on?"green":"red"};return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{style:n,onClick:function(){return e.onChange(!0)},children:"On"}),Object(i.jsx)("div",{style:t,onClick:function(){return e.onChange(!1)},children:"Off"}),Object(i.jsx)("div",{style:c})]})}function p(e){var n=Object(c.useState)(!0),t=Object(s.a)(n,2),l=t[0],r=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(h,{title:e.titleValue,onClick:function(){return r(!l)}}),!l&&Object(i.jsx)(O,{})]})}function h(e){return Object(i.jsxs)("h3",{onClick:function(){e.onClick()},children:["--",e.title,"--"]})}function O(){return console.log("AccordionBody rendering"),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"1"}),Object(i.jsx)("li",{children:"2"}),Object(i.jsx)("li",{children:"3"})]})}var g=function(e){console.log("OnOff rendering");var n=Object(c.useState)(!!e.defaultOn&&e.defaultOn),t=Object(s.a)(n,2),l=t[0],r=t[1],o={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",cursor:"pointer",background:l?"green":"white"},d={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",marginLeft:"2px",cursor:"pointer",background:l?"white":"red"},a={width:"10px",height:"10px",borderRadius:"10px",border:"1px solid black",display:"inline-block",padding:"2px",marginLeft:"5px",cursor:"pointer",background:l?"green":"red"};return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{style:o,onClick:function(){r(!0),e.onChange(!0)},children:"On"}),Object(i.jsx)("div",{style:d,onClick:function(){r(!1),e.onChange(!1)},children:"Off"}),Object(i.jsx)("div",{style:a})]})};var k=function(){var e=Object(c.useState)(0),n=Object(s.a)(e,2),t=n[0],l=n[1],r=Object(c.useState)(!1),o=Object(s.a)(r,2),a=o[0],u=o[1],b=Object(c.useState)(!1),h=Object(s.a)(b,2),O=h[0],k=h[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(x,{on:a,onChange:u}),Object(i.jsx)(g,{onChange:u})," ",a.toString(),Object(i.jsx)(p,{titleValue:"Menu"}),Object(i.jsx)(d,{titleValue:"Menu",collapsed:O,onChange:function(){return k(!O)},items:[]}),Object(i.jsx)(j,{value:t,onClick:l})]})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,l=n.getLCP,r=n.getTTFB;t(e),i(e),c(e),l(e),r(e)}))};o.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root")),f()}},[[12,1,2]]]);
//# sourceMappingURL=main.dc31ff7e.chunk.js.map
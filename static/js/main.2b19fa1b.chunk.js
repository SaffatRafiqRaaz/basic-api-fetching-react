(this["webpackJsonpfirst-api-with-react"]=this["webpackJsonpfirst-api-with-react"]||[]).push([[0],{29:function(t,e,n){t.exports={wow:"Article_wow__3ViO-",bganimation:"Article_bganimation__3hZJi",btn:"Article_btn__1LIZn"}},57:function(t,e,n){},58:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),o=n(43),s=n.n(o),a=(n(57),n(58),n(13)),r=n(89),l=n(88),u=n(86),d=n(85),j=n(29),f=n.n(j),h=n(46),b=n.n(h),p=n(3);var x=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)("posts"),s=Object(a.a)(o,2),j=s[0],h=s[1],x=Object(c.useRef)(null),m=Object(c.useRef)(null);function g(t){j!==t&&h(t)}function O(){console.log(m.current),document.documentElement.style.setProperty("--mycolor","rgb("+(154*Math.random()+100)+","+(154*Math.random()+100)+","+(154*Math.random()+100)+")")}console.log("Starting state:"+n),Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/"+j).then((function(t){return t.json()})).then((function(t){i(t),console.log("Fetched data: "+t),console.log("After fetching:"+y)})).catch((function(t){return console.log(t)}))}),[j]);var y=[],v=0,w=0;return n.forEach((function(t){w++;var e=[];Object.entries(t).forEach((function(t){v++,e.push(Object(p.jsxs)("li",{style:{listStyle:"none",textOverflow:"ellipsis",overflow:"hidden"},children:[Object(p.jsx)(b.a,{style:{fontSize:"8px"}}),Object(p.jsxs)(r.a,{variant:"caption",children:["\u2003",Object(p.jsx)("strong",{children:t[0]})," : ",t[1]]})]},v))})),y.push(Object(p.jsx)(l.a,{item:!0,maxWidth:"100vh",style:{padding:"24px"},ref:m,onMouseLeave:function(){return O()},children:Object(p.jsx)(u.a,{style:{maxWidth:"250px",minWidth:"250px"},className:f.a.wow,children:Object(p.jsxs)(d.a,{style:{padding:"10px"},children:[Object(p.jsx)(r.a,{variant:"overline",width:"100%",justifyContent:"center",display:"flex",fontWeight:"bold",fontFamily:"monospace",style:{textShadow:"0px 1px 5px #ec00ff"},children:j}),Object(p.jsx)("ul",{style:{paddingLeft:"20px"},children:e})]})})},w))})),console.log("Got items: "+y),Object(p.jsxs)(l.a,{container:!0,justifyContent:"center",children:[Object(p.jsxs)(l.a,{container:!0,justifyContent:"center",alignItems:"flex-start",style:{width:"70%"},direction:"row",spacing:3,margin:0,marginTop:4,children:[Object(p.jsx)("button",{className:f.a.btn,ref:x,variant:"contained",onClick:function(){return g("posts")},children:"Posts"}),Object(p.jsx)("button",{className:f.a.btn,ref:x,variant:"contained",onClick:function(){return g("comments")},children:"Comments"}),Object(p.jsx)("button",{className:f.a.btn,ref:x,variant:"contained",onClick:function(){return g("albums")},children:"Albums"})]}),Object(p.jsx)(l.a,{container:!0,justifyContent:"center",alignItems:"flex-start",style:{width:"70%"},direction:"row",spacing:3,margin:0,children:y})]})};var m=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(x,{})})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),o(t),s(t)}))};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),g()}},[[67,1,2]]]);
//# sourceMappingURL=main.2b19fa1b.chunk.js.map
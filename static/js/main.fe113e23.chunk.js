(this["webpackJsonpexample-project"]=this["webpackJsonpexample-project"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),i=c(31),r=c.n(i),d=(c(41),c(42),c(19)),j=c(3),s=c(12),a=c(16),l=c.n(a),h=c(81),b=c(2),u=function(e){var t=Object(j.f)(),c=e.todo,n=c.id,o=c.title,i=c.completed;return Object(b.jsxs)("div",{style:{backgroundColor:"yellow",margin:"15px",padding:"15px",width:"225px",color:"black"},onClick:function(){return t.push("/todo/".concat(n))},children:[Object(b.jsx)("h4",{children:o}),Object(b.jsx)("h6",{children:"Completed: ".concat(i)})]})},O=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){l.a.get("https://jsonplaceholder.typicode.com/todos").then((function(e){var t=e.data;i(t)}))}),[]),Object(b.jsx)(o.a.Fragment,{children:c?Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{style:{color:"yellow"},children:"TODO CARDS"}),Object(b.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:c.map((function(e){return Object(b.jsx)(u,{todo:e})}))})]}):Object(b.jsx)(h.a,{})})},p=function(){var e=Object(j.f)(),t=Object(j.g)().id,c=Object(n.useState)(),o=Object(s.a)(c,2),i=o[0],r=o[1];Object(n.useEffect)((function(){l.a.get("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){var t=e.data;r(t)}))}),[]);var d=i||{},a=d.id,u=d.userId,O=d.title,p=d.completed;return Object(b.jsx)("div",{children:i?Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{style:{margin:"15px"},onClick:function(){return e.push("/")},children:"Return to home"}),Object(b.jsxs)("div",{style:{color:"black",backgroundColor:"yellow",padding:"15px"},children:[Object(b.jsx)("h2",{children:"Todo ID is: ".concat(a)}),Object(b.jsx)("h2",{children:"Todo userID is: ".concat(u)}),Object(b.jsx)("h2",{children:"Todo title is: ".concat(O,".")}),Object(b.jsx)("h2",{children:"Is todo completed? ".concat(p,".")})]})]}):Object(b.jsx)(h.a,{})})};var x=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(d.a,{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(O,{})}),Object(b.jsx)(j.a,{path:"/todo/:id",children:Object(b.jsx)(p,{})})]})})})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),o(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),f()}},[[70,1,2]]]);
//# sourceMappingURL=main.fe113e23.chunk.js.map
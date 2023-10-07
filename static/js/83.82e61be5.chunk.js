"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[83],{2083:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,a,i,s,o,c,u,l,d,m,p=t(2791),x=t(9434),h=t(4270),f=t(3634),b=t(6916),j=function(n){return n.contacts.isLoading},Z=function(n){return n.contacts.items},g=function(n){return n.filter},v=(0,b.P1)([Z,g],(function(n,e){return console.log("Calculating visible tasks"),n.filter((function(n){return n.name.toLowerCase().trim().includes(e.toLowerCase())}))})),y=t(168),P=t(5867),w=P.ZP.ul(r||(r=(0,y.Z)(["\n  margin-top: 15px;\n"]))),C=P.ZP.li(a||(a=(0,y.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-bottom: 15px;\n"]))),k=P.ZP.button(i||(i=(0,y.Z)(["\n  border-radius: 15px;\n"]))),L=t(184),_=function(){var n=(0,x.v9)(v),e=(0,x.I0)();return console.log(n),(0,L.jsx)(w,{children:n.map((function(n){var t=n.id,r=n.name,a=n.number;return(0,L.jsxs)(C,{children:[(0,L.jsxs)("p",{children:[r,": ",a]}),(0,L.jsx)(k,{type:"button",onClick:function(){e((0,f.GK)(t))},children:"Delete"})]},t)}))})},N=t(1413),q=t(5705),A=t(5218),F=(0,P.ZP)(q.l0)(s||(s=(0,y.Z)(["\n  display: flex;\n  /* flex-direction: column;\n  justify-content: center; */\n  gap: 10px;\n  padding: 5px 0 18px;\n"]))),I=P.ZP.label(o||(o=(0,y.Z)(["\n  /* display: flex; */\n"]))),J=(0,P.ZP)(q.gN)(c||(c=(0,y.Z)(["\n  width: 150px;\n"]))),z=P.ZP.button(u||(u=(0,y.Z)(["\n  width: 100px;\n  padding: 8px;\n  border-radius: 15px;\n  margin: 0 auto;\n"]))),B=(0,P.ZP)(q.Bc)(l||(l=(0,y.Z)(["\n  width: 200px;\n  color: red;\n  font-size: 10px;\n"]))),K=t(6727),R=K.Ry().shape({name:K.Z_().min(1,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d Artagnan").required("Please enter a name"),number:K.Z_().min(7,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Please enter the number")}),S=function(){var n=(0,x.v9)(Z),e=(0,x.I0)();return(0,L.jsx)(q.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){if(n.find((function(n){return n.name.toLowerCase().trim()===t.name.toLowerCase().trim()||n.number.trim()===t.number.trim()})))return A.ZP.error("A contact with that name or number already exists");e((0,f.uK)((0,N.Z)({},t))),r.resetForm(),A.ZP.success("Contact added successfully",{duration:3e3})},validationSchema:R,children:(0,L.jsxs)(F,{children:[(0,L.jsxs)(I,{children:[(0,L.jsx)("p",{children:"Name"}),(0,L.jsx)(J,{type:"text",name:"name"}),(0,L.jsx)(B,{name:"name",component:"div"})]}),(0,L.jsxs)(I,{children:[(0,L.jsx)("p",{children:"Number"}),(0,L.jsx)(J,{type:"tel",name:"number"}),(0,L.jsx)(B,{name:"number",component:"div"})]}),(0,L.jsx)(z,{type:"submit",children:"Add contact"})]})})},D=P.ZP.label(d||(d=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),E=P.ZP.div(m||(m=(0,y.Z)(["\n  padding: 10px 0 15px;\n"]))),G=t(3165),M=function(){var n=(0,x.v9)(g),e=(0,x.I0)();return(0,L.jsx)(E,{children:(0,L.jsxs)(D,{children:[(0,L.jsx)("h3",{children:"Find contacts by name"}),(0,L.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(n){e((0,G.W)(n.target.value.toLowerCase().trim()))}})]})})};function V(){var n=(0,x.I0)(),e=(0,x.v9)(j);return(0,p.useEffect)((function(){n((0,f.NJ)())}),[n]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(h.q,{children:(0,L.jsx)("title",{children:"Your contacts"})}),(0,L.jsx)("div",{children:e&&"Request in progress..."}),(0,L.jsx)(S,{}),(0,L.jsx)(M,{}),(0,L.jsx)(_,{})]})}}}]);
//# sourceMappingURL=83.82e61be5.chunk.js.map
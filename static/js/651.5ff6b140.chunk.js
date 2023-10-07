"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[651],{1651:function(n,e,r){r.r(e),r.d(e,{default:function(){return un}});var t,i,o,a,s,c,d,l,u,p,x,m,b,h,g,Z,f,j,P,v=r(2791),w=r(9434),y=r(4270),C=r(8820),k=r(3853),N=r(3634),z=r(6916),L=function(n){return n.contacts.isLoading},_=function(n){return n.contacts.items},q=function(n){return n.filter},I=(0,z.P1)([_,q],(function(n,e){return console.log("Calculating visible tasks"),n.filter((function(n){return n.name.toLowerCase().trim().includes(e.toLowerCase())}))})),A=r(168),J=r(5867),S=J.ZP.ul(t||(t=(0,A.Z)(["\n  margin-top: 15px;\n"]))),B=J.ZP.li(i||(i=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 6px;\n"]))),F=J.ZP.button(o||(o=(0,A.Z)(["\n  border-radius: 8px;\n  /* padding: 5px; */\n"]))),K=J.ZP.button(a||(a=(0,A.Z)(["\n  border-radius: 8px;\n"]))),R=J.ZP.p(s||(s=(0,A.Z)(["\n  width: 48%;\n  background-color: rgb(182, 218, 248);\n  padding-left: 8px;\n  color: rgb(77, 39, 39);\n"]))),E=J.ZP.p(c||(c=(0,A.Z)(["\n  width: 48%;\n  background-color: rgb(182, 218, 248);\n  padding-left: 8px;\n  color: rgb(77, 39, 39);\n"]))),G=J.ZP.li(d||(d=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  /* gap: 10px; */\n  margin-bottom: 8px;\n"]))),M=J.ZP.p(l||(l=(0,A.Z)(["\n  width: 50%;\n  background-color: rgb(112, 67, 53);\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  color: rgb(255, 255, 255);\n"]))),Q=r(184),T=function(){var n=(0,w.v9)(I),e=(0,w.I0)();return console.log(n),(0,Q.jsxs)(S,{children:[(0,Q.jsxs)(G,{children:[(0,Q.jsx)(M,{children:"Name"}),(0,Q.jsx)(M,{children:"Number"})]}),n.map((function(n){var r=n.id,t=n.name,i=n.number;return(0,Q.jsxs)(B,{children:[(0,Q.jsx)(R,{children:t}),(0,Q.jsx)(E,{children:i}),(0,Q.jsx)(K,{children:(0,Q.jsx)(k.vPQ,{size:20})}),(0,Q.jsx)(F,{type:"button",onClick:function(){e((0,N.GK)(r))},children:(0,Q.jsx)(C.ql3,{size:20,color:"rgb(112, 67, 53)"})})]},r)}))]})},V=r(1413),W=r(5705),Y=r(5218),D=(0,J.ZP)(W.l0)(u||(u=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  padding: 5px 0 5px;\n"]))),H=J.ZP.label(p||(p=(0,A.Z)(["\n  /* display: flex; */\n"]))),O=J.ZP.p(x||(x=(0,A.Z)(["\n  color: rgb(236, 234, 234);\n"]))),U=(0,J.ZP)(W.gN)(m||(m=(0,A.Z)(["\n  width: 150px;\n  border-radius: 8px;\n  border: 1px solid rgb(31, 51, 50);\n"]))),X=J.ZP.button(b||(b=(0,A.Z)(["\n  width: 120px;\n  height: 35px;\n  color: rgb(32, 49, 66);\n  font-size: 16px;\n  font-weight: 500;\n  background-color: rgb(8, 72, 121);\n  color: rgb(255, 255, 255);\n\n  padding: 2px;\n  border-radius: 8px;\n  border: 1px solid rgb(31, 51, 50);\n  margin-Top: 15px;\n"]))),$=(0,J.ZP)(W.Bc)(h||(h=(0,A.Z)(["\n  width: 200px;\n  color: red;\n  font-size: 10px;\n"]))),nn=r(6727),en=nn.Ry().shape({name:nn.Z_().min(1,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d Artagnan").required("Please enter a name"),number:nn.Z_().min(7,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Please enter the number")}),rn=function(){var n=(0,w.v9)(_),e=(0,w.I0)();return(0,Q.jsx)(W.J9,{initialValues:{name:"",number:""},onSubmit:function(r,t){if(n.find((function(n){return n.name.toLowerCase().trim()===r.name.toLowerCase().trim()||n.number.trim()===r.number.trim()})))return Y.ZP.error("A contact with that name or number already exists");e((0,N.uK)((0,V.Z)({},r))),t.resetForm(),Y.ZP.success("Contact added successfully",{duration:3e3})},validationSchema:en,children:(0,Q.jsxs)(D,{children:[(0,Q.jsxs)(H,{children:[(0,Q.jsx)(O,{children:"Name"}),(0,Q.jsx)(U,{type:"text",name:"name"}),(0,Q.jsx)($,{name:"name",component:"div"})]}),(0,Q.jsxs)(H,{children:[(0,Q.jsx)(O,{children:"Number"}),(0,Q.jsx)(U,{type:"tel",name:"number"}),(0,Q.jsx)($,{name:"number",component:"div"})]}),(0,Q.jsx)(X,{type:"submit",children:"Create contact"})]})})},tn=J.ZP.label(g||(g=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),on=J.ZP.div(Z||(Z=(0,A.Z)(["\n  padding: 10px 0 15px;\n"]))),an=J.ZP.input(f||(f=(0,A.Z)(["\n  width: 25%;\n  border-radius: 8px;\n  border: 1px solid rgb(31, 51, 50);\n"]))),sn=J.ZP.h4(j||(j=(0,A.Z)(["\n  color: rgb(236, 234, 234);\n"]))),cn=r(3165),dn=function(){var n=(0,w.v9)(q),e=(0,w.I0)();return(0,Q.jsx)(on,{children:(0,Q.jsxs)(tn,{children:[(0,Q.jsx)(sn,{children:"Search by name"}),(0,Q.jsx)(an,{type:"text",name:"filter",value:n,onChange:function(n){e((0,cn.W)(n.target.value.toLowerCase().trim()))}})]})})},ln=J.ZP.div(P||(P=(0,A.Z)(["\n  background-color: rgb(100, 169, 185);\n  height: 100vh;\n  padding: 20px;\n"])));function un(){var n=(0,w.I0)(),e=(0,w.v9)(L);return(0,v.useEffect)((function(){n((0,N.NJ)())}),[n]),(0,Q.jsxs)(ln,{children:[(0,Q.jsx)(y.q,{children:(0,Q.jsx)("title",{children:"Your contacts"})}),(0,Q.jsx)("div",{children:e&&"Request in progress..."}),(0,Q.jsx)(rn,{}),(0,Q.jsx)(dn,{}),(0,Q.jsx)(T,{})]})}}}]);
//# sourceMappingURL=651.5ff6b140.chunk.js.map
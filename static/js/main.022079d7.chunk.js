(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a(3),c=a(1),s=a(0),l=Object(c.createContext)(),r=function(e){var t=e.children,a=Object(c.useState)("light"),n=Object(i.a)(a,2),r=n[0],o=n[1];Object(c.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://ayman-bit.github.io/portfolio",h="Ayman Abu Awad",d="Ayman Abu Awad",u="Computer Engineer",j="Strong problem-solving and mathematical skills, creativity, and innovative thinking, attention to detail, a keen awareness of safety issues, written and verbal communication skills, and skills in time management.",m="https://www.cs.mun.ca/~aymana/Docs/Resume.pdf",b={linkedin:"https://www.linkedin.com/in/ayman-abu-awad/",github:"https://github.com/ayman-bit"},p=[{name:"Easy Receipt",description:"Easy Receipt is a convenient approach to receiving and managing your daily transaction receipts. The product addresses the problems associated with paper receipts. Storing, managing, expense tracking, unreadable or fading print and returning an item without a receipt. In addition, Easy Receipt provides its users with the ability to receive electronic receipts without sacrificing their personal or work email inbox. Lastly, our product helps reduce the use of thermal coated bisphenol A (BPA) receipts which have negative health effects and are also non-recyclable.",stack:["HTML","JavaScript","Java","C++","Objective-C++","Starlark"],sourceCode:"https://github.com/ayman-bit/capstone-proj"},{name:"ImageFiltering",description:"The Laplacian filter is used in image processing applications as an edge detector. It is a two-dimensional approximation of the second spatial derivative of an image. ",stack:["BeautifulSoup","Python","Shell"],sourceCode:"https://github.com/ayman-bit/ImageFiltering"},{name:"EEAlgorithm",description:"This Algorithm will allow the user to compute the private-key. ",stack:["Python"],sourceCode:"https://github.com/ayman-bit/EEAlgorithm"},{name:"U-Calendar",description:"U-Calendar is a desktop calendar application specifically designed for students to facilitate managing multiple courses. The calendar is based on the standard semester layout and offers a variety of features to make scheduling easier. While the main focus of this application is to provide a functional calendar, it also includes a customizable notebook and a planner to keep track of assignments and deadlines. ",stack:["Java","JavaFx","Maven","Git"],sourceCode:"https://github.com/ayman-bit/U-Calendar"},{name:"Game Of Life",description:"The Game of Life, also known simply as Life. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.",stack:["Java"],sourceCode:"https://github.com/ayman-bit/Game-Of-Life"},{name:"NeuralNetwork",description:"An artificial neural network consists of a sequence of  layers each of which consists of one or more neurons, or brain cells. Each neuron can be modelled as taking some number of inputs from the previous layer and calculating a weighted sum of these inputs to produce a single output which is fed to the neurons in the next layer.",stack:["Java"],sourceCode:"https://github.com/ayman-bit/NeuralNetwork"},{name:"TicTacToe",description:"This repository is my implementation of TicTacToe in JAVA",stack:["Java"],sourceCode:"https://github.com/ayman-bit/TicTacToe"}],f=["Python","Java","C++","C","C#","HTML","CSS","JavaScript","TypeScript","PHP","Latex","React","Vue","SASS","Material UI","Git","CI/CD"],O="aymana@mun.ca",x=a(16),g=a.n(x),k=a(14),v=a.n(k),y=a(18),N=a.n(y),w=a(17),_=a.n(w),C=(a(28),function(){var e=Object(c.useContext)(l),t=Object(i.a)(e,1)[0],a=t.themeName,n=t.toggleTheme,r=Object(c.useState)(!1),o=Object(i.a)(r,2),h=o[0],d=o[1],u=function(){return d(!h)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,f.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,O?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===a?Object(s.jsx)(v.a,{}):Object(s.jsx)(g.a,{})}),Object(s.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(s.jsx)(_.a,{}):Object(s.jsx)(N.a,{})})]})}),S=(a(32),function(){var e=o,t=h;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(C,{})]})}),T=a(11),E=a.n(T),A=a(19),J=a.n(A),L=(a(33),function(){var e=d,t=u,a=j,n=m,i=b;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:a&&a}),Object(s.jsxs)("div",{className:"about__contact center",children:[n&&Object(s.jsx)("a",{href:n,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(E.a,{})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(J.a,{})})]})]})]})}),P=a(7),I=a.n(P),R=a(20),G=a.n(R),M=(a(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},I()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(E.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(G.a,{})})]})}),F=(a(36),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(s.jsx)(M,{project:e},I()())}))})]}):null}),H=(a(37),function(){return f.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},I()())}))})]}):null}),U=a(21),z=a.n(U),B=(a(38),function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(z.a,{fontSize:"large"})})}):null}),q=(a(39),function(){return O?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(O),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),D=(a(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/ayman-bit/portfolio",className:"link footer__link",children:"\xa9 2023"})})}),V=(a(41),function(){var e=Object(c.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(S,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(L,{}),Object(s.jsx)(F,{}),Object(s.jsx)(H,{}),Object(s.jsx)(q,{})]}),Object(s.jsx)(B,{}),Object(s.jsx)(D,{})]})});a(42);Object(n.render)(Object(s.jsx)(r,{children:Object(s.jsx)(V,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.022079d7.chunk.js.map
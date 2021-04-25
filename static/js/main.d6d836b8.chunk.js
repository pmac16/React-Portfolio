(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),c=a(7),n=a.n(c),r=(a(6),a(2)),l=a.p+"static/media/PM.140a0379.png",d=a(0);var o=function(){return Object(d.jsxs)("section",{className:"my-5",children:[Object(d.jsx)("h1",{id:"about",children:"About Me"}),Object(d.jsxs)("div",{className:"container",style:{display:"flex",alignItems:"left",justifyContent:"space-between",margin:10},children:[Object(d.jsx)("img",{src:l,className:"my-2",style:{width:400,height:400},alt:"cover"}),Object(d.jsx)("div",{style:{display:"flex",alignItems:"left",justifyContent:"space-between",margin:30},children:Object(d.jsxs)("p",{children:["From a young age, I have always loved learning. However, the passion I had for learning did not extend to math, technology, or science. When I became a teacher, you can imagine my surprise when I discovered that though I had hated these subjects as a child, I loved teaching them as an adult. I learned the creativity involved with math; there is always more than one way to solve a problem. I discovered female scientists I had never learned about and shared their research discoveries with my students. I attended coding professional developments so I could teach my students to code. And through all of this, I discovered how deep my own love of this field had become. I knew I needed to learn more.",Object(d.jsx)("br",{})," ",Object(d.jsx)("br",{}),"I got into teaching because I wanted to make a difference in my community. I wanted all of my students to have the same academic outcomes as students in high-income areas. My shift into computer coding comes from the same desire.",Object(d.jsx)("br",{})," ",Object(d.jsx)("br",{}),"Through my learnings from UC Berkeley's coding bootcamp, I plan on continuing my work in ensuring that all students have access to quality educational programming."]})})]})]})};var h=function(e){var t=e.content,a=void 0===t?[]:t,i=e.setCurrentContent,s=e.currentContent;return Object(d.jsxs)("header",{className:"flex-row px-1",style:{display:"flex",justifyContent:"space-between"},children:[Object(d.jsx)("h2",{className:"mx-2",children:Object(d.jsx)("a",{"data-testid":"link",href:"/",children:"Priya Macpherson"})}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"flex-row",style:{alignItems:"right"},children:[Object(d.jsx)("li",{className:"mx-2"}),a.map((function(e){return Object(d.jsx)("li",{className:"mx-1 ".concat(s===e&&"navActive"),children:Object(d.jsx)("span",{onClick:function(){i(e)},children:e})},e)}))]})})]})};var m=function(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)("img",{alt:e.name,src:e.image})}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Name:"})," ",e.name]}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.deployed,target:"_blank",children:"Deployed Site"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.github,target:"_blank",children:"Github Repository"})})]})})]})},j=a.p+"static/media/Recipe.344ff7f3.png",b=a.p+"static/media/quiz.c62ee013.png",u=a.p+"static/media/budget.5adc6c2e.png",g=a.p+"static/media/weather.1bcab17b.png",p=a.p+"static/media/scheduler.f16e55e6.png",x=a.p+"static/media/portfolio.65d921e6.png";var O=function(){var e=[{id:1,name:"Recipe Finder",image:j,deployed:"https://pmac16.github.io/recipe-finder/",github:"https://github.com/pmac16/recipe-finder"},{id:2,name:"Quiz Challenge",image:b,deployed:"https://pmac16.github.io/javascript-quiz-challenge/",github:"https://github.com/pmac16/javascript-quiz-challenge"},{id:3,name:"Portfolio",image:x,deployed:"https://pmac16.github.io/MacphersonPortfolio/",github:"https://github.com/pmac16/MacphersonPortfolio"},{id:4,name:"Budget Tracker",image:u,deployed:"https://dry-river-42304.herokuapp.com/",github:"https://github.com/pmac16/PWA-budget-tracker"},{id:5,name:"Weather Dashboard",image:g,deployed:"https://pmac16.github.io/weather-dashboard/",github:"https://github.com/pmac16/weather-dashboardweather"},{id:6,name:"Hourly Scheduler",image:p,deployed:"https://pmac16.github.io/day-scheduler/",github:"https://github.com/pmac16/day-scheduler"}];return Object(d.jsx)("section",{id:"project",className:"wrapper",children:e.map((function(e){return Object(d.jsx)(m,{id:e.id,name:e.name,image:e.image,deployed:e.deployed,github:e.github},e.id)}))})},f=a(3),y=a(5);var v=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(i.useState)(""),n=Object(r.a)(c,2),l=n[0],o=n[1],h=a.name,m=a.email,j=a.message,b=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);o(t?"":"Your email is invalid.")}else e.target.value.length?o(""):o("".concat(e.target.name," is required."));l||(s(Object(y.a)(Object(y.a)({},a),{},Object(f.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return Object(d.jsxs)("section",{className:"my-5",children:[Object(d.jsx)("h1",{"data-testid":"h1tag",style:{paddingBottom:10},children:"Contact Me"}),Object(d.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",a)},children:[Object(d.jsxs)("div",{style:{paddingBottom:5},children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(d.jsx)("input",{type:"text",name:"name",defaultValue:h,onBlur:b})]}),Object(d.jsxs)("div",{style:{paddingBottom:5},children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(d.jsx)("input",{type:"email",name:"email",defaultValue:m,onBlur:b})]}),Object(d.jsxs)("div",{style:{paddingBottom:5},children:[Object(d.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(d.jsx)("textarea",{name:"message",rows:"5",defaultValue:j,onBlur:b})]}),l&&Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"error-text",children:l})}),Object(d.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var w=function(){return Object(d.jsxs)("section",{className:"my-5",children:[Object(d.jsx)("h1",{id:"about",children:"Resume"}),Object(d.jsxs)("p",{children:["Please download my"," ",Object(d.jsx)("a",{href:"http://www.msnlabs.com/img/resume-sample.pdf",target:"_blank",download:!0,children:"resume"})," ","to see more about my experience."]}),Object(d.jsxs)("div",{className:"my-2",children:[Object(d.jsx)("h2",{className:"mx-2",children:"Skills"}),Object(d.jsx)("h3",{className:"mx-2",children:"Front End"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"HTML/CSS"}),Object(d.jsx)("li",{children:"Javascript/jQuery"}),Object(d.jsx)("li",{children:"Frameworks"}),Object(d.jsx)("li",{children:"Responsive Design"}),Object(d.jsx)("li",{children:"Version Control/Git"}),Object(d.jsx)("li",{children:"Testing/Debugging"}),Object(d.jsx)("li",{children:"Browser Developer Tools"}),Object(d.jsx)("li",{children:"Web Performance"}),Object(d.jsx)("li",{children:"Command Line"})]}),Object(d.jsx)("h3",{className:"mx-2",children:"Back End"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"HTML/CSS"}),Object(d.jsx)("li",{children:"SQL"}),Object(d.jsx)("li",{children:"Restful APIs"}),Object(d.jsx)("li",{children:"Server Handling"}),Object(d.jsx)("li",{children:"Database Management"})]})]})]})},I=a.p+"static/media/github-brands.b4943733.svg",k=a.p+"static/media/linkedin-brands.207e7aa8.svg",C=a.p+"static/media/instagram-brands.8545df2c.svg";var N=function(){return Object(d.jsxs)("footer",{style:{display:"flex",alignItems:"center",justifyContent:"space-around"},children:[Object(d.jsx)("a",{href:"https://github.com/pmac16",target:"_blank",children:Object(d.jsx)("img",{src:I,className:"my-2",style:{width:50},alt:"linkedin"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/priya-macpherson-60a1851b/",target:"_blank",children:Object(d.jsx)("img",{src:k,className:"my-2",style:{width:50},alt:"linkedin"})}),Object(d.jsx)("a",{href:"https://www.instagram.com/p.mac16/",target:"_blank",children:Object(d.jsx)("img",{src:C,className:"my-2",style:{width:50},alt:"instagram"})})]})};var S=function(){var e=Object(i.useState)(["About","Contact","Portfolio","Resume"]),t=Object(r.a)(e,1)[0],a=Object(i.useState)(t[0]),s=Object(r.a)(a,2),c=s[0],n=s[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{content:t,setCurrentContent:n,currentContent:c}),Object(d.jsxs)("main",{children:["About"===c&&Object(d.jsx)(o,{}),"Contact"===c&&Object(d.jsx)(v,{}),"Portfolio"===c&&Object(d.jsx)(O,{}),"Resume"===c&&Object(d.jsx)(w,{})]}),Object(d.jsx)(N,{})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),c(e),n(e)}))};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),B()},6:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.d6d836b8.chunk.js.map
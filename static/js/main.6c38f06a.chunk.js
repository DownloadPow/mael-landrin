(this["webpackJsonpmael-landrin"]=this["webpackJsonpmael-landrin"]||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/photo-myself.c2c50dcc.JPG"},47:function(e,t,a){e.exports=a(92)},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),i=(a(52),a(38)),s=a(39),o=a(44),m=a(40),u=a(45),d=(a(53),a(54),a(9)),p=a(23),f=a(20),g=(a(55),function(){return r.a.createElement("header",{className:"bg-light"},r.a.createElement(d.a,null,r.a.createElement(p.a,{bg:"light",expand:"lg"},r.a.createElement(p.a.Brand,{href:"#"},"Mael Landrin"),r.a.createElement(p.a.Toggle,{"aria-controls":"ml-navbar"}),r.a.createElement(p.a.Collapse,{id:"ml-navbar"},r.a.createElement(f.a,null,r.a.createElement(f.a.Link,{href:"#aboutScroll",className:"animated infinite pulse"},"About"),r.a.createElement(f.a.Link,{href:"#experienceScroll",className:"animated infinite pulse"},"Portfolio"),r.a.createElement(f.a.Link,{href:"#skillScroll",className:"animated infinite pulse"},"Skills"),r.a.createElement(f.a.Link,{href:"#contactScroll",className:"animated infinite pulse"},"Contact"))))))}),E=(a(27),a(32),a(7)),b=a.n(E),h=a(15),v=a(12),y=a(21),k=(a(60),function(e){var t=e.experienceData,a=t.name,n=t.url,c=t.description,l=t.fileUrl;return r.a.createElement(y.a,{className:"card-experience"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(y.a.Img,{variant:"top",src:l,alt:a}),r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,a),r.a.createElement(y.a.Text,null,c))))}),S=a(42),N=a.n(S),j=a(18),x=a(11),w=a(5),O=a(46),I=(a(80),function(e){var t=e.onSubmit,a=e.children,n=Object(O.a)(e,["onSubmit","children"]);return r.a.createElement("button",Object.assign({className:"custom-button",onClick:t},n),a)}),W=(a(81),a(82),a(83),a(22)),C=a.n(W),L=(a(84),a(93),function(){var e=Object(h.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.collection("experiences").get();case 2:if(t=e.sent,a=[],t.empty){e.next=7;break}return t.docs.map((function(e){a.push(e.data())})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());C.a.initializeApp({apiKey:"AIzaSyA3hVtxPO9SiAS2CS-YBh1Cy7Q3EMJcn-4",authDomain:"mael-landrin.firebaseapp.com",databaseURL:"https://mael-landrin.firebaseio.com",projectId:"mael-landrin",storageBucket:"mael-landrin.appspot.com",messagingSenderId:"985005520082",appId:"1:985005520082:web:60e004e2f3b7fecd39a90b"});var A=C.a.firestore(),B=(C.a,function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(v.a)(l,2),s=i[0],o=i[1],m=Object(n.useState)(""),u=Object(v.a)(m,2),p=u[0],f=u[1],g=Object(n.useState)(0),E=Object(v.a)(g,2),y=(E[0],E[1],Object(n.useState)({name:"",description:"",url:"",fileExperience:"",skills:""})),S=Object(v.a)(y,2),w=S[0];S[1];Object(n.useEffect)((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=(t=e.sent).sort((function(e,t){return e.order-t.order})),c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[w]);var O=function(e){var t=e.target.dataset.name;if(0!==document.querySelectorAll(".experience-section .filters .item-filter.active").length&&document.querySelectorAll(".experience-section .filters .item-filter.active")[0].classList.remove("active"),p===t)f(""),o([]),e.target.classList.remove("active");else{f(t),e.target.classList.add("active");var n=a.filter((function(e){return e.skills.includes(t)}));o(n)}};return r.a.createElement(d.a,{fluid:!0,className:"experience"},r.a.createElement(d.a,{id:"experienceScroll"},r.a.createElement("div",{className:"experience-section"},r.a.createElement("h2",{className:"text-center"},"My experiences"),a?r.a.createElement("div",null,r.a.createElement("p",{className:"text-center"},"Here are most of the websites I fully/partly did"),r.a.createElement("div",{className:"filters"},r.a.createElement("span",{className:"item-filter","data-name":"React",onClick:function(e){return O(e)}},"React"),r.a.createElement("span",{className:"item-filter","data-name":"WordPress",onClick:function(e){return O(e)}},"Wordpress")),r.a.createElement(j.a,null,0===s.length?a.map((function(e){return r.a.createElement(x.a,{xs:12,lg:4,key:e.id},r.a.createElement(k,{experienceData:e}))})):s.map((function(e){return r.a.createElement(x.a,{xs:12,lg:4,key:e.id},r.a.createElement(k,{experienceData:e}))})))):r.a.createElement("div",{className:"loader"},r.a.createElement(N.a,{type:"Plane",color:"#00BFFF",height:300,width:300})))))}),M=(a(88),function(e){return r.a.createElement("div",{className:"single-skill"},r.a.createElement("div",{className:"inner-skill"},r.a.createElement("div",{className:"skill-img-wrap bg-light"},r.a.createElement("img",{src:e.imgUrl,alt:e.name}),r.a.createElement("h2",null,e.name))))}),P=(a(89),function(e){var t=[{name:"PHP",img:e.urlWebsite+"/img/php.png"},{name:"JavaScript",img:e.urlWebsite+"/img/javascript.png"},{name:"Node.js",img:e.urlWebsite+"/img/nodejs.png"},{name:"React",img:e.urlWebsite+"/img/react.png"},{name:"CSS",img:e.urlWebsite+"/img/css.png"},{name:"HTML",img:e.urlWebsite+"/img/html.png"},{name:"Git",img:e.urlWebsite+"/img/git.png"},{name:"WordPress",img:e.urlWebsite+"/img/wordpress.png"}];return r.a.createElement(d.a,{fluid:!0,className:"container-fluid skills"},r.a.createElement(d.a,{id:"skillScroll"},r.a.createElement("h2",{className:"text-center"},"Skills"),r.a.createElement("div",{className:"skillscontainer"},r.a.createElement(j.a,null,t.map((function(e,t){return r.a.createElement(x.a,{xs:12,md:3,key:t},r.a.createElement(M,{name:e.name,imgUrl:e.img}))}))))))}),F=a(43),D=a.n(F),R=(a(90),function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"about-section",id:"aboutScroll"},r.a.createElement("h2",null,"About me"),r.a.createElement("div",{className:"picAndText"},r.a.createElement("div",{className:"img-box"},r.a.createElement("img",{src:D.a,alt:"it's-a me a-Mael"})),r.a.createElement("p",null,"I'm a freelance web developer. I studied for 3 years in college ( first 2 years studying Business and Languages, third year studying Web Marketing, Design and Development ). I learnt WordPress during my first contract, and taught myself React on my free time.")),r.a.createElement("h2",null,"My skills and experiences"),r.a.createElement("p",null,"I've been working with WordPress for more than 2 years ( with minimal plugins, only CF7, ACF ), learnt JavaScript for animation purposes during these 2 years. I also started learning React and Node.JS in August 2019."),r.a.createElement("p",null,"I made this website using React and Node as a training project, and I've got a few projects in mind that I'll add to my own website. So stay tuned :)")))}),T=(a(91),function(){var e=Object(n.useState)(""),t=Object(v.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(v.a)(l,2),s=i[0],o=i[1],m=Object(n.useState)(""),u=Object(v.a)(m,2),p=u[0],f=u[1],g=function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),"template_c2dM1esL",E("template_c2dM1esL",{message_html:p,from_name:a,reply_to:s});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e,t){window.emailjs.send("gmail",e,t).then((function(e){document.getElementById("contactFalse").classList.remove("contact-displayed"),document.getElementById("contactTrue").classList.add("contact-displayed"),document.querySelector(".contact-form").reset(),console.log("test")})).catch((function(e){document.getElementById("contactTrue").classList.remove("contact-displayed"),document.getElementById("contactFalse").classList.add("contact-displayed"),console.log("fail")}))};return r.a.createElement(d.a,{className:"contact-section",id:"contactScroll"},r.a.createElement("h2",null,"Contact me"),r.a.createElement(w.a,{className:"contact-form"},r.a.createElement(w.a.Row,{className:"toprow-contact"},r.a.createElement(x.a,null,r.a.createElement(w.a.Control,{id:"contactName",placeholder:"Name",onChange:function(e){c(e.target.value)}})),r.a.createElement(x.a,null,r.a.createElement(w.a.Control,{id:"contactAddress",type:"email",placeholder:"Email address",onChange:function(e){o(e.target.value)}}))),r.a.createElement(w.a.Group,{controlId:"contactForm.contactMessage",id:"contactMessage"},r.a.createElement(w.a.Control,{as:"textarea",rows:"5",placeholder:"Your message",onChange:function(e){f(e.target.value)}})),r.a.createElement(I,{type:"button",onSubmit:g},"Send"),r.a.createElement("div",{className:"error-contact",id:"contactFalse"},"Error sending email, please try again :("),r.a.createElement("div",{className:"success-contact",id:"contactTrue"},"Email sent successfully, thanks :)")))}),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={urlWebsite:"https://monkeyfeeder.github.io/mael-landrin"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(R,null),r.a.createElement(B,null),r.a.createElement(P,{urlWebsite:this.state.urlWebsite}),r.a.createElement(T,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.6c38f06a.chunk.js.map
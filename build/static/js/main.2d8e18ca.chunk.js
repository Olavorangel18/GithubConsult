(this.webpackJsonpgithub=this.webpackJsonpgithub||[]).push([[0],{34:function(e,t,s){},53:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(27),n=s.n(r),i=(s(34),s(7)),l=s(11),o=s.n(l),j=s.p+"static/media/logoCRV.73cf936d.svg",u=s.p+"static/media/search.99fc5d05.svg",h=s(2),p=(s(53),s(0));function b(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],a=t[1],r=Object(h.f)();return Object(p.jsx)("div",{class:"containerSearch",children:Object(p.jsxs)("div",{className:"search",children:[Object(p.jsx)("img",{className:"imgLogo",src:j,alt:"logo"}),Object(p.jsx)("div",{className:"containerWord",children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.a.get("https://api.github.com/users/".concat(s)).then((function(e){var t=e.data,s=t.login,c=[];c.push(t.avatar_url),c.push(t.login),c.push(t.created_at),c.push(t.followers),c.push(t.following),c.push("https://github.com/".concat(s,"/")),c.push(t.public_repos),c.push(t.repos_url),c.push(t.public_gists),c.push(t.followers_url),c.push(t.following_url),c.push(t.gists_url),c.push(t.repos_url),localStorage.setItem("dates",JSON.stringify(c)),r.push("/user/")}))},children:[Object(p.jsx)("input",{type:"search",placeholder:"Digite o nome aqui",value:s,className:"input",onChange:function(e){a(e.target.value)}}),Object(p.jsx)("button",{type:"submit",className:"butaoSearch",children:Object(p.jsx)("img",{className:"svgSearch",src:u,alt:"pesquisa"})})]})})]})})}var d=s(9),O=s(17),m=s.n(O),g=s(29),x=s.p+"static/media/logoCRV.73cf936d.svg";s(61);function f(){var e=0,t=Object(c.useState)([]),s=Object(i.a)(t,2),a=s[0],r=s[1],n=Object(c.useState)([]),l=Object(i.a)(n,2),o=l[0],j=l[1],u=Object(c.useState)([]),h=Object(i.a)(u,2),b=h[0],O=h[1],f=Object(c.useState)([]),N=Object(i.a)(f,2),v=N[0],S=N[1],_=Object(c.useState)([]),I=Object(i.a)(_,2),J=I[0],R=I[1],w=Object(c.useState)([]),y=Object(i.a)(w,2),C=y[0],D=y[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("repoName");e=JSON.parse(e),r(e)}),[]),Object(c.useEffect)(Object(g.a)(m.a.mark((function e(){var t,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("repoCreated_at");case 2:return t=e.sent,e.next=5,JSON.parse(t);case 5:t=e.sent,s=t.map((function(e){return e.substring(0,10)})),j(s);case 8:case"end":return e.stop()}}),e)}))),[]),Object(c.useEffect)((function(){var e=localStorage.getItem("repoDescription");e=JSON.parse(e),O(e)}),[]),Object(c.useEffect)((function(){var e=localStorage.getItem("repoHtml_url");e=JSON.parse(e),S(e)}),[]),Object(c.useEffect)((function(){var e=localStorage.getItem("repoId");e=JSON.parse(e),R(e)}),[]),Object(c.useEffect)((function(){var e=localStorage.getItem("dates");e=JSON.parse(e),D(e)}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"tudoCentro",children:[Object(p.jsxs)("header",{children:[Object(p.jsx)(d.b,{to:"/User",children:Object(p.jsx)("img",{className:"imgLogo2",src:x,alt:"logo"})}),Object(p.jsx)("div",{className:"dream"}),Object(p.jsx)("div",{className:"dream"})]}),Object(p.jsxs)("div",{className:"center",children:[Object(p.jsxs)("div",{className:"infGeral",children:[Object(p.jsx)("div",{className:"dream2",children:Object(p.jsx)("h1",{className:"titleRep",children:"Repositorios"})}),Object(p.jsx)("div",{className:"dream2",children:Object(p.jsxs)("p",{children:["Projetos que ",Object(p.jsx)("span",{children:C[1]})," vinculou ao GitHub foram:"]})})]}),Object(p.jsx)("ul",{className:"Repo",children:a.map((function(t){return e+=1,console.log(v[e-1]),Object(p.jsxs)("li",{className:"listRepo",children:[Object(p.jsx)("p",{className:"dateRepo",children:o[e-1]}),Object(p.jsxs)("div",{className:"infRepo",children:[Object(p.jsx)("h2",{className:"titleRepo",children:Object(p.jsx)("span",{children:t})}),Object(p.jsx)("p",{className:"descriptionRepo",children:b[e-1]}),Object(p.jsx)("p",{children:Object(p.jsxs)("span",{children:["ID: ",J[e-1]]})})]}),Object(p.jsx)("button",{className:"repoButton",children:Object(p.jsx)("a",{target:"_blank",href:v[e-1],children:Object(p.jsx)("p",{className:"textGit",children:"Github"})})})]})}))})]})]})})}var N=s.p+"static/media/logoCRV.73cf936d.svg",v=s.p+"static/media/search.99fc5d05.svg";s(62);function S(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),s=t[0],a=t[1];Object(c.useEffect)((function(){var e=localStorage.getItem("dates");e=JSON.parse(e),a(e)}),[]);var r=Object(c.useState)(""),n=Object(i.a)(r,2),l=n[0],j=n[1],u=Object(h.f)();return Object(p.jsxs)("div",{className:"containerSearch",children:[Object(p.jsxs)("div",{className:"search2",children:[Object(p.jsx)(d.b,{to:"/",children:Object(p.jsx)("img",{className:"imgLogo2",src:N,alt:"logo"})}),Object(p.jsx)("div",{className:"containerWord",children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.a.get("https://api.github.com/users/".concat(l)).then((function(e){localStorage.removeItem("dates");var t=e.data,s=t.login,c=[];c.push(t.avatar_url),c.push(t.login),c.push(t.created_at),c.push(t.followers),c.push(t.following),c.push("https://github.com/".concat(s,"/")),c.push(t.public_repos),c.push(t.repos_url),c.push(t.public_gists),c.push(t.followers_url),c.push(t.following_url),c.push(t.gists_url),c.push(t.repos_url),localStorage.setItem("dates",JSON.stringify(c));var r=localStorage.getItem("dates");r=JSON.parse(r),a(r),u.push("/user")}))},children:[Object(p.jsx)("input",{id:"searchRoute",type:"search",placeholder:"Digite o nome aqui",value:l,className:"input2",onChange:function(e){j(e.target.value)}}),Object(p.jsx)("button",{type:"submit",className:"butaoSearch2",children:Object(p.jsx)("img",{className:"svgSearch2",src:v,alt:"pesquisa"})})]})}),Object(p.jsx)("div",{className:"dream"})]}),Object(p.jsxs)("div",{className:"containerDados",children:[Object(p.jsx)("div",{className:"containerName",children:Object(p.jsx)("h1",{children:s[1]})}),Object(p.jsxs)("div",{className:"containerOthers",children:[Object(p.jsx)("img",{src:s[0],className:"imgUser"}),Object(p.jsxs)("ul",{className:"containerHex",children:[Object(p.jsxs)("li",{className:"dates",children:[Object(p.jsx)("h2",{children:s[3]}),Object(p.jsx)("p",{children:"Seguidores"})]}),Object(p.jsxs)("li",{className:"dates",children:[Object(p.jsx)("h2",{children:s[4]}),Object(p.jsx)("p",{children:"Seguindo"})]})]}),Object(p.jsxs)("ul",{className:"containerHex",children:[Object(p.jsxs)("li",{onClick:function(){o.a.get(s[12]).then((function(e){var t=e.data,s=[],c=[],a=[],r=[],n=[];t.map((function(e){s.push(e.name)})),t.map((function(e){c.push(e.created_at)})),t.map((function(e){a.push(e.description)})),t.map((function(e){r.push(e.html_url)})),t.map((function(e){n.push(e.id)})),localStorage.setItem("repoName",JSON.stringify(s)),localStorage.setItem("repoCreated_at",JSON.stringify(c)),localStorage.setItem("repoDescription",JSON.stringify(a)),localStorage.setItem("repoHtml_url",JSON.stringify(r)),localStorage.setItem("repoId",JSON.stringify(n)),u.push("/user/repo")}))},className:"dates",children:[Object(p.jsx)("h2",{children:s[6]}),Object(p.jsx)("p",{children:"Repositorios"})]}),Object(p.jsxs)("li",{className:"dates",children:[Object(p.jsx)("h2",{children:s[8]}),Object(p.jsx)("p",{children:"Gists"})]})]}),Object(p.jsx)("button",{className:"buttonGithub",children:Object(p.jsx)("a",{target:"_blank",href:s[5],children:Object(p.jsx)("p",{className:"githubText",children:"Github Perfil"})})})]})]})]})}function _(){return Object(p.jsx)(d.a,{children:Object(p.jsxs)(h.c,{children:[Object(p.jsx)(h.a,{path:"/",exact:!0,component:b}),Object(p.jsx)(h.a,{path:"/user",exact:!0,component:S}),Object(p.jsx)(h.a,{path:"/user/repo",exact:!0,component:f})]})})}var I=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(_,{})})},J=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,64)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),r(e),n(e)}))};n.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root")),J()}},[[63,1,2]]]);
//# sourceMappingURL=main.2d8e18ca.chunk.js.map
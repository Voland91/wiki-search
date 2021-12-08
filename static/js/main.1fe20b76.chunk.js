(this["webpackJsonpwiki-search"]=this["webpackJsonpwiki-search"]||[]).push([[0],{52:function(n,e,t){"use strict";t.r(e);var c,a,r,i,o,s,d,l,u,h,b,j,g,f,x,m,p,O,v,w,S,k,A,y,z,C,F,L=t(0),B=t.n(L),I=t(15),E=t.n(I),J=t(3),N=t(2),D=Object(N.b)(c||(c=Object(J.a)(["\n\n    *, *::before, *::after {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n\n    body {\n        font-family: 'Montserrat', sans-serif;\n        overflow-x: hidden;\n    }\n    "]))),H={colors:{white:"#fff",gray:"#dadada",black:"#0d0d0d",lightGray:"#f0f0f0"},fontWeights:{thin:100,regular:400,bold:800},fontSizes:{s:"12px",m:"20px",l:"35px",xl:"60px"},mobileFontSizes:{s:"10px",m:"14px",l:"28px",xl:"40px"}},U=t(4),W=t(6),T=N.d.nav(a||(a=Object(J.a)(["\n  padding: 0 20px;\n"]))),M=N.d.p(r||(r=Object(J.a)(["\n  font-weight: ",";\n  color: ",";\n  font-size: ",";\n\n  @media (max-width: 767px) {\n    font-size: ",";\n  }\n\n  ","\n\n  ","\n"])),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.mobileFontSizes.m}),(function(n){return n.dark&&Object(N.c)(i||(i=Object(J.a)(["\n      color: ",";\n      margin-top: 7px;\n    "])),(function(n){return n.theme.colors.black}))}),(function(n){return n.footer&&Object(N.c)(o||(o=Object(J.a)(["\n      color: ",";\n      font-size: ",";\n\n      @media (max-width: 767px) {\n        font-size: ",";\n      }\n    "])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.mobileFontSizes.s}))})),Q=t(1),V=function(n){var e=n.child,t=n.dark,c=n.footer;return Object(Q.jsx)(M,{dark:t,footer:c,children:e})},K=N.d.select(s||(s=Object(J.a)(['\n  background-color: transparent;\n  appearance: none;\n  border: none;\n  font-family: "Montserrat", sans-serif;\n  background: url(',") 100% no-repeat;\n  background-size: 12px;\n  padding-right: 11px;\n  font-size: ",";\n  font-weight: ",";\n  margin-bottom: 20px;\n\n  @media (max-width: 767px) {\n    font-size: ",";\n  }\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAfQAAAH0Bx0gPAAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACeSURBVDiN1ZPBDcIwDEWfMwt7sAQLMEWvnaRRC0dG4tY9+FyMZKgTIZULkSwl9n9PudgkseeUXfQvBAYcgQNQJT2+gswKcAbuACsgYAKKJHrlv56cWQEGfwioPYnDNeSH12AMzTmTODyH3CiJGIiSJUocXj7hN0EiuThY/L6BN4JEcvVK4VSQSJpwU5BIUlgS1tsFMzsBSLo1M/+/TE92ZfjD1tAH3gAAAABJRU5ErkJggg==",(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.mobileFontSizes.s})),P=N.d.option(d||(d=Object(J.a)(["\n  background-color: ",";\n"])),(function(n){return n.theme.colors.white})),R=function(n){var e=n.values,t=Object(U.f)();return Object(Q.jsxs)(K,{onChange:function(n){var e=n.target.value.split(",");t("/details/".concat(e[0],"/").concat(e[1]))},children:[Object(Q.jsx)(P,{disabled:!0,selected:!0,value:"",children:"history..."}),e.map((function(n){return Object(Q.jsx)(P,{value:[n.lang,n.name],children:"".concat(n.name)},"".concat(n.lang+n.name+e.indexOf(n)))}))]})},Y=N.d.div(l||(l=Object(J.a)(["\n  padding: 20px 0 20px 0;\n  position: relative;\n  z-index: 999;\n  max-width: 120px;\n  margin: 0 auto;\n  text-align: center;\n"]))),G=N.d.p(u||(u=Object(J.a)(["\n  font-weight: ",";\n  color: ",";\n  font-size: ",";\n\n  @media (max-width: 767px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.mobileFontSizes.m})),Z=N.d.div(h||(h=Object(J.a)(["\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: linear-gradient(\n    135deg,\n    rgba(255, 255, 255, 1) 0%,\n    rgba(251, 251, 251, 1) 50%,\n    rgba(222, 222, 222, 1) 100%\n  );\n  margin: 0 auto 10px auto;\n\n  @media (max-width: 767px) {\n    width: 80px;\n    height: 80px;\n  }\n"]))),X=t(8),q=N.d.div(b||(b=Object(J.a)(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 20px;\n  cursor: pointer;\n  padding: 7px;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.lightGray})),_=Object(N.d)(X.b)(j||(j=Object(J.a)(["\n  text-decoration: none;\n"]))),$=function(){return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(Y,{children:Object(Q.jsxs)(_,{to:"/",children:[Object(Q.jsx)(Z,{}),Object(Q.jsx)(G,{children:"wikipedia"})]})})})},nn=function(){var n=Object(L.useState)([]),e=Object(W.a)(n,2),t=e[0],c=e[1],a=Object(U.f)();return Object(L.useEffect)((function(){var n=localStorage.getItem("searchHistory");null==n&&void 0==n||c(JSON.parse(n))}),[a]),Object(Q.jsxs)(T,{children:[Object(Q.jsx)($,{}),t.length>0&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(V,{child:"See your search history",footer:!0}),Object(Q.jsx)(R,{values:t})]})]})},en="wikipedia.org/w/rest.php/v1/page",tn=function(n){return fetch(n).then((function(n){return n.json()})).catch((function(n){return n.message}))},cn=[{code:"en",name:"English"},{code:"pl",name:"polski"},{code:"es",name:"espa\xf1ol"}],an=t(21),rn=N.d.img(g||(g=Object(J.a)(["\n  background-repeat: no-repeat;\n  background-size: contain;\n  object-fit: cover;\n  background-image: url({src});\n  background-color: ",";\n  width: 50px;\n  height: 80px;\n  margin-right: 20px;\n"])),(function(n){return n.theme.colors.gray})),on=function(n){var e=n.src;return Object(Q.jsx)(rn,{src:e})},sn=N.d.h2(f||(f=Object(J.a)(["\n  font-weight: ",";\n  color: ",";\n  font-size: ",";\n\n  @media (max-width: 767px) {\n    font-size: ",";\n  }\n\n  ","\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.mobileFontSizes.m}),(function(n){return n.error&&Object(N.c)(x||(x=Object(J.a)(["\n      color: ",";\n      font-size: ",";\n      letter-spacing: 10px;\n\n      @media (max-width: 767px) {\n        font-size: ",";\n      }\n    "])),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.mobileFontSizes.xl}))})),dn=function(n){var e=n.child,t=n.error;return Object(Q.jsx)(sn,{error:t,children:e})},ln=function(n){var e=n.result,t=n.searchLanguage;return Object(Q.jsx)(_,{to:"/details/".concat(t,"/").concat(e.key),onClick:function(){var n=localStorage.getItem("searchHistory");if(null!=n||void 0!=n){var c=[].concat(Object(an.a)(JSON.parse(n)),[{lang:t,name:e.key}]);localStorage.setItem("searchHistory",JSON.stringify(c))}else{var a=[{lang:t,name:e.key}];localStorage.setItem("searchHistory",JSON.stringify(a))}},children:Object(Q.jsxs)(q,{defaultValue:[t,e.key],children:[null!=e.thumbnail&&Object(Q.jsx)(on,{src:e.thumbnail.url}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(dn,{child:e.title}),Object(Q.jsx)(V,{child:e.description,dark:!0})]})]})})},un=t(19),hn=Object(N.d)(un.DebounceInput)(m||(m=Object(J.a)(["\n  width: 100%;\n  height: 60px;\n  border: none;\n  font-weight: ",";\n  color: ",";\n  font-size: ",";\n  outline: none;\n  caret-color: ",";\n  background-color: transparent;\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:active,\n  :focus {\n    border-bottom: 2px solid transparent;\n  }\n\n  @media (max-width: 767px) {\n    font-size: ",";\n    height: 30px;\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.mobileFontSizes.l})),bn=function(n){var e=n.handleSetSearch,t=n.search;return Object(Q.jsx)(hn,{type:"text",value:t,onChange:e,placeholder:"Click to search...",debounceTimeout:500,minLength:1})},jn=function(n){var e=n.handleChangeSearchLanguage,t=n.values;return Object(Q.jsx)(K,{onChange:e,children:t.map((function(n){return Object(Q.jsx)(P,{value:n.code,children:n.name.toLowerCase()},n.code)}))})},gn=function(n){var e=n.handleChangeSearchLanguage,t=n.handleSetSearch,c=n.search;return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(jn,{handleChangeSearchLanguage:e,values:cn}),Object(Q.jsx)(bn,{handleSetSearch:t,search:c})]})},fn=N.d.main(p||(p=Object(J.a)(["\n  max-width: 800px;\n  width: 100%;\n  margin: 0 auto;\n"]))),xn=N.d.div(O||(O=Object(J.a)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 20px;\n"]))),mn=N.d.div(v||(v=Object(J.a)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px 20px 0 20px;\n"]))),pn=N.d.div(w||(w=Object(J.a)(["\n  position: absolute;\n  display: block;\n  left: 40%;\n  top: -30%;\n  width: calc(100vw / 1.75);\n  height: calc(100vw / 1.75);\n  border-radius: 50%;\n  background: linear-gradient(\n    135deg,\n    rgba(255, 255, 255, 0.5) 0%,\n    rgba(251, 251, 251, 0.5) 50%,\n    rgba(222, 222, 222, 0.5) 100%\n  );\n  z-index: -1;\n\n  @media (max-width: 767px) {\n    display: none;\n  }\n"]))),On=function(){var n=Object(L.useState)([]),e=Object(W.a)(n,2),t=e[0],c=e[1],a=Object(L.useState)(""),r=Object(W.a)(a,2),i=r[0],o=r[1],s=Object(L.useState)("en"),d=Object(W.a)(s,2),l=d[0],u=d[1];Object(L.useEffect)((function(){""!=i&&function(n,e,t){tn("https://".concat(t,".").concat("wikipedia.org/w/rest.php/v1/search/page","?q=").concat(e,"&limit=5")).then((function(e){n(e.pages)}))}(c,i,l),""===i&&c([])}),[i]);return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(pn,{}),Object(Q.jsxs)(fn,{children:[Object(Q.jsx)(xn,{children:Object(Q.jsx)(gn,{handleSetSearch:function(n){o(n.target.value)},search:i,handleChangeSearchLanguage:function(n){c([]),o(""),u(n.target.value)},searchingLanguages:cn})}),Object(Q.jsx)(mn,{children:t.length>0?t.map((function(n){return Object(Q.jsx)(ln,{result:n,searchLanguage:l},n.id)})):Object(Q.jsx)(V,{child:"Type what you are looking for..."})})]})]})},vn=t(20),wn=t.n(vn),Sn=N.d.article(S||(S=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),kn=N.d.iframe(k||(k=Object(J.a)(["\n  padding-left: 10px;\n  border: none;\n  min-height: 500px;\n  max-width: 100vw;\n  overflow: hidden;\n"]))),An=N.d.div(A||(A=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 20px;\n  max-height: 40px;\n  margin: 20px 0;\n"]))),yn=Object(N.d)(wn.a)(y||(y=Object(J.a)(["\n  align-self: center;\n  padding-top: 150px;\n"]))),zn=function(n){var e=n.values,t=Object(U.f)();return Object(Q.jsxs)(K,{onChange:function(n){var e=n.target.value.split(",");t("/details/".concat(e[0],"/").concat(e[1]))},children:[Object(Q.jsx)(P,{disabled:!0,selected:!0,value:"",children:"languages..."}),e.map((function(n){return Object(Q.jsx)(P,{value:[n.code,n.key],children:n.name.toLowerCase()},n.code)}))]})},Cn=function(){var n=Object(L.useState)(""),e=Object(W.a)(n,2),t=e[0],c=e[1],a=Object(U.g)(),r=a.lang,i=a.name,o=Object(L.useState)([]),s=Object(W.a)(o,2),d=s[0],l=s[1],u=Object(L.useState)(!0),h=Object(W.a)(u,2),b=h[0],j=h[1];Object(L.useEffect)((function(){void 0!=i&&void 0!=r&&(!function(n,e,t){tn("https://".concat(t,".").concat(en,"/").concat(e,"/links/language")).then((function(e){n(e)}))}(l,i,r),c("https://".concat(r,".").concat(en,"/").concat(i,"/html")),j(!0))}),[i,r]),Object(L.useEffect)((function(){j(!0)}),[t]);return Object(Q.jsxs)(Sn,{children:[b&&Object(Q.jsx)(yn,{type:"Rings",color:"#dadada"}),!b&&Object(Q.jsxs)(An,{children:[Object(Q.jsx)(V,{child:"Switch article language version",footer:!0}),Object(Q.jsx)(zn,{values:d})]}),Object(Q.jsx)(kn,{src:t,onLoad:function(){return j(!1)}})]})},Fn=t.p+"static/media/404bg.8fc6fa23.png",Ln=N.d.div(z||(z=Object(J.a)(['\n  margin: 0 auto;\n  text-align: center;\n  padding: 0 20px;\n\n  &::after {\n    content: "";\n    background-image: url(',");\n    opacity: 0.1;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    width: 90vh;\n    height: 700px;\n    bottom: 0;\n    position: absolute;\n    z-index: 0;\n\n    @media (max-width: 767px) {\n      display: none;\n    }\n  }\n"])),Fn),Bn=function(){return Object(Q.jsxs)(Ln,{children:[Object(Q.jsx)(dn,{child:"CDIV",error:!0}),Object(Q.jsx)(V,{child:"404 - page not found"}),Object(Q.jsx)(X.b,{to:"/",children:Object(Q.jsx)(V,{child:"back to homepage",dark:!0})})]})},In=N.d.footer(C||(C=Object(J.a)(["\n  padding: 20px;\n  background-color: rgba(255, 255, 255, 0.8);\n  max-height: 100px;\n"]))),En=function(){return Object(Q.jsx)(In,{children:Object(Q.jsx)("a",{href:"https://www.behance.net/gallery/75870375/Wikipedia-Imagination/modules/440847641",target:"_blank",rel:"nofollow noreferrer",children:Object(Q.jsx)(V,{child:"Design by Dmitriy Kozhevnikov - Wikipedia Imagination",footer:!0})})})},Jn=N.d.div(F||(F=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n"]))),Nn=function(){return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(D,{}),Object(Q.jsx)(N.a,{theme:H,children:Object(Q.jsxs)(Jn,{children:[Object(Q.jsx)(nn,{}),Object(Q.jsxs)(U.c,{children:[Object(Q.jsx)(U.a,{index:!0,element:Object(Q.jsx)(On,{})}),Object(Q.jsx)(U.a,{path:"details/:lang/:name",element:Object(Q.jsx)(Cn,{})}),Object(Q.jsx)(U.a,{path:"*",element:Object(Q.jsx)(Bn,{})})]}),Object(Q.jsx)(En,{})]})})]})},Dn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),c(n),a(n),r(n),i(n)}))};E.a.render(Object(Q.jsx)(B.a.StrictMode,{children:Object(Q.jsx)(X.a,{basename:"/wiki-search",children:Object(Q.jsx)(Nn,{})})}),document.getElementById("root")),Dn()}},[[52,1,2]]]);
//# sourceMappingURL=main.1fe20b76.chunk.js.map
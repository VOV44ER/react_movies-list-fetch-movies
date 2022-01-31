(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(8),s=c.n(n),a=(c(19),c(13)),i=c(9),r=c(10),l=c(14),o=c(12),j=c(1),d=(c(20),c(21),c(22),c(0)),m=function(e){var t=e.movie;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(d.jsxs)("div",{className:"content",children:[t.Plot,Object(d.jsx)("br",{})]})]})]})},u=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(m,{movie:e},e.imdbID)}))})},b=c(6),v=c(4),h=c(2),O=c.n(h),x=c(11),f=c.n(x),p=function(){var e=Object(b.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?apikey=".concat("c544192c","&t=").concat(t));case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("".concat(c.status,": ").concat(c.text));case 5:return e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=(c(25),function(e){var t=e.add,c=Object(j.useState)(""),n=Object(v.a)(c,2),s=n[0],a=n[1],i=Object(j.useState)(null),r=Object(v.a)(i,2),l=r[0],o=r[1],u=Object(j.useState)(""),h=Object(v.a)(u,2),x=h[0],N=h[1],g=Object(j.useState)(!1),w=Object(v.a)(g,2),k=w[0],y=w[1],C=function(){var e=Object(b.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!s.trim()){e.next=10;break}return e.next=4,p(s);case 4:t=e.sent,y(!1),o(t),N(""),e.next=13;break;case 10:o(null),y(!0),N("Cant find a movie with such title");case 13:e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),o(null),y(!0),N("Cant find a movie with such title");case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{className:"find-movie",children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",value:s,onChange:function(e){return a(e.target.value)},className:f()("input",k?"is-danger":"")})}),Object(d.jsx)("p",{className:"help is-danger",children:x})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"button",className:"button is-light",onClick:C,children:"Find a movie"})}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){l?(t(l),o(null),a("")):N("Problem with adding movie")},children:"Add to the list"})})]})]}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{className:"title",children:"Preview"}),l&&Object(d.jsx)(m,{movie:l})]})]})}),g=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={movies:[]},e.addMovie=function(t){e.state.movies.find((function(e){return e.imdbID===t.imdbID}))||e.setState((function(e){return{movies:[].concat(Object(a.a)(e.movies),[t])}}))},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this.state.movies;return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(u,{movies:e})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(N,{add:this.addMovie})})]})}}]),c}(j.Component);s.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.009ae600.chunk.js.map
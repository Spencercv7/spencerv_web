(this.webpackJsonpspencerv_web=this.webpackJsonpspencerv_web||[]).push([[0],{14:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(1),i=t.n(o),c=t(3),s=t(4),d=t(7),u=t(5),l=t(8),h=(t(14),t(6)),w=t.n(h);function v(e){var n,t,a=e.windowHeight,r=e.windowHeight,o=0,i=[];e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight,e.WEBGL),n=a/30,t=r/30,e.background(0,1),e.fill(0);for(var o=0;o<n;o++){i[o]=[];for(var c=0;c<t;c++)i[o][c]=0}},e.draw=function(){e.stroke("#E58162"),e.background(0,1);for(var c=o-=.02,s=0;s<t;s++){for(var d=0,u=0;u<n;u++)i[u][s]=e.map(e.noise(d,c),0,2,-300,300),d+=.2;c+=.2}e.background(0),e.translate(0,50),e.rotateX(e.PI/3),e.translate(-a/2,-r/2);for(s=0;s<t-1;s++){e.beginShape(e.TRIANGLE_STRIP);for(u=0;u<n;u++)e.vertex(30*u,30*s,i[u][s]),e.vertex(30*u,30*(s+1),i[u][s+1]);e.endShape()}},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}var f=function(e){function n(){return Object(c.a)(this,n),Object(d.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"home_container"},r.a.createElement("div",{class:"header_title"},r.a.createElement("h2",null,"SPENCER VENABLE."),r.a.createElement("h6",null,"Software Developer")),r.a.createElement("nav",{class:"main_nav"}),r.a.createElement(w.a,{id:"home_background_animation",sketch:v}))}}]),n}(r.a.Component);i.a.render(r.a.createElement(f,null),document.getElementById("root"))},9:function(e,n,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.4897a98f.chunk.js.map
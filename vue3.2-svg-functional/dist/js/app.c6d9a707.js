(function(t){function e(e){for(var i,o,c=e[0],u=e[1],h=e[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);s&&s(e);while(p.length)p.shift()();return a.push.apply(a,h||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3962:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),r=["width","height"],a={class:"ui"},o=Object(i["e"])("p",null,"Emit Particle Per 1 Frame",-1);function c(t,e,n,c,u,h){var s=Object(i["i"])("ParticleComponent");return Object(i["g"])(),Object(i["d"])("div",null,[(Object(i["g"])(),Object(i["d"])("svg",{width:t.innerWidth,height:t.innerHeight},[(Object(i["g"])(!0),Object(i["d"])(i["a"],null,Object(i["h"])(t.particles,(function(t){return Object(i["g"])(),Object(i["c"])(s,{key:t.key,x:t.displayX,y:t.displayY},null,8,["x","y"])})),128))],8,r)),Object(i["e"])("div",a,[o,Object(i["l"])(Object(i["e"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.emitOnFrame=e}),type:"range",min:"1",max:"50"},null,512),[[i["k"],t.emitOnFrame]]),Object(i["l"])(Object(i["e"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.emitOnFrame=e}),type:"number",min:"1",max:"50"},null,512),[[i["k"],t.emitOnFrame]]),Object(i["e"])("p",null,"現在のパーティクル数 : "+Object(i["j"])(t.particles.length)+" 個",1)])])}n("99af"),n("a9e3"),n("159b"),n("a434"),n("dca8");var u=n("d4ec"),h=n("bee2"),s=60,l=function(){function t(e,n,i){Object(u["a"])(this,t),this.x=e,this.y=n,this.key=i,this.vx=0,this.vy=0,this.life=0,this.displayX=Math.round(this.x),this.displayY=Math.round(this.y),this.vx=30*(Math.random()-.5),this.vy=30*(Math.random()-.5),this.life=s}return Object(h["a"])(t,[{key:"update",value:function(){this.vy+=1,this.vx*=.96,this.vy*=.96,this.x+=this.vx,this.y+=this.vy,this.displayX=Math.round(this.x),this.displayY=Math.round(this.y),this.y>innerHeight&&(this.y=innerHeight,this.vy*=-1),this.life-=1}}]),t}(),p=function(t){var e=t.x,n=t.y;return Object(i["f"])("g",null,[Object(i["f"])("rect",{x:e,y:n,width:2,height:2})])},d=p,f=0,b={name:"AppComponent",components:{ParticleComponent:d},data:function(){return{particles:[],emitOnFrame:3,innerWidth:0,innerHeight:0}},mounted:function(){requestAnimationFrame(this.tick)},methods:{tick:function(){for(var t=this.particles.concat(),e=Number(this.emitOnFrame),n=0;n<e;n++)t.push(new l(innerWidth/2,innerHeight/4,f++));t.forEach((function(e,n){e.update(),e.life<=0&&t.splice(n,1)})),this.innerWidth!==window.innerWidth&&(this.innerWidth=window.innerWidth),this.innerHeight!==window.innerHeight&&(this.innerHeight=window.innerHeight),this.particles=Object.freeze(t),requestAnimationFrame(this.tick)}}};n("78aa");b.render=c;var y=b,m=Object(i["b"])(y);m.mount("#app")},"78aa":function(t,e,n){"use strict";n("3962")}});
//# sourceMappingURL=app.c6d9a707.js.map
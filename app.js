!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=2)}([function(e,t){e.exports='<article class="clip">\n  <header class="clip__header">\n    <img src="xxxHTMLLINKxxx0.96328563931112910.5534498844481575xxx" alt="" class="clip__preview" width="320" height="180" draggable="false">\n    <h2><a href="#" class="clip__title" target="_blank"></a></h2>\n  </header>\n  <main class="clip__body">\n    <ul class="clip__stats">\n      <li class="clip__stats-element">\n        <i class="fas fa-male clip__stats-icon"></i>\n        <span class="clip__stats-description clip__author"></span>\n      </li>\n      <li class="clip__stats-element">\n        <i class="far fa-calendar-alt clip__stats-icon"></i>\n        <span class="clip__stats-description clip__date"></span>\n      </li>\n      <li class="clip__stats-element">\n        <i class="far fa-eye clip__stats-icon"></i>\n        <span class="clip__stats-description clip__views"></span>\n      </li>\n    </ul>\n    <span class="clip__description"></span>\n  </main>\n</article>\n'},function(e,t){e.exports='<div class="slider">\n  <div class="slider__search-bar-wrapper">\n    <input type="text" class="slider__search-bar" placeholder="Type to find...">\n  </div>\n  <div class="slider__loader"></div>\n  <div class="slider__wrapper">\n    <div class="next-popup"></div>\n    <div class="prev-popup"></div>\n    <ul class="slider__list"></ul>\n    <div class="slider__nav">\n      <div class="slider__nav-btn slider__nav-btn--home">Home</div>\n      <div class="slider__nav-btn slider__nav-btn--previous">Previouse Page</div>\n      <div class="slider__nav-btn slider__nav-btn--next">Next Page</div>\n    </div>\n  </div>\n</div>\n'},function(e,t,s){"use strict";s.r(t);s(3);var i=s(0),n=s.n(i);var r={Clip:class{constructor(e){const t=document.createElement("div");t.innerHTML=n.a.trim(),t.querySelector(".clip__title").textContent=e.title,t.querySelector(".clip__author").textContent=e.author,t.querySelector(".clip__date").textContent=new Date(e.date).toLocaleDateString({year:"numeric",month:"long",day:"numeric"}),t.querySelector(".clip__views").textContent=parseInt(e.views,10).toLocaleString("ru"),t.querySelector(".clip__description").textContent=e.description,t.querySelector(".clip__preview").setAttribute("src",e.imgURL),t.querySelector(".clip__preview").setAttribute("alt",e.title);const s=`https://www.youtube.com/watch?v=${e.id}`;return t.querySelector(".clip__title").setAttribute("href",s),t.childNodes[0]}}},o=(s(5),s(1)),l=s.n(o);var a={Slider:class{constructor(){const e=document.createElement("div");e.innerHTML=l.a,[this.node]=e.childNodes,this.globalElement=document.documentElement,this.components={sliderWrapperNode:e.querySelector(".slider__wrapper"),sliderListNode:e.querySelector(".slider__list"),searchBar:e.querySelector(".slider__search-bar"),btns:{previous:e.querySelector(".slider__nav-btn--previous"),next:e.querySelector(".slider__nav-btn--next"),home:e.querySelector(".slider__nav-btn--home")},popups:{next:e.querySelector(".next-popup"),previous:e.querySelector(".prev-popup")},errorNode:null,loader:e.querySelector(".slider__loader")},this.options={maxNumberOfClips:4}}append(e=[]){const{Clip:t}=r;e.forEach(e=>{const s=new t(e),i=document.createElement("li");i.appendChild(s),i.classList.add("slider__element"),this.components.sliderListNode.appendChild(i)})}refresh(e=[]){this.clear(),this.append(e)}getClipWidth(){const e=this.node.querySelector(".slider__element");return parseFloat(getComputedStyle(e).width,10)}getShift(){return parseFloat(getComputedStyle(this.globalElement).getPropertyValue("--shift"))}setShift(e=0){this.globalElement.style.setProperty("--shift",`${e}px`)}setAnimationTime(e=0){this.globalElement.style.setProperty("--animation",`${e}s`)}showPopups(e=1){this.components.popups.next.textContent=e+1,this.components.popups.previous.textContent=e-1,this.components.popups.next.classList.add("popup--show"),this.components.popups.previous.classList.add("popup--show")}hidePopups(){this.components.popups.next.classList.remove("popup--show"),this.components.popups.previous.classList.remove("popup--show")}setSliderWidth(e=0){this.components.sliderListNode.style.width=`${e}px`}resize(){const e=this.getClipWidth(),t=Math.min(this.calcClipsInView(),this.options.maxNumberOfClips);this.components.sliderWrapperNode.style.width=`${t*e}px`}calcClipsInView(){const e=this.globalElement.clientWidth,t=this.getClipWidth();return Math.min(Math.trunc(e/t)||1,4)}setErrorNode(e="Something wrong"){const t=document.createElement("div"),{style:s}=t;s.width="50%",s.height="2rem",s.backgroundColor="white",s.display="flex",s.justifyContent="center",s.alignItems="center",s.margin="0 auto",t.textContent=e,this.node.insertBefore(t,this.components.sliderWrapperNode),this.components.errorNode=t}removeErrorNode(){const{errorNode:e}=this.components;e&&(e.remove(),this.components.errorNode=null)}clear(){this.removeErrorNode(),this.components.sliderListNode.innerHTML=""}hideLoader(){this.components.loader.style.display="",this.components.sliderWrapperNode.style.height=""}showLoader(){this.components.loader.style.display="block",this.components.sliderWrapperNode.style.height=0}render(e,t=[]){this.append(t),e.appendChild(this.node)}}};var p=class{constructor(){this.slider=new a.Slider,this.globalElement=document.documentElement}render(e,t){this.globalElement.style.setProperty("--animation","1s"),this.globalElement.style.setProperty("--shift","0");const s=document.createElement("style");s.innerHTML=".slider__list { transform: translateX(var(--shift)); transition-duration: var(--animation);} ",document.head.appendChild(s),this.slider.append(t),e.appendChild(this.slider.node)}refresh(e){this.removeLoader(),this.slider.refresh(e),this.slider.resize()}clearSlider(){this.slider.clear(),this.setLoader()}setError(){this.removeLoader(),this.slider.setErrorNode()}appendSlider(e,t){this.slider.append(e),this.slider.setSliderWidth(Math.ceil(this.slider.getClipWidth())*t)}getCurPage(e){const t=this.slider.calcClipsInView(),s=this.slider.getClipWidth(),i=this.slider.getShift(),n=Math.abs(Math.trunc(((e-t)*s+i)/s));return Math.trunc((e-n)/t)}setLoader(){this.slider.showLoader()}removeLoader(){this.slider.hideLoader()}hasClips(){return!!this.slider.components.sliderListNode.childNodes.length}};s(6);class c{constructor(e){this.state={key:e}}static parseData(e){return e.items.map(e=>({id:e.id,imgURL:e.snippet.thumbnails.medium.url,title:e.snippet.title,author:e.snippet.channelTitle,date:e.snippet.publishedAt,views:e.statistics.viewCount,description:e.snippet.description}))}async getData(e,t=""){let s=t?`&pageToken=${t}`:"";const i=`https://www.googleapis.com/youtube/v3/search?key=${this.state.key}&type=video&part=snippet&maxResults=15&q=${e}${s}`;return fetch(i).then(e=>e.json()).then(e=>{if(!e.items.length)throw new Error("Nothing is found");return s=e.nextPageToken,e.items.map(e=>e.id.videoId)}).then(e=>{const t=`https://www.googleapis.com/youtube/v3/videos?key=${this.state.key}&id=${e.toString()}&part=snippet,statistics`;return fetch(t)}).then(e=>e.json()).then(e=>({nextPageToken:s,items:c.parseData(e)})).catch(()=>null)}}function d(e,t=0,{slider:s,state:i={pages:15},appendSlides:n,setCurPage:r,fillSlider:o}){const l=parseInt(e,10);l||s.setShift(0),1===l&&o&&o();const a=s.getClipWidth(),p=s.calcClipsInView(),c=a*p;let d=s.getShift();(d-=l*c-t)>0?d=0:d<-a*(i.pages-p)&&(d=-a*(i.pages-p));Math.abs(Math.trunc(((i.pages-p)*a+d)/a))<=11&&n&&n(),s.setShift(d),r(i.pages)}var h={onMouseDown:function(e,t){const{slider:s}=t,{curPage:i}=t.state;s.setAnimationTime(0);const n=s.getShift();let r=n;const o=e.clientX||e.touches[0].clientX;let l=o;function a(e){const t=e.clientX||e.touches[0].clientX;r+=t-l,l=t,s.setShift(r)}function p(e){s.setAnimationTime(1);const i=s.getClipWidth(),r=e.clientX||e.changedTouches[0].clientX,l=o-r,c=s.getShift()-n;l>=i/3?d(1,-c,t):l<=-i/3?d(-1,-c,t):s.setShift(n),s.hidePopups(),document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),document.removeEventListener("mouseup",p),document.removeEventListener("touchend",p)}s.showPopups(i),document.addEventListener("mousemove",a),document.addEventListener("touchmove",a),document.addEventListener("mouseup",p),document.addEventListener("touchend",p)},turnPage:d,onResize:function(){this.view.hasClips()&&(this.view.slider.resize(),this.state.curPage=this.view.getCurPage(this.state.pages))},onInput:function(){this.state.url=this.view.slider.components.searchBar.value,this.refresh()}};var u=function(e,t){let s=null;return function(){s&&clearTimeout(s),s=setTimeout(()=>{e(),s=null},t)}};var m={views:{clipView:r,sliderView:a,AppView:p},models:{AppModel:c},controllers:{AppController:class{constructor(e,t){this.model=e,this.view=t,this.state={url:"",pages:0,nextPageToken:"",curPage:1,pageHub:[]}}async init(){window.g=this,this.view.render(document.body);const{onMouseDown:e,turnPage:t,onResize:s,onInput:i}=h,n={slider:this.view.slider,state:this.state,appendSlides:this.append.bind(this),fillSlider:this.appenSilder.bind(this),wrapper:this.view.slider.components.sliderListNode,setCurPage:e=>{this.state.curPage=this.view.getCurPage(e)}};this.view.slider.components.sliderListNode.addEventListener("mousedown",t=>e(t,n)),this.view.slider.components.sliderListNode.addEventListener("touchstart",t=>e(t,n)),this.view.slider.components.btns.previous.addEventListener("click",()=>t(-1,0,n)),this.view.slider.components.btns.next.addEventListener("click",()=>{t(1,0,n),this.appenSilder()}),this.view.slider.components.btns.home.addEventListener("click",()=>t(0,0,n));const r=u(i.bind(this),1e3);this.view.slider.components.searchBar.addEventListener("input",r);const o=s.bind(this);window.addEventListener("resize",o)}async refresh(){this.view.clearSlider(),this.state.pageHub=[];const e=await this.model.getData(this.state.url);e?(this.state.nextPageToken=e.nextPageToken,this.view.refresh(e.items),this.state.pages=15):this.view.setError()}appenSilder(){if(this.state.pageHub.length>=5){const e=this.state.pageHub.splice(this.state.pageHub.splice.length-6);this.view.appendSlider(e,this.state.pages)}}async append(){new Promise(e=>{this.state.pages+=15,e(this.model.getData(this.state.url,this.state.nextPageToken))}).then(e=>{this.state.nextPageToken=e.nextPageToken,this.state.pageHub=this.state.pageHub.concat(e.items)}).catch(()=>{this.state.pages-=15})}}}};const{controllers:v,models:g,views:_}=m,f=new g.AppModel("AIzaSyCFfjNRGCPuGsSIqwYJnrf3rjkAioLH9cI"),w=new _.AppView;new v.AppController(f,w).init()},function(e,t){},,function(e,t){},function(e,t){}]);

import{_}from"./NuxtImg.vue.fdb76f66.js";import{d as m,I as i,r as f,b as s,c as a,J as e,X as v,f as u,F as h,ah as k,n as b,p as g,i as w,e as x,k as I}from"./entry.174abe3e.js";const B=t=>(g("data-v-abcad331"),t=t(),w(),t),S={key:1,class:"loaded"},V=["poster"],C=["src"],$=["src","type"],N=["autoplay","src"],P=B(()=>x("button",null,null,-1)),E=[P],F=m({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(t){const r=t,c=i(()=>{if(r.src&&r.src.includes("youtube.com/watch")){const o=r.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(o==null?void 0:o[1])||""}?autoplay=1`,poster:r.poster||`https://i3.ytimg.com/vi/${(o==null?void 0:o[1])||""}/hqdefault.jpg`}}}),d=f(!1);if(!r.src&&!r.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const p=i(()=>{var o,l;return r.src||((l=(o=r.sources)==null?void 0:o[0])==null?void 0:l.src)||!1});return(o,l)=>{const y=_;return s(),a("div",{class:b(["video-player",{loaded:e(d)}])},[(e(c)?e(c).poster:t.poster)?(s(),v(y,{key:0,src:e(c)?e(c).poster:t.poster},null,8,["src"])):u("",!0),e(d)?(s(),a("div",S,[e(c)?e(c).name==="youtube"?(s(),a("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:t.autoplay,src:e(c).src},null,8,N)):u("",!0):(s(),a("video",{key:0,poster:t.poster,controls:"",autoplay:""},[e(p)?(s(),a("source",{key:0,src:e(p)},null,8,C)):u("",!0),(s(!0),a(h,null,k(t.sources,n=>(s(),a("source",{key:n.src||n,src:n.src||n,type:n.type},null,8,$))),128))],8,V))])):u("",!0),e(d)?u("",!0):(s(),a("div",{key:2,class:"play-button",onClick:l[0]||(l[0]=n=>d.value=!0)},E))],2)}}});const z=I(F,[["__scopeId","data-v-abcad331"]]);export{z as default};

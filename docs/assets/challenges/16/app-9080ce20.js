const f=document.querySelector(".hero"),s=document.querySelector(".hero__title");let t=10;const u=document.querySelector("#add_walk"),h=document.querySelector("#remove_walk"),d=document.querySelector(".walk_text");d.innerHTML=t;const a=(e,o,n)=>{e.style.textShadow=`
    ${o}px ${n}px 0 rgba(255, 0, 255, 0.7),
    ${o*-1}px ${n}px 0 rgba(0, 255, 255, 0.7),
    ${n}px ${o*-1}px 0 rgba(0, 255, 0, 0.7),
    ${n*-1}px ${o}px 0 rgba(0, 0, 255, 0.7)
  `},x=e=>{const{offsetWidth:o,offsetHeight:n}=f;let{offsetX:r,offsetY:c}=e;globalThis!==e.target&&(r=r+e.target.offsetLeft,c=c+e.target.offsetTop);const l=Math.round(r/o*t-t/2),i=Math.round(c/n*t-t/2);a(s,l,i)};document.addEventListener("mousemove",x);u.addEventListener("click",()=>{t<200&&(t+=10),d.innerHTML=t,a(s,0,0)});h.addEventListener("click",()=>{t>0&&(t-=10),d.innerHTML=t,a(s,0,0)});

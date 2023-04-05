const u="https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",i=document.querySelector(".suggestions"),a=document.querySelector(".search"),c=[];fetch(u).then(t=>t.json()).then(t=>c.push(...t));function g(t,s){return t?s.filter(e=>{const n=new RegExp(t,"gi");return e.city.match(n)||e.state.match(n)}):null}function h(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function r(){const t=g(this.value,c);let s="";if(!t)return s=i.innerHTML=`
    <li class="suggestions__item">Filter for a city</li>
    <li class="suggestions__item">or a state</li>`;s=t.map(e=>{const n=new RegExp(this.value,"gi"),o=e.city.replace(n,`<span class="hl">${this.value}</span>`),l=e.state.replace(n,`<span class="hl">${this.value}</span>`);return`
      <li class="suggestions__item">
        <span class="name">${o}, ${l}</span>
        <span class="population">${h(e.population)}</span>
      </li>
    `}).join(""),i.innerHTML=s}a.addEventListener("change",r);a.addEventListener("keyup",r);

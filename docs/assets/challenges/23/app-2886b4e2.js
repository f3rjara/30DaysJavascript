const n=new SpeechSynthesisUtterance;let s=[];const o=document.querySelector('[name="voice"]'),a=document.querySelectorAll('[type="range"], [name="text"]'),r=document.querySelector("#speak"),i=document.querySelector("#stop");n.text=document.querySelector('[name="text"]').value;const l=e=>{s=e.target.getVoices(),o.innerHTML=s.map(t=>`<option value="${t.name}">${t.name} (${t.lang})</option>`).join("")},d=e=>{n.voice=s.find(t=>t.name===e.target.value)},c=(e=!0)=>{speechSynthesis.cancel(),e&&speechSynthesis.speak(n)};speechSynthesis.addEventListener("voiceschanged",l);o.addEventListener("change",d);a.forEach(e=>e.addEventListener("change",()=>{n[e.name]=e.value,c()}));r.addEventListener("click",c);i.addEventListener("click",()=>c(!1));

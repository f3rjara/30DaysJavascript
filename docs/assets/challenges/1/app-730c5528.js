const t={a:{sound:"clap.wav",color:"#60d394",key:65},s:{sound:"hihat.wav",color:"#d36060",key:83},d:{sound:"kick.wav",color:"#c060d3",key:68},f:{sound:"openhat.wav",color:"#d3d160",key:70},g:{sound:"boom.wav",color:"#6860d3",key:71},h:{sound:"ride.wav",color:"#60b2d3",key:72},j:{sound:"snare.wav",color:"#d3b160",key:74},k:{sound:"tom.wav",color:"#d160d3",key:75},l:{sound:"tink.wav",color:"#c2d3d3",key:76}},s=document.querySelector(".keys"),n=document.querySelector("#template-key").content,a=document.createDocumentFragment();for(const e in t){var r=Object.prototype.hasOwnProperty.call(t,e);if(r){const o=t[e],d=o.sound.split(".");n.querySelector("kbd").textContent=e.toUpperCase(),n.querySelector("span").textContent=d[0].toUpperCase(),n.querySelector(".key").dataset.key=o.key,n.querySelector(".key").dataset.sound=o.sound;const c=n.cloneNode(!0);a.appendChild(c)}}s.appendChild(a);const y=e=>{if(t[e.key]){const o=document.querySelector(`audio[data-key="${t[e.key].key}"]`),d=document.querySelector(`.key[data-key="${t[e.key].key}"]`);o.currentTime=0,o.play(),d.classList.add("playing")}},l=e=>{e.animationName==="prueba_playing"&&e.target.classList.remove("playing")};window.addEventListener("keydown",y);document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".key").forEach(o=>o.addEventListener("animationend",l))});
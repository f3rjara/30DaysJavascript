const e=document.querySelectorAll(".box");function t(o){o.stopPropagation(),console.log(this.classList.value),console.log("----")}e.forEach(o=>o.addEventListener("click",t,{capture:!1,once:!0}));

const c=document.querySelector(".list"),n=document.querySelector("#form-add-task");let s=[];const a=()=>{if(s.length===0){c.innerHTML=`
      <li class="list__item item">
        <label class="item__label no-task">No tasks 🫡</label>
      </li>
    `;return}c.innerHTML=s.map((e,t)=>`
      <li class="list__item item">
        <input  type="checkbox" name="task" 
                id="task-${t}" 
                ${e.checked?"checked":""} 
                class="item__checked task task--${t} ${e.checked?"task__check":""} ">
        <label for="task-${t}" class="item__label task__delete ${e.checked?"task__check":""}">${e.name}</label>
      </li>
    `).join("")},r=e=>{e.preventDefault();const t=document.querySelector(".form__input");if(t.value.trim()===""||t.value.trim().length<=3)return;const o={name:t.value,checked:!1};s.push(o),l(),a(),n.reset()},i=e=>{if(!e.target.matches('input[type="checkbox"]'))return;const t=e.target.classList[2].split("--")[1];if(e.ctrlKey){d(t);return}s[t].checked=!s[t].checked,l(),a()},l=()=>{localStorage.setItem("tasks",JSON.stringify(s))},k=()=>{const e=localStorage.getItem("tasks");e!==null&&(s=JSON.parse(e),a())},d=e=>{s.splice(e,1),l(),a()};n.addEventListener("submit",r);document.addEventListener("DOMContentLoaded",k);c.addEventListener("click",i);

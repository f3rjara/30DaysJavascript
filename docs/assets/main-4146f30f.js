import"./modulepreload-polyfill-3cfb730f.js";/* empty css              */const t=()=>`
    <section class="header">
      <h1 class="header__title">
        <span class="header__title--data">#</span>
        Javascript
        <span class="header__title--data">30</span>
      </h1>
    </section>`,a=()=>`<section class="about">
    <article class="about__article">
      <div class="about__card card">
        <h2 class="card__title">
          <span class="card__data">30</span> 
          Day Vanilla JS Coding Challenge
        </h2>
        <p>
          Build <span class="card__data">30</span> things in
          <span class="card__data">30</span> days with
          <span class="card__data">30</span> tutorials
        </p>
        <p>
          No Frameworks <span class="separator"><svg width="10" height="10" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg></span> No Compilers
          <span class="separator"><svg width="10" height="10" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg></span> No Libraries
          <span class="separator"><svg width="10" height="10" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg></span> No Boilerplate
        </p>
        <p>
          This is a repository based on Wes Bos's 30 Javascript project challenge <span class="js30">JAVASCRIPT30</span>. Take a look at their website.
        </p>
        <p>
          <a href="https://javascript30.com/" target="_blank" class="btn btn__goto" rel="noopener noreferrer">Visit JAVASCRIPT 30</a>
        </p>
      </div>
      <a href="https://javascript30.com/" target="_blank">
        <img
          src="./img/reto.png"
          width="280"
          height="150"
          alt="JavaScript 30 Days"
          class="about__image"
        />
      </a>
    </article>
    </section>`,i=[{id:1,title:"JavaScript Drum Kit",subtitle:"Challenge No 1",featured:["DOM & INTERFACE","CSS DINAMIC","AUDIO  + VIDEO"],link:"challenges/1"},{id:2,title:"CSS + JS Clock",subtitle:"Challenge No 2",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/2"},{id:3,title:"Playing with CSS Variables and JS",subtitle:"Challenge No 3",featured:["DOM & INTERFACE","CSS DINAMIC","FUNDAMENTALS"],link:"challenges/3"},{id:4,title:"Array Cardio Day 1",subtitle:"Challenge No 4",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/4"},{id:5,title:"Flex Panel Gallery",subtitle:"Challenge No 5",featured:["DOM & INTERFACE","CSS DINAMIC","FUNDAMENTALS"],link:"challenges/5"},{id:6,title:"Type Ahead",subtitle:"Challenge No 6",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/6"},{id:7,title:"Array Cardio Day 2",subtitle:"Challenge No 7",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/7"},{id:8,title:"Fun with HTML5 Canvas",subtitle:"Challenge No 8",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/8"},{id:9,title:"14 Must Know Dev Tools Tricks",subtitle:"Challenge No 9",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/9"},{id:10,title:"Hold Shift and Check Checkboxes",subtitle:"Challenge No 10",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/10"},{id:11,title:"Custom Video Player",subtitle:"Challenge No 11",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/11"},{id:12,title:"Key Sequence Detection",subtitle:"Challenge No 12",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/12"},{id:13,title:"Slide in on Scroll",subtitle:"Challenge No 13",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/13"},{id:14,title:"JavaScript References VS Copying",subtitle:"Challenge No 14",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/14"},{id:15,title:"LocalStorage and Event Delegation",subtitle:"Challenge No 15",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/15"},{id:16,title:"Mouse Move Shadow",subtitle:"Challenge No 16",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/16"},{id:17,title:"Sort Without Articles",subtitle:"Challenge No 17",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/17"},{id:18,title:"Adding Up Times with Reduce",subtitle:"Challenge No 18",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/18"},{id:19,title:"Webcam Fun",subtitle:"Challenge No 19",featured:["DOM & INTERFACE","FUNDAMENTALS","EXPERIMENTAL"],link:"challenges/19"},{id:20,title:"Speech Detection",subtitle:"Challenge No 20",featured:["DOM & INTERFACE","FUNDAMENTALS","EXPERIMENTAL"],link:"challenges/20"},{id:21,title:"Geolocation",subtitle:"Challenge No 21",featured:["DOM & INTERFACE","HARDWARE ACCESS","EXPERIMENTAL"],link:"challenges/21"},{id:22,title:"Follow Along Link Highlighter",subtitle:"Challenge No 22",featured:["DOM & INTERFACE","CSS DINAMIC"],link:"challenges/22"},{id:23,title:"Speech Synthesis",subtitle:"Challenge No 23",featured:["DOM & INTERFACE","AUDIO + VIDEO","EXPERIMENTAL"],link:"challenges/23"},{id:24,title:"Sticky Nav",subtitle:"Challenge No 24",featured:["DOM & INTERFACE","CSS DINAMIC"],link:"challenges/24"},{id:25,title:"Event Capture, Propagation, Bubbling and Once",subtitle:"Challenge No 25",featured:["DOM & INTERFACE","FUNDAMENTALS"],link:"challenges/25"},{id:26,title:"Stripe Follow Along Nav",subtitle:"Challenge No 26",featured:["DOM & INTERFACE","CSS DINAMIC"],link:"challenges/26"},{id:27,title:"Click and Drag",subtitle:"Challenge No 27",featured:["DOM & INTERFACE","CSS DINAMIC"],link:"challenges/27"},{id:28,title:"Video Speed Controller",subtitle:"Challenge No 28",featured:["DOM & INTERFACE","AUDIO + VIDEO","EXPERIMENTAL"],link:"challenges/28"},{id:29,title:"Countdown Timer",subtitle:"Challenge No 29",featured:["DOM & INTERFACE","CSS DINAMIC"],link:"challenges/29"},{id:30,title:"Whack A Mole",subtitle:"Challenge No 30",featured:["DOM & INTERFACE","CSS DINAMIC","EXPERIMENTAL"],link:"challenges/30"}],s=()=>`
    <section class="challenges">
      <article class="challenges__article">
        ${i.map(e=>`
          <div class="card card--challenge">
            <h2 class="card__title card__title--chagellenge">
            ${e.title}</h2>
            <span class="card__subtitle">${e.subtitle}</span>
            <ul class="card__featured">
              ${e.featured.map(l=>`
                <li class="card__item">${l}</li>
              `).join("")}
            </ul>
            <a href="./${e.link}/" class="btn btn__goto" rel="noopener noreferrer">View Challenge</a>
          </div>
        `).join("")}
      </article>
    </section>
  `,n=t(),r=a(),o=s();document.querySelector("#app").innerHTML=`${n} ${r} ${o}`;

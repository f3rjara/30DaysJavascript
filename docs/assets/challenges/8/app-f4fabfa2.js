const t=document.getElementById("canvas"),o=document.querySelector(".canvas"),u=document.getElementById("clear-button"),e=t.getContext("2d"),c="#BADA55",h="round",r="round",f=1;t.width=o.offsetWidth;t.height=o.offsetHeight;window.addEventListener("resize",()=>{const n=e.getImageData(0,0,t.width,t.height);t.width=o.offsetWidth,t.height=o.offsetHeight,e.strokeStyle=c,e.lineJoin=h,e.lineCap=r,e.lineWidth=f,e.putImageData(n,0,0)});e.strokeStyle=c;e.lineJoin=h;e.lineCap=r;e.lineWidth=f;let s=!1,d=0,l=0,i=1,a=!0;function g(n){s&&(e.strokeStyle=`hsl(${i}, 100%, 50%)`,e.beginPath(),e.moveTo(d,l),e.lineTo(n.offsetX,n.offsetY),e.stroke(),[d,l]=[n.offsetX,n.offsetY],i=i>360?0:i+1,(e.lineWidth>=100||e.lineWidth<=1)&&(a=!a),e.lineWidth=a?e.lineWidth+1:e.lineWidth-1)}t.addEventListener("mousemove",g);t.addEventListener("mousedown",n=>{s=!0,[d,l]=[n.offsetX,n.offsetY]});t.addEventListener("mouseup",()=>s=!1);t.addEventListener("mouseout",()=>s=!1);u.addEventListener("click",()=>{e.clearRect(0,0,t.width,t.height)});
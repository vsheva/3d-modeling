(()=>{"use strict";const e=()=>{let e,t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),r=document.querySelector(".popup-content"),n=0,a=()=>{e=requestAnimationFrame(a),n++,n<50?r.style.top=2*n+"px":(cancelAnimationFrame(e),n=0)};t.forEach((t=>{t.addEventListener("click",(()=>{screen.width>=768&&(e=requestAnimationFrame(a)),o.style.display="block"}))})),o.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(o.style.display="none")}))};e();const t=e;(e=>{console.log(e);const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let n=function(e){return e>=0&&e<10?"0"+e:e},a=setInterval((()=>{let c=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=n(c.hours),o.textContent=n(c.minutes),r.textContent=n(c.seconds),c.timeRemaining<=0&&(clearInterval(a),t.textContent="00",o.textContent="00",r.textContent="00")}),1e3)})("01 January 2022"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),t.addEventListener("click",(e=>{(e.target.matches(".close-btn")||e.target.matches("ul>li>a"))&&o()})),document.body.addEventListener("click",(e=>{}))})(),t(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),o=document.querySelector(".calc-day");e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),document.querySelector(".mess").addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\-\s]/gi,"")})),document.querySelectorAll('[placeholder="Ваше имя"]').forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\s]/gi,"")}))})),document.querySelectorAll(".form-email").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-z\@\_\.\!\~\*\'\-]/gi,"")}))})),document.querySelectorAll('input[type="tel"]').forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d\(\)\-]/gi,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab "),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let o=document.querySelectorAll(".dot");const r=document.querySelector(".portfolio-dots");let n,a=0;const c=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},s=()=>{c(t,a,"portfolio-item-active"),c(o,a,"dot-active"),a++,a>=t.length&&(a=0),l(t,a,"portfolio-item-active"),l(o,a,"dot-active")},u=(e=1500)=>{n=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(t,a,"portfolio-item-active"),c(o,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(a=o)})),a>=t.length?a=0:a<0&&(a=t.length-1),l(t,a,"portfolio-item-active"),l(o,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&u(2e3)}),!0),(()=>{for(let e=0;e<t.length;e++){o[e].classList.remove("dot");let t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add("dot-active"),r.append(t),o=document.querySelectorAll(".dot")}})(),u(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),n=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),c=document.querySelector("#total");t.addEventListener("change",(t=>{t.target!==o&&t.target!==r&&t.target!==n&&t.target!==a||(()=>{const t=+o.options[o.selectedIndex].value,l=r.value;let s=0,u=1,i=1;n.value>1&&(u+=+n.value/10),a.value&&a.value<5?i=2:a.value&&a.value<10&&(i=1.5),s=o.value&&r.value?e*t*l*u*i:0,c.textContent=`${s} ₽`})()}))})(),(()=>{const e=document.createElement("div");e.style.cssText="font-size: 2rem; color: #ffffff";document.body.addEventListener("submit",(t=>{t.preventDefault(),""!==t.target.querySelector('[placeholder~="E-mail"]').value.trim()&&(t=>{t.appendChild(e),e.textContent="Загрузка...";const o=new FormData(t);t.reset();const r=()=>{setTimeout((()=>e.remove()),5e3)};var n;(n=o,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).then((o=>{if(200!==o.status)throw new Error("Status network not 200");e.textContent="Спасибо! Мы скоро с Вами свяжемся!",r(),setTimeout((()=>{t.matches("#form3")&&(document.querySelector(".popup").style.display="none")}),5500)})).catch((t=>{e.textContent="Что-то пошло не так...",console.error(t),r()}))})(t.target)}))})()})();
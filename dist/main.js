(()=>{"use strict";const e=()=>{let e,t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),r=document.querySelector(".popup-content"),n=0,a=()=>{e=requestAnimationFrame(a),n++,n<50?r.style.top=2*n+"px":(cancelAnimationFrame(e),n=0)};t.forEach((t=>{t.addEventListener("click",(()=>{screen.width>=768&&(e=requestAnimationFrame(a)),o.style.display="block"}))})),o.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(o.style.display="none")}))};e();const t=e;(e=>{console.log(e);const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let n=function(e){return e>=0&&e<10?"0"+e:e},a=setInterval((()=>{let c=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=n(c.hours),o.textContent=n(c.minutes),r.textContent=n(c.seconds),c.timeRemaining<=0&&(clearInterval(a),t.textContent="00",o.textContent="00",r.textContent="00")}),1e3)})("20 november 2021"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),t.addEventListener("click",(e=>{(e.target.matches(".close-btn")||e.target.matches("ul>li>a"))&&o()})),document.body.addEventListener("click",(e=>{}))})(),t(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),o=document.querySelector(".calc-day");e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),document.querySelector(".mess").addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\-\s]/gi,"")})),document.querySelectorAll('[placeholder="Ваше имя"]').forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\-\s]/gi,"")}))})),document.querySelectorAll(".form-email").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-z\@\_\.\!\~\*\'\-]/gi,"")}))})),(()=>{let e=document.querySelectorAll('input[type="tel"]');console.log(e),e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d\(\)\-]/gi,"")}))}))})()})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab "),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let o=document.querySelectorAll(".dot");const r=document.querySelector(".portfolio-dots");let n,a=0;const c=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},s=()=>{c(t,a,"portfolio-item-active"),c(o,a,"dot-active"),a++,a>=t.length&&(a=0),l(t,a,"portfolio-item-active"),l(o,a,"dot-active")},i=(e=1500)=>{n=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(t,a,"portfolio-item-active"),c(o,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(a=o)})),a>=t.length?a=0:a<0&&(a=t.length-1),l(t,a,"portfolio-item-active"),l(o,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),(()=>{for(let e=0;e<t.length;e++){let t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add("dot-active"),r.append(t)}})(),i(2e3)})()})();
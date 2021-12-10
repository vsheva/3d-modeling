(()=>{"use strict";const e=()=>{let e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),o=document.querySelector(".popup-content");e.forEach((e=>{e.addEventListener("click",(()=>{screen.width>=768&&(({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function l(a){let c=(a-n)/o;c>1&&(c=1);let r=e(c);t(r),c<1&&requestAnimationFrame(l)}))})({duration:1e3,timing:e=>e,draw(e){o.style.opacity=e}}),t.style.display="block",document.body.style.overflow="hidden",document.body.style.height="100%"}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none",document.body.style.overflow="auto",document.body.style.height="auto")}))};e();const t=e,o=e=>{const t=document.getElementById(e),o=document.createElement("div");console.log(t),o.style.cssText="font-size: 2rem; color: #fff",t.addEventListener("submit",(e=>{e.preventDefault();const n=new FormData(t),l={},a=t.querySelectorAll("input"),c=()=>{setTimeout((()=>o.remove()),2e3)};var r;o.textContent="Загрузка...",t.append(o),n.forEach(((e,t)=>{l[t]=e})),(r=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{o.textContent="Спасибо! Мы скоро с Вами свяжемся!",a.forEach((e=>{e.value=""})),setTimeout((()=>{document.querySelector(".popup").style.display="none"}),2e3),document.body.style.overflow="auto",document.body.style.height="auto",c()})).catch((e=>{o.textContent="Что-то пошло не так...",c()}))})),document.body.style.overflow="auto",document.body.style.height="auto"};(e=>{console.log(e);const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let l=function(e){return e>=0&&e<10?"0"+e:e};const a=()=>{let a=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=l(a.hours),o.textContent=l(a.minutes),n.textContent=l(a.seconds),a.timeRemaining<=0&&(clearInterval(c),t.textContent="00",o.textContent="00",n.textContent="00")};a();let c=setInterval(a,1e3)})("01 January 2022"),(()=>{let e=document.querySelector("menu");document.body.addEventListener("click",(t=>{let o=t.target;(o.closest(".menu")||o.closest(".close-btn")||o.closest("li a")||!o.closest("menu")&&e.classList.contains("active-menu"))&&e.classList.toggle("active-menu")}));const t=document.querySelectorAll('a[href*="#"]');for(let e of t)e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href");document.querySelector(""+o).scrollIntoView({behavior:"smooth",block:"start"})}))})(),t(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),o=document.querySelector(".calc-day");e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab "),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let o=document.querySelectorAll(".dot");const n=document.querySelector(".portfolio-dots");let l,a=0;const c=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},s=()=>{c(t,a,"portfolio-item-active"),c(o,a,"dot-active"),a++,a>=t.length&&(a=0),r(t,a,"portfolio-item-active"),r(o,a,"dot-active")},u=(e=1500)=>{l=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(t,a,"portfolio-item-active"),c(o,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(a=o)})),a>=t.length?a=0:a<0&&(a=t.length-1),r(t,a,"portfolio-item-active"),r(o,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&u(2e3)}),!0),(()=>{for(let e=0;e<t.length;e++){o[e].classList.remove("dot");let t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add("dot-active"),n.append(t),o=document.querySelectorAll(".dot")}})(),u(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),c=document.querySelector("#total");t.addEventListener("change",(t=>{t.target!==o&&t.target!==n&&t.target!==l&&t.target!==a||(()=>{const t=+o.options[o.selectedIndex].value,r=n.value;let s=0,u=1,i=1;l.value>1&&(u+=+l.value/10),a.value&&a.value<5?i=2:a.value&&a.value<10&&(i=1.5),s=o.value&&n.value?e*t*r*u*i:0,c.textContent=`${s} ₽`})()}))})(),o("form1"),o("form2"),o("form3"),document.querySelector("input[name='user_message']").addEventListener("input",(e=>{let t=e.target;t.value=t.value.replace(/[^а-я\d\s\,\.\!\-\:\;\"\?]/gi,""),t.value.length<2?t.setCustomValidity("Введите минимум 2 буквы в поле"):t.setCustomValidity("")})),document.querySelectorAll("input[name='user_name']").forEach((e=>{e.addEventListener("input",(e=>{let t=e.target;t.value=t.value.replace(/[^а-я\s]/gi,""),t.value.length<2?t.setCustomValidity("Введите минимум 2 буквы"):t.setCustomValidity("")}))})),document.querySelectorAll(".form-email").forEach((e=>{e.addEventListener("input",(e=>{let t=e.target;t.value=t.value.replace(/[^a-z\@\_\.\!\~\*\'\-]/gi,""),t.value.length<3?t.setCustomValidity("Введите минимум 3 символа в поле email"):t.setCustomValidity("")}))})),document.querySelectorAll('input[name="user_phone"]').forEach((e=>{e.addEventListener("input",(e=>{let t=e.target;t.value=t.value.replace(/[^\d\(\)\+\-]/gi,""),t.value.length<5?t.setCustomValidity("Введите не менее 5 цифр номера"):t.setCustomValidity("")}))}))})();
(()=>{"use strict";function e(){const e=document.body;e.style.overflow="auto",e.style.marginRight="0"}const t=()=>{let t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),n=document.querySelector(".popup-content");t.forEach((e=>{e.addEventListener("click",(()=>{document.documentElement.clientWidth>=768&&(({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function l(c){let a=(c-n)/o;a>1&&(a=1);let r=e(a);t(r),a<1&&requestAnimationFrame(l)}))})({duration:300,timing:e=>e,draw(e){n.style.top=20*e+"%"}}),o.style.display="block",function(){const e=document.body;e.style.overflow="hidden";const t=function(){let e=document.createElement("div");e.style.width="500px",e.style.height="500px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t}();e.style.marginRight=`${t}px`}()}))})),o.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(o.style.display="none",e())}))};t();const o=t,n=t=>{const o=document.getElementById(t),n=document.createElement("div");n.style.cssText="font-size: 2rem; color: #fff",o.addEventListener("submit",(t=>{t.preventDefault();const l=new FormData(o),c={},a=o.querySelectorAll("input"),r=()=>{setTimeout((()=>n.remove()),2e3)};var s;n.textContent="Загрузка...",o.append(n),l.forEach(((e,t)=>{c[t]=e})),(s=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{n.textContent="Спасибо! Мы скоро с Вами свяжемся!",a.forEach((e=>{e.value=""})),setTimeout((()=>{document.querySelector(".popup").style.display="none"}),3e3),e(),r()})).catch((e=>{n.textContent="Что-то пошло не так...",r()}))}))};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let l=function(e){return e>=0&&e<10?"0"+e:e};const c=()=>{let c=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=l(c.hours),o.textContent=l(c.minutes),n.textContent=l(c.seconds),c.timeRemaining<=0&&(clearInterval(a),t.textContent="00",o.textContent="00",n.textContent="00")};c();let a=setInterval(c,1e3)})("01 January 2022"),(()=>{let e=document.querySelector("menu");document.body.addEventListener("click",(t=>{let o=t.target;(o.closest(".menu")||o.closest(".close-btn")||o.closest("li a")||!o.closest("menu")&&e.classList.contains("active-menu"))&&e.classList.toggle("active-menu")}));const t=document.querySelectorAll('a[href*="#"]');for(let e of t)e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href");document.querySelector(""+o).scrollIntoView({behavior:"smooth",block:"start"})}))})(),o(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),o=document.querySelector(".calc-day");e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab "),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let o=document.querySelectorAll(".dot");const n=document.querySelector(".portfolio-dots");let l,c=0;const a=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},s=()=>{a(t,c,"portfolio-item-active"),a(o,c,"dot-active"),c++,c>=t.length&&(c=0),r(t,c,"portfolio-item-active"),r(o,c,"dot-active")},i=(e=1500)=>{l=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(a(t,c,"portfolio-item-active"),a(o,c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(c=o)})),c>=t.length?c=0:c<0&&(c=t.length-1),r(t,c,"portfolio-item-active"),r(o,c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),t.forEach(((e,t)=>{const o=document.createElement("li");o.classList.add("dot"),0===t&&o.classList.add("dot-active"),n.append(o),o.classList.remove("dot")})),o=document.querySelectorAll(".dot"),i(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),a=document.querySelector("#total");t.addEventListener("change",(t=>{t.target!==o&&t.target!==n&&t.target!==l&&t.target!==c||(()=>{const t=+o.options[o.selectedIndex].value,r=n.value;let s=0,i=1,u=1;l.value>1&&(i+=+l.value/10),c.value&&c.value<5?u=2:c.value&&c.value<10&&(u=1.5),s=o.value&&n.value?e*t*r*i*u:0,a.textContent=`${s} ₽`})()}))})(),n("form1"),n("form2"),n("form3"),document.querySelector("input[name='user_message']").addEventListener("input",(e=>{let t=e.target;t.value=t.value.replace(/[^а-я\d\s\,\.\!\-\:\;\"\?]/gi,""),t.value.length<2?t.setCustomValidity("Введите минимум 2 буквы в поле"):t.setCustomValidity("")})),document.querySelectorAll("input[name='user_name']").forEach((e=>{e.addEventListener("input",(e=>{let t=e.target;t.value=t.value.replace(/[^а-я\s]/gi,""),t.value.length<2?t.setCustomValidity("Введите минимум 2 буквы"):t.setCustomValidity("")}))})),document.querySelectorAll(".form-email").forEach((e=>{e.addEventListener("input",(e=>{let t=e.target;t.value=t.value.replace(/[^a-z\@\_\.\!\~\*\'\-]/gi,""),t.value.length<3?t.setCustomValidity("Введите минимум 3 символа в поле email"):t.setCustomValidity("")}))})),document.querySelectorAll('input[name="user_phone"]').forEach((e=>{e.addEventListener("input",(e=>{let t=e.target;t.value=t.value.replace(/[^\d\(\)\+\-]/gi,""),t.value.length<5?t.setCustomValidity("Введите не менее 5 цифр номера"):t.setCustomValidity("")}))}))})();
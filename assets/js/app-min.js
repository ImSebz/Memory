const appModule=(()=>{"use strict";let e=["\uD83E\uDD74","\uD83E\uDD74","\uD83E\uDD23","\uD83E\uDD23","\uD83D\uDE08","\uD83D\uDE08","\uD83D\uDCA9","\uD83D\uDCA9","\uD83D\uDDA4","\uD83D\uDDA4","\uD83D\uDC7D","\uD83D\uDC7D","\uD83D\uDC79","\uD83D\uDC79","\uD83E\uDD21","\uD83E\uDD21"],l=_.shuffle(e),t=document.querySelector(".game");for(let s=0;s<e.length;s++){let a=document.createElement("div");a.className="item",a.innerHTML=l[s],a.onclick=()=>{a.classList.add("boxOpen"),n()},t.appendChild(a)}let o=()=>{window.location.reload()},n=()=>{let l=document.querySelectorAll(".boxOpen");setTimeout(()=>{l.length>1&&(l[0].innerHTML==l[1].innerHTML?(l[1].classList.add("boxMatch"),l[0].classList.add("boxMatch"),l[1].classList.remove("boxOpen"),l[0].classList.remove("boxOpen"),document.querySelectorAll(".boxMatch").length===e.length&&(alert("Ganaste"),setTimeout(()=>{o()},800))):(l[1].classList.remove("boxOpen"),l[0].classList.remove("boxOpen")))},500)}})();
const appModule=(()=>{"use strict";let e=["AF-OPEN-concentrece-a","AF-OPEN-concentrece-a","AF-OPEN-concentrece-b","AF-OPEN-concentrece-b","AF-OPEN-concentrece-c","AF-OPEN-concentrece-c","AF-OPEN-concentrece-d","AF-OPEN-concentrece-d","AF-OPEN-concentrece-e","AF-OPEN-concentrece-e","AF-OPEN-concentrece-f","AF-OPEN-concentrece-f","AF-OPEN-concentrece-g","AF-OPEN-concentrece-g","AF-OPEN-concentrece-h","AF-OPEN-concentrece-h","AF-OPEN-concentrece-i","AF-OPEN-concentrece-i","AF-OPEN-concentrece-j","AF-OPEN-concentrece-j"],c=_.shuffle(e),n=document.querySelector(".game");for(let t=0;t<e.length;t++){let o=document.createElement("div");o.className="item",o.innerHTML=`<img src="assets/img/${c[t]}.png" alt="Hola">`,o.onclick=()=>{o.classList.add("boxOpen"),l()},n.appendChild(o)}let r=document.querySelectorAll(".item");r.forEach((e,c)=>{let n=1-c/(r.length-1),t=Math.round(112-50*n),o=Math.round(219-50*n),l=Math.round(219+36*n);e.style.setProperty("--item-bg-color",`rgb(${t}, ${o}, ${l})`)});let l=()=>{let c=document.querySelectorAll(".boxOpen");setTimeout(()=>{c.length>1&&(c[0].innerHTML==c[1].innerHTML?(c[1].classList.add("boxMatch"),c[0].classList.add("boxMatch"),c[1].classList.remove("boxOpen"),c[0].classList.remove("boxOpen"),document.querySelectorAll(".boxMatch").length===e.length&&(alert("Ganaste"),setTimeout(()=>{window.location.href="index.html"},1500))):(c[1].classList.remove("boxOpen"),c[0].classList.remove("boxOpen")))},500)}})();
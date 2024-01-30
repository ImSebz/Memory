const appModule = (() => {
    'use strict';

    const imagesOpen = [
        "AF-OPEN-concentrece-a", "AF-OPEN-concentrece-a",
        "AF-OPEN-concentrece-b", "AF-OPEN-concentrece-b",
        "AF-OPEN-concentrece-c", "AF-OPEN-concentrece-c",
        "AF-OPEN-concentrece-d", "AF-OPEN-concentrece-d",
        "AF-OPEN-concentrece-e", "AF-OPEN-concentrece-e",
        "AF-OPEN-concentrece-f", "AF-OPEN-concentrece-f",
        "AF-OPEN-concentrece-g", "AF-OPEN-concentrece-g",
        "AF-OPEN-concentrece-h", "AF-OPEN-concentrece-h",
        "AF-OPEN-concentrece-i", "AF-OPEN-concentrece-i",
        "AF-OPEN-concentrece-j", "AF-OPEN-concentrece-j"
    ];

    let shuffleImages = _.shuffle(imagesOpen);

    //Elementos HTML
    const game = document.querySelector('.game');

    for (let i = 0; i < imagesOpen.length; i++) {
        let box = document.createElement("div");
        box.className = 'item';
        box.innerHTML = `<img src="assets/img/${shuffleImages[i]}.png" alt="Hola">`;
        box.onclick = () => {
            box.classList.add('boxOpen');
            gameLogic();
        };
        game.appendChild(box);
    }

    //Funciones

    // const resetWindow = () => {
    //     window.location.reload();
    // };

    //Item

    const items = document.querySelectorAll('.item');

    items.forEach((item, index) => {
        const percentage = 1 - index / (items.length - 1); // Reverse the gradient
        const redIntensity = Math.round(112 - percentage * 50); // Decrease the red intensity
        const greenIntensity = Math.round(219 - percentage * 50); // Decrease the green intensity
        const blueIntensity = Math.round(219 + percentage * (255 - 219)); // Increase the blue intensity
        item.style.setProperty('--item-bg-color', `rgb(${redIntensity}, ${greenIntensity}, ${blueIntensity})`);
    });

    const gameLogic = () => {

        const boxOpen = document.querySelectorAll('.boxOpen');

        setTimeout(() => {
            if (boxOpen.length > 1) {
                if (boxOpen[0].innerHTML == boxOpen[1].innerHTML) {

                    boxOpen[1].classList.add('boxMatch');
                    boxOpen[0].classList.add('boxMatch');
                    boxOpen[1].classList.remove('boxOpen');
                    boxOpen[0].classList.remove('boxOpen');

                    if (document.querySelectorAll('.boxMatch').length === imagesOpen.length) {
                        const modal = document.getElementById("myModal");
                        const iframe = document.getElementById("popupFrame");
                        iframe.src = "pop.html"; // Pone el contenido del iframe
                        modal.style.display = "block"; // muestra el modal

                        // Cierra el modal despues de 7 segundos
                        setTimeout(() => {
                            modal.style.display = "none";
                            window.location.href = "index.html"; // Redirecciona a la pagina principal
                        }, 7000);
                    }
                } else {
                    boxOpen[1].classList.remove('boxOpen');
                    boxOpen[0].classList.remove('boxOpen');
                }
            }
        }, 500);
    };

})();

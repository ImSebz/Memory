const appModule = (() => {
'use strict';

const emojis = ["🥴", "🥴",
    "🤣", "🤣",
    "😈", "😈",
    "💩", "💩",
    "🖤", "🖤",
    "👽", "👽",
    "👹", "👹",
    "🤡", "🤡"];

let shuffleEmojis = _.shuffle(emojis);

//Elementos HTML
const game = document.querySelector('.game');

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = 'item';
    box.innerHTML = shuffleEmojis[i];
    box.onclick = () => {
        box.classList.add('boxOpen');
        gameLogic();
    };
    game.appendChild(box);
}

//Funciones

const resetWindow = () => {
    window.location.reload();
};

const gameLogic = () => {

    const boxOpen = document.querySelectorAll('.boxOpen');

    setTimeout(() => {
        if (boxOpen.length > 1) {
            if (boxOpen[0].innerHTML == boxOpen[1].innerHTML) {

                boxOpen[1].classList.add('boxMatch');
                boxOpen[0].classList.add('boxMatch');
                boxOpen[1].classList.remove('boxOpen');
                boxOpen[0].classList.remove('boxOpen');

                if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                    alert('Ganaste');
                    setTimeout(() => {
                        resetWindow();
                    }, 800);
                }
            } else {
                boxOpen[1].classList.remove('boxOpen');
                boxOpen[0].classList.remove('boxOpen');
            }
        }
    }, 500);
};

})();
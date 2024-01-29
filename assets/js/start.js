const btnJugar = document.querySelector('.btn-jugar');
btnJugar.disabled = true;

setTimeout(function() {
    btnJugar.disabled = false;
}, 95000);

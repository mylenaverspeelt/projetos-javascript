var h1 = document.querySelector('#page-title');
var botao = document.querySelector('#mode-selector');
var body = document.querySelector('body');
var footer = document.querySelector('footer');

function darkMode() {
    footer.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    botao.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
}

function mudarTextos() {

    if (body.classList.contains("dark-mode")) {
        botao.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
    } else {
        botao.innerHTML = "Dark Mode";
        h1.innerHTML = "Light Mode ON";
    }
}

function eventoBotao() {
    darkMode();
    mudarTextos();
}
botao.addEventListener('click', eventoBotao);



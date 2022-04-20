// FAVORITAR 1
var coracao1 = document.querySelector('#coracao1');

function addClasse1() {
    coracao1.classList.toggle("coracao-pintado");
}

function mudar1() {
    if (coracao1.classList.contains("coracao-pintado")) {
        coracao1.innerHTML = "<i class=\"fas fa-heart\" aria-hidden=\"true\"></i>";
    } else {
        coracao1.innerHTML = "<i class=\"far fa-heart\" aria-hidden=\"true\"></i>";
    }
}

function favoritar() {
    addClasse1();
    mudar1();
}

coracao1.addEventListener('click', favoritar);

// FAVORITAR 2

var coracao2 = document.querySelector('#coracao2');

function addClasse2() {
    coracao2.classList.toggle("coracao-pintado");
}

function mudar2() {
    if (coracao2.classList.contains("coracao-pintado")) {
        coracao2.innerHTML = "<i class=\"fas fa-heart\" aria-hidden=\"true\"></i>";
    } else {
        coracao2.innerHTML = "<i class=\"far fa-heart\" aria-hidden=\"true\"></i>";
    }
}

function favoritar2() {
    addClasse2();
    mudar2();
}

coracao2.addEventListener('click', favoritar2);

// FAVORITAR 3
var coracao3 = document.querySelector('#coracao3');

function addClasse3() {
    coracao3.classList.toggle("coracao-pintado");
}

function mudar3() {
    if (coracao3.classList.contains("coracao-pintado")) {
        coracao3.innerHTML = "<i class=\"fas fa-heart\" aria-hidden=\"true\"></i>";
    } else {
        coracao3.innerHTML = "<i class=\"far fa-heart\" aria-hidden=\"true\"></i>";
    }
}

function favoritar3() {
    addClasse3();
    mudar3();
}

coracao3.addEventListener('click', favoritar3);

// FAVORITAR 4

var coracao4 = document.querySelector('#coracao4');

function addClasse4() {
    coracao4.classList.toggle("coracao-pintado");
}

function mudar4() {
    if (coracao4.classList.contains("coracao-pintado")) {
        coracao4.innerHTML = "<i class=\"fas fa-heart\" aria-hidden=\"true\"></i>";
    } else {
        coracao4.innerHTML = "<i class=\"far fa-heart\" aria-hidden=\"true\"></i>";
    }
}

function favoritar4() {
    addClasse4();
    mudar4();
}

coracao4.addEventListener('click', favoritar4);


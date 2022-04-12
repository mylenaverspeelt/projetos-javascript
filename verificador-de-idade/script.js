var executar = document.querySelector('#botao').addEventListener('click', verificar)

function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var input = document.querySelector("#input");
    var resultado = document.querySelector("#resultado");

    if (input.value.length == 0 || input.value > ano) {
        resultado.innerHTML = '[ERRO] Insira um ano de nascimento válido'
    } else {
        var sexo = document.getElementsByName('radsex');
        var idade = ano - Number(input.value);
        var sexoBiologico = "";
        var img = document.querySelector("#imagem");

        if (sexo[0].checked) {
            sexoBiologico = 'Homem';
            if (idade >= 0 && idade <= 3) {
                img.src = 'imagens/bebe-homem.png';
            } else if (idade >= 4 && idade <= 14) {
                img.src = 'imagens/crianca-homem.png';
            } else if (idade >= 15 && idade <= 25) {
                img.src = 'imagens/jovem-homem.png';
            } else if (idade >= 26 && idade <= 29) {
                img.src = 'imagens/adulto-homem.png';
            } else {
                img.src = 'imagens/idoso-homem.png';
            }
        } else if (sexo[1].checked) {
            sexoBiologico = 'Mulher';
            if (idade >= 0 && idade <= 3) {
                img.src = 'imagens/bebe-mulher.png'
            } else if (idade >= 4 && idade <= 14) {
                img.src = 'imagens/crianca-mulher.png'
            } else if (idade >= 15 && idade <= 25) {
                img.src = 'imagens/jovem-mulher.png'
            } else if (idade >= 26 && idade <= 59) {
                img.src = 'imagens/adulto-mulher.png'
            } else {
                img.src = 'imagens/idoso-mulher.png'
            }
        }
        resultado.innerHTML = `Detectamos ${sexoBiologico} com ${idade} anos de idade. `
    }
}

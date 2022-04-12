var botao = document.querySelector('#botao').addEventListener('click', contar);

function contar() {
    var inputInicio = document.querySelector('.inputinicio')
    var inputFim = document.querySelector('.inputfim')
    var inputPasso = document.querySelector('.inputpasso')
    var resultado = document.querySelector('.resultado')


    if (inputInicio.value.length == 0 || inputFim.value.length == 0 || inputPasso.value.length == 0) {
        alert('[ERRO] Insira os dados!');
    } else {
        resultado.innerHTML = "Contando: <br> ";
        let inicio = Number(inputInicio.value)
        let fim = Number(inputFim.value)
        let passo = Number(inputPasso.value)
        if (passo <= 0){
            alert('Passo Inválido. Considerando: Passo = 1')
            passo = 1
        }

        if (inicio < fim) {
            for (let c = inicio; c <= fim; c += passo) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for (let c = inicio; c >= fim; c -= passo) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }

}
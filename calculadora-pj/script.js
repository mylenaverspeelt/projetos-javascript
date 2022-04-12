let inputGanhoPorMes = document.querySelector('#ganho-mes')

let inputHorasDia = document.querySelector('#horas-dia')

let spanHora = document.querySelector('#resposta')

function calcularValorHora() {
    let qtdeTotalDeHoras = inputHorasDia.valueAsNumber * 22

    let valorDeHora = (inputGanhoPorMes.valueAsNumber / qtdeTotalDeHoras).toFixed(2)

    spanHora.textContent = "R$ " + valorDeHora

}



//


let inputHora = document.querySelector('#valor-hora')

let inputProjeto = document.querySelector('#projeto')

let resposta = document.querySelector('#resposta2')

function calcular(){
    inputHoraValue = inputHora.value
    inputProjetoValue = inputProjeto.value
    let  valorDoProjeto = (inputHoraValue * inputProjetoValue).toFixed(2)
    resposta.textContent = "R$ " + valorDoProjeto;
}
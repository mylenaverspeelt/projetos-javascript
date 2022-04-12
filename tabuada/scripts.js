var botao = document.querySelector('#botao').addEventListener('click', tabuada)

function tabuada() {
    let input = document.querySelector('#numero')
    let tabela = document.querySelector('#tabela')

    if (input.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let numero = Number(input.value)
        tabela.innerHTML = ''
        for (let c = 1; c <= 10; c++) {

            let item = document.createElement('option')
            item.text = `${numero} * ${c} = ${numero * c}`
            tabela.appendChild(item)
        }
    }
}
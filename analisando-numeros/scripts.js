var botao1 = document.querySelector('#adicionar').addEventListener('click', adicionar)
var botao2 = document.querySelector('#finalizar').addEventListener('click', finalizar)

var input = document.querySelector('#inputNumero')
var lista = document.querySelector('#lista')
var resultado = document.querySelector('#resultado')
var valores = []


function eNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function taNaLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if (eNumero(input.value) && !taNaLista(input.value, valores)) {
        valores.push(Number(input.value))
        let item = document.createElement('option')
        item.text = `Valor ${input.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    input.value = ''
    input.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let totalDeElementos = valores.length
        let maior = valores[0] 
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma/totalDeElementos
        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Ao todo, foram informados <b> ${totalDeElementos} </b> números. </p>`
        resultado.innerHTML += `<p>O maior valor informado foi <b>${maior}</b>.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi <b>${menor}</b>.</p>`
        resultado.innerHTML += `<p>Somando todos os valores temos <b>${soma}</b>.</p>`
        resultado.innerHTML += `<p>A média dos valores informados é <b>${media}</b>.</p>`
    }

}
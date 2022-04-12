var jogadores = []   //LISTA DOS JOGADORES

function calcularPontos(jogador) {
    var pontos = (jogador.vitorias * 2) + jogador.empates;
    var retorno = document.getElementById('resultado')

    if (pontos === 20){
      retorno.innerText = ("Parabéns " + jogador.nome + "!")
    }

    return pontos
} // FUNÇÃO QUE CALCULA PONTOS


function exibirJogadoresNaTela(jogadores) {
    var elemento = ""
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tbody><tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button className='botoes' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button className='botoes' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button className='botoes' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr></tbody>"
    } // RETORNA ESSE HTML NA TELA NO ELEMENTO DE DETERMINADO ID

    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = elemento

}

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calcularPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calcularPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}


function adicionarNovoJogador() {
    var inputNomeJogador = document.getElementById('inputNomeJogador').value
    var primeiraLetra = inputNomeJogador.slice(0,1).toUpperCase();
    var restoDoNome = inputNomeJogador.slice(1, inputNomeJogador.length).toLowerCase();             //Formatar input
    var inputNomeCompleto = primeiraLetra + restoDoNome
    console.log(inputNomeCompleto)

    if (inputNomeCompleto === "") {
        alert('Insira o nome do jogador')
    } else {
        var novoJogador = { nome: inputNomeCompleto, vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
        jogadores.push(novoJogador)
        exibirJogadoresNaTela(jogadores)
    } 
}


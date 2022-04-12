const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
    try {
        const dados = await fetch(BASE_URL);
        const json = await dados.json();

        return json.webpurl
    } catch (e) {
        console.log(e.message);
    }
};


const botao = document.querySelector('#mudar-gato');
const imagem = document.querySelector('#gato');

const carregarImagem = async () => {
    imagem.src = await getCats();
}

botao.addEventListener('click', carregarImagem);

carregarImagem();
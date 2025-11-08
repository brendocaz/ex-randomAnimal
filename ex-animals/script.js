const botaoAleatorio = document.getElementById('btn-random');
const imagemGato = document.getElementById('cat-image');
const botaoAutomatico = document.getElementById('btn-auto');
const loading = document.querySelector('.loading');
let intervalo = null;

async function buscarImagemGato() {
    loading.style.display = 'block';
    imagemGato.style.display = 'none';
  try {
    const resposta = await fetch('https://api.thecatapi.com/v1/images/search');

    const dados = await resposta.json();

    imagemGato.src = dados[0].url;
    imagemGato.alt = "imagem gato";

    loading.style.display = 'none'
    imagemGato.style.display = 'block';
  } catch(erro) {
    console.log('Ocorreu um erro ao chamar a api, o erro é esse aqui: ', erro)
  }
}

botaoAleatorio.addEventListener('click', buscarImagemGato);

function buscarImagemGatoAutomatica() {
    if(intervalo != null) {
        clearInterval(intervalo);
        intervalo = null;
        botaoAutomatico.textContent = 'Gerar a cada 5s';
    }else{
        intervalo = setInterval(buscarImagemGato, 5000);
        botaoAutomatico.textContent = 'Parar de gerar'
    }   
}
   

botaoAutomatico.addEventListener('click', buscarImagemGatoAutomatica)
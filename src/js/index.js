const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
let indiceAtual = 0;

// função que muda a imagem do carrossel
function mudarImagemCarrossel() {
  // 1- desmarcar o botao selecionado anteriormente 
  desativarBotaoSelecionado();

  // 2- calcular o indice da próxima imagem
  indiceAtual = (indiceAtual + 1) % imagens.length;

  // 3- marcar o botao correspondente como selecionado
  selecioanrBotaoCarrossel(botoesCarrossel[indiceAtual]);

  // 4- esconder a imagem ativa anterior 
  esconderImagemAtiva();

  // 5- fazer aparecer a imagem correspondente do botao clicado
  mostrarImagemDeFundo(indiceAtual);
}

// chamar a função que muda a imagem do carrossel a cada 10 segundos
setInterval(mudarImagemCarrossel, 10000);

// código para mudar a imagem do carrossel quando um botão é clicado
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    // desmarcar o botao selecionado anteriormente 
    desativarBotaoSelecionado();

    // marcar o botao clicado como se estivesse selecionado 
    selecioanrBotaoCarrossel(botao);

    // esconder a imagem ativa anterior 
    esconderImagemAtiva();

    // fazer aparecer a imagem correspondente do botao clicado
    mostrarImagemDeFundo(indice);
    
    // atualizar o indice atual para o indice correspondente ao botão clicado
    indiceAtual = indice;
  })
})

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function selecioanrBotaoCarrossel(botao) {
  botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}
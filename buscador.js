// buscador.js
import { dados } from './dados.js'; // Importa o array de receitas com informações sobre cada bolo do aquivo 'dados.js'

const campodeBusca = document.getElementById("campo-de-busca") 
const botaoPesquisar = document.getElementById("pesquisar") 
const principal = document.getElementById("principal"); // Seleciona a seção principal onde os resultados serão exibidos

function buscarReceitas(termoBusca) {
  // Remove espaços em branco do início e do fim do termo de busca
  const termoMinimo = termoBusca.trim().toLowerCase(); 

  const resultados = dados.filter(receita => {
    // Remove espaços em branco do início e do fim do nome da receita
    const nomeReceita = receita.nome.trim().toLowerCase(); 

    return nomeReceita === termoMinimo; 
  });

  // Limpa a seção principal para exibir os novos resultados
  principal.innerHTML = '';

  if (resultados.length === 0) {
    principal.innerHTML = '<button class="voltar" onclick="window.location.reload();">Ops!Bolo não encontado.</button>';
  } else {
    // Cria um elemento div para cada resultado encontrado
    resultados.forEach(receita => {
      const resultadoElement = document.createElement('div');
      resultadoElement.classList.add('resultado');
      resultadoElement.innerHTML = `
        <h4>${receita.nome}</h4>
        <p>${receita.descricao}</p>
        <p>${receita.ingredientes}</p>
        <p>${receita.preparo}</p>
        <a href="${receita.link}" target="_blank">Ver receita completa</a>
        <p ><button class="voltar" onclick="window.location.reload();">Voltar</button></p>
      `;
      principal.appendChild(resultadoElement);
    });
  }
}

// Adiciona uma chamada da fundão pesquisar quando o botão é clicado
botaoPesquisar.addEventListener('click', () => {
  const termoBusca = campodeBusca.value;
  buscarReceitas(termoBusca);
});

// Adiciona um ouvinte de evento para a tecla Enter 
campodeBusca.addEventListener('keypress', (event) => {
  if (event.key === "Enter") {  // Verifica se a tecla pressionada foi Enter
    const termoBusca = campodeBusca.value;
    buscarReceitas(termoBusca);
  }
});
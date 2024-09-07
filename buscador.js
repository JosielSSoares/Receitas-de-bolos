// buscador.js
import { dados } from './dados.js'; // Importa o array de receitas com informações sobre cada bolo

const searchBar = document.querySelector('.search-bar'); // Seleciona o elemento de entrada de texto para a busca
const searchButton = document.querySelector('.pesquisar'); // Seleciona o botão para iniciar a busca
const main = document.querySelector('main'); // Seleciona a seção principal onde os resultados serão exibidos

function buscarReceitas(termoBusca) {
  // Filtra as receitas que tenham o nome exatamente igual ao termo de busca
  const resultados = dados.filter(receita => {
    const termoMin = termoBusca.toLowerCase();
    return receita.nome.toLowerCase() === termoMin;
  });

  // Limpa a seção principal para exibir os novos resultados
  main.innerHTML = '';

  if (resultados.length === 0) {
    main.innerHTML = '<button class="voltar" onclick="window.location.reload();">Ops!Bolo não encontado.</button>';
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
      main.appendChild(resultadoElement);
    });
  }
}

// Adiciona um ouvinte de evento ao botão de busca
searchButton.addEventListener('click', () => {
  const termoBusca = searchBar.value; // Obtém o termo de busca digitado pelo usuário
  buscarReceitas(termoBusca); // Chama a função de busca com o termo pesquisado
});
// buscador.js
import {dados} from './dados.js'; // Importa o array de receitas

const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.pesquisar');
const main = document.querySelector('main');

function buscarReceitas(termoBusca) {
  const resultados = dados.filter(receita => {
    const termoMin = termoBusca.toLowerCase();
    return Object.values(receita).some(valor =>
      typeof valor === 'string' && valor.toLowerCase().includes(termoMin)
    );
  });
debugger;
  // Limpa os resultados anteriores
  main.innerHTML = '';

  // Cria um elemento para cada resultado e adiciona ao main
  resultados.forEach(receita => {
    const resultadoElement = document.createElement('div');
    resultadoElement.classList.add('resultado');
    resultadoElement.innerHTML = `
      <h2>${receita.nome}</h2>
      <p>${receita.descricao}</p>
      <p>${receita.ingredientes}</p>
      <p>${receita.preparo}</p>
      <a href="${receita.link}" target="_blank">Ver receita completa</a>
    `;
    main.appendChild(resultadoElement);
  });
}

searchButton.addEventListener('click', () => {
  const termoBusca = searchBar.value;
  buscarReceitas(termoBusca);
});
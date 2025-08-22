const mockRecomendacoes = [
    { id: 1, nome: 'O Guia do Mochileiro das Galáxias' },
    { id: 2, nome: 'A Origem' },
    { id: 3, nome: 'Duna' },
];

function renderizarRecomendacoes() {
    const container = document.querySelector('.recomendacoes-container');
    container.innerHTML = ''; 
    
    mockRecomendacoes.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item-recomendado');
        div.innerHTML = `<h3>${item.nome}</h3>`;
        div.addEventListener('click', () => {
            alert(`Você clicou em "${item.nome}"!`);
         
            });
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', renderizarRecomendacoes);
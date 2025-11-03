// 1. O Método Educativo: Explicando o JavaScript
// Este código irá 'escutar' quando o botão é clicado.
// Quando o clique acontece, ele verifica se o formulário está visível.
// Se estiver visível, ele esconde (display: none). Se estiver escondido, ele mostra (display: block).

document.addEventListener('DOMContentLoaded', function() {
    // Pega o botão e o conteúdo do formulário usando os IDs que definimos
    const botao = document.getElementById('toggleContatoBtn');
    const conteudo = document.getElementById('contato-conteudo');
    
    // Adiciona um 'ouvinte de eventos' (event listener) ao botão
    botao.addEventListener('click', function() {
        
        // Verifica o estilo atual do elemento (se está 'none' ou não)
        if (conteudo.style.display === 'none' || conteudo.style.display === '') {
            // Se estiver escondido, mostra e muda o texto do botão
            conteudo.style.display = 'block';
            botao.textContent = 'Ocultar Formulário (Traga sua História)';
            
            // Opcional: Rola a página até o formulário
            conteudo.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Se estiver visível, esconde
            conteudo.style.display = 'none';
            botao.textContent = 'Traga sua História para Nós! (Clique para Abrir o Formulário)';
        }
    });
    
    // Configura o estado inicial: garante que o formulário esteja escondido ao carregar
    conteudo.style.display = 'none';
});
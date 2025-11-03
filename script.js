document.addEventListener('DOMContentLoaded', function() {
    
    // ===============================================
    // CÓDIGO DO BOTÃO VOLTAR AO TOPO (Back-to-Top)
    // ===============================================

    // Pega o elemento do botão DEPOIS que o DOM (HTML) carregou
    const mybutton = document.getElementById("back-to-top");

    // Condição de Segurança: só executa se o botão for encontrado
    if (mybutton) {
        
        // Função que verifica a rolagem e mostra/esconde
        function scrollFunction() {
            // Se rolou mais de 20px
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block"; // MOSTRA
            } else {
                mybutton.style.display = "none";  // ESCONDE
            }
        }
        
        // Quando o usuário rola, chama a função scrollFunction
        window.onscroll = function() {
            scrollFunction();
        };
    }
    
    
    // ===============================================
    // OUTRAS FUNÇÕES (Toggle do Formulário)
    // ===============================================

    // ATENÇÃO: Se o seu formulário não usa um botão de 'toggle', 
    // ou se você não definiu 'toggleContatoBtn' e 'contato-conteudo' no HTML,
    // este bloco pode precisar de ajuste. Vamos assumir que você tem estes IDs no HTML.
    
    const botaoToggle = document.getElementById('toggleContatoBtn');
    const conteudoContato = document.getElementById('contato-conteudo');
    
    if (botaoToggle && conteudoContato) {
        
        // Adiciona um 'ouvinte de eventos' (event listener) ao botão
        botaoToggle.addEventListener('click', function() {
            if (conteudoContato.style.display === 'none' || conteudoContato.style.display === '') {
                conteudoContato.style.display = 'block';
                botaoToggle.textContent = 'Ocultar Formulário (Traga sua História)';
                conteudoContato.scrollIntoView({ behavior: 'smooth' });
            } else {
                conteudoContato.style.display = 'none';
                botaoToggle.textContent = 'Traga sua História para Nós! (Clique para Abrir o Formulário)';
            }
        });
        
        // Configura o estado inicial: garante que o formulário esteja escondido ao carregar
        conteudoContato.style.display = 'none';
    }
});
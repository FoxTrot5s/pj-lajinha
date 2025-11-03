document.addEventListener('DOMContentLoaded', function() {


const menuToggle = document.getElementById('menu-toggle');
const mainNavigation = document.getElementById('main-navigation');

if (menuToggle && mainNavigation) {
    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'open' na tag <nav>
        mainNavigation.classList.toggle('open'); 
        
        // Atualiza o atributo de acessibilidade
        let isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !isExpanded);
    });
}

// ===============================================
// LÓGICA DE TROCA DE PÁGINAS (SECTIONS)
// ===============================================
const navLinks = document.querySelectorAll('nav ul li a');
const allSections = document.querySelectorAll('main section:not(#contato-trigger)');

// Função principal para mostrar a seção
function showSection(sectionId) {
    // 1. Esconde todas as seções
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    // 2. Mostra a seção desejada
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola para o topo
    }
}

// Adiciona o ouvinte de clique em todos os links de navegação
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão de rolar
        
        const targetId = this.getAttribute('href'); // Pega o ID (#historias, #galeria, etc.)
        showSection(targetId);
        
        // No mobile: fecha o menu hamburger depois de clicar
        if (mainNavigation.classList.contains('open')) {
             mainNavigation.classList.remove('open');
             menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
    
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

    // ... (código do toggle do formulário e fim do DOMContentLoaded)

    // Configura o estado inicial: garante que o formulário esteja escondido ao carregar
    conteudoContato.style.display = 'none';
    
    // 🚨 NOVO CÓDIGO: Define a seção inicial a ser exibida
    // Chama a função para mostrar a seção '#historias' (que por sua vez não esconde #contato-trigger)
    showSection('#historias'); 

}); // Fim do DOMContentLoaded

// ===============================================
// 📸 CÓDIGO DO CARROSSEL DE IMAGENS
// ===============================================

let slideIndex = 1;

// Chamada inicial para mostrar a primeira imagem quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
});

// Função para avançar/retroceder com as setas
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Função para navegar pelos pontos (dots)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Função principal que controla a visibilidade das imagens
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    // Condição para loop infinito (chegar ao fim e voltar para o início)
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Oculta todas as imagens
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Remove a classe 'active' de todos os pontos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Mostra a imagem atual e marca o ponto correspondente
    // Verifica se o carrossel existe antes de tentar mostrar
    if (slides.length > 0) {
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }

    
}




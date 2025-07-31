// Menu responsivo e acessível
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    const expanded = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', expanded);
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && e.target !== menuToggle) {
        menu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
    }
});

// Controle de acessibilidade: aumento/diminuição de fonte
const increaseBtn = document.getElementById('increase-font');
const decreaseBtn = document.getElementById('decrease-font');
const root = document.documentElement;
let fontSize = 1;

increaseBtn.addEventListener('click', () => {
    fontSize = Math.min(fontSize + 0.1, 2);
    root.style.setProperty('--font-size', `${fontSize}rem`);
});

decreaseBtn.addEventListener('click', () => {
    fontSize = Math.max(fontSize - 0.1, 0.8);
    root.style.setProperty('--font-size', `${fontSize}rem`);
});

// Alternância de contraste
const contrastBtn = document.getElementById('toggle-contrast');
contrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('contrast');
});

// Scroll suave para seções ao clicar no menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
            menu.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', false);
            target.focus();
        }
    });
});

// ScrollReveal animações
ScrollReveal().reveal('.reveal', {
    origin: 'bottom',
    distance: '50px',
    duration: 900,
    delay: 100,
    easing: 'ease-in-out',
    reset: true
});

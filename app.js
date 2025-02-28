// Fonction pour basculer le menu mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

// Fonction pour vérifier si un élément est visible à l'écran
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour déclencher les animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('fade-in'); // ou 'slide-up' selon l'effet souhaité
            element.classList.remove('hidden'); // Retirer la classe hidden une fois l'animation déclenchée
        }
    });
}

// Fonction pour animer les nombres
function animateNumbers() {
    const numbers = document.querySelectorAll('.number');
    const speed = 200; // Ajustez la vitesse ici

    numbers.forEach(number => {
        const target = +number.getAttribute('data-target');
        const increment = target / speed;
        let current = 0;

        const updateNumber = () => {
            if (current < target) {
                current += increment;
                number.innerText = Math.ceil(current);
                requestAnimationFrame(updateNumber);
            } else {
                number.innerText = target;
            }
        };

        updateNumber();
    });
}

// Écouter l'événement de défilement pour les animations
window.addEventListener('scroll', handleScrollAnimations);

// Déclencher une première vérification au chargement de la page
window.addEventListener('load', () => {
    handleScrollAnimations();
    animateNumbers();
});

// Redirection vers une page d'inscription lors du clic sur "S'inscrire"
document.querySelectorAll('.formation button').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'A_propos.html'; // Rediriger vers une page d'inscription
    });
});

// Validation du formulaire (si vous ajoutez un formulaire plus tard)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inscription-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const nom = document.getElementById('nom').value;
            if (nom.trim() === '') {
                e.preventDefault();
                alert('Veuillez remplir votre nom.');
            }
        });
    }
});

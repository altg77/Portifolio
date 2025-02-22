const textElement = document.querySelector(".tipo-text span");
const words = [" Web Developer ", " Designer Gráfico ", " Social Media ", " Ilustrador "];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        textElement.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 2 : 40; // Velocidade da digitação e remoção

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500; // Pausa antes de apagar
        isDeleting = true;
    } 
    
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Alterna para a próxima palavra
        speed = 100; // Pequena pausa antes de começar a nova palavra
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

const text = "Ceci est un texte provisoire qui n'a pas de but, si ce n'est de remplir le rectangle vide. Merci de votre compréhension.  ";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 30); 
    }
}

window.onload = typeText;

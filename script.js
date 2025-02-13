// Obtener elementos del DOM
const card = document.getElementById('card');
const letter = document.getElementById('letter');
const readButton = document.getElementById('readButton');
const dialogText = document.getElementById('dialogText');

// Textos para mostrar en el cuadro de diálogo
const texts = [
    "Una carta ha llegado...De: Manuel... Para: Brenda",
];

let currentTextIndex = 0;

// Función para mostrar texto con animación de escritura
function showText(index) {
    const text = texts[index];
    let charIndex = 0;
    dialogText.innerHTML = ''; // Limpiar el texto anterior

    const interval = setInterval(() => {
        if (charIndex < text.length) {
            dialogText.innerHTML += text[charIndex];
            charIndex++;
        } else {
            clearInterval(interval);
            // Si hay más textos, esperar 2 segundos antes de mostrar el siguiente
            if (index < texts.length - 1) {
                setTimeout(() => {
                    showText(index + 1);
                }, 2000);
            }
        }
    }, 50); // Velocidad de escritura (50ms por carácter)
}

// Iniciar la animación de texto al cargar la página
window.onload = () => {
    showText(currentTextIndex);
};

// Agregar evento de clic a la carta
card.addEventListener('click', () => {
    letter.classList.add('show');
});

// Agregar evento de clic al botón "Leer la carta"
readButton.addEventListener('click', () => {
    letter.classList.add('show');
});
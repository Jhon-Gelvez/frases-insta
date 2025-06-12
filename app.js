document.getElementById("nav-mobile").addEventListener("click", function () {
    document.querySelector(".header__ul").classList.toggle("open-menu");
});

// Seleccionar todos los elementos li y content
const menuItems = document.querySelectorAll(".header__li");
const contentSections = document.querySelectorAll(".content");

// Añadir event listener a cada li
menuItems.forEach((item, index) => {
    item.addEventListener("click", function () {
        // Primero ocultar todos los contenidos
        contentSections.forEach((section) => {
            section.style.display = "none";
        });

        // Luego mostrar solo el contenido correspondiente
        if (contentSections[index]) {
            contentSections[index].style.display = "block";
        }
    });
});

// Opcional: mostrar solo el primer contenido al cargar la página
if (contentSections.length > 0) {
    contentSections.forEach((section, i) => {
        section.style.display = i === 0 ? "block" : "none";
    });
}

// const frases = {
//     motivacion: [
//         "Hoy es el día para brillar ✨",
//         "Tú puedes con todo, ¡sigue adelante!",
//         "Cada paso te acerca a tus sueños.",
//     ],
//     amor: [
//         "Eres mi razón para sonreír cada día ❤️",
//         "Contigo, el mundo es más bonito.",
//         "Amar es encontrar hogar en otra persona.",
//     ],
//     humor: [
//         "La vida es corta, ¡come el postre primero! 😜",
//         "No estoy vago, estoy en modo ahorro de energía.",
//         "Mi superpoder es desaparecer cuando hay que lavar platos.",
//     ],
// };

// const form = document.getElementById("fraseForm");
// const resultado = document.getElementById("resultado");
// const copiarBtn = document.getElementById("copiar");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const categoria = document.getElementById("categoria").value;
//     const frasesCategoria = frases[categoria];
//     const fraseAleatoria =
//         frasesCategoria[Math.floor(Math.random() * frasesCategoria.length)];

//     resultado.textContent = fraseAleatoria;
//     copiarBtn.classList.remove("hidden");
// });

// copiarBtn.addEventListener("click", () => {
//     navigator.clipboard.writeText(resultado.textContent);
//     alert("¡Frase copiada!");
// });

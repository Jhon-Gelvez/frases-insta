document.getElementById("nav-mobile").addEventListener("click", function () {
    const menu = document.querySelector(".header__ul");
    menu.classList.toggle("open-menu");
});

// Añadir event listener a todos los .header__li para cerrar el menú al hacer clic
document.querySelectorAll(".header__li").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".header__ul").classList.remove("open-menu");
    });
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

// efecto a la frase cunado le dan un click

// Crear botón de copiar
const btnCopiar = document.createElement("a");
btnCopiar.className = "btnCopiar material-symbols-outlined";
btnCopiar.textContent = "content_copy";
btnCopiar.style.cursor = "pointer";

// Añadir a cada tarjeta
document.querySelectorAll(".frase").forEach((tarjeta) => {
    const btnClonado = btnCopiar.cloneNode(true);

    // Insertar botón después de la tarjeta
    tarjeta.after(btnClonado);

    // Evento para copiar y resaltar
    btnClonado.addEventListener("click", (e) => {
        e.stopPropagation();

        // 1. Copiar contenido
        const textoACopiar = tarjeta.textContent.trim();
        navigator.clipboard
            .writeText(textoACopiar)
            .then(() => {
                // 2. Feedback visual
                btnClonado.textContent = "done";

                // 3. Resaltar tarjeta
                document.querySelectorAll(".frase").forEach((t) => {
                    t.classList.toggle("highlight", t === tarjeta);
                });

                // 4. Restaurar ícono después de 2 segundos
                setTimeout(() => {
                    btnClonado.textContent = "content_copy";
                }, 2000);
            })
            .catch((err) => {
                console.error("Error al copiar: ", err);
                btnClonado.textContent = "error";
            });
    });
});

// Evento para resaltar al hacer click en la tarjeta
document.addEventListener("click", (e) => {
    const tarjeta = e.target.closest(".frase");
    if (tarjeta) {
        document.querySelectorAll(".frase").forEach((t) => {
            t.classList.toggle("highlight", t === tarjeta);
        });
    } else if (!e.target.closest(".btnCopiar")) {
        document.querySelectorAll(".frase").forEach((t) => {
            t.classList.remove("highlight");
        });
    }
});

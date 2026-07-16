document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("menuToggle");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.getElementById("overlay");

    if (!boton || !sidebar || !overlay) return;

    function abrirMenu() {

        sidebar.classList.add("show");
        overlay.classList.add("show");

    }

    function cerrarMenu() {

        sidebar.classList.remove("show");
        overlay.classList.remove("show");

    }

    boton.addEventListener("click", (e) => {

        e.stopPropagation();

        if (sidebar.classList.contains("show")) {

            cerrarMenu();

        } else {

            abrirMenu();

        }

    });

    overlay.addEventListener("click", cerrarMenu);

    // Hace la función accesible desde cualquier archivo
    window.closeSidebar = cerrarMenu;

});

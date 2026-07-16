/**
 * ==========================================
 * NAVEGACIÓN DEL SIDEBAR
 * ==========================================
 */

function initializeNavigation() {

    const buttons = document.querySelectorAll(".menu");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.getElementById("overlay");

    buttons.forEach(button => {

        button.onclick = async (e) => {

            e.preventDefault();
            e.stopPropagation();

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Cerrar menú en móviles
            if (window.innerWidth <= 900) {
                sidebar.classList.remove("show");
                overlay.classList.remove("show");
            }

            await loadView(button.dataset.view);

        };

    });

}

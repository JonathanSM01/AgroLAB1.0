/**
 * ==========================================
 * NAVEGACIÓN DEL SIDEBAR
 * ==========================================
 */

function initializeNavigation() {

    const buttons = document.querySelectorAll(".menu");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const view = button.dataset.view;

            loadView(view);

        });

    });

}

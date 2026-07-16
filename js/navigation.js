/**
 * ==========================================
 * NAVEGACIÓN DEL SIDEBAR
 * ==========================================
 */

function initializeNavigation() {

    const buttons = document.querySelectorAll(".menu");

    buttons.forEach(button => {

        button.onclick = async function (e) {

            e.preventDefault();
            e.stopPropagation();

            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            await loadView(this.dataset.view);

            if (window.innerWidth <= 900) {

                if (window.closeSidebar) {

                window.closeSidebar();

                }

            }
    
        };

    });

}

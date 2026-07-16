/**
 * ==========================================
 * AGROLAB
 * Archivo principal
 * ==========================================
 */

document.addEventListener("DOMContentLoaded", () => {

    const landing = document.getElementById("landing");
    const dashboard = document.getElementById("dashboard");
    const startBtn = document.getElementById("startBtn");

    startBtn.addEventListener("click", async () => {

        landing.style.display = "none";
        dashboard.classList.remove("hidden");

        initializeNavigation();

        await loadView("home");

        if (typeof loadDashboard === "function") {
            await loadDashboard();
        }

        if (typeof showTour === "function") {
            showTour();
        }

    });

});

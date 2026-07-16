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

        await loadView("home");

        await loadDashboard();

        initializeNavigation();

        showTour();

    });

});

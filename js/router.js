/**
 * ==========================================
 * AGROLAB ROUTER v1.1
 * Con transición entre vistas
 * ==========================================
 */

async function loadView(viewName) {

    const container = document.getElementById("view");

    try {

        /* Animación de salida */

        container.classList.add("fade-out");

        await new Promise(resolve => setTimeout(resolve, 220));

        /* Cargar la vista */

        const response = await fetch(`views/${viewName}.html`);

        if (!response.ok) {

            throw new Error("No se pudo cargar la vista.");

        }

        const html = await response.text();

        container.innerHTML = html;

        /* Animación de entrada */

        container.classList.remove("fade-out");

        container.classList.add("fade-in");

        setTimeout(() => {

            container.classList.remove("fade-in");

        }, 350);

        /* ==========================================
           FUNCIONES ESPECÍFICAS DE CADA VISTA
        ========================================== */

        if (viewName === "home") {

            if (typeof loadDashboard === "function") {

                await loadDashboard();

            }

            if (typeof createGrowthChart === "function") {

                createGrowthChart();

            }

        }

        if (viewName === "results") {

            if (typeof createChart === "function") {

                createChart();

            }

        }

        if (viewName === "evidence") {

            if (typeof initEvidence === "function") {

                initEvidence();

            }

        }

if(viewName==="costs"){

    if(typeof createCostChart==="function"){

        createCostChart();

    }

    if(typeof startCounters==="function"){

        startCounters();

    }

}

        if (viewName === "conclusions") {

            if (typeof playCelebration === "function") {

                playCelebration();

            }

        }

        if (viewName === "academy") {

            if (typeof initializeAcademy === "function") {

                initializeAcademy();

            }

        }

    } catch (error) {

        console.error(error);

        container.innerHTML = `

        <pre style="color:red;background:#fff;padding:20px;white-space:pre-wrap;">

${error.stack}

        </pre>

        `;

    }

}
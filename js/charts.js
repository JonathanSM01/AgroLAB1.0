let growthChart = null;

function createGrowthChart() {

    const canvas = document.getElementById("growthChart");

    if (!canvas) return;

    // Evita crear dos gráficas encima de la otra
    if (growthChart) {
        growthChart.destroy();
    }

    growthChart = new Chart(canvas, {

        type: "bar",

        data: {

            labels: [

                "Tierra Virgen",
                "Compost",
                "Compost + NPK"

            ],

            datasets: [{

                label: "Altura promedio (cm)",

                data: [11, 18, 27],

                backgroundColor: [

                    "#8D6E63",
                    "#66BB6A",
                    "#2E7D32"

                ],

                borderRadius: 10

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            animation: {

                duration: 1800

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}
function createCostChart(){

    const canvas = document.getElementById("costChart");

    if(!canvas) return;

    new Chart(canvas,{

        type:"doughnut",

        data:{

            labels:[
                "Recipientes",
                "Residuos Orgánicos",
                "NPK",
                "Semillas",
                "Movilidad",
                "Agua y Energía"
            ],

            datasets:[{

                data:[
                    4.20,
                    10,
                    2.5,
                    2.25,
                    3,
                    3.05
                ],

                backgroundColor:[
                    "#66BB6A",
                    "#2E7D32",
                    "#FFA726",
                    "#29B6F6",
                    "#AB47BC",
                    "#8D6E63"
                ],

                borderWidth:2

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{

                    position:"bottom"

                }

            }

        }

    });

}
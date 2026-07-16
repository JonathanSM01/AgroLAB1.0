let resultsChart;

function createChart(){

    const canvas=document.getElementById("resultsChart");

    if(!canvas) return;

    if(resultsChart){

        resultsChart.destroy();

    }

    resultsChart=new Chart(canvas,{

        type:"bar",

        data:{

            labels:["T1","T2","T3"],

            datasets:[

                {

                    label:"Temperatura (°C)",

                    data:[29,33,35],

                    backgroundColor:[
                        "#A1887F",
                        "#66BB6A",
                        "#2E7D32"
                    ],

                    hoverBackgroundColor:[
                        "#8D6E63",
                        "#43A047",
                        "#1B5E20"
                    ],

                    borderRadius:10

                }

            ]

        },

        options:{

    responsive:true,

    maintainAspectRatio:false,

    plugins:{

        legend:{

            display:false

        }

    },

    animation:{

        duration:1800,

        easing:"easeOutBounce"

    },

    scales:{

        y:{

            beginAtZero:true,

            suggestedMax:40

        }

    }

}

    });

}
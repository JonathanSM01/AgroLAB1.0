const tourSteps=[

{
title:"👋 Bienvenido a AgroLab",
text:"Este sistema presenta el desarrollo completo del proyecto de compostaje de forma interactiva."
},

{
title:"📊 Dashboard",
text:"Aquí encontrarás un resumen general del experimento y sus indicadores."
},

{
title:"🌱 Proyecto",
text:"Conoce el objetivo, la metodología y el desarrollo de la investigación."
},

{
title:"📷 Evidencias",
text:"Observa fotografías reales del proceso experimental."
},

{
title:"🤖 Academy",
text:"Accede a recursos científicos, conceptos y búsquedas inteligentes sobre compostaje."
}

];

let currentStep=0;

function showTour(){

    if(localStorage.getItem("agrolab-tour")) return;

    createStep();

}

function createStep(){

    const old=document.querySelector(".tour-overlay");

    if(old) old.remove();

    const step=tourSteps[currentStep];

    const overlay=document.createElement("div");

    overlay.className="tour-overlay";

    overlay.innerHTML=`

    <div class="tour-card">

        <h2>${step.title}</h2>

        <p>${step.text}</p>

        <div class="tour-buttons">

            <button id="skipTour">Omitir</button>

            <button id="nextTour">

                ${currentStep==tourSteps.length-1?"Finalizar":"Siguiente"}

            </button>

        </div>

    </div>

    `;

    document.body.appendChild(overlay);

    document.getElementById("skipTour").onclick=finishTour;

    document.getElementById("nextTour").onclick=()=>{

        currentStep++;

        if(currentStep>=tourSteps.length){

            finishTour();

        }else{

            createStep();

        }

    };

}

function finishTour(){

    localStorage.setItem("agrolab-tour","true");

    document.querySelector(".tour-overlay")?.remove();

}
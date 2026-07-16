document.addEventListener("DOMContentLoaded",()=>{

    const loader=document.getElementById("loader");

    const fill=document.getElementById("progressFill");

    const percent=document.getElementById("progressPercent");

    const text=document.getElementById("progressText");

    const steps=[

        "Inicializando sistema...",

        "Cargando módulos...",

        "Preparando Dashboard...",

        "Iniciando AgroBot...",

        "Finalizando..."

    ];

    let value=0;

    let step=0;

    const interval=setInterval(()=>{

        value+=2;

        fill.style.width=value+"%";

        percent.textContent=value+"%";

        if(value%20===0 && step<steps.length){

            text.textContent=steps[step];

            step++;

        }

        if(value>=100){

            clearInterval(interval);

            setTimeout(()=>{

                loader.classList.add("loader-hide");

                setTimeout(()=>{

                    loader.remove();

                },700);

            },400);

        }

    },35);

});
const simulationData = {

    1:{

        observation:"Se realizó la preparación inicial de los tres tratamientos experimentales.",

        T1:{
            temp:"29°C",
            hum:"58%",
            state:"Preparación",
            obs:"Tierra sin fertilización.",
            progress:"20%"
        },

        T2:{
            temp:"29°C",
            hum:"59%",
            state:"Preparación",
            obs:"Mezcla de tierra con compost.",
            progress:"20%"
        },

        T3:{
            temp:"30°C",
            hum:"60%",
            state:"Preparación",
            obs:"Mezcla de tierra, compost y NPK.",
            progress:"20%"
        }

    },

    5:{

        observation:"Se realizó el primer monitoreo de humedad y temperatura.",

        T1:{
            temp:"31°C",
            hum:"60%",
            state:"Reposo",
            obs:"La tierra mantiene estabilidad.",
            progress:"40%"
        },

        T2:{
            temp:"33°C",
            hum:"63%",
            state:"Actividad biológica",
            obs:"El compost comienza su descomposición.",
            progress:"45%"
        },

        T3:{
            temp:"34°C",
            hum:"64%",
            state:"Alta actividad",
            obs:"El NPK favorece el desarrollo del sustrato.",
            progress:"50%"
        }

    },

    10:{

        observation:"Se observa una mayor actividad microbiana en los tratamientos.",

        T1:{
            temp:"32°C",
            hum:"61%",
            state:"Estable",
            obs:"Cambios mínimos.",
            progress:"55%"
        },

        T2:{
            temp:"35°C",
            hum:"65%",
            state:"Descomposición",
            obs:"Mayor actividad del compost.",
            progress:"65%"
        },

        T3:{
            temp:"37°C",
            hum:"67%",
            state:"Descomposición intensa",
            obs:"Mayor actividad biológica.",
            progress:"75%"
        }

    },

    15:{

        observation:"El sustrato alcanza condiciones óptimas para la siembra.",

        T1:{
            temp:"31°C",
            hum:"60%",
            state:"Listo",
            obs:"Condiciones aceptables.",
            progress:"80%"
        },

        T2:{
            temp:"33°C",
            hum:"62%",
            state:"Listo",
            obs:"Buen desarrollo del compost.",
            progress:"85%"
        },

        T3:{
            temp:"34°C",
            hum:"63%",
            state:"Óptimo",
            obs:"Mejor calidad del sustrato.",
            progress:"90%"
        }

    },

    21:{

        observation:"Apto para iniciar la germinación.",

        T1:{
            temp:"30°C",
            hum:"58%",
            state:"Germinación",
            obs:"Primeros cambios visibles.",
            progress:"100%"
        },

        T2:{
            temp:"31°C",
            hum:"60%",
            state:"Germinación",
            obs:"Buen desarrollo inicial.",
            progress:"100%"
        },

        T3:{
            temp:"32°C",
            hum:"61%",
            state:"Mayor crecimiento",
            obs:"Mejor respuesta del experimento.",
            progress:"100%"
        }

    }

};

function updateTreatment(id, data){

    document.getElementById(id+"Temp").textContent=data.temp;
    document.getElementById(id+"Hum").textContent=data.hum;
    document.getElementById(id+"State").textContent=data.state;
    document.getElementById(id+"Obs").textContent=data.obs;
    document.getElementById(id+"Bar").style.width=data.progress;

}

function changeStage(day, button){

    const info=simulationData[day];

    updateTreatment("t1",info.T1);
    updateTreatment("t2",info.T2);
    updateTreatment("t3",info.T3);

    document.getElementById("generalObservation").textContent=info.observation;

    document.querySelectorAll(".time").forEach(btn=>btn.classList.remove("active"));

    button.classList.add("active");

}

document.addEventListener("click",function(e){

    if(e.target.classList.contains("time")){

        changeStage(e.target.dataset.day,e.target);

    }

});
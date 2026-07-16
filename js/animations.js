/*=========================================
ANIMACIÓN DE CONTADORES
=========================================*/

function animateCounter(id,target,suffix="",duration=1200){

    const element=document.getElementById(id);

    if(!element) return;

    let start=0;

    const increment=target/(duration/16);

    function update(){

        start+=increment;

        if(start>=target){

            element.textContent=target+suffix;

            return;

        }

        element.textContent=Math.floor(start)+suffix;

        requestAnimationFrame(update);

    }

    update();

}

function startCounters(){

    animateCounter("totalBudget",25);

    animateCounter("materialsCount",7);

    animateCounter("projectStatus",100);

}
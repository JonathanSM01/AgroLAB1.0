document.addEventListener("DOMContentLoaded",()=>{

    const boton=document.getElementById("menuToggle");

    const sidebar=document.querySelector(".sidebar");

    const overlay=document.getElementById("overlay");

    if(!boton||!sidebar)return;

    boton.addEventListener("click",()=>{

        sidebar.classList.toggle("show");

        overlay.classList.toggle("show");

    });

    overlay.addEventListener("click",()=>{

        sidebar.classList.remove("show");

        overlay.classList.remove("show");

    });

});
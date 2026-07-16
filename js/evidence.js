function initEvidence(){

    const images = document.querySelectorAll(".gallery img, .evidence-card img");

    const lightbox = document.getElementById("lightbox");

    const lightboxImg = document.getElementById("lightboxImg");

    const close = document.getElementById("closeLightbox");

    if(!lightbox) return;

    images.forEach(img=>{

        img.addEventListener("click",()=>{

            lightbox.style.display="flex";

            lightboxImg.src=img.src;

        });

    });

    close.addEventListener("click",()=>{

        lightbox.style.display="none";

    });

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.style.display="none";

        }

    });

}
let celebrationPlayed = false;

function playCelebration(){

    if(celebrationPlayed) return;

    celebrationPlayed = true;

    const duration = 3000;

    const end = Date.now() + duration;

    (function frame(){

        confetti({

            particleCount:2,

            angle:60,

            spread:65,

            origin:{x:0},

            colors:["#2E7D32","#66BB6A","#A5D6A7"]

        });

        confetti({

            particleCount:2,

            angle:120,

            spread:65,

            origin:{x:1},

            colors:["#2E7D32","#66BB6A","#A5D6A7"]

        });

        if(Date.now() < end){

            requestAnimationFrame(frame);

        }

    })();

}
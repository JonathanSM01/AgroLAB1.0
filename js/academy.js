function searchAcademy() {

    const input = document
        .getElementById("academySearch")
        .value
        .trim()
        .toLowerCase();

    if (!input) {

        alert("Escribe un tema para buscar.");

        return;

    }

    let query = input;

    if (input.includes("compost")) {

        query = "compost";

    }

    else if (input.includes("humus")) {

        query = "soil humus";

    }

    else if (input.includes("npk")) {

        query = "NPK fertilizer";

    }

    else if (input.includes("rábano") || input.includes("rabano")) {

        query = "radish cultivation";

    }

    else if (input.includes("microorgan")) {

        query = "soil microorganisms";

    }

    else if (input.includes("sosten")) {

        query = "sustainable agriculture";

    }

    else if (input.includes("agricultura")) {

        query = "agriculture";

    }

    else if (input.includes("compostaje")) {

        query = "composting";

    }

    const msg = document.getElementById("botMessage");

    msg.innerHTML = "🤖 Analizando tu consulta...";

    setTimeout(() => {

        msg.innerHTML = "📚 Buscando información científica...";

    }, 700);

    setTimeout(() => {

        msg.innerHTML = "✅ Recurso encontrado. Abriendo Google Scholar...";

    }, 1200);

    setTimeout(() => {

        window.open(

            `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`,

            "_blank"

        );

    }, 1700);

}

// ENTER para buscar

document.addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        const input=document.getElementById("academySearch");

        if(input===document.activeElement){

            searchAcademy();

        }

    }

});

const resources={

videos:{

title:"🎥 Videos recomendados",

content:`

<ul>

<li><a href="https://www.youtube.com/results?search_query=compostaje" target="_blank">¿Qué es el compost?</a></li>

<li><a href="https://www.youtube.com/results?search_query=humus+de+lombriz" target="_blank">Humus de lombriz</a></li>

<li><a href="https://www.youtube.com/results?search_query=agricultura+sostenible" target="_blank">Agricultura sostenible</a></li>

<li><a href="https://www.youtube.com/results?search_query=economia+circular" target="_blank">Economía circular</a></li>

</ul>

`

},

articles:{

title:"📚 Artículos científicos",

content:`

<ul>

<li><a href="https://scholar.google.com/scholar?q=compost" target="_blank">Compost</a></li>

<li><a href="https://scholar.google.com/scholar?q=soil+humus" target="_blank">Humus</a></li>

<li><a href="https://scholar.google.com/scholar?q=NPK+fertilizer" target="_blank">NPK</a></li>

<li><a href="https://scholar.google.com/scholar?q=sustainable+agriculture" target="_blank">Agricultura sostenible</a></li>

</ul>

`

},

organizations:{

title:"🌎 Organizaciones",

content:`

<ul>

<li><a href="https://www.fao.org" target="_blank">FAO</a></li>

<li><a href="https://www.scielo.org" target="_blank">SciELO</a></li>

<li><a href="https://www.researchgate.net" target="_blank">ResearchGate</a></li>

<li><a href="https://scholar.google.com" target="_blank">Google Scholar</a></li>

</ul>

`

},

concepts:{

title:"🧪 Conceptos importantes",

content:`

<ul>

<li><b>Compost:</b> Producto obtenido mediante la descomposición controlada de residuos orgánicos.</li>

<li><b>Humus:</b> Materia orgánica estabilizada rica en nutrientes.</li>

<li><b>NPK:</b> Fertilizante compuesto por Nitrógeno, Fósforo y Potasio.</li>

<li><b>Economía Circular:</b> Modelo que busca reutilizar recursos reduciendo residuos.</li>

</ul>

`

}

};

function showResource(type){

document.getElementById("resourceTitle").innerHTML=resources[type].title;

document.getElementById("resourceContent").innerHTML=resources[type].content;

}

const tips = [

"🌱 Mantén la humedad del compost entre el 50% y 60% para favorecer la actividad microbiana.",

"♻ Evita agregar plásticos, vidrio o metales al compost.",

"🍂 Alterna materiales secos y húmedos para obtener una mejor descomposición.",

"💧 Un exceso de agua puede disminuir la oxigenación del compost.",

"🌎 Compostar ayuda a reducir la cantidad de residuos enviados a los rellenos sanitarios.",

"🌿 El humus mejora la estructura del suelo y favorece la retención de agua.",

"🧪 El fertilizante NPK aporta nitrógeno, fósforo y potasio esenciales para las plantas.",

"☀ La temperatura influye directamente en la velocidad del proceso de compostaje.",

"🍃 Airear el compost periódicamente acelera la descomposición.",

"🌾 La materia orgánica aporta nutrientes esenciales al suelo.",

"🌍 El compostaje es una práctica clave dentro de la economía circular.",

"🌱 Un compost maduro presenta color oscuro y olor agradable a tierra.",

"🦠 Los microorganismos son los principales responsables de transformar los residuos orgánicos.",

"🌻 Utilizar compost disminuye la necesidad de fertilizantes químicos.",

"♻ Cada pequeño aporte al reciclaje orgánico contribuye al cuidado del medio ambiente."

];

function loadDailyTip(){

    const random = Math.floor(Math.random()*tips.length);

    document.getElementById("dailyTip").textContent = tips[random];

}

function quickSearch(topic){

    const msg=document.getElementById("botMessage");

    msg.innerHTML="🤖 Analizando información...";

    setTimeout(()=>{

        msg.innerHTML="✅ Recurso encontrado. Abriendo Google Scholar...";

    },700);

    setTimeout(()=>{

        window.open(

            `https://scholar.google.com/scholar?q=${encodeURIComponent(topic)}`,

            "_blank"

        );

    },1400);

}

const botMessages=[

"👋 ¡Hola! Soy AgroBot. Estoy listo para ayudarte a aprender sobre compostaje.",

"🌱 El compost convierte residuos orgánicos en un recurso valioso.",

"♻ Cada búsqueda te acerca a un aprendizaje más sostenible.",

"🌍 Descubre investigaciones científicas sobre agricultura.",

"🧪 ¿Quieres conocer el fertilizante NPK? Escríbelo arriba.",

"🍃 Pregúntame sobre humus, compost o microorganismos.",

"📚 Explora artículos científicos con un solo clic.",

"🌾 La sostenibilidad comienza con el conocimiento."

];

function loadBotMessage(){

    const random=Math.floor(Math.random()*botMessages.length);

    document.getElementById("botMessage").textContent=botMessages[random];

}

function initializeAcademy(){

    loadBotMessage();

    loadDailyTip();

}
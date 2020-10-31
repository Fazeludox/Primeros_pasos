
// MODELO DE DATOS

let mis_mangas_iniciales = [
    { titulo: "La chica a la orilla del mar", director: "Inio Asano", "miniatura": "assets/img/orilla.jpg", sinopsis: "Sato e Isobe, dos adolescentes que viven sus días de colegiales en un tranquilo pueblo costero. Ambos deciden embarcarse en una relación puramente física, pero pronto se darán cuenta que dejar de lado los sentimientos resulta muy complicado." },
    { titulo: "Aquella vez que me convertí en Slime", director: "Fuse", "miniatura": "assets/img/slime.jpg", sinopsis: "Satoru Mikami es un hombre de 37 años que tiene un trabajo que no le gusta, sin salida y que no es feliz con la vida que lleva, pero cuando muere a manos de un ladrón y piensa que es su fin, se despierta descubriendo que se ha reencarnado en un mundo de magia y espada… ¡pero como un slime! Ahora tendrá que acostumbrarse a su nueva vida, aunque por suerte contará con dos habilidades únicas que le ayudarán a sobrevivir: una que le proporciona una gran comprensión de todo lo que le rodea, y otra que le permite copiar las habilidades de sus oponentes." },
    { titulo: " A Silent Voice", director: "Yoshitoki Ooima", "miniatura": "assets/img/silent.png", sinopsis: "\“Desearía no habernos conocido nunca. Desearía poder encontrarnos de nuevo.\” La historia gira en torno a Shôko Nishimiya, una estudiante de primaria que es sorda y que al cambiarse de colegio comienza a sentir el bullying de sus nuevos compañeros. Uno de los principales responsables es Ishida Shôya quien termina por forzar que Nishimiya se cambie de escuela. Años después, Ishida busca la redención de sus malas acciones." }
];

let mis_mangas = [];

const postAPI = async (mangas) => {
    try {
        const res = await fetch("https://myjson.dit.upm.es/api/bins", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mangas)
        });
        const { uri } = await res.json();
        return uri;
    } catch (err) {
        alert("No se ha podido crear el endpoint.")
    }
}
const getAPI = async (uri) => {
    // Completar: Llamar a la API para leer la información guardada en myjson a través de la API
    try {
        let response = await fetch(uri);
        let mis_mangas = await response.json();

        return mis_mangas;

    } catch (err) {
        alert("No se ha conseguido la API");
        console.log(err);
    }

}
const updateAPI = async (mangas) => {
    // Completar: Actualizar la información a través de la API

    try {
        let response = await fetch(localStorage.URL,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(mangas)
            });
    } catch (err) {
        alert(err);
    }
}


// VISTAS

const indexView = (mangas) => {
    let i = 0;
    let view = "";

    while (i < mangas.length) {
        view += `
                 <div class="movie">
                    <div class="movie-img">
                         <img class="show" data-my-id="${i}" src="${mangas[i].miniatura}" onerror="this.src='assets/img/placeholder.png'"/>
                    </div>
                    <div class="title">
                        ${mangas[i].titulo || "<em>Sin título</em>"}
                    </div>
                    <div class="actions">
                        <button class="edit" data-my-id="${i}">Editar</button>
                        <button class="show" data-my-id="${i}">Informacion</button>
                        <button class="delete" data-my-id="${i}">Eliminar</button>
                     </div>
                 </div>\n`;
        i = i + 1;
    };

    view += `<div class="actions">
                         <!--Insertar aquí botones de "Añadir" y "Reset"-->
                         <button class="new">Agregar</button>
                         <button class="reset">Inicializar</button>
                     </div>`;

    return view;
}

const editView = (i, mangas) => {
    return `<h2>Editar Mangas </h2>
                 <div class="field">
                 Título <br>
                 <input  type="text" id="titulo" placeholder="Título" 
                         value="${mangas.titulo}">
                 </div>
                 <div class="field">
                 Autor <br>
                 <input  type="text" id="director" placeholder="Autor" 
                         value="${mangas.director}">
                 </div>
                 <div class="field">
                 Miniatura <br>
                 <input  type="text" id="miniatura" placeholder="URL de la miniatura" 
                         value="${mangas.miniatura}">
                 </div>
                 <div class="field">
                     <textarea id="sinopsis" placeholder="Sinopsis del manga">${mangas.sinopsis}</textarea>
                 </div>
                 <div class="actions">
                     <button class="update" data-my-id="${i}">
                         Actualizar
                     </button>
                     <button class="index">
                         Volver
                     </button>
                `;
}

const showView = (mangas) => {
    // Completar: genera HTML con información de la mangas
    // ...

    return `

    <div class="datos_peliculas">
    <img src="${mangas.miniatura}" class="miniatura_sinopsis" alt="Cubierta de ${mangas.titulo}" onerror="this.src='assets/img/placeholder.png'" >
    <hr>
    <div>
    <h1> ${mangas.titulo} </h1>
    <p id="autor_manga"><strong>Autor:</strong> ${mangas.director}</p>
     <p>
      
         ${mangas.sinopsis}
      
      </p>
    </div>
    
      <hr>
    </div>

     
              <div class="actions">
                 <button class="index">Volver</button>
              </div>`;
}

const newView = () => {
    // Completar: genera formulario para crear nuevo quiz
    // ...

    return `<h2>Crear Mangas</h2>
             <div class="field">
                 <label for="titulo">Titulo:</label>
             <input class="titulo" id="titulo" placeholder="Titulo">
             </div>
 
             <div class="field">
                 <label for="director">Autor:</label>
             <input class="director" id="director" placeholder="Autor">    
             </div>
 
             
             <div class="field">
                 <label for="miniatura">Miniatura:</label>
             <input class="miniatura" id="miniatura" placeholder="Miniatura">    
             </div>
             
 
             <div class="field">
                 <p>Sinopsis:</p>
             <textarea class="sinopsis" id="sinopsis" placeholder="Sinopsis del manga"></textarea>    
             </div>
                 <div class="actions">
                     <button class="create">Crear</button>
                     <button class="index">Volver</button>
                 </div>`;
}


// CONTROLADORES 

const initContr = async () => {
    if (!localStorage.URL || localStorage.URL === "undefined") {
        localStorage.URL = await postAPI(mis_mangas_iniciales);
    }
    indexContr();
}

const indexContr = async () => {
    mis_mangas = await getAPI(localStorage.URL) || [];
    document.getElementById('main').innerHTML = await indexView(mis_mangas);
}

const showContr = (i) => {
    // Completar: controlador que muestra la vista showView()
    document.getElementById('main').innerHTML = showView(mis_mangas[i]);
}

const newContr = () => {
    // Completar: controlador que muestra la vista newView()
    document.getElementById('main').innerHTML = newView();
}

const createContr = async () => {
    // Completar: controlador que crea una movie nueva en el modelo guardado en myjson


    let titulo_mangas = document.getElementById('titulo').value;
    let director_mangas = document.getElementById('director').value;
    let miniatura_mangas = document.getElementById('miniatura').value;
    let sinopsis_mangas = document.getElementById('sinopsis').value;

    mis_mangas.push({ titulo: titulo_mangas, director: director_mangas, miniatura: miniatura_mangas, sinopsis: sinopsis_mangas });

    await updateAPI(mis_mangas);
    indexContr();

}

const editContr = (i) => {
    document.getElementById('main').innerHTML = editView(i, mis_mangas[i]);
}

const updateContr = async (i) => {
    mis_mangas[i].titulo = document.getElementById('titulo').value;
    mis_mangas[i].director = document.getElementById('director').value;
    mis_mangas[i].miniatura = document.getElementById('miniatura').value;
    mis_mangas[i].sinopsis = document.getElementById('sinopsis').value;
    await updateAPI(mis_mangas);
    indexContr();
}

const deleteContr = async (i) => {
    // Completar:  controlador que actualiza el modelo borrando la movie seleccionada
    // Genera diálogo de confirmación: botón Aceptar devuelve true, Cancel false

    confirmar = confirm(`¿Quieres borrar "${mis_mangas[i].titulo}"?`)

    if (confirmar) {
        mis_mangas.splice(i, 1);
        await updateAPI(mis_mangas);
        indexContr();
    } else {
        indexContr();
    }
}

const resetContr = async () => {
    // Completar:  controlador que reinicia el modelo guardado en myjson con las mangas originales

    mis_mangas = [...mis_mangas_iniciales];
    await updateAPI(mis_mangas);
    indexContr();
}

// ROUTER de eventos
const matchEvent = (ev, sel) => ev.target.matches(sel);
const myId = (ev) => Number(ev.target.dataset.myId);

document.addEventListener("click", (ev) => {
    //Mostrar pagina
    if (matchEvent(ev, ".index")) indexContr();
    //Editar
    else if (matchEvent(ev, ".edit")) editContr(myId(ev));
    //Actualizar
    else if (matchEvent(ev, ".update")) updateContr(myId(ev));
    //Informacion
    else if (matchEvent(ev, ".show")) showContr(myId(ev));
    //Eliminar
    else if (matchEvent(ev, ".delete")) deleteContr(myId(ev));
    //Agregar
    else if (matchEvent(ev, ".new")) newContr();
    //Crear
    else if (matchEvent(ev, ".create")) createContr();
    // Inicialización
    else if (matchEvent(ev, ".reset")) resetContr();
});

function registerSW() {
    if ("serviceWorker" in navigator) {
        try {
            navigator.serviceWorker.register("./service-worker.js").then((reg) => {
                console.log("Service worker registered.", reg);

            })
        } catch (e) {
            console.log("FAILED " + e)
        }

    } else {
        console.log("Service workers are not supported.");
    }

}

//Carga de la pagina web
document.addEventListener("DOMContentLoaded", () => {
    initContr();
});

window.addEventListener('load', registerSW)

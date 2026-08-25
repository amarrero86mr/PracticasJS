import getBandera from "./paises.js";
// objeto jugadores de referencias como partida
const jugadoresReferencia = [
    {
        nombre: "Lionel Messi",
        edad: 39,
        goles: 8,
        asistencias: 4,
        regates: 39,
        tiros: 28,
        ocasiones: 109,
        atajadas: 0,
        seleccion: "Argentina",
    },
    {
        nombre: "Erling Braut Haaland",
        edad: 26,
        goles: 7,
        asistencias: 0,
        regates: 4,
        tiros: 17,
        ocasiones: 43,
        atajadas: 0,
        seleccion: "Noruega",
    },
    {
        nombre: "Mikel Oyarzabal",
        edad: 29,
        goles: 5,
        asistencias: 1,
        regates: 4,
        tiros: 21,
        ocasiones: 50,
        atajadas: 0,
        seleccion: "España",
    },
];
//Objeto que usamos mientras estye la pagina abierta
const datosTemporal = [];

// Cargar datos
function primerDato() {
    const datosGuardados = localStorage.getItem("jugadores");
    if (datosGuardados) {
        const jugadoresParseados = JSON.parse(datosGuardados);
        datosTemporal.length = 0;
        datosTemporal.push(...jugadoresParseados);
    }
}
primerDato()


const root = document.querySelector('.root');

//Formulario
const formulario = document.createElement('form');
formulario.id = 'miFormulario';

//Formulario div
const formDiv = document.createElement("fieldset");
//Titulo Formulario
const formLegend = document.createElement("legend")
formLegend.textContent = "Nuevo Jugador"

//Inpul Nombre
const inputNombre = document.createElement('input');
inputNombre.type = 'text';
inputNombre.name = 'nombre';
inputNombre.placeholder = 'Nombre';
inputNombre.required = true;

//Input Edad
const inputEdad = document.createElement('input');
inputEdad.type = 'number';
inputEdad.name = 'edad';
inputEdad.placeholder = 'Edad';
inputEdad.min = '0';
inputEdad.step = '1';
inputEdad.required = true;

//Input Goles
const inputGoles = document.createElement('input');
inputGoles.type = 'number';
inputGoles.name = 'goles';
inputGoles.placeholder = 'Goles';
inputGoles.min = '0';
inputGoles.step = '1';
inputGoles.required = true;

//Input Asistencias
const inputAsistencias = document.createElement('input');
inputAsistencias.type = 'number';
inputAsistencias.name = 'asistencias';
inputAsistencias.placeholder = 'Asistencias';
inputAsistencias.min = '0';
inputAsistencias.step = '1';
inputAsistencias.required = true;

//Input Regates
const inputRegates = document.createElement('input');
inputRegates.type = 'number';
inputRegates.name = 'regates';
inputRegates.placeholder = 'Regates';
inputRegates.min = '0';
inputRegates.step = '1';
inputRegates.required = true;

//Input Tiros
const inputTiros = document.createElement('input');
inputTiros.type = 'number';
inputTiros.name = 'tiros';
inputTiros.placeholder = 'Tiros';
inputTiros.min = '0';
inputTiros.step = '1';
inputTiros.required = true;

//Input Ocasiones
const inputOcasiones = document.createElement('input');
inputOcasiones.type = 'number';
inputOcasiones.name = 'ocasiones';
inputOcasiones.placeholder = 'Ocasiones';
inputOcasiones.min = '0';
inputOcasiones.step = '1';
inputOcasiones.required = true;

//Input Atajadas
const inputAtajadas = document.createElement('input');
inputAtajadas.type = 'number';
inputAtajadas.name = 'atajadas';
inputAtajadas.placeholder = 'Atajadas';
inputAtajadas.min = '0';
inputAtajadas.step = '1';
inputAtajadas.required = true;

//Input Nacionalidad
const inputSeleccion = document.createElement('input');
inputSeleccion.type = 'text';
inputSeleccion.name = 'seleccion';
inputSeleccion.placeholder = 'Selección (ej: Argentina)';
inputSeleccion.required = true;

//Div agrupar botones
const divBtnForm = document.createElement('div');
divBtnForm.className = "divBtnForm";

//Botón Guardar
const btnEnviar = document.createElement('button');
btnEnviar.type = 'submit';
btnEnviar.textContent = 'Guardar';

//Boton Borrar
const btnBorrar = document.createElement('button');
btnBorrar.type = 'reset'
btnBorrar.textContent = 'Reset';


//integrando elementos
formulario.appendChild(formDiv)
formDiv.appendChild(formLegend)
formDiv.appendChild(inputNombre);
formDiv.appendChild(inputEdad);
formDiv.appendChild(inputGoles);
formDiv.appendChild(inputAsistencias);
formDiv.appendChild(inputRegates);
formDiv.appendChild(inputTiros);
formDiv.appendChild(inputOcasiones);
formDiv.appendChild(inputAtajadas);
formDiv.appendChild(inputSeleccion);
formDiv.appendChild(divBtnForm);
divBtnForm.appendChild(btnEnviar);
divBtnForm.appendChild(btnBorrar);

//Manejo de formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nuevoRegistro = {
        nombre: inputNombre.value.trim(),
        edad: parseInt(inputEdad.value, 10),
        goles: parseInt(inputGoles.value, 10),
        asistencia: parseInt(inputAsistencias.value, 10),
        regates: parseInt(inputRegates.value, 10),
        tiros: parseInt(inputTiros.value, 10),
        ocasiones: parseInt(inputOcasiones.value, 10),
        atajadas: parseInt(inputAtajadas.value, 10),
        seleccion: inputSeleccion.value.trim()
    };

    //Buscamos la posición del jugador en el array
    const nombreLimpio = nuevoRegistro.nombre.toLowerCase();

    const posicion = datosTemporal.findIndex(jugador => 
        jugador.nombre.toLowerCase().trim() === nombreLimpio
    );

    //evaluamos si el jugador ya existe o es nuevo
    if (posicion !== -1) {
        datosTemporal[posicion] = nuevoRegistro;
        alert(`Jugador actualizado: ${nuevoRegistro.nombre}`);
    } else {
        datosTemporal.push(nuevoRegistro);
        alert(`Guardando nuevo jugador: ${nuevoRegistro.nombre} (${nuevoRegistro.seleccion})`);
    }

    localStorage.setItem('jugadores', JSON.stringify(datosTemporal));
    console.log('Lista actualizada:', datosTemporal);

    formulario.reset();
});

// propuesta de que mostrar (futuro dropbox)
const eleccionDropbox = "goles"

// espacio de muestra el dropbox
const divMejorElejido = document.createElement('div');

const listaJugadores = document.createElement('ul');

// generamos la lista ordenada por el mejor segun elejimos
const datosMejorElejido = datosTemporal.toSorted((a, b) => b[eleccionDropbox] - a[eleccionDropbox]);
datosMejorElejido.forEach(item => {
    const bandera = getBandera(item.seleccion)
    const itemMejor = document.createElement("li");
    // itemMejor.textContent = `${item[eleccionDropbox]} ${eleccionDropbox} - ${item.nombre} - ${bandera}`;
    itemMejor.innerHTML = `${item[eleccionDropbox]} ${eleccionDropbox} - ${item.nombre} - <span class="bandera-emoji">${bandera}</span>`;
    listaJugadores.appendChild(itemMejor);
});

divMejorElejido.appendChild(listaJugadores);


//Insertar el formulario en el DOM
root.appendChild(formulario);
root.appendChild(divMejorElejido);
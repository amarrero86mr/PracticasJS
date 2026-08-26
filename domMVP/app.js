import getBandera from "./paises.js";

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
        asistencias: parseInt(inputAsistencias.value, 10),
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


// div select options para mejor jugador
const divMejorElejido = document.createElement('div');
const divSelectMejor = document.createElement('div');
const tituloSelect = document.createElement('h3');
tituloSelect.textContent = "Selecciona Categoría";
divSelectMejor.appendChild(tituloSelect);

const selectMejor = document.createElement('select');

//Opciones del select
const mGoleador = document.createElement('option');
mGoleador.value = "goles";
mGoleador.textContent = "Mejor Goleador";
selectMejor.appendChild(mGoleador);

const mArquero = document.createElement('option');
mArquero.value = "atajadas";
mArquero.textContent = "Mejor Arquero";
selectMejor.appendChild(mArquero);

const mAsistencias = document.createElement('option');
mAsistencias.value = "asistencias";
mAsistencias.textContent = "Más Asistencias";
selectMejor.appendChild(mAsistencias);

divSelectMejor.appendChild(selectMejor);
divMejorElejido.appendChild(divSelectMejor);

const listaJugadores = document.createElement('ul');
divMejorElejido.appendChild(listaJugadores);

// Función para renderizar la lista ordenada
function listaJugadoresFunction(categoria) {
    //borramos cada lista para generar lña nueva
    listaJugadores.innerHTML = '';
    
    const datosMejorElejido = datosTemporal.toSorted((a, b) => b[categoria] - a[categoria]);

    //creamos los items de la lista
    datosMejorElejido.slice(0,10).forEach(item => {
        const bandera = getBandera(item.seleccion);
        const itemMejor = document.createElement("li");
        itemMejor.innerHTML = `${item[categoria]} ${categoria} - ${item.nombre} - <span class="bandera-emoji">${bandera}</span>`;
        listaJugadores.appendChild(itemMejor);
    });
}

// Evento que se dispara al cambiarl la opción del dropbox
selectMejor.addEventListener('change', (e) => {
    const categoriaSeleccionada = e.target.value;
    console.log(categoriaSeleccionada);
    listaJugadoresFunction(categoriaSeleccionada);
});

// llamamos a la funcion para listar mejor jugador preterminadamente en goleador
listaJugadoresFunction('goles');

function selecciones(datos) {
    //Agrupamos los jugadores por el nombre de su selección
    // groupBy me salvo las papas de usar dos ciclos
    const jugadoresPorPais = Object.groupBy(datos, jugador => jugador.seleccion);

    const contenedorGlobal = document.createElement('div');
    contenedorGlobal.className = 'contenedor-selecciones';

    Object.entries(jugadoresPorPais).forEach(([nombrePais, listaJugadores]) => {
        const divPais = document.createElement('div');
        divPais.className = 'card-pais';

        const bandera = getBandera(nombrePais);
        
        const titulo = document.createElement('h3');
        titulo.innerHTML = `<span class="bandera-emoji">${bandera}</span> ${nombrePais}`;
        divPais.appendChild(titulo);

        const ul = document.createElement('ul');
        listaJugadores.forEach(jugador => {
            const li = document.createElement('li');
            li.textContent = `${jugador.nombre} - ${jugador.goles} goles`;
            ul.appendChild(li);
        });

        divPais.appendChild(ul);
        contenedorGlobal.appendChild(divPais);
    });

    return contenedorGlobal;
}

//Insertamos los elementos en el DOM
root.appendChild(formulario);
root.appendChild(divMejorElejido);
root.appendChild(selecciones(datosTemporal))
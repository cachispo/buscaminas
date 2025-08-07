let select=document.getElementById("dificultad")
let dificultad;
let numfilas, numcolumnas1, idcelda, numminas, sitiomina;
let caja = document.getElementById("caja")

function CrearTablero () {
    // Se vacía la caja por si se cambia lla dificultad durante una partida.
    caja.innerHTML = "";
    idcelda = 1;

    for (f=numfilas;f>=1;f--) {
        let numcolumnas2 = numcolumnas1;
        let fila = document.createElement("div");
        fila.classList.add("fila");
        caja.appendChild(fila);
        for (c=numcolumnas2;c>=1;c--) {
            let celda = document.createElement("div");
            celda.classList.add("oculto");
            celda.setAttribute("id", idcelda);
            fila.appendChild(celda);
            idcelda++
        };
    };
};

function AñadirMinas () {
    let maxtablero = (numfilas*numcolumnas1);
    for (let i = 0; i < numminas; i++) {
        sitiomina = Math.floor(Math.random() * maxtablero) + 1;
        let minada = document.getElementById(sitiomina)
        minada.classList.add("minada")
    }
}

function CalcularVecinos () {
    let celdas = document.getElementsByClassName('oculto')
    
    let PrimerasCeldas = new Set();
    for (let f = 0; f < numfilas; f++) {
        PrimerasCeldas.add((f * numcolumnas1) + 1);
    };
    let UltimasCeldas = new Set();
    for (let f = 0; f < numfilas; f++) {
        UltimasCeldas.add((f + 1) * numcolumnas1);
    };

    for (let celda of celdas) {
        let minacerca = 0;
        let vecinos;
        // Se cambia el array de vecinos según estén al principio o final de la fila.
        if (PrimerasCeldas.has(Number(celda.id))){
            vecinos = [(Number(celda.id)-numcolumnas1),
                (Number(celda.id)-numcolumnas1+1),
                (Number(celda.id) + 1),
                (Number(celda.id)+numcolumnas1),
                (Number(celda.id)+numcolumnas1+1)]
        } else if (UltimasCeldas.has(Number(celda.id))) {
            vecinos = [(Number(celda.id)-numcolumnas1-1),
                (Number(celda.id)-numcolumnas1),
                (Number(celda.id) - 1),
                (Number(celda.id)+numcolumnas1-1),
                (Number(celda.id)+numcolumnas1)]
        } else {
            vecinos = [(Number(celda.id)-numcolumnas1-1),
                (Number(celda.id)-numcolumnas1),
                (Number(celda.id)-numcolumnas1+1),
                (Number(celda.id) - 1),
                (Number(celda.id) + 1),
                (Number(celda.id)+numcolumnas1-1),
                (Number(celda.id)+numcolumnas1),
                (Number(celda.id)+numcolumnas1+1)]
        }
        // Por cada vecino se añade 1 a minacerca para mostrar las minas cercanas
        for (let vecino of vecinos) {
            vecino = document.getElementById(vecino);
            if (vecino && vecino.classList.contains('minada')) {
                minacerca ++
            }
        }
        // Si hay más de 0 vecinos minados se añade la cantidad
        if (minacerca > 0) {
            celda.textContent = minacerca;
        }
    }
}

function TerminarJuego () {
    for (let i=1; i<=(numfilas*numcolumnas1); i++) {
        let celda = document.getElementById(i);
        if (!celda.classList.contains('minada')) {
            celda.classList.replace('oculto', 'visible');
        }
    }
}

// La dificultad se puede cambiar en cualquier momento.
// En consecuencia se crea el nuevo tablero y se añaden las minas.
select.addEventListener('change', () => {
    dificultad = select.value;
    if (dificultad == "facil"){
        numfilas = 9
        numcolumnas1 = 9
        numminas = 10
    } else if (dificultad == "medio") {
        numfilas = 16
        numcolumnas1 = 16
        numminas = 40
    } else if (dificultad == "dificil") {
        numfilas = 16
        numcolumnas1 = 30
        numminas = 99
    };
    CrearTablero();
    AñadirMinas();
    CalcularVecinos();
});

// Cuando se haga click en una celda se cambia la clase a visible.
document.getElementById('caja').addEventListener('click', e => {
    let celda = e.target.closest('[id]');
    if (!celda) return;
    if (celda.classList.contains('minada')) {
        TerminarJuego();
    }
    celda.classList.replace('oculto', 'visible')
    let pos = Number(celda.id);
    let derecha;
    while ((derecha = document.getElementById(++pos))) {
        if (derecha.classList.contains('minada')) break; // paro al llegar a una mina
        derecha.classList.replace('oculto', 'visible');
    }
});

document.getElementById('caja').addEventListener('contextmenu', b => {
    b.preventDefault();
    let celda = b.target.closest('[id]');
    if (!celda) return;
    if (celda.classList.contains('bandera')) {
        celda.classList.replace('bandera', 'oculto');
        celda.textContent = '';
    } else if (celda.classList.contains('oculto')) {
        celda.classList.replace('oculto', 'bandera');
        celda.textContent = '🚩';
    }
});
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
            celda.setAttribute("id", `celda${idcelda}`);
            fila.appendChild(celda);
            idcelda++
        };
    };
};

function AñadirMinas () {
    let maxtablero = (numfilas*numcolumnas1);
    console.log(maxtablero)
    for (let i = 0; i < numminas; i++) {
        sitiomina = Math.floor(Math.random() * maxtablero) + 1;
        let minada = document.getElementById(`celda${sitiomina}`)
        minada.classList.add("minada")
        console.log(sitiomina)
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
})

//let celdas = document.querySelectorAll('[id^="celda"]');

//celdas.forEach(celda => {
//    celda.addEventListener('click', () => {
//    celda.classList.remove('oculto');
//    celda.classList.add('visible');
//  });
//});

// Cuando se haga click en una celda se cambia la clase a visible.
document.getElementById('caja').addEventListener('click', e => {
    const celda = e.target.closest('[id^="celda"]');
    if (!celda) return;
    celda.classList.remove('oculto');
    celda.classList.add('visible');
});
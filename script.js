let select=document.getElementById("dificultad")
let dificultad;
let numfilas, numcolumnas1, idcelda, numminas, sitiomina;

function CrearTablero () {
    document.getElementById(caja)
    caja.innerHTML = "";
    idcelda = 1;

    for (numfilas;numfilas>=1;numfilas--) {
        let numcolumnas2 = numcolumnas1;
        let fila = document.createElement("div");
        fila.classList.add("fila");
        caja.appendChild(fila);
        for (numcolumnas2;numcolumnas2>=1;numcolumnas2--) {
            let celda = document.createElement("div");
            celda.classList.add("oculto");
            celda.setAttribute("id", `celda${idcelda}`);
            fila.appendChild(celda);
            idcelda++
        };
    };
};

function AñadirMinas () {
    let maxtablero = (numfilas*numcolumnas1)
    sitiomina = Math.floor(Math.random() * maxtablero) + 1;
    for (numminas;numminas>=0;numminas--) {
        let minada = document.getElementById(`celda${sitiomina}`)
        minada.classList.add("minada")
    }
}

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

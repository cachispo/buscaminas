let select=document.getElementById("dificultad")
let dificultad;
let numfilas, numcolumnas1;

function CrearTablero () {
    document.getElementById(caja)
    caja.innerHTML = "";

    for (numfilas;numfilas>=0;numfilas--) {
        let numcolumnas2 = numcolumnas1;
        let fila = document.createElement("div");
        fila.classList.add("fila");
        caja.appendChild(fila);
        for (numcolumnas2;numcolumnas2>=0;numcolumnas2--) {
            let celda = document.createElement("div");
            celda.classList.add("celda");
            fila.appendChild(celda);
        };
    };
};

select.addEventListener('change', () => {
    dificultad = select.value;
    if (dificultad == "facil"){
        numfilas = 9
        numcolumnas1 = 9
    } else if (dificultad == "medio") {
        numfilas = 16
        numcolumnas1 = 16
    } else if (dificultad == "dificil") {
        numfilas = 16
        numcolumnas1 = 30
    };
    console.log(dificultad);
    CrearTablero();
})

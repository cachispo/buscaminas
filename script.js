let select=document.getElementById(dificultad)

console.log(select)

let numfilas = 10
let numcolumnas1 = 10

document.getElementById(caja)

for (numfilas;numfilas>=0;numfilas--) {
    let numcolumnas2 = numcolumnas1 
    let fila = document.createElement("div")
    fila.classList.add("fila")
    caja.appendChild(fila)
    for (numcolumnas2;numcolumnas2>=0;numcolumnas2--) {
        let celda = document.createElement("div")
        celda.classList.add("celda")
        fila.appendChild(celda)
    }
}
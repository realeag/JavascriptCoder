/* 
let boton = document.getElementById("button");
boton.onclick=()=>{

    let funcion = document.getElementById("obras");
    let precio = parseInt(funcion.options[funcion.selectedIndex].value);

    let entradas = document.getElementById("cantidad");
    let unidades = parseInt(entradas.options[entradas.selectedIndex].value);

    let fee = 135;
    let iva = 1.21;
    let cargoGestion = unidades * fee;

    let total = `Precio Final $ ${((precio*unidades) + cargoGestion)*iva}`;
    document.getElementById("precioFinal").value = total;
}; */
// PROYECTO FINAL 2

const productos = [
    {id:1, nombre: "Casaca Boca años '60", descripción: "", 
    imagen:"./img/boca60.jpg", cat: 1, precio: 7499},

    {id:2, nombre: "Casaca Argentina Titular '86", descripción: "", 
    imagen:"./img/argentina86.jpg", cat: 1, precio: 6500},

    {id:3, nombre: "Casaca Holanda Titular '74", descripción: "",
    imagen:"./img/holanda74.jpg", cat: 1, precio: 6500},

    {id:4, nombre: "Casaca Brasil Titular '82", descripción: "", 
    imagen:"./img/brasil82.jpg", cat: 1, precio: 4150},

    {id:5, nombre: "Casaca Argentina Suplente '86", descripción: "", 
    imagen:"./img/argentinaSup86.jpg", cat: 1, precio: 7500},

    {id:6, nombre: "Casaca Alemania Titular '74", descripción: "", 
    imagen:"./img/alemania74.jpg", cat: 1, precio: 5000},

    {id:7, nombre: "Casaca Italia Titular '70", descripción: "", 
    imagen:"./img/italia70.jpg", cat: 1, precio: 5750},

    {id:8, nombre: "Pelota Tango '78", descripción: "", 
    imagen:"./img/pelotaTango78.jpg", cat: 2, precio: 2150},

    {id:9, nombre: "Pelota Tricolore '98", descripción: "", 
    imagen:"./img/pelotaTricolore98.jpg", cat: 2, precio: 2000},

    {id:10, nombre: "Pelota Azteca '86", descripción: "", 
    imagen:"./img/pelotaAzteca86.jpg", cat: 2, precio: 3999},
];

function loadProdLocal() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

function saveProdLocal(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function searchProd(id) {
    let productos = loadProdLocal();
    return productos.find(x => x.id ==id);
}



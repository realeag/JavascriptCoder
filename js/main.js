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
/* 
const productos = [
    {id:1, nombre: "Casaca Boca años '60", descripción: "Camiseta Original de Boca Juniors década de los sesenta", 
    imagen:"./img/boca60.jpg", cat: 1, precio: 7499},

    {id:2, nombre: "Casaca Argentina Titular '86", descripción: "Camiseta icónica de la Selección Argentina Copa Mundial de México 1986", 
    imagen:"./img/argentina86.jpg", cat: 1, precio: 6500},

    {id:3, nombre: "Casaca Holanda Titular '74", descripción: "La Naranja Mecánica, clásica camiseta de Holanda del 74",
    imagen:"./img/holanda74.jpg", cat: 1, precio: 6500},

    {id:4, nombre: "Casaca Brasil Titular '82", descripción: "Hermosa camiseta de la Selección de Brasil Copa Mundial de España 1982", 
    imagen:"./img/brasil82.jpg", cat: 1, precio: 4150},

    {id:5, nombre: "Casaca Argentina Suplente '86", descripción: "La Barrilete Cósmico, no requiere presentación. Suplente Selección Argentina 1986", 
    imagen:"./img/argentinaSup86.jpg", cat: 1, precio: 7500},

    {id:6, nombre: "Casaca Alemania Titular '74", descripción: "Armadura utilizada por el artillero Gerd Müller en 1974", 
    imagen:"./img/alemania74.jpg", cat: 1, precio: 5000},

    {id:7, nombre: "Casaca Italia Titular '70", descripción: "Hermosa camiseta de La Nazionale década de los setenta", 
    imagen:"./img/italia70.jpg", cat: 1, precio: 5750},

    {id:8, nombre: "Pelota Tango '78", descripción: "Icónica pelota Adidas Tango de la Copa Mundial de Argentina 1978", 
    imagen:"./img/pelotaTango78.jpg", cat: 2, precio: 2150},

    {id:9, nombre: "Pelota Tricolore '98", descripción: "La Tricolore utilizada en la Copa Mundial de Francia 1998", 
    imagen:"./img/pelotaTricolore98.jpg", cat: 2, precio: 2000},

    {id:10, nombre: "Pelota Azteca '86", descripción: "Pelota Azteca, protagonista del Mejor Gol de la Historia. Copa Mundial México 1986", 
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
} */
class Info {
    constructor (nombre, email, direccion){
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
    }
}
function datosCliente() {

}

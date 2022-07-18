class Info {
    constructor (nombre, email, direccion){
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
    }
}
let boton = document.getElementById("enviar");
boton.addEventListener("click", datosCliente);

function datosCliente() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let direccion = document.getElementById("direccion").value;
    let cliente1 = new Info(nombre, email, direccion);
    console.log(cliente1)
    visualizaCliente(cliente1);
}

function visualizaCliente(Info){
    //borro form
    let formulario = document.getElementById("customer");
    formulario.innerHTML = "";
    //creo div con DOM
    let contenido = document.createElement("div");
    contenido.innerHTML = `${Info.nombre} vas a estar 
    recibiendo un e-mail confirmando la compra a la casilla: ${Info.email}.
    Recibirás el envío dentro de las próximas 48 hs en ${Info.direccion}.
    Muchas gracias por comprar con Back&Forth FC.`;
    contenido.className = "cliente";
    formulario.appendChild(contenido);
}

function loadInfo() {
    return JSON.parse(localStorage.getItem("customer")) || [];
}
function saveInfo(visualizaCliente) {
    localStorage.setItem("customer", JSON.stringify(visualizaCliente));
}


saveInfo();

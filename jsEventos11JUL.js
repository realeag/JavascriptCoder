

// DESAFIO DOM: 

let obra;
let cantidad;
let iva = 1.21;
let fee = 135;
let gracias = document.getElementById("agradecimiento");
let finalizar;

// Declaro ARRAY formas de pago
const formasPago = [{id: 1, tarjeta: " Visa", cuotas: "6 y 12"},
                    {id: 2, tarjeta: " Mastercard", cuotas: "3 y 6"},
                    {id: 3, tarjeta: " AMEX", cuotas: "3"},
                    {id: 4, tarjeta: " MercadoPago", cuotas: "Sólo 1 pago"}];

function compraObra(){
    compra = prompt("Elegí qué obra querés ver: \n 1: 'Barajar y Seguir Apostando' \n 2: 'El Regreso de Saturno' \n 3: 'Presentimientos' ");

    if (compra === "1") {
        alert((Obras(1, 1) + " $" + ((Obras(1, 2) + fee) * iva)) + " (cargo de gestión e impuestos incluidos).");
    } else if (compra === "2") {
        alert((Obras(2, 1) + " $" + ((Obras(2, 2) + fee) * iva)) + " (cargo de gestión e impuestos incluidos).");
    } else if (compra === "3") {
        alert((Obras(3, 1) + " $" + ((Obras(3, 2) + fee) * iva)) + " (cargo de gestión e impuestos incluidos).");
    } 
    
    finalizar = prompt("Para continuar seleccioná la opción: \n 1: Redirigir a finalizar compra. \n 2: Finalizar.");
    if (finalizar != "2") {
         // Agregué método de búsqueda MAP formas de pago
        const tarjeta = formasPago.map((el) => el.tarjeta)
        alert(prompt("Elegí el método de pago con el cuál quieras abonar: \n 1: 'VISA' \n 2: 'Mastercard' \n 3: 'AMEX' \n 4: 'MercadoPago' "));
    } 
    // variable GRACIAS modifica H4 usando DOM
    gracias.innerHTML = "<h4 class='gracias2'>Gracias por adquirir tus localidades en Portal Teatral!</h4>";
    
}

let nombre = prompt("Ingrese nombre y apellido:").toUpperCase();
let mail = prompt("Ingrese su correo electrónico:");

let edad = parseInt(prompt("Ingrese su edad: "));
if (edad < 18) {
    alert(parseInt(prompt("Si es mayor de 18 años coloque su edad de forma correcta: ")));
} else {
    alert("Hola " + nombre + ". Tu email es: " + mail + ". Te damos la bienvenida a Portal Teatral.");
}

let compra = prompt("Elegí: \n 1: Selección de obras \n 2: Finalizar.");
if (compra === "1") {
    compraObra();
} else if (compra === "2") {
    // variable GRACIAS modifica H4 usando DOM
    gracias.innerHTML = "<h4 class='gracias1'>Lamentamos que no hayas encontrado lo que buscabas. Esperamos volver a verte pronto!</h4>";
}

function Obras(id, func) {
    let nombre;
    let valor;

    switch(id) {
        case 1:
            nombre = "Barajar y Seguir Apostando";
            valor = 1200;
            break;
        case 2:
            nombre = "El Regreso de Saturno";
            valor = 1100;
            break;
        case 3:
            nombre = "Presentimientos";
            valor = 900;
            break;
    }

    if(func == 1) { return nombre; }
    else if(func == 2) { return valor; }
}
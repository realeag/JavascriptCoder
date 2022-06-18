let edad = prompt("Ingrese su edad:");
while ( edad != "ESC") {
    if ( edad >= 17 ){
        break;
    }
    alert ("Ud. es menor de edad!");
    break;
} 
console.log("Su edad es: " + edad);

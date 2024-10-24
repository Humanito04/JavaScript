var saludoNull = prompt("Introduce valor: ");
var saludo;
if (saludoNull == null) {
    saludo = "Saludo por defecto";
}
else {
    saludo = saludoNull;
}
console.log(saludo);

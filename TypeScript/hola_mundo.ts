let saludoNull = prompt("Introduce valor: ");
let saludo: string;

if(saludoNull == null){
    saludo = "Saludo por defecto";
}else{
    saludo = saludoNull;
}

console.log(saludo);



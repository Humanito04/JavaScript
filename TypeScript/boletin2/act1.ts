/*Muestra por consola usando el inspeccionador la ventana actual del navegador
(BOM) y encuentra y describe 5 métodos y 5 propiedades que encuentres*/

console.log(
  "onloadstart: Es un evento que ocurre cuando el navegador" +
    " inicia el proceso de carga de un vídeo o audio"
);

console.log(
  "onload: Es un evento que ocurre cuando se ha cargado un objeto." +
    " Se suele utilizar en el body, ya que primero se prioriza que cargue todos "
    + "los elementos de la página y luego que cargue el script"
);

console.log("onsubmit: Es un evento que ocurre cuando se ha enviado un formulario");

console.log("onselect: Este evento ocurre cuando se ha seleccionado algún texto,"
    + "se suele utilizar en los elementos input de tipo texto o textarea");

console.log("onerror: Este evento ocurre cuando hay un error en la carga de una imagen, "
    + "se lanza un script en su lugar");
//window.alert("Ventana de alerta!");
//console.log("Hellooooo");

function cambioColor() {
    document.getElementById("content").style.backgroundColor = "yellow";
    console.log("Cambiando de color...");
}

function cambioColor2(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
    document.body.style.background = color;
}

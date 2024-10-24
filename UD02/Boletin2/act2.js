var dias = prompt("Introduce en número de dias a calcular");

var horas = dias * 24;
var minutos = horas % 24 * 60;
var segundos = (minutos%60) / 60;

alert(dias + "dias son: " + horas + " horas:  "+minutos + "minutos " + segundos + " segundos" );

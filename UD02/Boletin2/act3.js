var a = prompt("Introduce el coeficiente a");
var b = prompt("Introduce el coeficiente b");
var c = prompt("Introduce el coeficiente c");

alert("Tu ecuación: " + a + " x^2+ " + b + "x+ " + c + "=0");

var raiz = Math.sqrt(Math.pow(b,2) - 4 * a * c);
var sol1 = (-b + raiz) / (2*a);
var sol2 = (-b - raiz) / (2*a);

alert("La solución de la ecuación es :x1  " + sol1 + ", x2 " + sol2);
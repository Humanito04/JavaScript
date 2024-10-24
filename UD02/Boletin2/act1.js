var num = prompt("Introduce un número");
var result = 1;
var factorial = num;
do {
  result *= num;
  num--;
} while (num > 1);

alert("El resultado de " + factorial + " es: " + result);

let mensaje = "Nombres y fechas de cumpleaños:\n";

for (let i = 1; i <= 5; i++) {
  let nombre = prompt("Ingrese el nombre " + i + ":");
  let fechaCumple = prompt("Ingrese la fecha de cumpleaños de " + nombre + ":");
  console.log("Nombres y fechas");

  mensaje += nombre + ": " + fechaCumple + "\n";
}

alert(mensaje);




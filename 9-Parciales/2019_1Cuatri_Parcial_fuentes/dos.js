/*A una pareja se le pide los datos
 para mostrar un mensaje 
 " ustedes se llaman xxxxx y xxxx 
 pesan xx y xx kilos, que sumados son xx kilos 
 y el promedio de peso xx ".
*/

function mostrar()
{
  let nombreUno;
  let nombreDos;
  let pesoUno;
  let pesoDos;
  let promedioPeso;
  let sumaPeso;

  nombreUno=prompt("Ingrese su nombre");
  nombreDos=prompt("Ingrese el nombre de su pareja");
  pesoUno=prompt("Ingrese su peso en Kg:");
  pesoDos=prompt("Ingrese el peso de su pareja en Kg:");

  pesoUno=parseInt(pesoUno);
  pesoDos=parseInt(pesoDos);

  sumaPeso=pesoUno+pesoDos;

  promedioPeso=sumaPeso/2;

  alert(" Ustedes se llaman "+nombreUno+" y "+nombreDos+" pesan "+pesoUno+" y "
  	+pesoDos+" kilos, que sumados son "+sumaPeso+" kilos y el promedio de peso es "+promedioPeso);

}

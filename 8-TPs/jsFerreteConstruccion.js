//TP 2 Gongora Lucas Ariel 1H

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let cantidadDeAlambre;
	let largo;
	let ancho;
	let totalMtsTerreno;

	largo=document.getElementById("Largo").value;
	ancho=document.getElementById("Ancho").value;

	totalMtsTerreno=(ancho+largo)*2;

	cantidadDeAlambre=totalMtsTerreno*3;

	alert("Mts. de lambre necesario: "+cantidadDeAlambre);

}
function Circulo () 
{
	let cantidadDeAlambre;
	let radio;
	let	perimetro;

	radio=document.getElementById("Radio").value;

	perimetro=2*3.14*radio;

	cantidadDeAlambre=perimetro*3;

	alert("Mts. de lambre necesario: "+cantidadDeAlambre);

}
function Materiales () 
{
	let largo;
	let ancho;
	let	totalTerreno;
	let bolsasCemento;
	let bolsasCal 

	largo=document.getElementById("Largo").value;
	ancho=document.getElementById("Ancho").value;

	totalTerreno=largo*ancho
	
	bolsasCemento= totalTerreno*2;
	bolsasCal= totalTerreno*3;

	alert("Se precisan " + bolsasCemento+" bolsas de cemento y " +bolsasCal+ " bolsas de cal " ) 
}
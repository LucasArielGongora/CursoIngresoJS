/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var Suma;


	precioUno=document.getElementById("PrecioUno").value;
	precioDos=document.getElementById("PrecioDos").value;
	precioTres=document.getElementById("PrecioTres").value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	Suma=precioUno+precioDos+precioTres;

	alert("el TOTAL de la suma es: "+Suma);
	
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var Promedio;

	precioUno=document.getElementById("PrecioUno").value;
	precioDos=document.getElementById("PrecioDos").value;
	precioTres=document.getElementById("PrecioTres").value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	Promedio= (precioUno+precioDos+precioTres)/3;

	alert("el Promedio es: "+Promedio);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var Suma;
	var PrecioFinal;

	precioUno=document.getElementById("PrecioUno").value;
	precioDos=document.getElementById("PrecioDos").value;
	precioTres=document.getElementById("PrecioTres").value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	Suma=precioUno+precioDos+precioTres;

	PrecioFinal= Suma * 0.21 + Suma;

	alert("el PRECIO FINAL es: "+PrecioFinal);
}
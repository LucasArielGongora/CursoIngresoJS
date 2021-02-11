/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var Descuento;
	var valorDescuento;
	
	importe=document.getElementById("importe").value;

	importe=parseInt(importe);

	//Descuento=importe*75/100;

	//Descuento = importe*0.75;

	valorDescuento = importe * 0.75

	document.getElementById("resultado").value=valorDescuento;
}

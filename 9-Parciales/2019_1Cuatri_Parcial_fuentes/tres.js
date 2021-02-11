/*Pedir por prompt el precio y el porcentaje de descuento,
 mostrar el precio final con descuento por id.*/

function mostrar()
{
	let precio;
	let porcentajeDeDescuento;
	let precioFinal;

	precio=prompt(" Ingrese el precio ");
	porcentajeDeDescuento=prompt(" Ingrese el porcentaje de descuento ");

	precio=parseInt(precio);
	porcentajeDeDescuento=parseInt(porcentajeDeDescuento);

	precioFinal =precio-precio*porcentajeDeDescuento/100;

	document.getElementById("elPrecioFinal").value=precioFinal;
	
}

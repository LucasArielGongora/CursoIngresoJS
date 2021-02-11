function mostrar()
{
	let precio;
	let porcentajeDeDescuento;
	let precioConDescuento;

	precio=prompt(" ingrese el precio: ");
	porcentajeDeDescuento=prompt(" ingrese el porcentaje de descuento: ");

	precioConDescuento=precio-precio/porcentajeDeDescuento	

	document.getElementById("elPrecioFinal").value=precioConDescuento;
}

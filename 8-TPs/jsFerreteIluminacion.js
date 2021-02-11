/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidadDeLámparas;
 	let precioLamparas;
 	let precioFinal;
 	let marca;
 	let precioFinalConImpuesto;
 	
 	precioLamparas=35;
 	precioLamparas=parseInt(precioLamparas);

 	cantidadDeLámparas=document.getElementById("Cantidad").value;
 	cantidadDeLámparas=parseInt(cantidadDeLámparas);
//A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
 	if(cantidadDeLámparas>5)
 	{
 		precioLamparas=precioLamparas*cantidadDeLámparas;

 		precioFinal = precioLamparas*50/100;

 		document.getElementById("precioDescuento").value=precioFinal;
 	}else
 		{ //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
	 		if(cantidadDeLámparas>4 && marca=="ArgentinaLuz")
		 	{
		 		precioLamparas=precioLamparas*cantidadDeLámparas;

		 		precioFinal = precioLamparas*40/100;

		 		document.getElementById("precioDescuento").value=precioFinal;
		 	}else
		 		{
		 			precioLamparas=precioLamparas*cantidadDeLámparas;

		 			precioFinal = precioLamparas*30/100;

		 			document.getElementById("precioDescuento").value=precioFinal;
		 		} //C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

			 		if (cantidadDeLámparas>3 && marca=="ArgentinaLuz"|| marca=="FelipeLamparas") 
			 		{
			 			precioLamparas=precioLamparas*cantidadDeLámparas;

				 		precioFinal = precioLamparas*25/100;

				 		document.getElementById("precioDescuento").value=precioFinal;
			 		}else
				 		{
				 			precioLamparas=precioLamparas*cantidadDeLámparas;

				 			precioFinal = precioLamparas*20/100;

				 			document.getElementById("precioDescuento").value=precioFinal;
				 		} //D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
				 			if (cantidadDeLámparas>2 && marca=="ArgentinaLuz") 
					 		{
					 			precioLamparas=precioLamparas*cantidadDeLámparas;

						 		precioFinal = precioLamparas*15/100;

						 		document.getElementById("precioDescuento").value=precioFinal;
					 		}else
					 			{ // si es  “FelipeLamparas” se hace un descuento del 10 % 
					 				if (cantidadDeLámparas>2 && marca=="FelipeLamparas") 
							 		{
							 			precioLamparas=precioLamparas*cantidadDeLámparas;

								 		precioFinal = precioLamparas*10/100;

								 		document.getElementById("precioDescuento").value=precioFinal;
							 		}else //y si es de otra marca un 5%.
							 			{
							 				precioLamparas=precioLamparas*cantidadDeLámparas;

									 		precioFinal = precioLamparas*5/100;

									 		document.getElementById("precioDescuento").value=precioFinal;
							 			}
					 				}
 		}/*E.	Si el importe final con descuento suma más de $120  
 		se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 		”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.*/
	 		if (precioFinal>119) 
	 		{
	 			precioFinalConImpuesto=precioFinal*1.10/100;

	 			alert(" Usted pago "+precioFinalConImpuesto+" de IIBB.");
	 		}
}

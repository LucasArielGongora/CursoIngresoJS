/*Pedir dos números y mostrar el resultado:  
</br>Si son iguales los muestro concatenados.
</br>Si el primero es mayor, los resto,
</br>de lo contrario los sumo.
</br>Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
</br>"la resta es xxx y superó el 10".*/

function mostrar()
{
	let primerNumero;
	let segundoNumero;
	let resta;
	let suma;

	primerNumero=prompt(" Ingrese 1er Nro: ");
	segundoNumero=prompt(" Ingrese 2do Nro: ");

	if (primerNumero==segundoNumero)
	{
		alert( primerNumero+" "+segundoNumero );
	}
	if (primerNumero>segundoNumero)
		{

		primerNumero=parseInt(primerNumero);
		segundoNumero=parseInt(segundoNumero);

		resta= primerNumero-segundoNumero;

		alert(resta);

		}else
			{
				primerNumero=parseInt(primerNumero);
				segundoNumero=parseInt(segundoNumero);

				suma= primerNumero + segundoNumero;

				alert(suma);
			}	
			if (resta>10) 
			{
				alert(resta);
				alert(" La resta es: "+resta+" y supero el 10. ");
			}

	
}

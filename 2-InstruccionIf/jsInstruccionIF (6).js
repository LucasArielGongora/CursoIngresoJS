function mostrar()
{
//tomo la edad 
	let edad;

	edad= document.getElementById("edad").value;

	if(edad>18)
	{
		alert("usted es mayor");

	}else if(edad>=13 && edad<=17)
			{
				alert("Usted es adolecente");

			}else if(edad>0)
			{
				alert("Usted es un niño");
			}
}//FIN DE LA FUNCIÓN
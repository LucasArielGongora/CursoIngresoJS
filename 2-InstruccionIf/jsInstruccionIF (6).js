function mostrar()
{
//tomo la edad 
	let edad;

	edad= document.getElementById("edad").value;

	if(edad>17)
	{
		alert("usted es mayor");
	}else
		{
			if(edad>12 && edad<18)
			{
				alert(" usted es adolecente ");
			}else
				{
					alert(" usted es niño ");
				}
		}
}//FIN DE LA FUNCIÓN
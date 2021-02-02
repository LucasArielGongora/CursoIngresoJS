function mostrar()
{
//tomo la edad  
	let edad;

	edad= document.getElementById("edad").value;

	if(edad>=18)
	{
		alert("Es mayor de edad");

	}else if (edad<18 && edad>0)
			{
				alert("Es menor de edad");
			}
}//FIN DE LA FUNCIÓN
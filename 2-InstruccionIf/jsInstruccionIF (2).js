function mostrar()
{
	//tomo la edad  
	let Edad;

	edad= document.getElementById("edad").value;

	if(edad>=18)
	{
		console.log("es mayor de edad");
	}else if (edad<18)&&(edad>0)
			{
				console.log("es menor de edad");
			}


}//FIN DE LA FUNCIÓN
/*Al ingresar una edad debemos informar 
si la persona es adolescente,
edad entre 13 y 17 años (inclusive)*/
function mostrar()
{
//tomo la edad  
	let edad;

	edad= document.getElementById("edad").value;

	if(edad>12 && edad<18)
	{
		alert("Usted es adolecente");
	}
}//FIN DE LA FUNCIÓN
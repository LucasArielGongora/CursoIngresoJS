/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    let nombre;
    let edad;
    let apellido;	

   	apellido=prompt("ingrese su apellido");

    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;

    alert("usted se llama "+ nombre+" "+ apellido  + " y tiene "+edad);

}
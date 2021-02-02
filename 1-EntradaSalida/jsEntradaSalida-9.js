/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let Sueldo;
	let Aumento;		
	let Resultado;

	Sueldo=document.getElementById("sueldo").value;

	Sueldo=parseInt(Sueldo);

	Aumento = 1.1;

	Resultado =Sueldo*Aumento;

	document.getElementById("resultado").value = Resultado;
}
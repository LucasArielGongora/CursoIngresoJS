/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let Suma;

	numeroUno = document.getElementById("numeroUno").value;
	numeroDos = document.getElementById("numeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	Suma = numeroUno+numeroDos;

	alert("la suma es "+Suma);

}


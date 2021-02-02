/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{	
	let numeroUno;
	let numeroDos;
	let Resta;

	numeroUno = document.getElementById("numeroUno").value;
	numeroDos = document.getElementById("numeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	Resta = numeroUno-numeroDos;

	alert("la Resta es "+Resta);
	
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let multiplicacion;

	numeroUno = document.getElementById("numeroUno").value;
	numeroDos = document.getElementById("numeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	multiplicacion = numeroUno*numeroDos;

	alert("la multiplicacion es "+multiplicacion);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let Division;

	numeroUno = document.getElementById("numeroUno").value;
	numeroDos = document.getElementById("numeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	Division = numeroUno/numeroDos;

	alert("la Division es "+Division);
}


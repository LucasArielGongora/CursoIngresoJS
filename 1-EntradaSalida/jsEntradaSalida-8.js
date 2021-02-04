/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let Dividendo;
	let Divisor;
	let Resto;

	Dividendo = document.getElementById("numeroDividendo").value;
	Divisor = document.getElementById("numeroDivisor").value;

	Dividendo = parseInt(Dividendo);
	Divisor = parseInt(Divisor);

	Resto = Dividendo%Divisor;	

	alert("el Resto es "+Resto)


}

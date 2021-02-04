/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let Nota;

	Nota=Math.round(Math.random() * (10 - 1) + 1);


	if(Nota>=9 && Nota<=10)
	{
		alert("EXCELENTE");
	}else if(Nota>=4 && Nota<=8)
			{
				alert("APROBÓ");	
			}else
				{
					alert("Vamos, la proxima se puede");	
				}
}//FIN DE LA FUNCIÓN
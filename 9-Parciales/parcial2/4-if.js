//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	//no validar y no while. Solo IF se ingresan dos n si son iguales se 
	//concatenan si el mayor es el primero se multiplican de lo contrario
	// se restan. si la multiplacacion es par, agregar la palabra es par
	var numeroUno;
	var numeroDos;
	var suma;
	var multi;
	var resta;
	var multipar;

	numeroUno=prompt("Ingrese un número");
	numeroDos=prompt("Ingrese otro número");

	if (numeroDos==numeroUno)
	{
		suma=numeroUno+numeroDos;
		alert("Su concatenación da "+suma);
	}
	else
	{
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);
		if (numeroUno>numeroDos)
		{
		 	multi=numeroUno*numeroDos;
		 	
		 	if (multi!=0)
		 	{
		 	
		 		if (multi%2==0)
		 		{
		 			alert("Su multiplicación da "+multi+" y es par");
		 		}
		 		else 
		 		{
		 			alert("Su multiplicación da "+multi);
		 		}
			}
				alert("Su multiplicación da "+multi);
			
		}
		else
		{
		 	resta=numeroUno-numeroDos;
		 	alert("Su resta da "+resta);
		}
	}

	


























/*alert("Funciona 4-if");
	var numeroUno;
	var numeroDos;
	var suma;
	var multi;
	var resta;

	numeroUno=prompt("Ingrese un número");
	numeroDos=prompt("Ingrese otro número");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if (numeroUno==numeroDos)
	{
		multi=numeroDos*numeroUno;
		alert(multi);
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resta=numeroUno-numeroDos;
			alert(resta);
		}
		else
		{
			suma=numeroUno+numeroDos;
			alert(suma);
		}

	}*/
		
}


//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()

{
	//alert("Funciona 4-if");
	
	var numeroUno;
	var	numeroDos;
	var suma;
	var resta;
	var multi;

	numeroUno=prompt("Ingrese un número");
	numeroDos=prompt("Ingrese otro número");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if (numeroUno==numeroDos)
	{
		multi=numeroUno*numeroDos;
		alert(multi);
	}
	else 
	{
		if (numeroUno>numeroDos)
		{
			resta=numeroUno-numeroDos;
			alert(resta);
		}
		else
		{
			suma=numeroUno+numeroDos;
			alert(suma);
		}
	}	

}



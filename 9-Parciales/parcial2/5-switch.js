//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 5-Switch");

	

	var mes;

	mes=prompt("Ingrese mes")

	switch (mes)
	{

		case "enero":
		case "febrero":
		case "Enero":
		case "Febrero":
			alert("Veranito!!!!");
			break;
		default:
			alert("extraño enero y febrero!!!");
			break;	
	
	}
}


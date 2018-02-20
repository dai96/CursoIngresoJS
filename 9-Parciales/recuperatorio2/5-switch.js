//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()

{
	alert("Funciona 5-Switch");

	var mes;

	mes=prompt("Ingrese el mes");

	switch(mes)
	{
		case "enero":
		case "Enero":
		case "Febrero":
		case "febrero":
			alert("Veranito!!!");
			break;
		default:
			alert ("extraño enero y febrero!!!");
			break;	
	}
	
}


function Mostrar()
{
	var mes;

	mes=prompt("ingrese un mes");

	switch(mes)
	{
		case "Diciembre":
		case "diciembre":
			alert("Se vienen las fiestas");
			break;
		case "Enero":
		case "enero":
			alert("comienza el año");
			break;
		default:
			alert("no es enero, ni diciembre");
			break;	
	}
}

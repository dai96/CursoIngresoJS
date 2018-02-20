function Mostrar()
{
	var meses

	meses=prompt("Ingrese mes");

	switch(meses)
	{
		case "Enero":
		case "enero":
			alert("comienza el año");
			break;
		case "Diciembre":
		case "diciembre":
			alert("Se vienen las fiestas");
			break;
		default:
			alert("no es enero, ni diciembre");
			break;		
	}
}

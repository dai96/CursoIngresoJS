//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 6-iteraciones");

	var ventas;
	var interaciones=0;
	var numMax=0;
	var numMin=10000000000000000000000000;

	while (interaciones<7)
	{
		interaciones++;
		ventas=prompt("Ingrese el importe por día");
		ventas=parseInt(ventas);
		while (ventas<0)
		{
			ventas=prompt("Ingrese el importe por día");
			ventas=parseInt(ventas);
		}
		if (ventas>numMax)
		{
			numMax=ventas;
		}
		if (ventas<numMin)
		{
			numMin=ventas;
		}
	}
	alert("Mayor importe "+numMax+" menor importe "+numMin);
	
}


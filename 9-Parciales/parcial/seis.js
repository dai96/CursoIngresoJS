function Mostrar()
{
	var ventas;
	var interaciones=0;
	var maxImporte;
	var minImporte;

	/*ventas=prompt("Ingrese importe de ventas de los 24 días habiles del mes");*/


	while (interaciones<24)
	{
		interaciones++;
		ventas=prompt("Ingrese importe de ventas de los 24 días habiles del mes");
		ventas=parseInt(ventas);
		if (interaciones==1)
		{
			minImporte=ventas;
			maxImporte=ventas;
		}
	}
	if (maxImporte<ventas)
	{
		maxImporte=ventas;
	}
	if (minImporte>ventas)
	{
		minImporte=ventas;
	}
document.getElementById('importeFinal').value=("El mayor es "+maxImporte+" El menor es "+minImporte);
/*switch
{
	case 
}*/


}



/*Realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a 0,”cero”) de los 24 días hábiles del mes
 por prompt (una por día), e informar cual fue el mayor importe y cuál fue el menor importe de venta.*/

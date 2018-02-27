function Mostrar()
{



//ENTRE MENOS 50 Y 50 INCLUIDOS  PEDIR hasta que el cliente quieras
//informar pares e impares y el promedio de los positivos, maximos y minimos
	var numero;
	var interaciones=0;
	var impares=0;
	var pares=0;
	var numMax;
	var numMin;
	var pregunta="si";
	var promedio;
	var contaPosis=0;
	var acumulaposis=0;

	while (pregunta!="no")
	{
		interaciones++;
		numero=prompt("Ingrese número");
		numero=parseInt(numero);
		while (numero>50 || numero<-50 || isNaN(numero))
			{
				numero=prompt("Ingrese número ente 50 y -50");
				numero=parseInt(numero);
			}	
		if (interaciones==1)
		{
			numMin=numero;
			numMax=numero;
		}	
		if (numero%2==0)
		{
			pares++;
		}
		else
		{
			impares++;
		}
		if (numero>0)
		{
			contaPosis++;
			acumulaposis=acumulaposis+numero;

		}

		if (numero<numMin)
		{
			numMin=numero;
		}
		if (numero>numMax)
		{
			numMax=numero;
		}

		pregunta=prompt("Para salir, ingrese no");
	}

	promedio=acumulaposis/contaPosis;

	document.write("Pares "+pares+"<br>Impares "+impares+"<br>Promedio de positivos "+promedio+"<br>Número máximo "+numMax+"<br>Número minimo "+numMin);

















	/*var ventas;
	var interaciones=0;
	var maxImporte;
	var minImporte;

	ventas=prompt("Ingrese importe de ventas de los 24 días habiles del mes");


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
switch
{
	case 
}*/


}



/*Realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a 0,”cero”) de los 24 días hábiles del mes
 por prompt (una por día), e informar cual fue el mayor importe y cuál fue el menor importe de venta.*/

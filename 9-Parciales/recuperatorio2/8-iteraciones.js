//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 8-iteraciones");
	var numero;
	var interaciones=0;
	var respuesta="si";
	var pares=0;
	var promedio;
	var acumulador=0;
	var numMax=0;
	var numMin=1000000000000;

	while (respuesta!="no")
	{
		interaciones++;
		numero=prompt("Ingrese número");
		numero=parseInt(numero);
		while (numero<0)
		{
			numero=prompt("Ingrese número");
			numero=parseInt(numero);
		}
		acumulador=acumulador+numero;
		if (numero<numMin)
		{
			numMin=numero;
		}
		if (numero>numMax)
		{
			numMax=numero;
		}
		if (numero%2==0)
		{
			pares++;
		}
		respuesta=prompt("Ingrese no para terminar");

	}
	promedio=acumulador/interaciones;

	document.write("a)"+pares+"<br>b)"+promedio+"<br>c)"+acumulador+"<br>d) max "+numMax+" min "+numMin);

	
}


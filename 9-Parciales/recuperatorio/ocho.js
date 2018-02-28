function Mostrar()
{
	var numero;
	var interaciones=0;
	var respuesta="si";
	var pares=0;
	var promedio;
	var acumulador=0;
	var numMax=0;
	var numMin=10000000;

	while(respuesta!="no")
	{
		interaciones++;
		numero=prompt("Ingrese número positivo");
		numero=parseInt(numero);
		while (numero<0)
		{
			numero=prompt("Ingrese número positivo");
			numero=parseInt(numero);
		}
		if (numero%2==0)
		{
			pares++;
		}
		if (numero>numMax)
		{
			numMax=numero;
		}
		if (numero<numMin)
		{
			numMin=numero;
		}
		acumulador=acumulador+numero;
	
		respuesta=prompt("Para finalizar ingrese no");
	}

	promedio=acumulador/interaciones;

	alert("a)"+pares+" b)"+promedio+" c)"+acumulador+" d) max"+numMax+" min"+numMin);

}


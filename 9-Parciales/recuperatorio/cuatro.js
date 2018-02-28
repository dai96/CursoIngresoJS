function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=prompt("Ingrese un número");
	numeroDos=prompt("Ingrese otro número");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	suma=numeroUno+numeroDos;

	if (suma==0)
	{
		document.write("El resultado de su suma es 0");
	}
	else
	{
		if (suma>0)
		{
			document.write("El resultado de su suma es positivo: "+suma);
		}
		else
		{
			document.write("El resultado de su suma es negativo: "+suma);
		}
	}

















	/*var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=prompt("Ingrese número uno:");
	numeroDos=prompt("Ingrese número dos");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	suma=numeroUno+numeroDos;

	if (suma>0)
	{
		alert("Positivo");
		if (suma==0)
		{
			alert("cero");
		}
		if (suma<0) Porque si aca pongo un else no funciona? No es que funcionara ahora, de todos modos, pero con else tmpcoo
		{
			alert("negativo");
		}
	}

	if (suma<=-1)
	{
		alert("negativo");
	}
	else
	{
		if(suma>0)
		{
			alert("positivo");
		}
		else
		{
			alert("cero"); no funciona :C
		}
	}*/
}

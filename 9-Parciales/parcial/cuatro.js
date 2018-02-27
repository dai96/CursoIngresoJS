function Mostrar()
{
/*var numeroUno;
var numeroDos;
var suma;
var resta;
var multi;

numeroUno=prompt("Numero uno");
numeroDos=prompt("Numero dos");

numeroUno=parseInt(numeroUno);
numeroDos=parseInt(numeroDos);



if (numeroUno<numeroDos)
{
	

	suma=numeroUno+numeroDos;

	alert (suma);
}
else
{	
	if (numeroUno==numeroDos)
	{
		

		multi=numeroUno*numeroDos;

		alert (multi);

	}
	else 
	{
		

		resta=numeroUno-numeroDos;

		alert (resta);
	}
}*/

	var numeroUno;
	var numeroDos;
	var multipli;
	var resta;
	var suma;

	numeroUno=prompt("Ingrese un primer número");
	numeroDos=prompt("Ingrese un segundo número")

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if (numeroUno==numeroDos)
	{
		multi=numeroUno*numeroDos;
		document.write("El resultado de su multiplicación es de "+multi);

	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resta=numeroUno-numeroDos;
			document.write("El resultado de su resta es de "+resta);

		}
		else
		{
			suma=numeroUno+numeroDos;
			document.write("El resultado de su suma es de "+suma);

		}
	}
	
}

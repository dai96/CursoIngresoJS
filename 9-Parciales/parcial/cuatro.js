function Mostrar()
{
var numeroUno;
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
}
}

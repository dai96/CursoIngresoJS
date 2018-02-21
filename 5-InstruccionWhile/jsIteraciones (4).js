function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	numero=parseInt(numero);


	while (!(numero<0 && numero>10))
	{
	
		numero = prompt("Error, ingrese un número entre 0 y 10.");
		numero=parseInt(numero);
	}
	document.getElementById('Numero').value=("Felicidades, ingresó"+numero);


	/*while (numero>10 || numero<0)
	{
	
		numero = prompt("Error, ingrese un número entre 0 y 10.");
		numero=parseInt(numero);
	}
	document.getElementById('Numero').value=("Felicidades, ingresó"+numero);*/

}//FIN DE LA FUNCIÓN
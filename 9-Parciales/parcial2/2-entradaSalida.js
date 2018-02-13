//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var final

	importe=prompt("Importe");

	importe=parseInt(importe);

	final=importe*1.21;

	document.getElementById('importe').value=final
	
}


function Mostrar()
{
	var importe;
	var rebaja;
	var final;

	importe=prompt("Ingrese importe");

	rebaja=importe*0.25;
	final=importe-rebaja;

	document.getElementById('importeFinal').value=final+"$";
}

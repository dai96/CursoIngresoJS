function Mostrar()
{
  /*var importe;

  var impfinal;

  importe=prompt("importe de producto");
  importe=parseInt(importe);
  impfinal=importe*1.21;
  document.getElementById('importeFinal').value=impfinal;
 No va a funcionar si no utilizamos el parseInt*/

	var importe;
	var importeFinal;


	importe=prompt("Ingrese un importe");
	
	importeFinal=importe*1.21;

	document.getElementById('importeFinal').value=importeFinal+"$";
}

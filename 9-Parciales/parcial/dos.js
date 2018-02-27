function Mostrar()
{
	//van a perdir precio y porcentaje de descuento y mostrar precio final:

	var precio;
	var descuento;
	var porcentDescuento;
	var descuentoTotal;
	var precioFinal;

	precio=prompt("Ingrese precio");
	descuento=prompt("Ingrese porcentaje de descuento");

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	porcentDescuento=descuento/100;

	descuentoTotal=precio*porcentDescuento;

	precioFinal=precio-descuentoTotal;

	document.getElementById('importeFinal').value=("El precio final es de "+precioFinal+"$")











  /*var importe;

  var impfinal;

  importe=prompt("importe de producto");
  importe=parseInt(importe);
  impfinal=importe*1.21;
  document.getElementById('importeFinal').value=impfinal;
 No va a funcionar si no utilizamos el parseInt*/

	/*var importe;
	var importeFinal;


	importe=prompt("Ingrese un importe");
	
	importeFinal=importe*1.21;

	document.getElementById('importeFinal').value=importeFinal+"$";*/
}

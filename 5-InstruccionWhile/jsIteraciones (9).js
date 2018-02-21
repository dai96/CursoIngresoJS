function Mostrar()
{

	var contador=0;
	// declarar variables
	var minimo;
	var maximo;
	var numero;

	
	var respuesta='si';

	while(respuesta=='si')
	{
		contador++;
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		respuesta=prompt("si quiere seguir ingresando números, ponga si");

		if (contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if (numero<minimo) 
			{
				(numero<minimo)
				minimo=numero;
			}
		}
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;



	/*var bandera=true 1 "no paso"		
	
	if (bandera==no paso)
	maximo=numero
	minumo=numero
	badera=false 0 "ya paso"*/	

	
	




}//FIN DE LA FUNCIÓN
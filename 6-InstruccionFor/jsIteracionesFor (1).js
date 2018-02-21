function Mostrar()
{
	var contador=-10;
	var interacciones=10;
	var contadorDePar=0;
	var contadorDeImpar=0;
	var contadorDeCeros=0;
	var contadorDePotivos=0;
	var contadorDeNegativos=0;

	for(;;)
	{
		//document.write("<br>"+contador);
		if (contador==0)
		{
			contadorDeCeros++;
		}
		else
		{
			//par e impar
			if (contador%2==0) 
			{
				contadorDePar++;
			}
			else
			{
				contadorDeImpar++;
			}
			//positivo negativo
			if (contador>0)
			{
				contadorDePotivos++;
			}
			else
			{
				contadorDeNegativos++;
			}

		}

	

		contador++;
		if (contador==interacciones)
		{
			break;
		}
	}
	//document.write("<br>"+contador);
	document.write("<br>"+contadorDePar+" numeros pares");
	document.write("<br>"+contadorDeImpar+" numeros imapares");
	document.write("<br>"+contadorDeCeros+" numeros 0");
	document.write("<br>"+contadorDePotivos+" numeros positivos");
	document.write("<br>"+contadorDeNegativos+" numeros negativos");
}
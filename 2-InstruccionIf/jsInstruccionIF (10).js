function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero
	
	numero=Math.floor(Math.random() * 10)+ 1;

	if (numero>8)
	{
		alert(numero+" EXELENTE");
	}
	else
	{
		if (numero<4)
		{
			alert(numero+" Vamos, la proxima se puede");
		}
		else
		{
			alert(numero+" APROBÓ");
		}
	}


	/*if (numero>8)
	{
		alert(numero+" EXELENTE");
	}
	
	if (numero<4)
	{
		alert(numero+" Vamos, la proxima se puede");
	}

	if (numero<9 && numero>3)
	{
		alert(numero+" APROBÓ");
	}*/

	
}//FIN DE LA FUNCIÓN
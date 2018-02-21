function Mostrar()
{

	var interacciones=10;

	for(contador=0;contador<interacciones;contador++)
	{
		document.write(contador);

		if (contador==10)
		{
			break;
		}

		if (contador==5)
		{
		continue;
		}

	document.write("despues de continue");
	}


}
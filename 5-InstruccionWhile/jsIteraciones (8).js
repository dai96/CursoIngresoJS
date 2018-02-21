function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var suma;
	var multi;
	
	var respuesta='si';

	while (respuesta=="si");
	{
		contador++;
		numero=prompt("ingrese número");
		numero=parseInt(numero);
		respuesta=prompt("Ingrese si, para seguir dando números");
		if (numero>1)
		{
			suma=numero+numero;
		}
		if (numero<=-1)
		{
			multi=numero*numero;
		}
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
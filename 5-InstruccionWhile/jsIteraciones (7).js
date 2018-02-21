function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var promedio;

	while (respuesta=="si")
		{
			contador++;
			numero=prompt("Ingrese número");
			numero=parseInt(numero);
			acumulador=acumulador+numero;
			respuesta=prompt("si quiere continuar escriba si");
		}
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
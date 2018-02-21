function Mostrar()
{

//var repetciones = prompt("ingrese el número de repeticiones");
var interaciones=100000;
var numeroRandom;
var contadorCero=0;
var contadorUno=0;
var contadorDos=0;
var contadorTres=0;
var contadorCuatro=0;
var contadorCinco=0;
var contadorSeis=0;
var contadorSiete=0;
var contadorOcho=0;
var contadorNueve=0;


for(contador=0;contador<interaciones;contador++)
{
	numeroRandom=Math.floor(Math.random() * 10);

	switch(numeroRandom)
	{
		case 0:
			contadorCero++;
			break;
		case 1:
			contadorUno++;
			break;
		case 2:
			contadorDos++;
			break;
		case 3:
		var porcen= (contadorTres/interaciones)*100;
			if(porcen>7)
			{
				contador--;
				continue;
			}
			contadorTres++;
			break;
		case 4:
			contadorCuatro++;
			break;
		case 5:
			contadorCinco++;
			break;
		case 6:
			contadorSeis++;
			break;
		case 7:
			contadorSiete++;
			break;
		case 8:
			contadorOcho++;
			break;
		case 9:
			contadorNueve++;
			break;									
	}

}

document.write("<br>"+numeroRandom);
document.write("<br>Cantidad de cero:"+contadorCero);
document.write("<br>Cantidad de uno:"+contadorUno);
document.write("<br>Cantidad de dos:"+contadorDos);
document.write("<br>Cantidad de tres:"+contadorTres);
document.write("<br>Cantidad de cuatro:"+contadorCuatro);
document.write("<br>Cantidad de cinco:"+contadorCinco);
document.write("<br>Cantidad de seis:"+contadorSeis);
document.write("<br>Cantidad de siete:"+contadorSiete);
document.write("<br>Cantidad de ocho:"+contadorOcho);
document.write("<br>Cantidad de nueve:"+contadorNueve);			




}//FIN DE LA FUNCIÓN
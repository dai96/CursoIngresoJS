//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 8-iteraciones");
	//Se ingresa hasta que el usuario quiera nombre de bichos, peso del mismo
	//validar que sea mas que 0
	//temperatura del habitad de este bicho (entre menos 40 y mas 40)
	//informar la cantidad de temperaturas pares/ impares
	//el nombre del más obeso y del menos, cantidad de animales
	//que vivene en habitad de 0 o menos, promedio de peso de todos los chobis
	//temperatura mazima y minima

	var interaciones=0;
	var respuesta="si";
	var nombre;
	var peso;
	var temperatura;
	var pares=0;
	var impares=0;
	var nombreMax;
	var nombreMin;
	var pesoMax;
	var pesoMin;
	var promedio;
	var tempMax;
	var tempMin;
	var bichosFrios=0;
	var acumulador;


	while (respuesta!="no")
	{
		interaciones++;
		nombre=prompt("Ingrese un animal");
		peso=prompt("Ingrese el peso");
		peso=parseInt(peso);
		while (peso<0 || isNan(peso))
		{
			peso=prompt("Ingrese el peso");
			peso=parseInt(peso);
		}
		temperatura=prompt("Ingrese la temperatura del habitad")
		temperatura=parseInt(temperatura);
		while (temperatura<-40 || temperatura>40 || isNan(temperatura))
		{
			temperatura=prompt("Ingrese la temperatura del habitad")
			temperatura=parseInt(temperatura);
		}

		
		if (temperatura%2==0 && temperatura!=0)
		{
			pares++;
		}
		if (!(temperatura%2==0) && temperatura!=0)
		{
			impares++;
		}
		if (interaciones==1)
		{
			pesoMax=peso;
			pesoMin=peso;
			nombreMax=nombre;
			nombreMin=nombre;
			tempMax=temperatura;
			tempMin=temperatura;
		}
		else
		{
			if (pesoMax<peso)
			{
				pesoMax=peso;
				nombreMax=animal;
			}
			if (pesoMin>peso)
			{
				pesoMin=peso;
				acumulaMin=animal;
			}
			if (tempMax<temperatura)
			{
				tempMax=temperatura;
			}
			if (tempMin>temperatura)
			{
				tempMin=temperatura;
			}
		}
		if (temperatura<0)
		{
			bichosFrios++;
		}
		acumulador=acumulador+peso;
		respuesta=prompt("Para salir ingrese no");
	}
	promedio=acumulador/interaciones;

	document.write("Temperaturas <br>pares "+pares+"<br>impares "+impares+"<br>maxima "+tempMax+" C°<br>minima "+tempMin+" C°<br>Viven en habitad de 0 o menos "+bichosFrios+" animales <br>Peso<br>más pesado "+pesoMax+" Kg<br>menos pasado "+pesoMin+" Kg<br>promedio "+promedio+" Kg");
}	
	//el nombre del más obeso y del menos,
	// promedio de peso de todos los chobis
	


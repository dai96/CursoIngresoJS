//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//lert("Funciona 7-iteraciones");
	var notas;
	var sexo;
	var interaciones=0;
	var promedio;
	var numMin=11;
	var contarHombres=0;
	var acumularNotas=0;

	while (interaciones<6)
	{
		interaciones++;
		notas=prompt("Ingrese su nota");
		notas=parseInt(notas);
		while (notas<0 || notas>10 || isNaN(notas))
		{
			notas=prompt("Ingrese nota válida");
			notas=parseInt(notas);
		}
		sexo=prompt("Ingrese f o m según sexo");
		while (sexo!="f" && sexo!="m")
		{
			sexo=prompt("Porfavor ingrese f o m según sexo");
		}
		if (numMin>notas)
		{
			numMin=notas;
		}
		if (sexo="m" && notas>=6)//Porqué no funciona?
		{
			contarHombres++;
		}
		acumularNotas=acumularNotas+notas;
		
	}
	promedio=acumularNotas/interaciones;

	alert("a)"+promedio+" b)"+numMin+" c)"+contarHombres);

	
}


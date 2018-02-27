function Mostrar()
{
	
/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y el sexo (validar el sexo “f” o “m”)
 de 100 alumnos, informar por alert: a) el promedio de las notas totales. b) la nota más baja. 
c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/



	var alumnos=0;
	var notas;
	var sexo;
	var promedio;
	var notaMin=10;
	var contadorVarones=0;

	while (alumnos<10)
	{
		alumnos++;
		notas=prompt("Ingrese su nota");
		notas=parseInt(notas);
		while (notas<0 && notas>10)
		{
			notas=prompt("Porfavor ingrese una nota válida");
			notas=parseInt(notas);
		}
		sexo=prompt("Indique su sexo con f o m");
		while (sexo!="f" && sexo!="m")
		{
		sexo=prompt("Indique su sexo con f o m");
		}
		if (notaMin>notas)
		{
			notaMin=notas;
		}
		if (sexo=="m" && nota>=6)
		{
			contadorVarones++;
		}

	}
	promedio=notas/alumnos;

		alert("El promedio de las notas es "+promedio+" La nota más baja es "+notaMin+" La cantidad de varones con nota mayor o igual a seis es de "+contadorVarones);
}






























	/*var alumnos;
	var interaciones=0;
	var respuesta="si";
	var nota;
	var acumulaNotas=0;
	var promedio;
	var sexo;
	var cSexoF=0;
	var cSexoM=0;
	var cHombresDesaprobados=0;
	var notaMax=1;
	var nombreMejorNota;
	var promeMujeres;
	var notaDeMujeres;
	var acumulaNotaMujer=0;
	var contadorMujeres=0;
	var edadMin=100;
	var edad;
	var sexoDeMin;
	var acumulaEdad=0;
	var promeEdad;
	var pares;
	var impares;
	var cAprobados=0;

	while (respuesta!="no")
	{
		
		alumnos=prompt("Ingrese su nombre");
		interaciones++;
		nota=prompt("Ingrese su nota");
		nota=parseInt(nota);
		while (nota<0 || nota>10)
		{
			nota=prompt("Porfavor ingrese nota valida");
			nota=parseInt(nota);
		}
		sexo=prompt("Indique f o m según sexo");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Indique f o m según sexo");
		}
		edad=prompt("Ingrese su edad");
		while (edad<0 || edad>100)
		{
			edad=prompt("Porfavor ingrese una edad valida");
		}
		if (sexo=="f")
		{
			cSexoF++;
			contadorMujeres++;
			acumulaNotaMujer=acumulaNotaMujer+nota;
		}
		if (sexo=="m")
		{
			cSexoM++;
		}
		if (nota<4 && sexo=="m")
		{
			cHombresDesaprobados++;
		}
		if (nota>notaMax)
		{
			notamax=nota;
			nombreMejorNota=alumnos;
		}
		if (edad<edadMin)
		{
			edadMin=edad;
			sexoDeMin=sexo;
		}
		if (nota>4)
		{
			cAprobados++;
			acumulaEdad=acumulaEdad+edad;
		}
		if (nota%2==0)
		{
			pares++;
		}
		if (!(nota%2==0))
		{
			impares++;
		}

		acumulaNotas=acumulaNotas+nota;
		promedio=acumulaNotas/interaciones;
		promeMujeres=acumulaNotaMujer/contadorMujeres;
		promeEdad=acumulaEdad/cAprobados;
		respuesta=prompt("Ingrese no para salir del registro");

	}

	document.write("La cantidad alumnos es de "+interaciones);
	document.write("<br>El promedio de notas de los alumnos es de "+promedio);
	document.write("<br>La cantidad de alumnos mujeres es de "+cSexoF+" y de hombres "+cSexoM);
	document.write("<br>La cantidad de hombres desaprobados es de "+cHombresDesaprobados);
	document.write("<br>"+nombreMejorNota+" tuvo la nota más alta");
	document.write("<br>El promedio de las notas de las mujeres es de "+promeMujeres);
	document.write("<br>El sexo de la persona más chica es "+sexoDeMin);
	document.write("<br>El promedio de las edades de los aprobados es de "+promeEdad);
	document.write("<br>Hay "+pares+" notas pares y "+impares+" notas impares");*/


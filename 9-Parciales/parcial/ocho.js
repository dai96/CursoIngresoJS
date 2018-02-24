/*ingreso de alumnos, 
no sabeos cuantos alumnos hay,
 vamos a pedir el nombre 
 cuantos alumnos ingresé
 document.write ingresaron no se cuentos
 9*/
function Mostrar()
{
	var alumnos;
	var	contador=0;
	var respuesta="si";
	var promedio;
	var promF;
	var nota;
	var acumulador=0;
	var acumuladorNotaF=0;
	var sexo; 
	var acumulasexof=0;
	var acumulasexom=0;
	var cantidadDeVaronesA=0;
	var maximo=1;
	var edad;
	var minimo=100;
	var nombremaximo;
	var edad;
	var sexodelchico;
	var pares=0;
	var impares=0;
	var promedioEdadA;
	var edadesA=0;
	var contadorDA=0;


	
	while (respuesta!="no")
	{
		alumnos=prompt("Ingrese su nombre");
		contador++;
		nota=prompt("ingrese nota");
		nota=parseInt(nota);
		while (nota<0 || nota>10)
		{
			nota=prompt("ingrese nota valida");
			nota=parseInt(nota);
		}
		if (nota>maximo)
		{
			maximo=nota;
			nombremaximo=alumnos;
		}
		if (nota%2==0)
		{
			pares++;
		}
		if (!(nota%2==0))
		{
			impares++;
		}
		sexo=prompt("Ingrese f o m segùn sexo");
		while (sexo!="f" && sexo!="m")
		{
			sexo=prompt("Ingrese f o m segùn sexo");
		}
		if (sexo=="f")
		{
			acumulasexof++;
			acumuladorNotaF=acumuladorNotaF+nota;
		}
		if (sexo=="m")
		{
			acumulasexom++;
		}
		if (sexo=="m" && nota<4)
		{
			cantidadDeVaronesA++;
		}
		edad=prompt("Ingrese su edad");
		edad=parseInt(edad);
		while (edad<18 || edad>100)
		{
			edad=prompt("Ingrese edad valida");
			edad=parseInt(edad);
		}
		if (edad<minimo)
		{
			minimo=edad;
			sexodelchico=sexo;
		}
		if (nota>4)
		{
			contadorDA++;
			edadesA=edadesA+edad;


		}




		acumulador=acumulador+nota;
		promedio=acumulador/contador;
		promF=acumuladorNotaF/acumulasexof;
		promedioEdadA=edadesA/contadorDA;
		respuesta=prompt("Ponga no para salir");



	}
	

	document.write("Vinieron "+contador+" alumnos");
	document.write("<br>Hay "+acumulasexof+" mujeres y "+acumulasexom+" hombres");
	document.write("<br>El nombre del mejor promedio es "+nombremaximo);
	document.write("<br>El sexo del mas chico es "+sexodelchico);
	document.write("<br>El promedio de las notas es "+promedio);
	document.write("<br>La cantidad de hombres desprobados es de "+cantidadDeVaronesA);
	document.write("<br>El promedio de mujeres es "+promF);
	document.write("<br>EL promedio de edades de aprobados es de "+promedioEdadA);

	


}

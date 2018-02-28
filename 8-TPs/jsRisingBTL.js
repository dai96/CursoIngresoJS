/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldo;
 	var legajo;
 	var nacionalidad;

 	edad=prompt("Ingrese su edad");
 	edad=parseInt(edad);
 	while (edad<18 || edad>90 || isNaN(edad))
 		{
 			edad=prompt("Ingrese válida entre 18 y 90");
 			edad=parseInt(edad);
 		}
 	sexo=prompt("Ingrese F o M segùn su sexo");
 	while (sexo!="f" && sexo!="m" || (!(isNaN(sexo))) )
	{
		sexo=prompt("Pôrfavor F o M segùn su sexo");
	}	
	estadoCivil=prompt("Ingrese 1-soltero 2-casado 3-divociado 4-viudo");
	estadoCivil=parseInt(estadoCivil);
	while (estadoCivil>4 || isNaN(estadoCivil))
	{
		estadoCivil=prompt("Ingrese 1-soltero 2-casado 3-divociado 4-viudo");
		estadoCivil=parseInt(estadoCivil);
	}
	sueldo=prompt("Ingrese su sueldo bruto");
	sueldo=parseInt(sueldo);
	while (sueldo<8000 || isNaN(sueldo))
		{
			sueldo=prompt("Ingrese su sueldo bruto");
			sueldo=parseInt(sueldo);

		}
	legajo=prompt("Ingrese su número de legajo");
	legajo=parseInt(legajo);
	while (legajo>9999 || isNaN(legajo) ||legajo<1000 )
	{
		legajo=prompt("Ingrese su número de legajo");
		legajo=parseInt(legajo);
	}	
	nacionalidad=prompt("Ingrese A-argentinos, E-extranjeros y N-nacionalizados");
	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N" || (!(isNaN(nacionalidad))))
	{
			nacionalidad=prompt("Ingrese A-argentinos, E-extranjeros y N-nacionalizados");
	}

	document.getElementById('Edad').value=edad;
	document.getElementById('Sexo').value=sexo;
	document.getElementById('EstadoCivil').value=estadoCivil;
	document.getElementById('Sueldo').value=(sueldo+"$");
	document.getElementById('Legajo').value=legajo;
	document.getElementById('Nacionalidad').value=nacionalidad;

}


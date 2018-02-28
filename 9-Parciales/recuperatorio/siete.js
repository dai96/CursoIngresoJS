function Mostrar()
{
	var edad;
	var sexo;
	var interaciones=0;
	var promedio;
	var edadMin;
	var contarHombres=0;
	var acumulaEdades=0;
	
	while (interaciones<10)
	{
		interaciones++;
		edad=prompt("Ingrese su edad");
		edad=parseInt(edad);
		while (edad<0 || edad>100 || isNaN(edad))
		{
			edad=prompt("Porfavor ingrese edad válida");
			edad=parseInt(edad);
		}
		sexo=prompt("Indique con f o m su sexo");
		while (sexo!="f" && sexo!="m")
		{
			sexo=prompt("Indique con f o m su sexo")
		}
		/*if (interaciones==1)
		{
			edadMin=edad;
		}
		else
		{
			if (edad>edadMin)
			{
				edadMin=edad;
			}
		}porqué no anda así?como lo puedop hacer andar?*/
		if (edad>edadMin)
		{
			edadMin=edad;
		}
		if (sexo="m" && edad>=20)
		{
			contarHombres++;
		}
		acumulaEdades=acumulaEdades+edad;
	}
	promedio=acumulaEdades/interaciones;
	alert("Promedio edad "+promedio+" edad mínima "+edadMin+" y hombres mayores de 20 hay "+contarHombres);
}

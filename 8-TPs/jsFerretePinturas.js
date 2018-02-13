/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var resta;
	var resultado

	fahrenheit=document.getElementById('Temperatura').value;

	fahrenheit=parseInt(fahrenheit);

	resta=fahrenheit-32;
	resultado=resta/1.8;

	alert(fahrenheit+" Fahrenheit son "+resultado+" centígrados");
}

function CentigradosFahrenheit () 
{
	var celsius;
	var resultado;

	celsius=document.getElementById('Temperatura').value;

	celsius=parseInt(celsius);

	resultado=celsius*1.8+32;
	

	alert(celsius+" centígrados son "+resultado+" Fahrenheit");
}

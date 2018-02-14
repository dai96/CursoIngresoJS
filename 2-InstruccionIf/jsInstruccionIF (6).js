function Mostrar()
{
//tomo la edad  
	var edad

	edad=document.getElementById('edad').value;

	if (edad<13)
	{
		alert("Es un niño");
	}
	else
	{
		if(edad>17)
		{
			alert("Adulto");
		}
		else
		{
			alert("Adolescente");
		}

	}
		





	/*if (edad>17)
	{
		alert("Sos un niño");

	}
	if(edad>12 && edad<18)
	{
			alert("Sos adolescente");
	}

	if(edad<13)
	{
			alert("Sos un niño");
	}*/


}//FIN DE LA FUNCIÓN
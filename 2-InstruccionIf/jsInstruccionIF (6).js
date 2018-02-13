function Mostrar()
{
//tomo la edad  
	var edad

	edad=document.getElementById('edad').value;

	if (edad>17)
	{
		alert("Sos un Adulto");

	}
	if(edad>12 && edad<18)
	{
			alert("Sos adolescente");
	}

	if(edad<13)
	{
			alert("Sos un niño");
	}


}//FIN DE LA FUNCIÓN
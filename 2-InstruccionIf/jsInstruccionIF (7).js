function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	if (estadoCivil!="Soltero" && edad<18)
	{
		alert ("Es muy pequeño para NO ser soltero");
	}

	/*if(estadoCivil!="Soltero")
	{
		if (edad<18)
		{
			alert("Es muy pequeño para NO ser soltero")
		}
	}*/

	/*if (edad<18)
	{
		if (!(estadoCivil=Soltero))
			{
				alert("Es muy pequeño para NO ser soltero");
			}
	}*/
	


}//FIN DE LA FUNCIÓN
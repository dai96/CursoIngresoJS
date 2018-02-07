function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;


	/*if(edad>=18)
	{
		alert("Sos mayor de edad");
	}

	if(edad<=17)
	{
		alert("Sos menor de edad");
	}*///asi no porque es hacer mucho maneje// 

	/*if(edad>=18)
	{
		alert("Sos mayor de edad");
	}

	if(edad<=17)
	{
		alert("Sos menor de edad");
	}*/ //esto funciona pero puede dar error la forma mas facil es la de abajo //

	if(edad>17)
	{
		alert("Sos mayor de edad");
	}

	else
	{
		alert("Sos menor de edad");
	}



}//FIN DE LA FUNCIÓN
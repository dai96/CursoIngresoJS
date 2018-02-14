function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;

	console.log("hola");

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	if(estadoCivil!="Soltero" && edad<18)
	{
		console.info("NO HACER NADA");
	}


	if (estadoCivil=="Soltero" && edad>17)
	{
		alert("Es soltero y no es menor.");
	}


}//FIN DE LA FUNCIÓN
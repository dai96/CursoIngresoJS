//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var final;

	/*ancho=document.getElementById('ancho').value;
	largo=document.getElementById('largo').value;
*/
	ancho=prompt("ancho");
	largo=prompt("largo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=(ancho*2)+(largo*2);
	final=perimetro*6;

	alert("Necesita "+final+" metros");
}


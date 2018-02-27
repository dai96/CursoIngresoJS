function Mostrar()
{
	/*var largo
	var ancho
	var perimetro
	var alambre

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;

	perimetro=largo*2+ancho*2;
	alambre=perimetro*3;

	alert("Se necesitan "+alambre+" Metros de alambre");*/

	var largo;
	var ancho;
	var perimetro;
	var alambreFinal;

	largo=document.getElementById('alrgo').value
	ancho=document.getElementById('ancho').value

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=(largo+ancho)*2;

	alambreFinal=perimetro*3;

	alert("Necesita "+alambreFinal+" metros de alambre.");
	

}

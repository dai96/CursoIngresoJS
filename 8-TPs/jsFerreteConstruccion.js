/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var alambreAComprar;
	var resultado;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);
	
	alambreAComprar=largo*2+ancho*2;
	resultado=alambreAComprar*3;

	alert("La cantidad de alambre a comprar es "+resultado);



}
function Circulo () 
{
	var radio;
	var resultado;

	radio=document.getElementById('Radio').value;
	
	resultado=radio*3;

	alert("La cantidad de alambre a comprar "+resultado);

}
function Materiales () 
{
	var largo;
	var ancho;
	var terreno;
	var cemento;
	var cal;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	terreno=largo*2+ancho*2;

	cemento=terreno*2;
	cal=terreno*3;

	alert("Para hacer el contrapiso necesitás "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
}
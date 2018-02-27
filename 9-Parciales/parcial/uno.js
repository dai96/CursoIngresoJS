
function Mostrar()
{

//pedir altura por promp de un triangulo equilatero e informar perimetro y superficie

var altura;
var perimetro;
var superficie;


altura=prompt("Ingrese altura");
altura=parseInt(altura);

perimetro=altura*3;
superficie=altura*(altura/2);

document.getElementById('laBase').value=("Perimetro:"+perimetro+" Superficie:"+superficie);
















/*var base;
var perimetro;

base=document.getElementById('laBase').value;
perimetro=base*4;

alert("El perímetro es "+perimetro);*/

	 /*var laBase;
	 var perimetro;

	base=document.getElementById('laBase').value

	perimetro=base*4;

	alert("El perimetro es de "+perimetro);*/







}



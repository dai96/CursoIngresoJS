function Mostrar()
{
	//Realizar el algoritmo que tome por ID tres datos: precio1, precio2 y precio3 de una 
	//compra y luego que muestre la suma y el promedio de los precios
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;

	precioUno=document.getElementById('precioUno').value;
	precioDos=document.getElementById('precioDos').value;
	precioTres=document.getElementById('precioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;
	promedio=suma/3;

	alert("La suma de los 3 precios es "+suma+"$ y el promedio es de "+promedio);
}

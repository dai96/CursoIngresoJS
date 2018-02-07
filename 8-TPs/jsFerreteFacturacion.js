/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var productUno;
	var productDos;
	var productTres;
	var resultado;

	productUno=document.getElementById('PrecioUno').value;
	productDos=document.getElementById('PrecioDos').value;
	productTres=document.getElementById('PrecioTres').value;
	
	productUno=parseInt(productUno);
	productDos=parseInt(productDos);
	productTres=parseInt(productTres);

	resultado=productUno+productDos+productTres;

	alert("La suma de los productos es: "+resultado);



	
}
function Promedio () 
{
	var productUno;
	var productDos;
	var productTres;
	var suma;
	var promedio;

	productUno=document.getElementById('PrecioUno').value;
	productDos=document.getElementById('PrecioDos').value;
	productTres=document.getElementById('PrecioTres').value;
	
	productUno=parseInt(productUno);
	productDos=parseInt(productDos);
	productTres=parseInt(productTres);

    suma=productUno+productDos+productTres;
	promedio=suma/3;

	alert("El promedio de los productos es: "+promedio);
}
function PrecioFinal () 
{
	var productUno;
	var productDos;
	var productTres;
	var suma;
	var ibafinal;

	productUno=document.getElementById('PrecioUno').value;
	productDos=document.getElementById('PrecioDos').value;
	productTres=document.getElementById('PrecioTres').value;
	
	productUno=parseInt(productUno);
	productDos=parseInt(productDos);
	productTres=parseInt(productTres);

	suma=productUno+productDos+productTres;
	ibafinal=suma*1.21;

	alert("El iba de los productos es: "+ibafinal);
}
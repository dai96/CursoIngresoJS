/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

/*lo tengo corregido en la carpeta correspondiente*/
function Sumar () 
{
	var product1;
	var product2;
	var product3;
	var resultadosum;

	product1=document.getElementById('PrecioUno').value;
	product2=document.getElementById('PrecioDos').value;
	product3=document.getElementById('PrecioTres').value;
	resultadosum=product1+product2+product3;

	alert("La suma de los productos es: "+resultadosum);


/*acá no me daba porque no habia hecho el parseint, este error lo arrastro al resto de columnas*/
	
}
function Promedio () 
{
	var product1;
	var product2;
	var product3;
	var resultadosumaprom;
	var resultadopromfinal;

	product1=document.getElementById('PrecioUno').value;
	product2=document.getElementById('PrecioDos').value;
	product3=document.getElementById('PrecioTres').value;
	resultadosumaprom=product1+product2+product3;
	resultadopromfinal=resultadosumaprom/3;

	alert("El promedio de los productos es: "+resultadopromfinal);
}
function PrecioFinal () 
{
	var product1;
	var product2;
	var product3;
	var resultadoiba;
	var ibafinal

	product1=document.getElementById('PrecioUno').value;
	product2=document.getElementById('PrecioDos').value;
	product3=document.getElementById('PrecioTres').value;
	resultadoiba=product1+product2+product3;
	ibafinal=resultadoiba*0.21;
/*aca tenia que hacer la operacion por 1.21*/
	alert("El iba de los productos es: "+ibafinal);


}
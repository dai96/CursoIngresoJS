function Mostrar()
{
 	var dia;

 	dia= prompt ("Ingrese un día de la semana");

 	switch (dia)
 	{
 		case "Sabado":
 		case "Domingo":
 		case "Sábado":
 		case "sabado":
 		case "sábado":
 		case "domingo":
 			alert ("es fin de semana");
 			break;
 		default:
 			alert ("a trabajar !!!");	
 	}
}

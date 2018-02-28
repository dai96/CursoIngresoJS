function Mostrar()
{
	var peso;
	var contador=0;
	var pesoMin;
	var pesoMax;

	while(contador<50)
	{
		contador++;
		peso=prompt("Indique el peso en kg de los contenedores");
		peso=parseInt(peso);
		while (peso<0)
		{
			peso=prompt("Porfavor, ingrese un peso válido");
			peso=parseInt(peso);
		}
		if (contador==1)
		{
			pesoMin=peso;
			pesoMax=peso;
		}
		else
		{
			if (pesoMax<peso)
			{
				pesoMax=peso;
			}
			if (pesoMin>peso)
			{
				pesoMin=peso;
			}
		}
	}
	alert("El contenedor más pesado fue con "+pesoMax+" Kg y el menos "+pesoMin+" Kg")

}

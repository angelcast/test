//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var seguir=true;
    var cantidadPares=0;
    var acumulador=0;
	var promedio;
	var contador=0;
	var flag=0;
    var maximo;
	var minimo;

	 while(seguir==true)
	 {
		 numero = prompt("Ingrese numero");
		 numero = parseInt(numero);
		  
		  while(numero<=0)
		  {
			numero = prompt("Ingrese numero");
		    numero = parseInt(numero);  
		  }

		    if(numero%2 == 0) {cantidadPares++;}

			acumulador = acumulador + numero;

			  if(flag == false || numero<minimo)
			  {
                maximo= numero;
				flag= true;
			  }    

	       	contador++;	   
		    seguir= confirm("desea ingresar otro?");
	 }
	promedio = acumulador /contador; 
	document.write("promedio " +promedio);
	document.write("sumatoria " +promedio);
}


//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ 
	var importeFinal;
	var importe;
    var iva;
	importe = prompt("Ingrese Precio Del Producto");
    importeFinal = parseFloat(importeFinal);

	importeFinal = importe * 1.21;  
	
	//iva = importe*1.21; 
    //importeFinal = importe + iva; (otra manera de hacerlo)
    //importeFinal = importe * 0.79; (tambien se puede multiplica por el comlemento)

	document.getElementById("importe").value = importeFinal;	
	
}


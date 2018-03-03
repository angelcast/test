//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ 
	var ancho;
	var largo;
	var perimetro;
	var alambre;
	
	    largo = document.getElementById("largo").value;
		ancho = document.getElementById("ancho").value;
	
	    largo= parseInt(largo);
		ancho = parseInt(ancho);
		
		perimetro = largo *2 * ancho *2 ;
		alambre = perimetro*6; 
		
		alert("Se Necesitan "+ alambre+ " metros de alambre");
	    
		//OTRAS MANERAS DE MOSTRARLO\\
		//console.log("Se Necesitan "+ alambre+ " metros de alambre");
		//document.white("Se Necesitan "+ alambre+ " metros de alambre");
}


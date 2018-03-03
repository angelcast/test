/*Realizar el algoritmo que al presionar el botón "Mostrar" pida el importe de las ventas 
(validar que sea mayor a 0,”cero”) de los 7 días de la semana por prompt (una por día),
 e informar cual fue el mayor importe y cuál fue el menor importe de venta*/
//while para cuando no sabemos las cantidad de veces que voy a preguntar, el for no..
function Mostrar()
{
	var importe;
	var i=0; //Es la variable que cuenta las veces que cuente white.
	var importeMax;
	var importeMin;
	var flag = 0;

	while(i<7)
	{
		importe = prompt("Ingrese un importe"); //siempre se parsea y se hace el prompt adentro.
		importe = parseFloat(importe);
	    
		while(importe <=0) //siempre preguntar que es lo que no quiero que se repita.
        {
           importe = prompt("Ingrese un importe"); //en cada paso se repite.
		   importe = parseFloat(importe);
        }
         
		 if (flag==0) 
		 {
			 importeMax = importe;
			 importeMin = importe;
			 flag = 1;
		 }
           else ()


      i++;
    }

/*bandera en programacion cuando en nuestros prg se cumplen algunas condiciones es necvesario saber si se cumplieron o no 
si se ingreso 5 maracar en una variable que asi fue, entonces al terminar voy a preguntar el estado de esa variable..
yo necesito saber si el nivel de agua en un tanque llegó a un nivel (en particular) se activa un programa, alarma, etc..
cuando sucede algo en el prog que estoy esperan, si sucedio pongo la bandera= boolean)( = true o false)...



}


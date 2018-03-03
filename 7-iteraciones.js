/*Realizar el algoritmo que al presionar el botón "Mostrar" pida por prompt las notas (validar entre 0 y 10) 
y el sexo(validar el sexo “f” o “m”) de 6 alumnos, informar por alert: 
a) el promedio de las notas totales. 
b) la nota más baja. 
c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/
function Mostrar()
{
	var notas;
	var sexo;
	var i; //para saber la cantidad de alumnos (el control del for o white)
    var acumuladorNotas = 0
	var promedio;
	var minimo;
	var contadorVarones = 0;

	for (i=0; i<6; i++) 
	{
		nota = prompt("ingrese nota");
		nota = parseInt(nota);

		while (nota <0 || nota > 10) 
        {
			nota = prompt("Error Reingrese nota");
		    nota = parseInt(nota);
		}
            sexo = prompt("Ingrese sexo");
			 
			 while (sexo!="f" && sexo!= "m")
			 {
				 sexo = prompt("Error Reingrese sexo");
			 }
	
             acumuladorNotas = acumuladorNotas + notas;

			     if(flag == 0 || nota<minimo)
			     {
					minimo=nota;
					flag=1
				 }
				  if(sexo == m && nota >= 6) 
				   { 
					 acumuladorNotas=acumuladorNotas+notas;
					 contadorVarones++;
				   }
	               
				    promedio = acumuladorNotas / i;
                    
					 if(contadorVarones!=0)
					 {
						 document.write("No hay alumnos masculinos con nota mayor o igual a 6");
					 }
                       else
					   {
                          alert("promedio: " + promedio + "minimo:" + "cantidad de varones:" +contadorVarones);
					   }
                     
     }
}

//cuando hay que pedir varios datos, pido dato y valido, pido dato y valido !!NO!! pido dato y valido, valido , valido..
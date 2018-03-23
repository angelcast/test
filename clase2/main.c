/*  se ingresan numeros, no se sabe cuantos (distintos de cero).
*se pide mostrar cuantos son pares e impares.
*cantidad de nros positivos y negativos.
*porcentaje de nros positivos y negativos.
*maximos y minimos
*maximo nro par.
*cantidad de nros comprendidos entre 125 y 236.*/

#include <stdio.h>
#include <stdlib.h>

int main()
{
  int numero;
  char rta = 's';
  int contadorPares=0;
  int contadorImpares=0;
  int contadorNegativos=0;
  int contadorpositivos=0;
  int contadorNumeros;
  float porcentajePositivos;
  float porcentajeNegativos;
  int maximo;
  int minimo;
  int flag = 0;
  int maximoPar;



  while(rta != 'n')
  {
      printf("ingrese un numero: ");
      scanf("%d", &numero);

      printf("desea continuar?: ");
      rta = getche();
  }


    do
    {
        printf("\ningrese un numero: ");
        scanf("%d", &numero);
        while(numero == 0) //en la validacion se pregunta lo que no se tiene que cumplir..
            {
                printf("\nReingrese un numero: ");
                scanf("%d", &numero);
            }
           if (numero%2==0)
            {
              if(contadorPares == 0 || numero > maximoPar)
                {
                    maximoPar = numero;
                }

                contadorPares++;
            }

             else
               {
                 contadorImpares++;
               }

                if(numero>0)
                 {
                   contadorpositivos++;
                 }
                  else
                     {
                      contadorNegativos++;
                     }

                     if(flag==0 || numero>maximo)
                        {
                            maximo = numero;

                        }

                        if (flag ==0 || numero<minimo)
                         {
                            minimo = numero;
                            flag = 1;
                         }
                     /*if (flag == 0)
                      {
                          maximo = numero;
                          minimo = numero;
                          flag = 1;
                      }
                       else
                         {
                             if(numero<minimo){minimo=numero;}

                                if (numero>maximo){maximo=numero;}
                         }*/





        printf("\ndesea continuar? ");
        rta = getche();

        rta = contadorpositivos+contadorNegativos;

        porcentajePositivos= (float)(contadorpositivos * 100) /contadorNumeros;
        porcentajePositivos= (100 - porcentajeNegativos); /*contadorNegativos * 100) /contadorNumeros;*/

        printf("\nla cantidad de pares es: %d", contadorPares);
        printf("\nla cantidad de impares es: %d", contadorImpares);
        printf("\nel porcentaje de positivos es:  %% %f", porcentajePositivos);
        printf("\nel porcentaje de positivos es:  %% %f", porcentajeNegativos);
        printf("\nEl maximo es: %d ", maximo);
        printf("\nEl minimo es: %d ", minimo);
    }
    return 0;
}

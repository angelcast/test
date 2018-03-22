#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero1;
    float numero2;
    float suma;
    char letra;

    printf("ingrese un numero entero: ");
    scanf("%d" , &numero1);
    printf("ingrese un numero con coma: ");
    scanf("%f" , &numero2);

    printf("ingrese una letra: ");
    //fflush(stdin);
    //scanf("%c", &letra);
    //getche(); / getch();

    letra = getch();
    suma = numero1 + numero2;

    printf("el numero entero es: %d y el numero con coma es: %.2f", numero1, numero2);
    printf("\nLa suma es %.2f: ", suma);
    printf("\nLa letra es: %c", letra);

    return 0;

}

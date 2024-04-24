#include<stdio.h>

int main(){

    //Declarando variables
    int i = 1;
    float costo = 0;
    float porcentaje = 0;
    float porcentaje_gan = 0;
    float venta = 0;
    int n_producto = 0;

    printf("\n CALCULADORA DE PRECIOS PARA LA VENTA ");

    while(i != 0){

        printf("\n\n __________ \n\n");
        printf(" (Para finalizar el programa introducir el numero 0 en costo) \n");

        //Entrada
        printf("\nIntroducir costo: ");
        scanf("%f", &costo);

        if(costo == 0){

            printf("\n El programa finalizo con exito, ya puede cerrar la ventana. \n");
            i --;

        }else{

            printf("\nIntroducir porcentaje de ganancia: ");
            scanf("%f", &porcentaje_gan);

            //Formula
            porcentaje = porcentaje_gan * costo / 100;
            venta = costo + porcentaje;
            n_producto ++;

            //Salida
            printf("\n\n PRODUCTO: %d     PORCENTAJE DE GANANCIA: %.0f    PRECIO PARA LA VENTA: $ %.2f ", n_producto, porcentaje_gan, venta);

        }
    }

    system("pause");

return 0;
}

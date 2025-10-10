//Estuturas Condicionais if - else - elfe/if

// var nota = 3;

// if (nota >= 7) {
//     document.write(nota + ' - Aprovado');
// } else if((nota < 7) && (nota >=4)){
//     document.write(nota + ' - Recuperação');
// } else {
//     document.write(nota + ' - Reprovado');
// }

// var sol = false;
// var chuva = false;

// if (sol) {
//     document.write('Vamos a praia, pois está fazendo sol');
// } else if(chuva){
//     document.write('Não vamos a praia, pois está chovendo');
// } else {
//     document.write('Vamos ao parte, pois está nulado');
// }

//Estrutura condicional Switch

// var key = 5;

// switch (key) {
//     case 1:
//         document.write('Chave: ' + key + ' - A chave é do apartamento');
//         break;
//     case 2:
//         document.write('Chave: ' + key + ' - A chave é da casa');
//         break;
//     case 3:
//         document.write('Chave: ' + key + ' - A chave é do carro');
//         break;
//     case 4:
//         document.write('Chave: ' + key + ' - A chave é da moto');
//         break;
//     default:
//         document.write('Chave: ' + key + ' - Não coresponde a nenhum uso');
//         break;
// }

// while

var inicio = 0;

while (inicio <= 10000) {
    document.write('Numero do cliente: ' + inicio + '<br>');
    inicio++;
}
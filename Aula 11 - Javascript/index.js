// console.log('estevao');
// console.log("Estevão'estevao'Magalhães");
// console.log(123456, "estevao");

// let nome = 'estevao';
// const numero = 123456;
// nome = 'socorro'

// console.log(nome);

// let nome1 = 'JOÃO, NASCEU EM 1974.';
// let nome2 = 'EM 2000, JOÃO CONHECEU MARIA.';
// let nome3 = 'JOÃO CASOU-SE COM MARIA EM 2012';
// let nome4 = 'MARIA, TEVE 1 FILHO COM JOÃO EM 2015';
// let nome5 = 'O FILHO DE JOÃO SE CHAMA EDUARDO';

// console.log(nome1,nome2,nome3,nome4,nome5);

// let nome1 = 'JOÃO';
// let nome2 = 'MARIA';
// let nome3 = 'EDUARDO';

// let num1 = '1974.';
// let num2 = '2000';
// let num3 = '2012.';
// let num4 = '2015.';

// console.log(nome1,',','NASCEU EM',num1);
// console.log('EM',num2,',',nome1,'CONHECEU MARIA.');
// console.log(nome1,',','CASOU-SE COM',nome2,'EM',num3);
// console.log(nome2,',','TEVE 1 FILHO COM',nome1,'EM',num4);
// console.log('O FILHO DE',nome1,'SE CHAMA',nome3);

const nome = 'Estevao magalhaes';
const sobrenome = 'monteiro';
let idade = 23;
let peso = 89;
const altura = 1.70;
let imc; // peso/(altura * altura)
let anoNacimento;

imc = peso/(altura*altura);
// console.log(imc);

anoNacimento = 2025 - idade;
// console.log(anoNacimento);

// (Estevao magalhaes monteiro tem 23 anos)
// (pesa 89kg, tem 1.70 de altura e seu)
// (imc é de 30.795847750865054)
// (Estevao magalhaes monteiro nasceu em 2002)

console.log(nome,sobrenome,'tem',idade,'anos');
console.log('pesa',peso,'kg',',tem',altura,'de altura e seu');
console.log('imc é de',imc);
console.log(nome,sobrenome,'naceu em',anoNacimento);
// console.log('pesa ${89}kg,tem ${1,8} de altura e seu');
// console.log('imc é de ${imc}');
// console.log('${nome} ${sobrenome} naceu em ${anoNacimento}');
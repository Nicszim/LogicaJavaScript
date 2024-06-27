// Faça um programa que receba dez números e usando laços de repetição calcule a quantidade de números entre 30 e 90

let i = 1
let num
let contaemNum = 0

for ( i ;i<=10;i++) {

    console.log(num = Number(prompt(`Informe qual o número ${i}: `)))

    if (num > 30 && num < 90) {
        contaemNum += 1
    
    }
}

console.log(`Contagem dos números no intervalo é: ${contaemNum} `)
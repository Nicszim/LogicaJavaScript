let num1 = prompt("Digite o primeiro número: ")
let num2 = prompt("Digite o segundo número: ")

if (num1 < num2) {
    console.log(` ${num1} é menor que ${num2}`)

} else if(num1 == num2){
    console.log(`Os números são iguais`)
}
else if(num1 > num2){
    console.log(` ${num1} é maior que ${num2}`)
}
else {
    console.log(`O valor inserido acima está incorreto`)
}
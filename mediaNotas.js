// Leia três notas, calcule sua média e a exiba para o usuário

let nota1 = Number (prompt("Digite sua prineira nota: "))
let nota2 = Number (prompt("Digite sua segunda nota: "))
let nota3 = Number (prompt("Digite sua terceira nota: "))
let media

media = Number ((nota1 + nota2 + nota3)/3)

console.log (`Segue sua média total ${nota1} + ${nota2} + ${nota3} = ${media}`)
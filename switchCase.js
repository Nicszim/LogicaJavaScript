let escolha = Number(prompt("Escolha uma opção:"))

switch (escolha) {
    case 1:
        console.log(`Escolheu 1`)
        break;

    case 2:
        console.log(`Escolheu 2`)
        break;

    case 3:
        console.log(`Escolheu 3`)
        break;

    default:
        console.log(`Condição padrão. Atende qualquer escolha que não seja 1,2, ou 3`)
        break;
}
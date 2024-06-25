// nome do titular
const nome = 'Nicolas'
// saldo
let saldo = 1000
let entradaSenha = prompt('Digite sua senha:')


let senha = 'senha123'

if(senha == entradaSenha){
    let escolha  = Number(prompt(`${nome}, Informe qual operação deseja realizar \n 1 - deposito \n 2- saque \n 3- extrato `))
    // deposito
    
    switch (escolha) {
        case 1:
            let valorInserido = Number(prompt(`${nome}, digite o valor a ser depositado (apenas números)`))
        saldo += valorInserido
        console.log(`Seu saldo atual é ${saldo}`)
            break;
    
    // saque
        case 2:
            let valorSaque = Number(prompt(`${nome}, digite o valor a ser sacado (apenas números)`))
            if (saldo >= valorSaque) {
                saldo -=valorSaque
                console.log(`Pegue seu dinheiro no caixa. O valor restante em conta é R$ ${saldo}`)
            }
    else{
        console.log('Saldo insuficiente')
    }
                break;
    // Extrato
        case 3:
    console.log (`O saldo atual da conta é R$ ${saldo}`)
            break;
    
    
        default:
        console.log('!! Opção inválida !!')
            break;
    }

}
else{
    console.log('Acesso negado! Senha inválida')
}


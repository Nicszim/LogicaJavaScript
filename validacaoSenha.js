let senha = 123
let senhaUser = prompt('Digite sua senha: ')
let tentativas = 3
let contTentativas = 1

if(senha == senhaUser){
    console.log('Entrou na conta')
}
else{
    (senha != senhaUser && contTentativas<3)
        senharUser = prompt(` Senha incorreta. \n Você tem ${tentativas - contTentativas} tentativas.\n Digite novamente a senha`)
    
  }
    if(senha == senhaUser){
            console.log('Entrou na conta')
        }
        else {
        contTentativas +=1
    }

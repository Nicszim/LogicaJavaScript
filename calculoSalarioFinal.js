
let nome = prompt('Digite seu nome')

let tempo = Number(prompt(`${nome}, informe quanto tempo você tem de empresa: \n (1) Menos de 1 ano \n (2) Entre 1 a 2 anos \n (3) Entre 2 a 5 anos \n (4) Entre 5 a 10 anos \n (5) Mais de 10 anos`))

let dependentes = Number(prompt('Digite a quantidade de dependentes menores que 7 anos: '))
let bonus1
let salarioBase = 1000


switch (tempo) {

    case 1:
        bonus1 = 0
        break;

    case 2:
        bonus1 = salarioBase*0.05
        break;

    case 3:
        bonus1 = salarioBase*0.10
        break;

    case 4:
        bonus1 = salarioBase*0.15
        break;

    case 5:
        bonus1 = salarioBase*0.20
        break;

    default:
        bonus1 = 0
        console.log(' !! Informar apenas números !!')
        break;
}

let bonus2 = dependentes*500

let VA = 1000
let VT = 200

let INSS = salarioBase*0.09
let FGTS = salarioBase*0.08

document.write(`Apontamentos Folha de Pagamento <br>
                <ul>
                <li>Nome: ${nome} </li>
                <li>Salario Base: ${salarioBase}</li>
                <li>Bonus por tempo de serviço: ${bonus1}</li>
                <li>Auxílio Creche: ${bonus2} </li>
                <li>Vale Aliemntação: ${VA} </li>
                <li>Vale Transporte: ${VT} </li>
                <li>Desconto INSS: - ${INSS.toFixed(2)} </li>
                <li>Desconto FGTS: - ${FGTS.toFixed(2)} </li>
                <li>TOTAL A RECEBER: ${salarioBase + bonus1 + bonus2 + VA + VT - INSS - FGTS} </li>
                </ul>
`)
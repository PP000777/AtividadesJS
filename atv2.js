var cnpj = []
var valido = true

function generatorCNPJ(cnpj){
 for(let i= 0;i<12;i++){
    let numCNPJ = Math.floor(Math.random()* 10)
    cnpj.push(numCNPJ)
}

const cnpjValido = cnpj =>{
    if(cnpj.every(digito => digito === cnpj[0]))
        return valido = false
}

if(valido === true){
    console.log("o CNPJ é valido:" + cnpj)
}else{
    console.log("seu CNPJ n é valido seu verme")
}

}
generatorCNPJ(cnpj)

function verificarCNPJ(cnpj){
 let multNum = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
 let multNum2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
let firstDigit = 0
let secondDigit =0
for(let i = 0; i<12; i++){
    firstDigit += cnpj[i] * multNum[i]
}
firstDigit = firstDigit % 11
if(firstDigit < 2){
    firstDigit == 0
}else{
    firstDigit = 11 - firstDigit
}
cnpj.push(firstDigit)

//--------------------------------------------------------------------//  

for(let i = 0; i<13; i++){
    secondDigit += cnpj[i] * multNum2[i]
}
secondDigit = secondDigit % 11
if(secondDigit < 2){
    secondDigit == 0
}else{
    secondDigit = 11 - secondDigit
}
cnpj.push(secondDigit)

if(cnpj.length === 14){
    return
}
}
verificarCNPJ(cnpj)


function cnpjFormatado(cnpj){
    let cnpjFormatado = '';
    for(let i=0; i<14; i++){
        cnpjFormatado += cnpj[i];

        if(i == 1 || i == 4){
            cnpjFormatado += '.';
        }else if (i==7){
            cnpjFormatado += '/';
        }else if(i == 11){
            cnpjFormatado += '-';
        }
    }
    console.log("seu cnpj ta valido seu verme, e tbm formatei essa desgraça aqui toma essa bosta: " + cnpjFormatado)
}
cnpjFormatado(cnpj)
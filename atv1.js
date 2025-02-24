function calculoLoop(contador,cpfd){
    let soma = 0
    for(i = contador; i>1; i--){
     soma += cpfd[contador-i] * i
    }
    let resultado = soma % 11
 
    if((resultado<2 && cpfd[contador-1] != 0) || (resultado >=2 && cpfd[contador-1] != 11-resultado)){
       return false
    }
    return true
 }
 
 function verificar(cpf){
    let cpfd = cpf.replaceAll('.', '').replaceAll('-','').split('')
    if(cpfd.length != 11){
     return 'CPF inválido'
    }
    
    let resposta = calculoLoop(10,cpfd)
    if(!resposta){
       return 'CPF INVÁLIDO'
    }
    let resposta2 = calculoLoop(11,cpfd)
    if(!resposta2){
       return 'CPF inválido'
    }
 
    return 'cpf válido'
 }
 let cpf = '123.456.789-10'
 console.log(verificar(cpf))
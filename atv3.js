let codbarras = "7898765430018";
let codbarras2 = codbarras.slice(0, 12);
let verificador = parseInt(codbarras.slice(12));

let dados = [
    {
        "codigo_pais": "789",
        "pais_origem": "Brasil",
        "codigo_fabricante": "8765",
        "fabricante": "Fabricante A",
        "codigo_produto": "43001",
        "nome_produto": "Produto X",
        "descricao": "Descrição do Produto X"
    },
    {
        "codigo_pais": "110",
        "pais_origem": "Estados Unidos",
        "codigo_fabricante": "5432",
        "fabricante": "Fabricante B",
        "codigo_produto": "10987",
        "nome_produto": "Produto Y",
        "descricao": "Descrição do Produto Y"
    },
    {
        "codigo_pais": "101",
        "pais_origem": "Japão",
        "codigo_fabricante": "7890",
        "fabricante": "Fabricante C",
        "codigo_produto": "123456",
        "nome_produto": "Produto Z",
        "descricao": "Descrição do Produto Z"
    }
];

function codigoVerify() {
    let codbarrasImpar = 0, codbarrasPar = 0, codbarrasFinal;
    
    for (let i = 0; i < 12; i++) {
        let digit = parseInt(codbarras2[i]);
        
        if (isNaN(digit)) {
            console.log("Invalid codbarras code");
            return;
        }
        
        if (i % 2 === 0) {
            codbarrasPar += digit * 1;
        } else {
            codbarrasImpar += digit * 3;
        }
    }
    
    codbarrasFinal = codbarrasPar + codbarrasImpar;
    codbarrasFinal = (10 - (codbarrasFinal % 10)) % 10;

    if (codbarrasFinal === verificador) {
        let codigo_pais = codbarras.slice(0, 3);
        let codigo_fabricante = codbarras.slice(3, 7);
        let codigo_produto = codbarras.slice(7, 12);
        console.log(codigo_fabricante, codigo_pais, codigo_produto);
        let pais_info = dados.find(item => item.codigo_pais === codigo_pais)
        let fabricante_info = dados.find(item => item.codigo_fabricante === codigo_fabricante)
        let produto_info = dados.find(item => item.codigo_produto === codigo_produto)
        
        if (pais_info && produto_info && fabricante_info) {
            console.log("País:", pais_info.pais_origem);
            console.log("Fabricante:", pais_info.fabricante);
            console.log("Nome do Produto:", pais_info.nome_produto);
            console.log("Descrição:", pais_info.descricao);
        }
    }
}

codigoVerify();
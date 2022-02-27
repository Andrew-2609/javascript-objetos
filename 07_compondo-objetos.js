const cliente = {
    "nome": "Vladimir Lu",
    "idade": 36,
    "cpf": "12345678900",
    "email": "vladlu@gmail.com",
    "phones": ["912345678", "987654321"]
}

cliente.dependentes = [
    {
        nome: "Sara",
        parentesco: "filha",
        idade: 13
    }
]

console.log(cliente);

// alterando o objeto 'dependentes'
cliente.dependentes[0].nome = "Sara Lu";

console.log(cliente);
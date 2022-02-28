const clientes = [
    {
        "nome": "Vladimir Paris",
        "idade": 36,
        "cpf": "12345678900",
        "dependentes": [
            {
                nome: "Sara",
                parentesco: "filha",
                idade: 13
            }
        ]
    }, {
        "nome": "Anne Winchester",
        "idade": 26,
        "cpf": "00987654321",
        "dependentes": [
            {
                nome: "John Winchester",
                parentesco: "irmão",
                idade: 17
            }
        ]
    }
]

// espalhamento
const listaDeDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.log(listaDeDependentes);
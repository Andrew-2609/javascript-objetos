const cliente = {
    "nome": "Andrew Monteiro",
    "idade": 19,
    "cpf": "12345678900",
    "email": "andrew@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach(chave => console.log(cliente[chave]));
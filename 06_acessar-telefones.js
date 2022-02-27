const cliente = {
    "nome": "Andrew Monteiro",
    "idade": 19,
    "cpf": "12345678900",
    "email": "andrew@gmail.com",
    "phones": ["912345678", "987654321"]
}

cliente.phones.forEach((phone, index) => console.log(index, phone));
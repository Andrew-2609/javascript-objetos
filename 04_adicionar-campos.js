const cliente = {
    "nome": "Andrew Monteiro",
    "idade": 19,
    "cpf": "12345678900",
    "email": "andrew@gmail.com"
}

// original
console.log(cliente);

cliente.phone = "912345678";

// com atributo "phone"
console.log(cliente);

cliente.phone = "098765432";

console.log(`O novo telefone do cliente é: ${cliente.phone}`);
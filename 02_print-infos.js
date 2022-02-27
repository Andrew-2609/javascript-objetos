const cliente = {
    "nome": "Andrew Monteiro",
    "idade": 19,
    "cpf": "12345678900",
    "email": "andrew@gmail.com"
}

console.log(`O nome do cliente é: ${cliente.nome}.`);
console.log(`O CPF do cliente começa com: ${cliente.cpf.substring(0, 3)}.`);
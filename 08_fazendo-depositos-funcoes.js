const cliente = {
    "nome": "Vladimir Lu",
    "idade": 36,
    "cpf": "12345678900",
    "email": "vladlu@gmail.com",
    "phones": ["912345678", "987654321"],
    "dependentes": [
        {
            nome: "Sara",
            parentesco: "filha",
            idade: 13
        }, {
            nome: "Lukas",
            parentesco: "irmão",
            idade: 35
        }
    ],
    "saldo": 100,
    "depositar": function (valor) {
        this.saldo += Math.abs(valor);
    },
    "sacar": function (valor) {
        this.saldo >= valor ? this.saldo -= valor : console.log("Saldo insuficiente!");
    }
}

// saldo original
console.log(cliente.saldo);

// saldo após depositar
cliente.depositar(30);
console.log(cliente.saldo);

// saldo após um saque de sucesso
cliente.sacar(20);
console.log(cliente.saldo);

// tentar sacar mais do que há disponível no saldo
cliente.sacar(200);
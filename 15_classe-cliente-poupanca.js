// noinspection DuplicatedCode
class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        valor >= 0 ? this.saldo += valor : console.log("Valor inserido para depósito é inválido!");
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor) {
        valor >= 0 ? this.saldoPoupanca += valor : console.log("Valor inserido para depósito na poupança é inválido!");
    }
}

const clientePoupanca = new ClientePoupanca("Andrew", "andrew@gmail.com", "123.456.789-00", 0.0, 1000.0);

console.log(clientePoupanca);

clientePoupanca.depositar(500.0);
clientePoupanca.depositarPoupanca(1000.0);

console.log(clientePoupanca);
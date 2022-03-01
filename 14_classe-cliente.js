// define a classe Cliente
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

    exibirSaldo() {
        console.log(`O saldo do cliente ${this.nome} é de: R$${this.saldo}`);
    }
}

// instancia o objeto Cliente
const cliente = new Cliente("Andrew", "andrew@email.com", "123.456.789-00", 0.0);

console.log(cliente);

cliente.depositar(318.25);

cliente.exibirSaldo();
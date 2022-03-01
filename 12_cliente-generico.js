// noinspection JSUnusedGlobalSymbols

function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        if (valor < 0) {
            console.log("Não pode depositar valor negativo!");
            return;
        }
        this.saldo += valor;
    }
}

const andrew = new Cliente("Andrew", "123.456.789-00", "andrew@gmail.com", 0.0);

andrew.depositar(200);

console.log(andrew);
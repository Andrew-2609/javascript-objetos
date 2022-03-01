// noinspection DuplicatedCode,JSUnusedGlobalSymbols

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

// ClientePoupanca é uma subclasse de Cliente
function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoupanca = saldoPoupanca;
}

const andrew = new ClientePoupanca("Andrew", "123.456.789-00", "andrew@gmail.com", 0.0, 1000.0);

console.log(andrew);

// cria uma função no protótipo do objeto ClientePoupanca
ClientePoupanca.prototype.depositarPoupanca = function (valor) {
    if (valor < 0) {
        console.log("Não pode depositar valor negativo!");
        return;
    }
    this.saldoPoupanca += valor;
}

andrew.depositarPoupanca(500.0);

console.log(andrew);
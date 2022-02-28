const cliente = {
    "nome": "Vladimir Paris",
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

const oferecerSeguro = (obj) => {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para: ${obj.nome}`)
    }
}

oferecerSeguro(cliente);
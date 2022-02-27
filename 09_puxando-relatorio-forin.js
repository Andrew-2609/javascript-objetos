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
    ]
}

let relatorio = "";

for (let info in cliente) {
    if (typeof cliente[info] !== "object" && typeof cliente[info] !== "function") {
        relatorio += `${info}: ${cliente[info]}\n`;
    } else if (typeof cliente[info] === "object") {
        relatorio += `${info}: ...object\n`;
    }
}

console.log(relatorio);
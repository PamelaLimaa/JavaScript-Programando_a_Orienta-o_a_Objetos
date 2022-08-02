class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf= 11112234;
cliente1.agencia = 1101;
cliente1.saldo = 3;
cliente1.rg = 2676165167;

cliente2.nome = "Alice"
cliente2.cpf = 11112234;
cliente2.agencia = 1101;
cliente2.saldo = 0;


console.log(cliente1, cliente2);
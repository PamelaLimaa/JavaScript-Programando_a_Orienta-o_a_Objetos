class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor

            return valor;
        }
    }

    depositar(valor){
        if (valor <= 0) {
            return;
        }
        this._saldo += valor
    }
}


const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf= 11112234;

const cliente2 = new Cliente();
cliente2.nome = "Alice"
cliente2.cpf = 11112234;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(cliente1);
console.log(cliente2);
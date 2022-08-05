import {Cliente} from "./cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf= 11112234;

const cliente2 = new Cliente();
cliente2.nome = "Alice"
cliente2.cpf = 11112234;

const contaCorrenteRicardo = new ContaCorrente();


console.log(cliente1);
console.log(cliente2);
import { Conta } from "../../src/model/Conta";

describe("Conta", () => {
    test("saque Sucesso", async () => {
        const conta: Conta = new Conta("cp123", 5000);
        conta.sacar(2000);
        expect(conta.saldo).toBe(3000);
    });

    test("deposito Sucesso", async () => {
        const conta: Conta = new Conta("cp123", 6000);
        conta.depositar(500);
        expect(conta.saldo).toBe(6500);
    });

    test("sacar com valor zerado", async () => {
        const conta: Conta = new Conta("123456", 5000);
        expect(()=> {conta.sacar(0); }).toThrow("O valor não pode ser igual ou menor que zero");
    });

    test("depositar com valor zerado", async () => {
        const conta: Conta = new Conta("123456", 5000);
        expect(()=> {conta.sacar(0); }).toThrow("O valor não pode ser igual ou menor que zero");
    });

    test("sacar com valor negativo", async () => {
        const conta: Conta = new Conta("123456", 5000);
        expect(()=> {conta.sacar(-50); }).toThrow("O valor não pode ser igual ou menor que zero");
    });

    test("depositar com valor negativo", async () => {
        const conta: Conta = new Conta("123456", 5000);
        expect(()=> {conta.sacar(-50); }).toThrow("O valor não pode ser igual ou menor que zero");
    });

    test("sacar valor acima do saldo", async () => {
        const conta: Conta = new Conta("123456", 200);
        expect(()=> {conta.sacar(6000); }).toThrow("Saldo indisponível");
    });

})
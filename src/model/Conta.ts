import { NegocioErro } from "../error/NegocioErro";

export class Conta {

    private _numero: string;
    private _saldo: number;

    //construtor
    public constructor(numero: string, saldo: number) {
        this._numero = numero;
        this._saldo = saldo;
    }

    //metados
    public sacar(valor: number): void {
        this.validarValor(valor);

        if ((this._saldo - valor) <0)
        throw new NegocioErro("Saldo indisponível");
        this._saldo -= valor;
    }

    public depositar(valor:number): void {
        this.validarValor(valor);
        this._saldo = this.saldo + valor;
    }

    private validarValor(valor:number): void{
        if(valor <= 0)
            throw new NegocioErro("O valor não pode ser igual ou menor que zero");
    }

    public get saldo(): number{
        return this._saldo;
    }
}

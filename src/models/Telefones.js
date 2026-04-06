export class Telefone {
    #id
    #numero;
    #id_cliente;

    constructor(numero, id_cliente, id) {
        numero = this.#numero;
        id_cliente = this.#id_cliente;        
        id = this.#id;
    }

    // getters
    get numero() {
        return this.#numero;
    }

    get id() {
        return this.#id_cliente;
    }

    get idTel() {
        return this.#id
    }

    // setters
    set numero(value) {
        this.#validarNumero(value);
        this.#numero = value;
    }

    set id(value) {
        if (value !== undefined && value !== null) {
            this.#validarId(value);
            this.#id_cliente = value;
        }
    }

    set idTel(value){
        if(value !== undefined && value!== null){
            this.#validarIdTelefone(value);
            this.#id = value;
        }
    }

    // validações
    #validarId(value) {
        if (isNaN(value) || value <= 0) {
            throw new Error("O valor de Id não corresponde com o esperado");
        }
    }

    #validarNumero(value) {
        if (
            typeof value !== "string" ||
            isNaN(value) ||
            value.trim().length < 10 || value.trim().length > 11
        ) {
            throw new Error("O número escrito não atende aos padrões");
        }
    }
    #validarIdTelefone(value) {
        if(isNaN(value) || value <=0){
            throw new Error("O valor de Id não corresponde com o esperado")
        }
    }

    // Design Pattern : Factory
    static criar(dados) {
        return new Telefone(
            dados.numero,
            dados.id_cliente,
            null
        );
    }

    static editar(dados){
        return new Telefone(
            dados.numero,
            dados.id_cliente,
            dados.id
        )
    }
}
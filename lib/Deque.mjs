/**********************************************************
    ESTRUTURA DE DADOS DEQUE

    - Deque = Double-Ended Queue (dila de duas pontas)
    - Deque é uma lista linear de acesso restrito, que permite apenas as operações 
    de infileiramento (InsertFront/inserBack) e desifileiramento (removeFront/removeBack),
    acontecendo em qualuqer uma das extremidades da estrutura.
    -Como consequência, o deque NÃO SEGUE o princípio FIFO (First In, First Out - 
    primeiro a entrar, primeiro a sair).
    - A principal aplicação dos deques são situações em que filas precisam aceitar 
    a inserção de itens prioritários e a desistência do último item.
*/
export class Deque {

    #data

    constructor() {
        this.#data = []
    }

    insertFront(val) {
        this.#data.unshift(val)
    }

    insertBack(val) {
        this.#data.push(val)
    }

    get empty() {
        return this.#data.length === 0
    }

    removeFront() {
        return this.#data.shift()
    }

    removeBack() {
        return this.#data.pop()
    }

    peakFront() {
        return this.#data[0]
    }

    peakBack() {
        return this.#data[this.#data.length - 1]
    }

    print(){
        return JSON.stringify(this.#data)
    }
}
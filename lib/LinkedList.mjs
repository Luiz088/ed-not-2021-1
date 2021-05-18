











class Node {
    constructor(val) {
        this.data = val         //Armazenamento de voler
        this.next = null        // Ponteiro para o próximo modo
    }
}

export class LinkedList {

    #head       // Nodo inicial da lista
    #tail       // Nodo final da lista
    #count      // Quantidade de nodos na lista

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
        //console.log({head: this.#head, tail: this.#tail, count: this.#count})
    }

    get empty(){
        return this.#count === 0
    }

    // Inserção em uma posição arbitrária
    insert(pos, val){

        // Cria no nodo para abrigar o valor e o endereço do próximo nodo
        let inserted = new Node(val)

        // 1º caso: inserção em lista vazia
        if(this.empty) {
            this.#head = inserted
            this.#tail = inserted
        }
        // 2º Caso: inserção no início da lista
        else if(pos === 0){
            // O sucessor do nodo inserido é o atual head
            inserted.next = this.#head
            // O novo head passa a ser o nodo inserido
            this.#head = inserted
        }
        // 3º caso: Inserção no final da lista
        else if(pos >= this.#count) {
            //O sucesso do tail passa a ser o nodo inserido]
            this.#tail.next = inserted
            // O nodo inserido passa a ser o novo tail
            this.#tail = inserted
        }
        // 4º caso: posição intermediária
        else{
            // Nodo ANTERIOR à posição de inserção
            let before = this.#head
            // Percorre a lista até encontrar o nodo da posição ANTERIOR à de inserção
            for(let i = 0; i < pos -1; i++) before = before.next
            // Nodo que irá ficar DEPOIS do inserido
            let after = before.next
            // O próximo nodo inserido passa a ser o nodo after
            inserted.next = after
            // O próximo do nodo before passa a ser o nodo insreido
            before.next = inserted
        }
        this.#count++

        //console.log({head: this.#head, tail: this.#tail, count: this.#count})

    }

    inserthead(val) {
        this.insert(0, val)
    }

    insertTail(val){
        this.insert(this.#count, val)
    }

    remove(pos) {
        
        // 1º Caso: a lista está vazia ou a posição informada é menor que zero
        // ou maior que count -1
        if(this.empty || pos < 0 || pos > this.#count - 1) return undefined

        let removed

        // 2º caso: remoção do início da lista
        if(pos === 0) {
            removed = this.#head
            this.#head = this.#head.next    // Ou: removed.next

            // Atualizando o #tail em caso de remoção do último nodo
            if(this.#count === 1) this.#tail = this.#head.next
        }
        // 3º caso: remoção do fim da lista
        else {
            let before = this.#head
            for(let i = 0; i < pos - 1; i++) before = before.next
            removed = before.next
            let after = removed.next
            before.next = after

            // Atualizando o #tail no caso de remoção do últmo nodo
            if(pos === this.#count - 1) this.#tail = before
        }

        this.#count-- 

        return removed.data
    }

    removeHead() {
        return this.remove(0)
    }

    removeTail(){
        return this.remove(this.#count - 1)
    }

    // retorna a posição de um valor dentro da lista, ou -1 caso não exista
    indexOf(val) {

        // 1º caso: lista vazia
        if(this.empty) return -1

        // 2º casoo: o valor está no início da lista
        if(this.#head.data === val) return 0

        // 3º caso: demais posições
        let search = this.#head
        for(let i = 0; i < this.#count; i++) {
            if (search.data === val) return i    // Encontrou, retorna a posição
            search = search.next
        }
        // Acabou o loop sem retornar, é porque não existe
        return -1
    }

    peek(pos) {

        // Lista vazia ou posição fora dos limites
        if(this.empty || pos < 0 || pos > this.#count -1) return undefined

        let node = this.#head
        // Percorre a lista até a posição desejada
        for(let i = 0; i < pos; i++) node = node.next

        return node.data
        
    }

    peekHead(){
        return this.peek(0)
    }

    peekTail(){
        return this.peek(this.#count - 1)
    }
        
    print(){
        let output = '( '
        let node = this.#head
        for(let i = 0; i < this.#count; i++) {
            output += `[${i}]: ${node.data}`
            if(node.next) output += ' -> '
            node = node.next
        }
        return output + ` ) count: ${this.#count} `
    }

}

let lista = new LinkedList()
console.log(lista.print())

lista.insert(0, 76)
console.log(lista.print())

lista.insert(0, 22)
console.log(lista.print())

lista.insert(2, 8)
console.log(lista.print())

lista.insert(1, 29)
console.log(lista.print())

lista.insert(1, 47)
console.log(lista.print())

lista.inserthead(51)
console.log(lista.print())

lista.insertTail(14)
console.log(lista.print())

let removed = lista.remove(0)
console.log({removed})
console.log(lista.print())

removed = lista.remove(5)
console.log({removed})
console.log(lista.print())

lista.insertTail(33)
console.log(lista.print())

removed = lista.removeTail()
console.log({removed})
console.log(lista.print())

let pos =lista.indexOf(22)
console.log({pos})

pos = lista.indexOf(8)
console.log({pos})

let peek0 = lista.peek(0)
let peek2 = lista.peek(2)
let peek3 = lista.peek(3)
let peek4 = lista.peek(4)
console.log({peek0, peek2, peek3, peek4})

let peekHead = lista.peekHead()
let peekTail = lista.peekTail()
console.log({peekHead, peekTail})












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

lista.insert(1, 47)
console.log(lista.print())

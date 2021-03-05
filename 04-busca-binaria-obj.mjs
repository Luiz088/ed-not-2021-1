let comps

 function buscaBinaria(vetor, fncomp) {
     comps = 0
     let ini = 0
     let fim = vetor.length -1
     let meio
     while(fim >= ini) {
        meio = Math.floor((fim + ini) /2) //Math.floor() arredonda para baixo
        switch(fncomp(vetor[meio])) {
            case 0:     // Achou
                comps++
                return meio
            case 1:    // Valor de busca é MAIOR
                comps += 2
                ini = meio + 1
                break
            default:    // Valor de busca é MENOR
                comps += 2
                fim = meio -1
        }
     }
     return -1 //Não existe
 }

 // A função de comparação para a busca binária precisa retornar um de três valores:
 // Retorno 0: o valor de busca e o valor no objeto são IGUAIS.
 // Reotno -1: o valor de busca é menor que o valor do objeto.
 // Retorno 1: o valor de busca é maior que o valor do objeto.
 const comparaNome = (obj, busca = 'FAUSTO') => {
     if(busca === obj.first_name) return 0
     else if(busca < obj.first_name) return -1
     else return 1
 }

  import { objNomes} from './includes/vetor-obj-nomes.mjs'

 console.time('Buscando LAMARA')
 console.log(buscaBinaria(objNomes, (obj, busca = 'LAMARA') => {
    if(busca === obj.first_name) return 0
    else if(busca , obj.first_name) return -1
    else return 1
 }), {comps})
 console.timeEnd('Buscando LAMARA')

console.time('Buscando ZOZIMO')
console.log(buscaBinaria(objNomes, (obj, busca = 'ZOZIMO') => {
    if(busca === obj.first_name) return 0
    else if(busca , obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando ZOZIMO')

console.time('Buscando ORKUTILSON')
console.log(buscaBinaria(objNomes, (obj, busca = 'ORKUTILSON') => {
    if(busca === obj.first_name) return 0
    else if(busca , obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando ORKUTILSON')
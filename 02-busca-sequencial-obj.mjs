 function buscaSequencial(vetor, fnComp) {
     for(let i = 0; i < vetor.length; i++) {
         // Em bez de fazer a comparação dentro da função de busca,
         // "terceirizamos" essa comparação chamando uma função externa
         if(fnComp(vetor[i])) return i //Retorna a posição onde foi encontrado.
     }
     return -1 // Vetor de busca não encontrado.
 }


/* function comparaNome(objNome, valorBusca) {
     return objNome.fisrtName === valorBusca
 }*/

 //const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca
 //const comparaGrupo = (objNome, valorBusca) => objNome.group_name === valorBusca

 import { objNomes} from './includes/vetor-obj-nomes.mjs'

 console.time('Buscando ZOZIMO')
 console.log(buscaSequencial(objNomes, obj => obj.first_name === 'ZOZIMO'))
 console.timeEnd('Buscando ZOZIMO')

 console.time('Buscando LAMARA')
 console.log(buscaSequencial(objNomes, obj => obj.first_name === 'LAMARA'))
 console.timeEnd('Buscando LAMARA')

console.time('Buscando ORKUTILSON')
 console.log(buscaSequencial(objNomes, obj => obj.first_name === 'ORKUTILSON'))
 console.timeEnd('Buscando ORKUTILSON')

 console.log('--------------------------------------------------------------')
 
 console.log(buscaSequencial(objNomes, obj => obj.first_name === 'FAUSTO'))
 console.log(buscaSequencial(objNomes, obj => obj.group_name === 'MARIA'))

 let pos = buscaSequencial(objNomes, obj => obj.frequency_total > 1000)

 console.log(objNomes[pos])

 // Primeiro nome masculino da lista com mais de 10000 registrados
 pos = buscaSequencial(objNomes, obj => obj.frequency_total > 10000 && obj.classification === 'M')
 console.log(objNomes[pos])
 function buscaSequencial(vetor, valorBusca, fnComp) {
     for(let i = 0; i < vetor.length; i++) {
         // Em bez de fazer a comparação dentro da função de busca,
         // "terceirizamos" essa comparação chamando uma função externa
         if(fnComp(vetor[i], valorBusca)) return i //Retorna a posição onde foi encontrado.
     }
     return -1 // Vetor de busca não encontrado.
 }

/* function comparaNome(objNome, valorBusca) {
     return objNome.fisrtName === valorBusca
 }*/

 const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

 import { objNomes} from './includes/vetor-obj-nomes.mjs'
 
 console.log(buscaSequencial(objNomes, 'FAUSTO', comparaNome))
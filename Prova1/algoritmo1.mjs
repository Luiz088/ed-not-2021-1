/*
    Mapeamento de variáveis:
    K -> Função de ordenação
    M -> Vetor a ser ordenado
    N -> Valor de início
    O -> Final do Vetor.
    P -> Pivot
    I -> Contador
    Q -> Parametro que separa os subvetores
*/

let pass, comps, trocas

function k(m, fnComp, n, o = m.length -1) {     // Condição de saída das chamadas recusívas
    if(o <= n) return
    pass++
    const p = o
    let q = n - 1
    for(let i = n; i < o; i++) {        // Loop for vai até a PENÚLTIMA posição
        if(fnComp(m[p], m[i])) {        //Inversão dos parâmetros.
            comps++
            q++
            if(i !== q) [ m[i], m[q] ] = [ m[q], m[i] ] //trocando a posição dos itens****
        }
    }
    q++
    // Colocamos o pivô no seu lugar definitivo
    if(fnComp(m[q], m[p])) {                //trocando os parâmetros novamente
        [ m[p], m[q] ] = [ m[q], m[p] ]
        trocas++
    }
    comps++
    k(m, n, q - 1)
    k(m, q + 1, o)
}

import { countries } from   './Prova1/countries.mjs'   //Importando arquivo

trocas = 0, comps = 0, pass = 0     //Zerando contadores

console.time('Ordenando países...') //Ativando console.time
const continents = countries.filter(obj => obj.continent === 'continent') // Ordenando por continente e depois por país
k(continents, (a, b) => {
    if(a.continent === b.continent) {   // Mesmo continente
        // Desempate no pais
        return a.country > b.country
    }
    else return a.continent > b.continent //Caso o continente seja o mesmo, ordena somente os países.
})

let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando países')
console.log('Depois', continents)
console.log({trocas, pass, comps, memoria})


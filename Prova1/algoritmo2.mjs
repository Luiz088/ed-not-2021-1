/*
    Mapeamento de variáveis
    M -> Busca
    O -> Início
    P -> Final
    Q -> Meio
    N -> Número buscado

*/


function k(m, n, fnComp) {
    comps = 0
    let o = 0, p = m.length - 1, q
    while(p >= o) {
        q = Math.floor((p + o) / 2)
        if(fnComp(m[q] === n)) return q
        else if(n > m[q]) o = q + 1
        else p = q - 1
    }
    return -1  // Não existe
}

import { countries } from './Prova1/countries.mjs'

console.time('Buscando Brazil')
console.log(k(countries, (obj, busca = 'Brazil') => {
    if(busca === obj.country) return 0
    else if( busca < obj.country) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando Brazil')
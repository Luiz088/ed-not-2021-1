let frutas = ['maça', 'laranja', 'pera', 'uva', 'mamão', 'banana']

// vetor original
console.log(frutas)

//Retirar o último elemento de um vetor
let ultimaFruta = frutas.pop()

//Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

//Remoção em posição intermediária
// 1º parâmetro -> a posição de remoção (contagem começa em 0)
// 2º parâmetro -> a quantidade de elementos a remover
let terceiraFruta = frutas.splice(2, 1)

console.log(frutas)
console.log(terceiraFruta)

// Inserindo no final do vetor
frutas.push('amora') // Pode inserir mais de um elemento ao mesmo tempo
// p. ex.:
// frutas.push('amora', 'jaca')
console.log(frutas)

// Inserir no início do Vetor
frutas.unshift('jabuticaba') // Também pode inserir mais de um elemento 
//ao mesmo tempo, p. ex.: frutas.unshift('jabuticaba', 'mexerica')
console.log(frutas)

//Inserção no meio do vetor
// Paramêtros do splice() para inserção
// 1º -> posição para inserção
// 2º -> nº de elementos a serem excluídos (para inserção usa-se 0)
// 3º em diante -> elemento(s) que serão inserido(s)
frutas.splice(2, 0, 'pessego') // Inserindo na terceiro posição
// Também funciona para inserir vários elementos ao mesmo tempo, p. ex:
// frutas.splice(2, 0, 'pêssego', 'jaca', 'nectarina')
console.log(frutas)

// Usando splice() para substituição
//Parâmetros:
// 1º -> posição para substituição
// 2º -> quantidade de elementsos que serão excluídos (para substituição, 1)
// 3º -> o elemento que será incluído no lugar
frutas.splice(4, 1, 'ameixa') //Substituição na 5ª posição
console.log(frutas)

//Inserção múltipla com splice()
frutas.splice(1, 0, 'nectarina', 'jaca')
console.table(frutas)

console.log('------------------------------------------------')

/***********************************
 * PERCURSOS DE VETOR
 */

 // 1) Percurso com for tradicional
 // a) A contagem começa em zero (0 - primeiro elemento)
 // b) Ocorre enquanto o contador for MENOR que o númer de elementos do vetor
 // c) LENGTH termina com TH (língua mole)
 // d) É o método mais flexível pois, se necessário, é possível fazer um percurso
 // parcial (começar em algum elemento que não é o primeiro e terminar antes do final)
 for(let i = 0; i < frutas.length; i++){
    console.log(i, frutas[i])
 }

 console.log('------------------------------------------------')

 // 2) For tradicional, em ordem inversa
 // a) O contador inicia-se em length - 1
 // b) A condição é contador MAIOR OU IGUAL a zero (0 - primeiro elemento)
 for(let i = frutas.length - 1; i >= 0; i--){
     console.log(i, frutas[i])
 }

 console.log('------------------------------------------------')

 // 3) Percurso com for..of
 // a) Sempre percorre o vetor inteiro, na ordem natural, sem necessidade de 
 // uma variável contadora
 // Variáveis:
 // f -> variável que receberá cada elemento do vetor (pode ser qualquer nome
 // válido de váriavel)
 // frutas -> é o vetor a ser percorrido
 
 //let x = 0
 for(let f of frutas) {
     console.log(f)
     //console.log(x, f)
     //x++
 }

console.log('------------------------------------------------')

// 4) Percusro com forEach()
// a) forEach() recebe como parâmetro uma função que recebe como pârametro
// cada elemento do vetor
// b) O nome do parâmetro da função pode ser qualquer nome válido de identificador
frutas.forEach(function(elemento) {
    console.log(elemento)
})

console.log('------------------------------------------------')

// O mesmo forEach(), usando uma Arrow function como parâmetro
frutas.forEach(elemento => console.log(elemento))
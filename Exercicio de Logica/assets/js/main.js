// Escreva uma função que recebe 2 números e 
// retorne o maior deles
const max = (x, y) => x > y ? x : y;
console.log(max(10, 5));


// Escreva uma função chamada ePaisagem que
// que recebe dois argumento, largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo
// paisagem.

const ePaisagem = (width, height) => width > height

console.log(ePaisagem(200, 400));

// Escreva uma função que recebe um número e
// retorne o seguinte:
// Numero é Divisível por 3 = Fizz
// Numero é Divisível por 5 = Buzz
// Numero é Divisível por 3 e 5 = FizzBuzz
// Numero NÃO é Divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio
// número
// Use a função com números de 0 e 100.

function fizzBuzz(num){

    if(typeof(num) !== "number") return num 
    if(num % 3 === 0 && num % 5 === 0) return "FizzBuzz"
    if(num % 3 === 0) return "Fizz"
    if(num % 5 === 0) return "Buzz"
    return 
}
for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
    
}
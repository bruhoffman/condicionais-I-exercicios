function numeroPar(num) {
    if (num % 2 === 0) {
        console.log(`O número é par!`)
    } else {
        console.log(`O número é ímpar`)
    }
}

const numero = Number(prompt(`Digite um número qualquer:`));
numeroPar(numero);
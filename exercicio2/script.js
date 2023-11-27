function verificarEscolaridade(idade, escolaridade, faculdade) {
    if (idade < 18) {
        console.log(`A pessoa é menor de idade.`);
    } else {
        console.log(`A pessoa é maior de idade.`);
    }

    if (escolaridade === true) {
        console.log(`A pessoa concluiu o ensino médio.`);
    } else {
        console.log(`Ensino médio incompleto`);
    }

    if (faculdade === false) {
        console.log(`A pessoa não está cursando alguma faculdade.`);
    } else {
        console.log(`A pessoa está cursando uma faculdade.`)
    }
}

const idade = Number(prompt("Informe a tua idade:"));
const ensinoMedio = confirm("Terminou o ensino médio? \n'OK' para 'Sim' e 'Cancelar' para 'Não'");
const ensinoSuperior = confirm("Cursa alguma faculdade? \n'OK' para 'Sim' e 'Cancelar' para 'Não'");

verificarEscolaridade(idade, ensinoMedio, ensinoSuperior);
function verificarNacionalidade(nacionalidade) {
    if (nacionalidade === "brasileira") {
        console.log(nacionalidade);
    } else if (nacionalidade === "argentina") {
        console.log(nacionalidade);
    } else if (nacionalidade === "uruguaia") {
        console.log(nacionalidade);
    } else if (nacionalidade === "chilena") {
        console.log(nacionalidade);
    } else if (nacionalidade === "colombiana") {
        console.log(nacionalidade);
    } else {
        console.log("Nacionalidade não encontrada!");
    }
}

const nacionalidade = prompt("Qual a sua nacionalidade?");
verificarNacionalidade(nacionalidade.toLowerCase());
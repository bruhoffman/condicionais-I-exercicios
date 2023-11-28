function verificarNacionalidade() {
    const nacionalidade = prompt("Qual a sua nacionalidade?").toLowerCase();

    if (nacionalidade === "brasileira") {
        console.log(`Vocé ${nacionalidade}`);
    } else if (nacionalidade === "argentina") {
        console.log(`Vocé ${nacionalidade}`);
    } else if (nacionalidade === "uruguaia") {
        console.log(`Vocé ${nacionalidade}`);
    } else if (nacionalidade === "chilena") {
        console.log(`Vocé ${nacionalidade}`);
    } else if (nacionalidade === "colombiana") {
        console.log(`Vocé ${nacionalidade}`);
    } else {
        console.log("Nacionalidade não encontrada!");
    }
}

verificarNacionalidade();
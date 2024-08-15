function getLevel(victories, defeats) {
    let level = victories - defeats; // Calcula o saldo de vitórias

    // Determina o nível com base no saldo de vitórias
    switch (true) {
        case (level < 10):
            return "Ferro";
        case (level >= 11 && level <= 20):
            return "Bronze";
        case (level >= 21 && level <= 50):
            return "Prata";
        case (level >= 51 && level <= 80):
            return "Ouro";
        case (level >= 81 && level <= 90):
            return "Diamante";
        case (level >= 91 && level <= 100):
            return "Lendário";
        default:
            return "Imortal";
    }
}

// Exemplo de uso da função
const victories = 28;
const defeats = 2;
const level = getLevel(victories, defeats);

// Exibe a mensagem com o saldo de vitórias e o nível do jogador
console.log(`O herói tem de saldo de ${victories - defeats} vitórias e está no nível ${level}.`);

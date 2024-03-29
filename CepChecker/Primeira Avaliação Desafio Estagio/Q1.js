function encontrarNumeroUnico(array) {
    // Objeto para armazenar a contagem de cada número no array
    var contagem = {};

    // Loop para contar a ocorrência de cada número no array
    for (var i = 0; i < array.length; i++) {
        var num = array[i];
        contagem[num] = (contagem[num] || 0) + 1;
    }

    // Loop para encontrar o número não repetido
    for (var chave in contagem) {
        if (contagem.hasOwnProperty(chave)) {
            if (contagem[chave] === 1) {
                return parseInt(chave); // Retorna o número não repetido como um inteiro
            }
        }
    }

    // Retorna null se não houver número não repetido
    return null;
}

var array = [5,3,4,3,5,5,3];
console.log(encontrarNumeroUnico(array));

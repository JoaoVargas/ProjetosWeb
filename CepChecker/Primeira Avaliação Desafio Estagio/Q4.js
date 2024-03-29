function fatorial(num) {
  // Se o número for negativo retorna null
  if (num < 0) {
      return null;
  }

  // Se o número for 0 ou 1, o fatorial é 1
  if (num === 0 || num === 1) {
      return 1;
  }

  // Inicializa o resultado como 1
  var resultado = 1;

  // Multiplica os números de 2 até o número dado
  for (var i = 2; i <= num; i++) {
      resultado *= i;
  }

  return resultado;
}

var num = 5;
console.log(fatorial(num));

function fibonacci(num) {
  // Se o número for negativo, retornamos null
  if (num <= 0) {
      return null;
  }

  // Se o número for 1, retornamos [0]
  if (num === 1) {
      return [0];
  }

  // Caso contrário, inicializamos o array de Fibonacci com os dois primeiros números
  let fibonacci = [0, 1];

  // Geramos os números de Fibonacci até que o último seja menor ou igual ao número dado
  while (fibonacci.length <= num - 1) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
  }

  return fibonacci;
}

var num = 6;
console.log(fibonacci(num));

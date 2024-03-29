function verPalindromo(str) {
  // Retorna o resultado da comparacao da String com sua inversa
  return str == str.split('').reverse().join('');;
}

var str = "arara";
console.log(verPalindromo(str));

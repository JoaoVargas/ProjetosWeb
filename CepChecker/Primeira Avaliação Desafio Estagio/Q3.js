function ordenaParImpar(array) {
  var pares = [];
  var impares = [];

  for (var i = 0; i < array.length; i++) {
    (arr[i] % 2 === 0) ? pares.push(arr[i]) : impares.push(arr[i]) ;
  }

  return pares.concat(impares)
}

var arr = [3, 1, 2, 4, 6, 5];
console.log(ordenaParImpar(arr));

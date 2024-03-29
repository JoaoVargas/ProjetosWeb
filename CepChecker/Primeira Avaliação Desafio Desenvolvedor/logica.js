function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[0]; // Escolhendo o primeiro elemento como pivô
    const menores = [];
    const maiores = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            menores.push(array[i]);
        } else {
            maiores.push(array[i]);
        }
    }

    return [...quickSort(menores), pivot, ...quickSort(maiores)];
}
function mergeSort(array) {
    // Caso base: se o array tiver tamanho 1 ou menos, está ordenado
    if (array.length <= 1) {
        return array;
    }

    // Divide o array ao meio
    const meio = Math.floor(array.length / 2);
    const esquerda = array.slice(0, meio);
    const direita = array.slice(meio);

    // Chamadas recursivas para ordenar as duas metades
    const esquerdaOrdenada = mergeSort(esquerda);
    const direitaOrdenada = mergeSort(direita);

    // Combina as duas metades ordenadas
    return merge(esquerdaOrdenada, direitaOrdenada);
}
function merge(esquerda, direita) {
    let resultado = [];
    let indiceEsquerda = 0;
    let indiceDireita = 0;

    // Combinando elementos em ordem crescente
    while (indiceEsquerda < esquerda.length && indiceDireita < direita.length) {
        if (esquerda[indiceEsquerda] < direita[indiceDireita]) {
            resultado.push(esquerda[indiceEsquerda]);
            indiceEsquerda++;
        } else {
            resultado.push(direita[indiceDireita]);
            indiceDireita++;
        }
    }

    // Adiciona os elementos restantes dos dois arrays
    return resultado.concat(esquerda.slice(indiceEsquerda)).concat(direita.slice(indiceDireita));
}
function bubbleSort(array) {
    const n = array.length;
    let trocado;

    do {
        trocado = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                // Troca de elementos usando destructuring assignment
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                trocado = true;
            }
        }
    } while (trocado);

    return array;
}

function gerarArrayDesordenado(tamanho) {
    const array = [];
    for (let i = 0; i < tamanho; i++) {
        array.push(Math.floor(Math.random() * 10000)); // Gera números aleatórios entre 0 e 9999
    }
    return array;
}
function calcularTempoDeExecucao(funcaoOrdenacao, lista) {
    const inicio = performance.now();
    funcaoOrdenacao(lista);
    const fim = performance.now();
    return (fim - inicio)
}
function addData(chart, label, newData) {
    chart.data.labels.push(label);
    for (let i = 0; i < chart.data.datasets.length; i++) {
      chart.data.datasets[i].data.push(newData[i]);
    }
    chart.update();
}

var a = new Chart(document.getElementById('grafico'), {
  type: 'line',
  data: {
    labels: [],
    datasets: [
        {
          label: 'QuickSort',
          data: [],
          borderWidth: 1,
          tension: 0.1
        },
        {
          label: 'MergeSort',
          data: [],
          borderWidth: 1,
          tension: 0.1
        },
        {
          label: 'BubbleSort',
          data: [],
          borderWidth: 1,
          tension: 0.1
        }
      ],
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Grafico'
        }
      }
    }
  }
})

var arrayDesordenado = []

for (let i = 1; i < 100; i++) {
  arrayDesordenado = gerarArrayDesordenado(i * 100);
  var arrResultado = [
    calcularTempoDeExecucao(quickSort, arrayDesordenado), 
    calcularTempoDeExecucao(mergeSort, arrayDesordenado), 
    calcularTempoDeExecucao(bubbleSort, arrayDesordenado)
  ]
  addData(a, i * 100, arrResultado)
}
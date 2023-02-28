/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arrNumbers) => {
  let newArr = 0;
  if (arrNumbers.length === 0) {
    return undefined;
  }
  for (let index of arrNumbers) {
    if (typeof index !== 'number') {
      return undefined;
    }
    newArr += index;
  }
  return Math.round(newArr / arrNumbers.length);
};

console.log(average([1, 2, 3, 10]))
module.exports = average;
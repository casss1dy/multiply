module.exports = function multiply(first, second) {

  let arrFirst = Array.from(first).reverse();
  let arrSecond = Array.from(second).reverse();
  let arrTerms = [];
  let arrSum = [];

  // массив произведенией
  for (let i = 0; i < arrSecond.length; i++) {
    let ten = 0; // десятки - переполнение
    arrTerms.push([]);
    for (let j = 0; j < arrFirst.length; j++) {
      let composition = (arrSecond[i] * arrFirst[j]) + ten;
      ten = (composition > 9) ? Math.floor(composition / 10) : 0;
      arrTerms[i][j] = (composition > 9) ? composition % 10 : composition;
    }

    if (ten) arrTerms[i].push(ten);

    //дополнение нулями
    for (let nullCount = 0; nullCount < i; nullCount ++) {
      arrTerms[i].unshift(0);
    }
  }

  // суммирование произведений
  let length = arrTerms[arrTerms.length - 1].length;
  let ten = 0;
  for (let j = 0; j < length; j++) {
    let sum = ten;
    for (let i = 0; i < arrTerms.length; i++) {
      if (arrTerms[i][j] !== undefined) {
        sum = (!sum) ? arrTerms[i][j] : sum + arrTerms[i][j];
      }
    }
    ten = (sum > 9) ? Math.floor(sum / 10) : 0;
    arrSum[j] = (sum > 9) ? sum % 10 : sum;
  }

  if (ten) arrSum.push(ten);
  return arrSum.reverse().join('');
}

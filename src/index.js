module.exports = function towelSort(matrix) {

  let result = [];

  if (!matrix || matrix.length === 0) {
    return result;
  } else {
    matrix.forEach((element, index) => {
      index % 2 === 0 ? result = result.concat(element) : result = result.concat(element.reverse());
    })
    return result;
  }
}



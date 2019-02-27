function reverser(array) {
  return array.reverse();
}

function sorter(array) {
  return array.sort();
}

function getLast(array) {
  return array[array.length-1];
}

function shuffle(array) {
  var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

function duplicates(array) {
  results = [];
  for (var i = 0; i <= array.length; i++) {
    for (var j = 0; j <= array.length; j++) {
      if (i != j && array[i] == array[j]) {
        results.push(array[j]);
        break;
      }
    }
  }
  return results;
}

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = array.pop();

    for (var i = 0; i < array.length; i++) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
}

// function mergeSort(array) {
//
// }

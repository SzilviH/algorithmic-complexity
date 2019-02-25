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

function reverser(array) {
  return array.reverse();
}

function sorter(array) {
  return array.sort();
}

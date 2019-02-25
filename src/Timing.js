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

function createArray(size) {
  array = [];
  var i;
  for (i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 101));
  };
  return array;
}

function testTime(fn) {
  times = []
  for (i = 5000; i <= 100000; i += 5000) {
    var array = createArray(i);
    var t0 = performance.now();
    fn(array);
    var t1 = performance.now();
    times.push(t1-t0);
  };
  return times;
};

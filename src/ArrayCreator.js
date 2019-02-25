function createArray(size) {
  array = [];
  var i;
  for (i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 101));
  };
  return array;
}

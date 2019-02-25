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


var myArray = [1, 2, 3, 4];
var t0 = performance.now();
console.log(getLast(myArray));
var t1 = performance.now();

console.log("Getting last element of array took " + (t1-t0) + " milliseconds.");


var t0 = performance.now();
console.log(myArray.reverse());
var t1 = performance.now();

console.log("Getting reversed array took " + (t1-t0) + " milliseconds.");

var t0 = performance.now();
console.log(shuffle(myArray));
var t1 = performance.now();

console.log("Shuffling array took " + (t1-t0) + " milliseconds.");

var newArray = shuffle(myArray);
var t0 = performance.now();
console.log(newArray.sort());
var t1 = performance.now();

console.log("Sorting array took " + (t1-t0) + " milliseconds.");

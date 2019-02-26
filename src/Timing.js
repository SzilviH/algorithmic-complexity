function testTime(fn) {
  var times = []
  for (var i = 0; i <= 100000; i += 5000) {
    var array = createArray(i);
    var t0 = performance.now();
    fn(array);
    var t1 = performance.now();
    times.push(t1-t0);
  };
  return times;
};

function getRange() {
  var range = []
  for (var i = 0; i <= 100000; i += 5000) {
    range.push(i);
  }
  return range;
};

var getLastTrace = {
  x: getRange(),
  y: testTime(getLast),
  type: 'lines',
  name: 'getLast()',
  line: {
    color: 'rgb(199, 114, 198)',
    width: 3
  }
};

var reverserTrace = {
  x: getRange(),
  y: testTime(reverser),
  type: 'lines',
  name: 'reverse()',
  line: {
    color: 'rgb(38, 181, 195)',
    width: 3
  }
};

var shuffleTrace = {
  x: getRange(),
  y: testTime(shuffle),
  type: 'lines',
  name: 'shuffle()',
  line: {
    color: 'rgb(61, 203, 173)',
    width: 3
  }
};

var sorterTrace = {
  x: getRange(),
  y: testTime(sorter),
  type: 'lines',
  name: 'sort()',
  line: {
    color: 'rgb(189, 75, 99)',
    width: 3
  }
};

var data = [getLastTrace, reverserTrace, shuffleTrace, sorterTrace];

var layout = {
  title: 'Timing Standard JavaScript Library Functions',
  xaxis: {
    title: 'Size'
  },
  yaxis: {
    title: 'Time (ms)'
  }
};

Plotly.newPlot('timing-chart', data, layout, {responsive: true});

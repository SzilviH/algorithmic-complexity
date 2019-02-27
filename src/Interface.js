function getRange() {
  var range = []
  for (var i = 0; i <= 100000; i += 5000) {
    range.push(i);
  }
  return range;
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

var duplicatesTrace = {
  x: getRange(),
  y: testTime(duplicates),
  type: 'lines',
  name: 'duplicates()',
  line: {
    color: 'rgb(159, 224, 85)',
    width: 3
  }
};

var data1 = [reverserTrace, sorterTrace];
var data2 = [getLastTrace, shuffleTrace, duplicatesTrace];

var layout1 = {
  title: 'Timing Standard JavaScript Library Functions',
  xaxis: {
    title: 'Input size'
  },
  yaxis: {
    title: 'Time (ms)'
  }
};

var layout2 = {
  title: 'Timing Custom JavaScript Functions',
  xaxis: {
    title: 'Input size'
  },
  yaxis: {
    title: 'Time (ms)'
  }
};

Plotly.newPlot('timing-chart1', data1, layout1, {responsive: true});
Plotly.newPlot('timing-chart2', data2, layout2, {responsive: true});

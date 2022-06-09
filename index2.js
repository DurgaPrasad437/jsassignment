// var arr = ['1','1','2','d','d','e','a','b','c','f','g','h','h','h','e','a'];
var arr = [];
    var size = 5; // Array size
    for (var a = 0; a < size; a++) {
        arr[a] = prompt('Enter array1 Element ' + (a + 1));
    }
var res = arr.reduce(function(prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});
document.write(JSON.stringify(res))
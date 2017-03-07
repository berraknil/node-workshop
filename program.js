
/*var result = 0;

for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
};

console.log(result);*/

// Exercise 3

/*var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);

var str = file.toString();

var res = str.split('\n');

console.log(res.length - 1);*/


// Exercise 4

/*var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    str = data.toString();
    result = str.split('\n');
    console.log(result.length - 1);
  }
});*/


// Exercise 5

/*var fs = require('fs');
var dir = process.argv[2];
var extension = '.' + process.argv[3];


fs.readdir(dir, cb);

function cb (err, list) {
  if (err) {
    console.log(err);
  } else {
    for (var i = 0; i < list.length; i++) {
      if (list[i].includes(extension)) {
        console.log(list[i]);
      }
    }
  }
}*/


// Exercise 6

/*var filter = require('./filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filter(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})*/

// Exercise 7

/*var http = require('http');

http.get(process.argv[2], cb);

function cb (res) {
  res.setEncoding('utf8');
  res.on("data", function(data) {
    console.log(data);
  })
}*/


// Exercise 8
/*var http = require('http');
var bl = require('bl');



http.get(process.argv[2], cb);

function cb (response) {
  response.pipe(bl(function(err, data) {
      if (err) {
        console.error(err);
      }
      console.log(data.length);
      console.log(data.toString())
  })
 );
}*/


// Exercise 9


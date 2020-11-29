// Node packages for file system
var fs = require('fs');
const { dirname } = require('path');
var path = require('path');

console.log(__dirname);
var filePath = path.join(__dirname, 'database.csv');
// Read CSV
var f = fs.readFileSync(filePath, {encoding: 'utf-8'}, 
    function(err){console.log(err);});

// Split on row
f = f.split("\r\n");

// Get first row for column headers
headers = f.shift().split(";");
console.log(headers)

var json = [];    
f.forEach(function(d){
    // Loop through each row
    tmp = {}
    row = d.split(";")
    for(var i = 0; i < headers.length; i++){
        tmp[headers[i]] = row[i];
        
    }
    // Add object to list
    json.push(tmp);
});

var outPath = path.join(__dirname, 'medicamentos.json');
// Convert object to string, write json to file
fs.writeFileSync(outPath, JSON.stringify(json), 'utf8', 
    function(err){console.log(err);});
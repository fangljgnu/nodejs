var fs = require('fs');
var iconv = require('iconv-lite');
var rs = fs.createReadStream('F:\\201907311.log');
//rs.setEncoding('utf8');

var data = '';

rs.on('data',function(trunk){
    data += trunk;
});

rs.on('end',function(){
    data = iconv.decode(data, 'UTF-8');
    console.log(data);
});
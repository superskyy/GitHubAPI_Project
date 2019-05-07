var request = require('request');
var fs = require('fs');

request.get('https://api.github.com/repos/jquery/jquery/contributors')
       .on('error', function (err) {                                   
         throw err; 
       })
       .on('response', function (response) {                          
         console.log('Response Status Code: ', response.statusCode + " " + response.statusMessage);
       })
       .pipe(fs.createWriteStream('./future.jpg'));
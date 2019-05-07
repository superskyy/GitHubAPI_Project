var request = require('request');
console.log('Welcome to the GitHub Avatar Downloader!');

// request.get('https://api.github.com/repos/jquery/jquery/contributors')
//        .on('error', function (err) {                                   
//          throw err; 
//        })
//        .on('response', function (response) {                          
//          console.log('Response Status Code: ', response.statusCode + " " + response.statusMessage);
//        })
//        .pipe(fs.createWriteStream('./future.jpg'));

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
var request = require('request');
var secretFile = require('./secrets.js');
var fs = require('fs');
var argv1 = process.argv[2];
var argv2 = process.argv[3];
if (!argv1) {
	console.log("No input given");
	process.exit();
}

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': secretFile.GITHUB_TOKEN
    }
  };

  request(options, function(err, res, body) {
    var repos = JSON.parse(body);
    // console.log(repos);
  	repos.forEach(function(repo) {
  		downloadImageByURL(repo.avatar_url,  "avatars/" + repo.login + ".jpeg");
    	// console.log(repo.avatar_url);
  	});
  	cb(err, body);
  	});

}

function downloadImageByURL(url, filePath) {
  	request.get(url)
  	.on('error', function (err) {                                   
         throw err; 
       })
	.on('response', function (response) {                         
		console.log('Response Status Code: ', response.statusCode + " " + response.statusMessage);
   	})
    .pipe(fs.createWriteStream(filePath));
       // console.log("Avatars are downloaded");
  }
// downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "./avatars/kvirani.jpg");

getRepoContributors(argv1, argv2, function(err, result) {
  // console.log("Errors:", err);
  // console.log("Result:", result);
});
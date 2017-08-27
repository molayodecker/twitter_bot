var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

//tweetIt();
getTweet();

function getTweet(){
  var param = { q: '#GOT', count: 5 }

   T.get('search/tweets',param , datares);

		function datares(err, data, response) {
			var tweets = data.statuses;
			for(var key in tweets){
				console.log(tweets[key].text);
				console.log('\n');
			}
	}
}


function tweetIt(){
       tweet = { status: '#GOT Jon Snow is the rightful King of Westeros' }

		T.post('statuses/update', tweet, tweeted);

		function tweeted(err, data, response) {
		   if(err){
		   console.log("Oops! Something is broken");
		   }else{
		   console.log("It's works");
		   }
		}
}

var stream = T.stream('statuses/filter', { track: '#GOT' }, {filter_level: 'medium'})

stream.on('tweet', function (tweet) {
	var myfilter = tweet;
  for(var key in myfilter){
  		console.log(myfilter[key]);
  		console.log('\n');
  }
})
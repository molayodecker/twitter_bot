var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var param = { q: 'finale', count: 2 }

function datares(err, data, response) {
  var tweets = data.statuses;
  for(var key in tweets){
  	console.log(tweets[key].text);
  }
}

T.get('search/tweets',param , datares);

tweet = { status: '#GOT Jon Snow is the rightful King of Westeros' }

function tweeted(err, data, response) {
   if(err){
   console.log("Oops! Something is broken");
   }else{
   console.log("It's works");
   }
}

T.post('statuses/update', tweet, tweeted);
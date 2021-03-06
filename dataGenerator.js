/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.residential = [];
streams.users.retrofit = [];
streams.users.renovation = [];
streams.users.campuswork = [];
window.users = Object.keys(streams.users);

// utility function for adding tweets to our data structures
var addTweet = function(newTweet) {
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

// utility function
var randomElement = function(array, ceiling) {
  var upperBound = ceiling ? ceiling : array.length;
  var randomIndex = Math.floor(Math.random() * upperBound);
  return array[randomIndex];
};

// random tweet generator
var opening = ['How do I','How large do I', 'How do you', 'How large do I have to', 'Looking for tips on how to', 'Looking for someone to help', 'Need an efficient way to'];
var verbs = ['interface', 'develop', 'build', 'invent', 'navigate', 'aid', 'make', 'engineer', 'automate', 'formulate', 'systematize', 'overhaul', 'compute'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['fence', 'building', 'column', 'beam', 'footing', 'balcony', 'anchor', 'equipment', 'rooftop', 'wall', 'soil', 'retaining wall', 'window', 'door', 'railing'];
var tags = ['#residential', '#retrofit', '#homemakeover', '#repairs', '#newconstruction', '#earthquakes', '#seismicengineering', '#architecture', '#anchorage', '#hospitals', '#education', '#soilengineering', '', ''];

var randomMessage = function() {
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function() {
  var tweet = {};
  tweet.user = randomElement(users, 4);
  tweet.message = randomMessage();
  tweet.created_at = new Date();
  tweet.profilePhotoURL = './assets/img/' + tweet.user + '.png';
  tweet.needStamp = Math.floor(Math.random() * 3) === 0;
  tweet.needDetail = Math.floor(Math.random() * 3) === 0;
  addTweet(tweet);
};

for (var i = 0; i < 10; i++) {
  generateRandomTweet();
}

var scheduleNextTweet = function() {
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 3000 + 3000);
};
// scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message, visitUser) {
  if (!visitors) {
    throw new Error('set the global visitor property!');
  }
  // console.log(visitUser);
  // console.log(message);
  if (!streams.users[visitUser]) {
    streams.users[visitUser] = [];
  }
  var tweet = {};
  tweet.user = visitUser;
  tweet.message = message;
  tweet.created_at = new Date();
  tweet.profilePhotoURL = './assets/img/jlio.jpg';
  addTweet(tweet);
};

// visitors[visitors.length - 1]
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function() {
  console.log("Ready!");

  const createTweetElement = function(tweet) {
    const $tweet = $(`<article class="tweet-content">
    <header>
      <div><i class="fa-regular fa-user"></i> ${tweet.user.name}</div> <!-- User icon -->
      <div class="tweet-username"> ${tweet.user.handle}</div>
    </header>
    <br>
    <textarea>${tweet.content.text}</textarea>
    <footer>
      <div>${tweet.created_at}</div>
      <div>
        <i class="fa-solid fa-flag tweet-icon"></i>    <!-- Flag icon -->
        <i class="fa-solid fa-retweet tweet-icon"></i> <!-- Retweet icon -->
        <i class="fa-solid fa-heart tweet-icon"></i>   <!-- Heart icon -->
      </div>
    </footer>
  </article>
  <br>`);
    return $tweet;
  }

  const renderTweets = function(tweets) {
    const tweetList = $(".tweet-container");
    tweetList.empty();

    for (const tweet of tweets) {
      const tweetToAppend = createTweetElement(tweet);
      tweetList.append(tweetToAppend);
    }
  }

  renderTweets(data);


  // Test / driver code (temporary). Eventually will get this from the server.
  // const $tweet = createTweetElement(data);

  // // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $('published-tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
})


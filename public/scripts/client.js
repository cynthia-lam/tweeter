/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const { format } = require('../../node_modules/');

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
      <div>${timeago.format(tweet.created_at)}</div>
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

  $('form').on('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget; // target the form
    const serializedData = $(form).serialize();
    console.log("serialized: ", serializedData);

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: serializedData,
    })
      .then(() => {
        loadTweets();
      })
      .catch(function(xhr, status, error) {
        console.log(`Error - Status: ${status}, Error: ${error}`);
      })
  })

  const loadTweets = function() {
    $.ajax({
      type: "GET",
      url: "/tweets",
      // dataType: "json",  
      success: function(receivedData) {
        renderTweets(receivedData); // Call renderTweets with callback
      },
      error: function() {
        alert('Error with GET request');
      }
    });
  }

  renderTweets(data);
  loadTweets();
})


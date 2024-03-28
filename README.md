# Tweeter Project

Tweeter is a simple, single-page Twitter clone where users can create short posts of up to 140 characters. Posts are in chronological order, with the most recent posts appearing at the top of the page. Tweeter does this by fetching a list of posts from a simplified ‘server’ and allows users to add posts to this list dynamically.

The purpose of this exercise was to further our knowledge in HTML, CSS, JS, Node, and Express, while learning jQuery and AJAX for the first time! I personally learned a lot about UI and responsive design, which actually ended up coming in handy during my day job - who would've thunk it!

## Final Product

Here is the desktop version:

!["Desktop Version"](https://github.com/cynthia-lam/tweeter/blob/master/docs/Tweeter%20Desktop.png)

And the mobile version:

!["Mobile Version"](https://github.com/cynthia-lam/tweeter/blob/master/docs/Tweeter%20Mobile.png)

User cannot send empty tweets, or tweets with just whitespace, or they will receive this error:

!["Empty Tweet"](https://github.com/cynthia-lam/tweeter/blob/master/docs/Tweeter%20Empty%20Tweet.png)

Users cannot exceed the 140 character limit (even if they really, really cannot find their shoe):

!["Over 140 Char Tweet"](https://github.com/cynthia-lam/tweeter/blob/master/docs/Tweeter%20Over%20140%20Char%20Tweet.png)

## Getting Started

1. Install all dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.
4. Enjoy! (Hopefully)

## Dependencies

- Express
- Node 5.10.x or above


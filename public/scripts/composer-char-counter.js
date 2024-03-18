console.log("Char-counter script is running!");

$(document).ready(function() {
  console.log("DOM is ready!");

  const textarea = document.querySelector("#tweet-text");
  console.log(textarea);

  textarea.addEventListener("keypress", () => {
    console.log("Detected keypress");
  });

});



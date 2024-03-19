console.log("Char-counter script is running!");

$(document).ready(function() {
  console.log("DOM is ready!");

  const textarea = $("#tweet-text");
  console.log(textarea);

  textarea.on("keypress", () => {
    console.log("Detected keypress");
  });

});
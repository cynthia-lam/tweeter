console.log("Char-counter script is running!");

$(document).ready(function() {
  console.log("DOM is ready!");

  const textarea = $("#tweet-text");
  console.log(textarea);

  textarea.on("input", function() {
    const textLength = 140 - $(this).val().length;
    $(".counter").text(textLength);

    if (textLength < 0) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "#545149");
    }
  });
});



const onArticleClick = function() {
  const dog = $(this).data("obj, dog")// attaches to each dog object, the originaly json obj
  console.log(dog);  

}
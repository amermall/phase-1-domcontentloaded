// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  // console.log("The DOM has loaded");

  // Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"
  // 1. Use a call back function"
  updateParagraphText();
  
});

function updateParagraphText() {
  // console.log(document.querySelector("#text"));
  const textToUpdate = document.querySelector("#text").textContent = "This is really cool!";
  // console.log(textToUpdate);

  return textToUpdate;
}

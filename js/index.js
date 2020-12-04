function questionOnClick(element) {
  let [ arrow, question, answer ] = element.children;
  if (answer.style.display == "none" || answer.style.display == "") {
    arrow.style.borderWidth = "0px 3px 3px 0px";
    answer.style.display = "block";
    question.style.color = "hsl(238, 29%, 16%)";
  } else {
    arrow.style.borderWidth = "3px 0px 0px 3px";
    answer.style.display = "none";
    question.style.color = "hsl(237, 12%, 33%)";
  }
}

function questionOnMouseOver(element) {
  let question = element.children[1];
  question.style.color = "hsl(14, 88%, 65%)";
}

function questionOnMouseOut(element) {
  let question = element.children[1];
  question.style.color = "hsl(237, 12%, 33%)";
}
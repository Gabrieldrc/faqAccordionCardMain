const faq = document.getElementById("faq")

function questionOnClick(element) {
  let [ arrow, question, answer ] = element.children;
  if (!isAnswerDisplayed(answer)) {
    hideAllAnswers(faq)
    turnArrowUp(arrow)
    displayAnswer(answer)
    colorQuestionDark(question)
  } else {
    turnArrowDown(arrow)
    hideAnswer(answer)
    colorQuestionLight(question)
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
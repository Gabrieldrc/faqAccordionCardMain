function isAnswerDisplayed(answer) {
  return answer.style.display != "none" && answer.style.display != ""
}

function displayAnswer(answer) {
  answer.style.display = "block";
}

function hideAnswer(answer) {
  answer.style.display = "none";
}

function turnArrowUp(arrow) {
  arrow.style.borderWidth = "0px 3px 3px 0px";
}

function turnArrowDown(arrow) {
  arrow.style.borderWidth = "3px 0px 0px 3px";
}

function colorQuestionDark(question) {
  question.style.color = "hsl(238, 29%, 16%)";
}

function colorQuestionLight(question) {
  question.style.color = "hsl(237, 12%, 33%)";
}

function hideAllAnswers(faq) {
  for (let i = 0; i < faq.childElementCount; i++) {
    let [ arrow, question, answer ] = faq.children[i].children
    if (isAnswerDisplayed(answer)) {
      turnArrowDown(arrow)
      hideAnswer(answer)
      colorQuestionLight(question)
    }
  }
}
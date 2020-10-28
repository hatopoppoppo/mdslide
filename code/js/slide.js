let nowPage = 1
let screenState = "normal"
document.onkeydown = keydown
function keydown(event) {
  if (document.activeElement.tagName !== "TEXTAREA") {
    if (event.which == 39) {  //右矢印
      movePage()
    }
    if (event.which == 37) {  //左矢印
      backPage()
    }
    if (event.which == 27) {  //esc
      exitFull()
    }
  }
}
function movePage() {
  if (nowPage < pageCount) {
    document.getElementById("page" + nowPage).style.display = "none"
    nowPage++
    document.getElementById("page" + nowPage).style.display = "block"
  }
}
function backPage() {
  if (nowPage > 1) {
    document.getElementById("page" + nowPage).style.display = "none"
    nowPage--
    document.getElementById("page" + nowPage).style.display = "block"
  }
}

function pageSet() {
  if (document.getElementById("page" + nowPage) != null) {
    document.getElementById("page" + nowPage).style.display = "block"
  }
  else {
    console.log(pageCount)
    document.getElementById("page" + PageCount).style.display = "block"
    nowPage = PageCount
  }
}
document.getElementById("fullScreen").onclick = function () {
  slide.style.width = "100vw"
  slide.style.height = "100vh"
  textarea.style.display = "none"
  config.style.display = "none"
  html.style.fontSize = "1vh"
  root.style.setProperty("--pageWidth","100vw");
  screenState = "full"
};
function exitFull() {
  if (screenState == "full") {
    slide.style.width = "50vw"
    slide.style.height = "50vh"
    textarea.style.display = "block"
    config.style.display = "block"
    html.style.fontSize = "0.5vh"
    root.style.setProperty("--pageWidth","50vw");
    screenState = "normal"
  }
}
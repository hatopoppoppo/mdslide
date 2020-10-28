const textarea = document.getElementById("mdtext")
const config = document.getElementById("config")
const slide = document.getElementById("slide")
const html = document.getElementById("html")
let text, textSpl, htmlText
let htmltag = []
let pageCount = 0
textarea.addEventListener("input", updateValue);
function updateValue() {
  text = textarea.value
  tagsplit()
}
function tagsplit() {
  textSpl = text.split("\n")
  //inputの文字列を行ごとに分割
  convert()
}
function convert() {
  pageCount = 1
  htmlText = "<div class='page' id='page1'>"
  //全てのhtmlデータを消し文頭から変更を始める
  for (i = 0; i < textSpl.length; i++) {
    if (textSpl[i].match(/^#+\s/)) {
      //大文字の検索
      count = textSpl[i].match(/#+/)
      count = count[0].length
      //#の数をカウント
      if (count <= 6) {
        textSpl[i] = textSpl[i].replace(/#+\s/, "")
        //MDタグ部分を削除(文頭からcount + 1削除でもよさそう…？)
        htmlText += "<div class='textstyle'><h" + count + ">" + textSpl[i] + "</h" + count + "></div>"
        //#の数に対応したhタグを作る
      }
      else {
        htmlText += "<div class='textstyle'><p>" + textSpl[i] + "</p></div>"
        //#が7個以上なら通常テキストと判断
      }
    }
    else if (textSpl[i].match(/^\!\[.+\]\(.+\)$/)) {
      src = textSpl[i].match(/\(.+\)$/)
      src = src[0].slice(1);
      src = src.slice(0, -1);
      alt = textSpl[i].match(/^\!\[.+\]/)
      alt = alt[0].slice(2);
      alt = alt.slice(0, -1);
      htmlText += "<img src='" + src + "' alt='" + alt + "'>"
    }
    else if (textSpl[i].match(/^-{3}$/)) {
      pageCount++
      htmlText += "</div><div class='page' id='page" + pageCount + "'>"
    }
    else {
      htmlText += "<div class='textstyle'><p>" + textSpl[i] + "</p></div>"
      //通常テキストを作成
    }
  }
  htmlText += "</div>"
  slide.innerHTML = htmlText
  //テキストをスライドに
  imagemake()
}
function imagemake() {
  for (i = 0; i < pageCount; i++) {
    let check = i + 1
    checkPage = document.getElementById("page" + check)
    pageImage = checkPage.getElementsByTagName("img")
    if (pageImage.length >= 1) {
      let imageArr = []
      for (a = 0; a < pageImage.length; a++) {
        imageArr.push(pageImage[a])
      }
      for (b = 0; b < imageArr.length; b++) {
        pageImage = checkPage.getElementsByTagName("img")
        checkPage.removeChild(pageImage[0])
      }
      checkPage.innerHTML += "<div class='images' id='image" + check + "'></div>"
      for (c = 0; c < imageArr.length; c++) {
        document.getElementById("image" + check).appendChild(imageArr[c])
      }
    }
  }
  pageSet()
}
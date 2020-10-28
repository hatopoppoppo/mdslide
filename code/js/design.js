const mainColorInput = document.getElementById("mainColor-input")
const acColorInput = document.getElementById("acColor-input")
const bgColorInput = document.getElementById("bgColor-input")
const root = document.documentElement;
mainColorInput.addEventListener("input", changeColor);
acColorInput.addEventListener("input", changeColor);
bgColorInput.addEventListener("input", changeColor);
function changeColor() {
  let mainColor = mainColorInput.value
  let acColor = acColorInput.value
  let bgColor = bgColorInput.value
  if(mainColor.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)){
    root.style.setProperty('--mainColor',mainColor);
    console.log(mainColor)
  }
  if(acColor.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)){
    root.style.setProperty('--accentColor',acColor);
    console.log(acColor)
  }
  
  if(bgColor.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)){
    root.style.setProperty('--bgColor',bgColor);
    console.log(bgColor)
  }
}
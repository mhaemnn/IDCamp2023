const buttons = document.getElementsByClassName("button");

for (const button of buttons) {
  button.children[0].style.borderRadius = "6px";
  button.children[0].style.backgroundColor = "red";
}

/*
macam-macam event
1. event window
    a. onload
    b. onpageshow
    c. onriseze
2. event from
    a. onreset
    b. onsubmit
3. event keyboard
    a. onkeydown
    b. onkeypress
    c. onkeyup 
4. clipboard event
    a. oncopy
    b. oncut
    c. onpaste
5. mouse event
    a. onclik
    b. ondoublecklick
    c. onmouseover

 */

function increment() {
  document.getElementById("count").innerText++;

  if (document.getElementById("count").innerText == 7) {
    const hiddenMessage = document.createElement("h4");
    hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi...";
    const image = document.createElement("img");
    image.setAttribute("src", "https://i.ibb.co/0V49VRZ/catto.jpg");
    image.style.margin = "auto";
    const contents = document.querySelector(".contents");
    contents.appendChild(hiddenMessage).appendChild(image);
  }
}

function welcome() {
  alert("Sim salabim muncullah elemen-elemen HTML!");
  const contents = document.querySelector(".contents");
  contents.removeAttribute("hidden");
}

// document.getElementById("incrementButton").onclick = increment;
// document.body.onload = welcome;

window.addEventListener("load", welcome);
document.getElementById("incrementButton").addEventListener("click", increment);

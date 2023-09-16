const parag = document.createElement("li");
parag.innerText = "ini adalah paragraf menggunkan javascript";

const datar = document.getElementById("daftar");
datar.appendChild(parag);

const elementAwal = document.createElement("li");
elementAwal.innerText = "hidupkan kompor bro";

const itemAwal = document.getElementById("awal");
datar.insertBefore(elementAwal, itemAwal);

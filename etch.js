const container = document.querySelector("div")

for(let x = 1; x <= (16*16); x++){
    const box = document.createElement("div");
    box.classList.add("box")
    box.textContent = x;
    container.appendChild(box);
}



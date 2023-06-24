const container = document.querySelector("div")

for(let x = 1; x <= (16*16); x++){
    const box = document.createElement("div");
    box.classList.add("box")
    container.appendChild(box);
}

const boxes = document.querySelectorAll("div.box")
boxes.forEach(function (box){

box.addEventListener('mouseover', function (e) {
    box.classList.add("hover");
});

box.addEventListener('mouseout', function (e) {
    box.classList.remove("hover");
});

});




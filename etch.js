const input = document.createElement("button")
input.textContent = "Change grid size"
document.body.appendChild(input);

const container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container);

input.addEventListener('click', function (e) {

    let gridSize = prompt("Enter desired grid size: ");

    if(gridSize > 100){
        prompt("Value has to be less than or equal to 100!")
    }

    grid(gridSize);
});

function grid(size){

removeBoxes();

boxDimension = 500/size;

container.style.cssText = `width: ${size*boxDimension}px` 

for(let x = 1; x <= (size*size); x++){
    const box = document.createElement("div");
    box.classList.add("box")
    box.style.cssText = `width: ${boxDimension}px; height: ${boxDimension}px`
    box.addEventListener('mouseover', function (e) {
        box.classList.add("hover");
    });
    container.appendChild(box);

}

}


function removeBoxes(){
    let rmBoxes = document.querySelectorAll('.box')

    for(const box of rmBoxes) {
       box.remove();
    };
}








const containerDiv = document.querySelector('.container');
const button = document.querySelector('.button');

let containerWidth = containerDiv.getBoundingClientRect().width;
let numberOfSq = 16;
let squareSize;

function newSquareGrid(numberOfSq){
    
    containerDiv.innerHTML = '';
    squareSize = containerWidth / numberOfSq;

    for(let i = 0; i<numberOfSq; i++){   
        for(let j=0; j<numberOfSq; j++){

            const divChild = document.createElement('div');
            divChild.classList.add('divChild');
            containerDiv.appendChild(divChild);

            console.log(containerDiv.style.width);
            divChild.style.width = `${squareSize}px`;
            divChild.style.height = `${squareSize}px`;

            divChild.addEventListener('mouseover', () => {
            divChild.style.backgroundColor = 'pink';
            })
        }
    }
}


button.addEventListener('click', () => {
    let input = prompt("Enter the number of squares you want per side");
    input = parseInt(input);

    if( !isNaN(input) && input > 0 && input <= 100){
        numberOfSq = input;
        newSquareGrid(numberOfSq);
    }else{
        alert("Please enter a valid input between 0 and 100");
    }
    
})

newSquareGrid(numberOfSq);
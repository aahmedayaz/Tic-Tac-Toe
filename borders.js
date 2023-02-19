// Giving Borders using JS
let allBoxes = document.getElementsByClassName('box')
// console.log(allBoxes);
let noOfRows = 3;
let noOfBoxesPerRow = allBoxes.length / noOfRows;
// console.log(noOfBoxesPerRow);
let row1Array = [] , row2Array = [] , row3Array = [];

// Making seperate Arrays for each row
Array.from(allBoxes).forEach((item , index) => {
    if(index < noOfBoxesPerRow && index != noOfBoxesPerRow){
        row1Array.push(item);
    }
    else if(index < noOfBoxesPerRow+noOfBoxesPerRow && index != noOfBoxesPerRow+noOfBoxesPerRow){
        row2Array.push(item)
    }
    else{
        row3Array.push(item);
    }
})
// console.log(row1Array);
// console.log(row2Array);
// console.log(row3Array);


// Function to give borders
let border = (...arguments) => {
    arguments.forEach((row , rowIndex) => {
        row.forEach((div , divIndex) => {
            div.style.border = '10px double black'
            if(divIndex == 0){
                if(rowIndex == 0){
                    div.classList.add("top") 
                }
                else if(rowIndex == 2){
                    div.classList.add("bottom")
                }
                div.classList.add("left")
            }
            if(divIndex == 1){
                if(rowIndex == 0){
                    div.classList.add("top") 
                }
                else if(rowIndex == 2){
                    div.classList.add("bottom")
                }
            }
            if(divIndex == 2){
                if(rowIndex == 0){
                    div.classList.add("top") 
                }
                else if(rowIndex == 2){
                    div.classList.add("bottom")
                }
                div.classList.add("right")
            }
        })
    })
}

border(row1Array , row2Array , row3Array);


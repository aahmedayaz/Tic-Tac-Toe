let allBox = document.getElementsByClassName('box');
let message = document.getElementById('message-area');
let player1Div = document.getElementById('player1')
let player2Div = document.getElementById('player2')
let mainHeading = document.getElementById('main-heading')

let currentPlayer = 1;
let board = [null,null,null,null,null,null,null,null,null]


// Function to Toggle Players

let togglePlayer = () => {
    currentPlayer = currentPlayer == 1 ? 2 : 1
    message.innerText = `Player ${currentPlayer} Turn`;
}

Array.from(allBox).forEach((div , index) => {
    div.addEventListener('click' , () => {
        if(!div.classList.contains('checked')){
            div.classList.add('checked');
            board[index] = currentPlayer;
            togglePlayer();
            console.log(board);
        }
    })
})


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

let checkWinningSituations = (div1 , div2 , div3) => {
    if(board[div1] == currentPlayer && board[div2] == currentPlayer && board[div3] == currentPlayer){
        return true
    }
    else{
        return false
    }
}

let checkWinner = () => {
    if(checkWinningSituations(0,1,2)){
        allBox[0].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[1].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[2].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        message.innerText = `Player ${currentPlayer} is Winner`
        message.classList.add('animate__swing','animate__animated' ,'animate__infinite')
        return true;
    }
    else if(checkWinningSituations(3,4,5)){
        allBox[3].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[4].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[5].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        message.innerText = `Player ${currentPlayer} is Winner`
        message.classList.add('animate__swing','animate__animated' ,'animate__infinite')
        return true;
    }
    else if(checkWinningSituations(6,7,8)){
        allBox[6].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[7].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[8].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        message.innerText = `Player ${currentPlayer} is Winner`
        message.classList.add('animate__swing','animate__animated' ,'animate__infinite')
        return true;
    }
    else if(checkWinningSituations(0,3,6)){
        allBox[0].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[3].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[6].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        message.innerText = `Player ${currentPlayer} is Winner`
        message.classList.add('animate__swing','animate__animated' ,'animate__infinite')
        return true;
    }
    else if(checkWinningSituations(1,4,7)){
        allBox[1].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[4].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[7].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        message.innerText = `Player ${currentPlayer} is Winner`
        message.classList.add('animate__swing','animate__animated' ,'animate__infinite')
        return true;
    }
    else if(checkWinningSituations(2,5,8)){
        allBox[2].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[5].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[8].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        message.innerText = `Player ${currentPlayer} is Winner`
        message.classList.add('animate__swing','animate__animated' ,'animate__infinite')
        return true;
    }
    else if(checkWinningSituations(0,4,8)){
        allBox[0].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[4].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[8].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        message.innerText = `Player ${currentPlayer} is Winner`
        message.classList.add('animate__swing','animate__animated' ,'animate__infinite')
        return true;
    }
    else if(checkWinningSituations(2,4,6)){
        allBox[2].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[4].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        allBox[6].classList.add('winner','animate__animated' ,'animate__tada' , 'animate__infinite')
        message.innerText = `Player ${currentPlayer} is Winner`
        message.classList.add('animate__swing','animate__animated' ,'animate__infinite')
        return true;
    }
    else{
        return false;
    }
}

let checkDraw = () => {
    return board.every((value) => {
        return value != null;
    })
}

Array.from(allBox).forEach((div , index) => {
    div.addEventListener('click' , (e) => {
        if(!div.classList.contains('checked')){
            div.classList.add('checked');
            board[index] = currentPlayer;
            if(checkDraw() == true && checkWinner() == false){
                message.innerText = 'Match is Draw'
                return;
            }
            else if(checkWinner() == false){
                togglePlayer();
                return;
            }
        }
    })

    div.addEventListener('mouseover' , (e) => {
        if(!checkWinner()){
            if(!div.classList.contains('checked')){
                if(currentPlayer == 1){
                    div.innerHTML = '<i class="fa-solid fa-xmark"></i>'
                    div.style.color = 'var(--pinkish)'
                }
                else{
                    div.innerHTML = '<i class="fa-regular fa-circle"></i>'
                    div.style.color = 'var(--yellowish)'
                }
            }
        }
        else{
            div.classList.add('checked')
        }
    })
    
    div.addEventListener('mouseout' , (e) => {
        if(!checkWinner()){
            if(!div.classList.contains('checked')){
                if(currentPlayer == 1){
                    div.innerHTML = ''
                }
                else{
                    div.innerHTML = ''
                }
            }
        }
        else{
            div.classList.add('checked')
        }
    })
})


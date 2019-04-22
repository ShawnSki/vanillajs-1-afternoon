let gameProg = [];

function play(idBoxer) {
    const nextTurn = document.getElementById("player");
    const clickedArea = document.getElementById(idBoxer);

    if (nextTurn.innerText === "X") {
        nextTurn.innerText = "O";
        clickedArea.innerText = "X";
        gameProg[idBoxer] = "X";
        console.log(gameProg);
    } else {
        nextTurn.innerText = "X";
        clickedArea.innerText = "O";
        gameProg[idBoxer] = "O";
        console.log(gameProg);
    }
}


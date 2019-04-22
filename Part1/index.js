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

    let topLeft = gameProg[0];
    let topCenter = gameProg[1];
    let topRight = gameProg[2];
    let midLeft = gameProg[3];
    let midCenter = gameProg[4];
    let midRight = gameProg[5];
    let botLeft = gameProg[6];
    let botCenter = gameProg[7];
    let botRight = gameProg[8];

     if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        window.alert(gameProg[idBoxer] + " is the winner!");
     }
     if (midLeft !== undefined && midLeft === midCenter && midLeft === midRight){
        window.alert(gameProg[idBoxer] + " is the winner!");
     }
     if (botLeft !== undefined && botLeft === botCenter && botLeft === botRight){
        window.alert(gameProg[idBoxer] + " is the winner!");
     }
     if (topLeft !== undefined && topLeft === midLeft && topLeft=== botLeft) {
        window.alert(gameProg[idBoxer] + " is the winner!");
     }
     if (topCenter !== undefined && topCenter === midCenter && topCenter === botCenter) {
        window.alert(gameProg[idBoxer] + " is the winner!");
     }
     if (topRight !== undefined && topRight === midRight && topRight === botRight){
        window.alert(gameProg[idBoxer] + " is the winner!");
     }
     if (topLeft !== undefined && topLeft === midCenter && topLeft === botRight){
        window.alert(gameProg[idBoxer] + " is the winner!");
     }
     if (topRight !== undefined && topRight === midCenter && topRight === botLeft){
        window.alert(gameProg[idBoxer] + " is the winner!");
     }

    //  else if (gameProg.length === 9) {
    //     window.alert("That was a Cats game!");
    //  }

     let fullBoard = true;
     for (let i = 0; i <= 8; i++) {
        if (gameProg[i] === undefined) {
            fullBoard = false;
         } 
     }
     if (fullBoard === true) {
            window.alert("That was a Cats game!");
     }
}


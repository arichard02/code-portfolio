var chessboard = document.getElementById("chessboard");
// for (var i = 0; i < 8; i++) {
//     for (var j = 0; j < 8; j++) {
//         var chessSquare = document.createElement("div");
//         chessSquare.className = "chess-square";
//         if ((i + j) % 2 == 0) {
//             chessSquare.style.backgroundColor = "#000";
//         }
//         chessboard.appendChild(chessSquare);
//     }
// }

const playerP = [
    ["r", "k", "b", "q", "k", "b", "k", "r"],
    ["p", "p", "", "p", "p", "p", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "p", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
];
const playerG = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "p", ""],
    ["p", "p", "p", "p", "p", "p", "", "p"],
    ["r", "k", "b", "q", "k", "b", "k", "r"],
];
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        var chessSquare = document.createElement("div");
        chessSquare.className = "chess-square";
        chessSquare.innerHTML = `${i}, ${j}`;
        if (playerP[i][j] != "") {
            chessSquare.innerHTML += "<br>" + playerP[i][j];
            chessSquare.style.color = "hotpink";
        }

        if (playerG[i][j] != "") {
            chessSquare.innerHTML += "<br>" + playerG[i][j];
            chessSquare.style.color = "green";
        }

        // console.log(j, "(the cell)");

        // only make the even cells black for even rows:
        // if (j % 2 === 0 && i % 2 === 0) {
        //     chessSquare.style.backgroundColor = "#000";
        // } else if (j % 2 === 1 && i % 2 === 1) {
        //     chessSquare.style.backgroundColor = "#000";
        // }
        if ((i + j) % 2 == 0) {
            chessSquare.style.backgroundColor = "#000";
        }

        console.log("Experiment:", i, j, i + j, (i + j) % 2);
        chessboard.appendChild(chessSquare);
    }
}

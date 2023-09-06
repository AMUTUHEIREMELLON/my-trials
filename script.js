const chessboard = document.getElementById("chessboard");

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");
        square.textContent = (row + col) % 2 === 0 ? " " : " "; // Add chess pieces if needed
        square.className = (row + col) % 2 === 0 ? "even" : "odd";
        chessboard.appendChild(square);
    }
}

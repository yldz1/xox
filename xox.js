//oyun tahtasındaki tüm hücreleri seçer 
const cells = document.querySelectorAll('.cell');
//oyun durumu mesajını göstermek öğeyi seçer 
const message = document.getElementById('message');

//şuanki oyuncuyu belirlemek için element olutruduk
let currentPlayer = "X";

//boşluklara doldurmak için dokuz tane boş alan olurturman lazım onu oyuncu doldurucak
let gameBoard = ["", "", "", "", "", "", "", "", "", ""];

//oyunun bitip bitmediğini belirlemek için değişken oluturulur 
let gameIsOver = false;
//kazanma durumunu kontrol etmek için 
function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],//bunlar kazanma koşullarıdır ihtimallerdir. bunları kontrol döngüsüde yazıcaz doğrumu diye kontrol edicek.


    ];
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;//kazanmaları hücrelere böler

        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameIsOver = true;
            message.textContent = `${currentPlayer} KAZANDI`;
            //kazanan hücreleri renklendirir 
            cells[a].classList.add("win");
            cells[b].classList.add("win");
            cells[c].classList.add("win");
            return;


        }
    }
    //eğer oyun tahtası doluysa ve kazanan yoksa oyun berabere biter buna da eğer if ile kodluycaksın
    if (!gameBoard.includes("")) {
        gameIsOver = true;
        message.textContent = "OYUN BERABERE";

    }
}

//oyuncunun hamle yapmasını sağlayan fonksiyondur 
function makeMove(cellIndex) {
    //eğer hücre boşsa ve oyun bitmişse hamle yapılır 
    if (!gameBoard[cellIndex] && !gameIsOver) {
        //hücreye mevcut oyunun işareti eklenir
        gameBoard[cellIndex] = currentPlayer;
        cells[cellIndex].textContent = currentPlayer;
        cells[cellIndex].classList.add(currentPlayer);
        //kazanma durumunu kontrol eder
        checkWin();
        //oyuncu değiştirmek 
        currentPlayer = currentPlayer === "x" ? "o" : "x";
    }
}
//oyunu yeniden başlatan foksiyon budur 
function restartGame() {
    currentPlayer = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameBoard = false;
    message.textContent = "";

    cells.forEach((cell) => {
        cell.textContent = "";
        cell.classList.remove("win", "X", "o");

    });

}
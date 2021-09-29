var reset = document.querySelector("#bttn");

k = 0;
j = 0;
var num = 3;
var div = document.querySelector("#div");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var nm1 = document.querySelector("#play1");
var nm2 = document.querySelector("#play2");
var first = document.querySelector("#first");
var plrn = document.querySelector("#plrn");
var head = document.querySelector(".head");
// var play1 = prompt("Player name 1").toUpperCase();
// var play2 = prompt("Player name 2").toUpperCase();
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var play1 = "";
var play2 = "";
if (play1 == "") {
    play1 = "PLAYER1";
}
if (play2 == "") {
    play2 = "PLAYER2";
}
if ((play1 != play2) && (play1 != " ") && (play2 != " ")) {
    nm1.innerHTML = play1;
    nm2.innerHTML = play2;
}
plrn.innerText = play1 + " PLAYS FIRST";

if (isMobile) {
    head.style.fontSize = "60px";
    document.body.style.transform = "scale(2) translateY(25%)";
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
    div.style.fontSize = "40px";
}

var count = 0;
var td = document.querySelectorAll(".tb1 td");
var tr = document.querySelectorAll(".tb1 tr");
var wins = document.querySelector("#divc");
var tb1 = document.querySelector("table");

for (var i = 0; i < td.length; i++)
    td[i].addEventListener("click", logix);
function logix() {

    if (count < 9 && (this.innerHTML == "") && (wins.textContent == "")) {
        if (first.innerText == play1 + " PLAYS FIRST") {
            if (count == 0 || count == 2 || count == 4 || count == 6 || count == 8) {
                this.innerHTML = "X";
                this.style.color = "#f2e00a";
            }
            else if (count == 1 || count == 3 || count == 5 || count == 7 || count == 9) {
                this.innerHTML = "O";
                this.style.color = "#fb8c00";
            }
            count++;
        }
        else if (first.innerText == play2 + " PLAYS FIRST") {
            if (count == 0 || count == 2 || count == 4 || count == 6 || count == 8) {
                this.innerHTML = "O";
                this.style.color = "#fb8c00";
            }
            else if (count == 1 || count == 3 || count == 5 || count == 7 || count == 9) {
                this.innerHTML = "X";
                this.style.color = "#f2e00a";
            }
            count++;
        }


        if (
            (tr[0].innerText == "X	X	X") ||
            (tr[1].innerText == "X	X	X") ||
            (tr[2].innerText == "X	X	X") ||
            ((td[0].innerText == "X") && (td[3].innerText == "X") && (td[6].innerText == "X")) ||
            ((td[1].innerText == "X") && (td[4].innerText == "X") && (td[7].innerText == "X")) ||
            ((td[2].innerText == "X") && (td[5].innerText == "X") && (td[8].innerText == "X")) ||
            ((td[0].innerText == "X") && (td[4].innerText == "X") && (td[8].innerText == "X")) ||
            ((td[2].innerText == "X") && (td[4].innerText == "X") && (td[6].innerText == "X"))
        ) {
            wins.innerHTML = play1 + " WINS";

            if (k < num) {
                k += 1;
                one.innerText = k;
                first.innerText = play1 + " PLAYS FIRST";

                if (k == num) {
                    div.innerText = play1 + " WINS GAME";
                    reset.hidden = true;
                    wins.hidden = true;
                    first.hidden = true;
                }
            }

        }
        else if (
            (tr[0].innerText == "O	O	O") ||
            (tr[1].innerText == "O	O	O") ||
            (tr[2].innerText == "O	O	O") ||
            ((td[0].innerText == "O") && (td[3].innerText == "O") && (td[6].innerText == "O")) ||
            ((td[1].innerText == "O") && (td[4].innerText == "O") && (td[7].innerText == "O")) ||
            ((td[2].innerText == "O") && (td[5].innerText == "O") && (td[8].innerText == "O")) ||
            ((td[0].innerText == "O") && (td[4].innerText == "O") && (td[8].innerText == "O")) ||
            ((td[2].innerText == "O") && (td[4].innerText == "O") && (td[6].innerText == "O"))
        ) {
            wins.innerHTML = play2 + " WINS";

            if (j < num) {
                j += 1;
                two.innerText = j;
                first.innerText = play2 + " PLAYS FIRST";

                if (j == num) {
                    div.innerText = play2 + " WINS GAME";
                    reset.hidden = true;
                    wins.hidden = true;
                    first.hidden = true;
                }
            }

        }
        else if (count == 9) {
            wins.innerHTML = "MATCH DRAW";
        }
    }
}

reset.addEventListener("click", reseting);
function reseting() {
    for (i = 0; i < 9; i++)
        td[i].innerText = "";
    wins.innerHTML = "";
    count = 0;
}


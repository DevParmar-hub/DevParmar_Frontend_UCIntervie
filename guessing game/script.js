const random = Math.ceil(Math.random() * 100);
let tries = 7
function checkNumber() {
    var audio = new Audio("bell.mp3");
    audio.play();
    const inp = document.getElementById("input").value;
    const hint = document.getElementById("hint")
    if (random == inp) {
        var audio = new Audio("victory.mp3");
        audio.play().then(function () {
            alert("Victory is yours")
        }).then(resetGame);


    }
    else if (tries == 1) {
        alert(`You have Lost and the number was ${random}`);
        resetGame();
    }
    else if (random > inp) {
        document.getElementById(`img${tries}`).style.visibility = "hidden";
        tries--;
        hint.textContent = "Hint-Number is Higher";
        document.getElementById("record").innerHTML += `Number was Higher than ${inp} <br>`;
    }
    else {
        document.getElementById(`img${tries}`).style.visibility = "hidden";
        tries--;
        hint.textContent = "Hint-Number is Lower"
        document.getElementById("record").innerHTML += `Number was Lower than ${inp}<br> `;
    }
    document.getElementById("input").value = "";
}


function resetGame() {
    document.querySelectorAll(`.hearts`).forEach(element => { element.style.visibility = "visible" });
    const random = Math.ceil(Math.random() * 100);
    document.getElementById("input").value = "";
    document.getElementById("record").innerHTML = "";
    hint.textContent = "";
    tries = 7;


}
const btn = document.getElementById("b1");
btn.addEventListener("click", checkNumber);

const btn2 = document.getElementById("b2");
btn2.addEventListener("click", resetGame);
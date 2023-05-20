let buttonStart = document.getElementById("btnStart");
let buttonTry = document.getElementById("btnTry");
let inputNum = document.getElementById("userNumber");
let infoBlock = document.getElementById("outputInfo");
let attempts = document.getElementById("attemptCount");
let results = document.getElementById("result");
let attemptCounter = 0;
let cpuNum = 0;
let userNum = 0;

buttonStart.onclick = function(){
    buttonStart.disabled = true;
    buttonTry.disabled = false;
    inputNum.disabled = false;
    infoBlock.innerHTML = "you started the game!";
    cpuNum = 1 + Math.floor(Math.random() * 1000);
    results.innerHTML = "game in progress";
    attempts.innerHTML = `${attemptCounter}`;
}

buttonTry.onclick = function(){
        attemptCounter += 1;
        attempts.innerHTML = `${attemptCounter}`;
        userNum = parseInt(inputNum.value);
        if(cpuNum == userNum)
        {
            results.innerHTML = "<p>you win</p> <img src='win.webp'>";
            infoBlock.innerHTML = "";
            
            buttonTry.disabled = true;
            inputNum.disabled = true;
            buttonStart.disabled = false;
            attemptCounter = 0;
        }
        else if(attemptCounter == 10)
        {
            results.innerHTML = "<p>you loose</p> <img src='lose.webp'>";
            buttonTry.disabled = true;
            inputNum.disabled = true;
            buttonStart.disabled = false;
            infoBlock.innerHTML = `your ${attemptCounter} guess is wrong!`
            attemptCounter = 0;
        }
        else 
        {
            let f = (userNum > cpuNum) ? "lower" : "greater";
            infoBlock.innerHTML = `your ${attemptCounter} guess is wrong! <b>hint:</b> try a ${f} number`;
        }
}
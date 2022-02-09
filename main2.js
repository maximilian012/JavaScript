//랜덤번호 지정
//유저가 번호를 입력 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면 맞췄습니다
// 랜덤번호 < 입력번호 => DOWN~
// 랜덤번호 > 입력번호 => UP!
// Reset 버튼을 누르면 게임이 리셋
// 5번의 기회를 다쓰면 게임이 끝(버튼이 disable)
// 유저가 1~100 범위 밖 숫자를 입력하면 알려준다, 기회를 깍지않음
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다, 기회 안깍임
let comNum = 0;
let userInput = document.getElementById("user-Input");
let goButton = document.getElementById("go-button");
let Info = document.getElementById("info");
let resetButton = document.getElementById("resetbutton");
let chance = document.getElementById("chances");
let chances = 5;
let gameOver = false;
let history = [];



goButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function() {
    userInput.value = "";
});

function randomNum() {
    comNum = Math.floor(Math.random() * 100) + 1;
    console.log(comNum);
}


function play() {
    userValue = userInput.value;
    
    if (userValue < 1 || userValue > 100) {
        Info.textContent = "1과 100사이 숫자만 입력하세요";
        return;
    }
    if (history.includes(userValue)) {
        Info.textContent = "이미 입력한 값입니다 다른 숫자를 입력하세요";
        return;
    }
    
    chances --;
    chance.textContent = `남은 찬스 ${chances} 번`;
    if (userValue > comNum) {
        console.log("down");
        Info.textContent = "down~~~";

    }else if (userValue < comNum) {
        console.log("up");
        Info.textContent = "up!!!";
    }else{
        console.log("정답");
        Info.textContent = "정답!!!!";
        gameOver = true;
    }
    history.push(userValue);
    console.log(history);


    if (chances < 1) {
       
        gameOver = true;
    }
    if (gameOver == true) {
        goButton.disabled = true;
    }

}

function reset() {
    userInput.value = "";
    randomNum();
    chances = 5;
    Info.textContent = "결과"
    chance.textContent = `남은 찬스 ${chances} 번`;
    gameOver = false;
    goButton.disabled = false;
    history = [];
}


randomNum();
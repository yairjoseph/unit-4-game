$(function () {

    ///Variables
    var win = 0;
    var loss = 0;
    var score = 0;
    var crystal1 = random(12, 1);
    var crystal2 = random(12, 1);
    var crystal3 = random(12, 1);
    var crystal4 = random(12, 1);
    var randomNum = Math.floor(Math.random() * 102) + 19;

    console.log(randomNum);
    ///function
    function random(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    ///cached HTML elements

    ///event listeners
    $(".btn").on("click", function () {
        if ($(this).hasClass("btn-1")) {
            score = score + crystal1;
            console.log(crystal1);
        }
        else if ($(this).hasClass("btn-2")) {
            score = score + crystal2;
            console.log(crystal2);
        }
        else if ($(this).hasClass("btn-3")) {
            score = score + crystal3;
            console.log(crystal3);
        }
        else if ($(this).hasClass("btn-4")) {
            score = score + crystal4;
            console.log(crystal4);
        }
        if (score === randomNum) {
            win++;
            crystal1 = random(12, 1);
            crystal2 = random(12, 1);
            crystal3 = random(12, 1);
            crystal4 = random(12, 1);
            randomNum = Math.floor(Math.random() * 102) + 19;
            score = 0;
            alert("YOU WIN!");
        }

        if (score > randomNum) {
            loss++;
            crystal1 = random(12, 1);
            crystal2 = random(12, 1);
            crystal3 = random(12, 1);
            crystal4 = random(12, 1);
            randomNum = Math.floor(Math.random() * 102) + 19;
            score = 0;
            alert("LOSER!");
        }
        console.log(score)

        $("#guessedNum").html(randomNum);
        $("#wins").html(win);
        $("#losses").html(loss);
        $("#score").html(score);
    })


































})
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let score = 0;
let collide = false;

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 500);
    }
}

document.addEventListener("keydown", function(event) {
    jump();
    if (!collide) {
        score += 10; // score = score + 10; 
        document.getElementById("scoretab").innerHTML = score;
    } else {
        document.getElementById("scoretab").innerHTML = 0;
        score = 0;
    }
});

let isAlive = setInterval(checkCollision, 1);

function checkCollision() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // get current cactus X position
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );

    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 100) {
        // collision
        collide = true;
        alert("Game Over! Your score: " + score);
        score = 0;
        document.getElementById("scoretab").innerHTML = score;
    } else {
        collide = false;
    }
}
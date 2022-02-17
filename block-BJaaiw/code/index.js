var canvas = document. querySelector('canvas');
var c = canvas.getContext("2d");

// ball
var ballRadius = 15;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;


//puddle
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;


// brick
var brickRowCount = 9;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;

var bricks = [];
for(var i=0; i<brickColumnCount; i++) {
  bricks[i] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[i][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}
function collisionDetection() {
  for(var i=0; i<brickColumnCount; i++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[i][r];
      if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          if(score == brickRowCount*brickColumnCount) {
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawBall() {
  c.beginPath();
  c.arc(x, y, ballRadius, 0, Math.PI*2);
  c.fillStyle = "wheat";
  c.fill();
  c.closePath();
}
function drawPaddle() {
  c.beginPath();
  c.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  c.fillStyle = "wheat";
  c.fill();
  c.closePath();
}
function drawBricks() {
  for(var i=0; i<brickColumnCount; i++) {
    for(var r=0; r<brickRowCount; r++) {
      if(bricks[i][r].status == 1) {
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (i*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[i][r].x = brickX;
        bricks[i][r].y = brickY;
        c.beginPath();
        c.rect(brickX, brickY, brickWidth, brickHeight);
        c.fillStyle = "wheat";
        c.fill();
        c.closePath();
      }
    }
  }
}
function drawScore() {
  c.font = "16px Arial";
  c.fillStyle = "rgb(206, 20, 20)";
  c.fillText("Score: "+score, 8, 20);
}
function drawLives() {
  c.font = "16px Arial";
  c.fillStyle = "green";
  c.fillText("Lives: "+lives, canvas.width-65, 20);
}

function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy < ballRadius) {
    dy = -dy;
  }
  else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {
      lives--;
      if(!lives) {
        alert("GAME OVER");
        document.location.reload();
      }
      else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width-paddleWidth)/2;
      }
    }
  }

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

draw();
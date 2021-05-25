var buttonColours = ["green", "red", "yellow", "blue"];
var userClickedPattern = [];
var gamePattern = [];
var randomChosenColour;
var level = 0;
var started = false;

function gameNotStart() {
  $("#start-game").show();
}

$("#start-game").hide();

$("#ok").click(function () {
  $("#start-game").hide();
});

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  level++;
  $("#level-title").html("level " + level);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  var sound = new Audio("sounds/" + randomChosenColour + ".mp3");
  sound.play();
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    gamePattern = [];
    level = 0;
    started = false;
    $("#level-title").html("Game ended. Press any key to restart the game");
    animation("body", "red");
  }
}

function animation(name, classname) {
  $("#" + name).addClass(classname);
  setTimeout(function () {
    $("#" + name).removeClass(classname);
  }, 100);
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

$("body").keypress(function () {
  if (started === false) {
    started = true;
    nextSequence();
  }
});

//GREEN BUTTON CLICK HANDLER
$("#green").click(function () {
  if (started === true) {
    animation("green", "pressed");
    userClickedPattern.push("green");
    checkAnswer(userClickedPattern.length - 1);
  } else {
    gameNotStart();
  }
});

//RED BUTTON CLICK HANDLER
$("#red").click(function () {
  if (started === true) {
    animation("red", "pressed");
    userClickedPattern.push("red");
    checkAnswer(userClickedPattern.length - 1);
  } else {
    gameNotStart();
  }
});

//YELLOW BUTTON CLICK HANDLER
$("#yellow").click(function () {
  if (started === true) {
    animation("yellow", "pressed");
    userClickedPattern.push("yellow");
    checkAnswer(userClickedPattern.length - 1);
  } else {
    gameNotStart();
  }
});

//BLUE BUTTON CLICK HANDLER
$("#blue").click(function () {
  if (started === true) {
    animation("blue", "pressed");
    userClickedPattern.push("blue");
    checkAnswer(userClickedPattern.length - 1);
  } else {
    gameNotStart();
  }
});
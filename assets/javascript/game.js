// Random number generated at the beginning of the game 19 - 120//
var randomNumber;
var Wins = 0;
var Losses = 0;
var runningTotal = 0;

var resetStart = function () {

    $(".crystals").empty();

    randomNumber = Math.floor(Math.random() * 101 ) + 19;
    console.log (randomNumber);

    $("#random").html("Target Number: " + randomNumber);



    // Four crystals with hidden, randomized values between 1 - 12 //
    for (var i = 0; i < 4; i++) {
    
        var random = Math.floor(Math.random() * 12) + 1;
        console.log(random);

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });

        $(".crystals").append(crystal);

    }
}

resetStart ();

// When the crystal is click the value of the crystal will be added to the player's score //
$(document).on('click',".crystal", function () {
    
    var number = parseInt($(this).attr('data-random'));

    runningTotal += number;

    console.log(runningTotal)

    if(runningTotal > randomNumber) {
        Losses--;

        $("#losses").html(Losses);

        previous = 0;

        resetStart();

    }
    else if (runningTotal===randomNumber){
        Wins++;

        $("#wins").html(Wins);

        previous = 0;

        resetStart();

    }
    

});
    
// The game will continue until the following conditions are met://
// If the player's score is equal to the random number generated, then the "Wins" counter increases by 1//
// If the player's score is greater than the random number generated, then the "Losses" counter increases by 1//
// Once one of the two conditions is met, then the game resets with a new randomly generated number  and crystal values//
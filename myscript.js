/*
 * Copyright (c) 2026 Bradley McMillan
 * Licensed under the MIT License.
 * Full license information can be found in the LICENSE file in the project root.
*/

$(document).ready(function(){
    $("#num-operators button").click(function(){ //run's code in block upon clicking any button with "btn btn-dark" class
        var number = $(this).val(); // assigns the value of the clicked button to a variable as a string

        var currentScreen = $("#screen").val(); // assigns the value of the input "screen" to a variable as a string

        $("#screen").val(currentScreen + number); // concatenates the two variable strings and updates the value of the input "screen" 
    });

    $("#ans").click(function(){ // run's code in block upon clicking the "=" button
        var answer = math.evaluate($("#screen").val())

        $("#screen").val(answer)
    });

    $("#clear").click(function(){ // run's code in block upon clicking the "C" (clear) button
        $("#screen").val(""); // sets the value of the input "screen" to an empty string, clearing "screen"
    });

    $("#inlogo").click(function(){
        window.location.href = "https://linkedin.com/in/bradley-mcmillan-5967233b5";
    });

    $("#gitlogo").click(function(){
        window.location.href = "https://github.com/B-Rad-Ctrl";
    });
});


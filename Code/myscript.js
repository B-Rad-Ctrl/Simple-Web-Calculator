/*
 * Copyright (c) 2026 Bradley McMillan
 * Licensed under the MIT License.
 * Full license information can be found in the LICENSE file in the project root.
*/

$(document).ready(function(){
    $(".btns").click(function(){
        var number = $(this).val();

        var currentScreen = $("#screen").val();

        $("#screen").val(currentScreen + number);
    });

    $(".ans").click(function(){
        $("#screen").val(eval($("#screen").val()));
    });

    $(".clear").click(function(){
        $("#screen").val("");
    });

});


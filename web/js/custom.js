/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Circles around a circle

// canvas and mousedown related variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 3;
radius = radius * 0.30;

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    console.log(x + "====" + y);
    ctx.stroke();
}

$(".showTopology").click(function () {

    var nodeCount = parseInt($("#nCirc").val());
    if (nodeCount) {

        var angle = 360/nodeCount;
        var x = 500;
        var y = 75;

        for (var i = 1; i <= nodeCount; i++) {

            radian = angle * i * 0.0174532925;
            x = x + radius * Math.cos(radian);
            y = y + radius * Math.sin(radian);

            drawCircle(x, y);

        }

    }

});

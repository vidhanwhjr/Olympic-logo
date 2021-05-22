var canvas= document.getElementById("Canvas1");
var ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= "grey";
ctx.lineWidth= 4;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 10;
ctx.arc(250,210 , 40,0, 2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 10;
ctx.arc(320,210 , 40,0, 2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 10;
ctx.arc(390,210 , 40,0, 2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth= 10;
ctx.arc(290,270 , 40,0, 2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 10;
ctx.arc(350,270 , 40,0, 2*Math.PI );
ctx.stroke();


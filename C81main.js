canvas=document.getElementById("MyCanvas")
ctx = canvas.getContext("2d")

color = "red";
function circle(mouse_x,mouse_y)
{
ctx.beginPath();
ctx.strokeStyle;
ctx.lineWidth = 2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color="red"//document.getElementById
    mouse_x= e.clientX - canvas.offsetLeft;
    mouse_y= e.clientY - canvas.offsetTop;
    console.log("x = "+mouse_x+"y ="+ mouse_y);
    circle(mouse_x,mouse_y);
}
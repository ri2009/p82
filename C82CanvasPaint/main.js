canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_x_position, last_y_position;
color="charcoal";
widthofline=2;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown (e){
    color = document.getElementById("color").value; widthofline = document.getElementById("width_of_line").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove (e){
    current_x_position=e.clientX-canvas.offsetLeft;
    current_y_position=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        //ctx.moveTo(last_x_position,last_y_position);
        //ctx.lineTo(current_x_position,current_y_position);
        ctx.arc(current_x_position,current_y_position,20,0,2*Math.PI);
        ctx.stroke();
    }
    last_x_position=current_x_position;
    last_y_position=current_y_position;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup (e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave (e){
    mouseEvent="mouseleave";
}
function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }
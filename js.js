function Circle(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
}

function genRandomHEX() {
    return hex = Math.floor(Math.random()*255);
}
function genRandomColor() {
    let red = genRandomHEX();
    let green = genRandomHEX();
    let blue = genRandomHEX();
    return "rgb("+red+","+green+","+blue+")";
}
function genRandomRadius() {
    let radius = Math.floor(Math.random()*50);
    return radius;
}
function genRandomX() {
    let x = Math.floor(Math.random()*900);
    return x;
}
function genRandomY() {
    let y = Math.floor(Math.random()*900);
    return y;
}

function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let circle = new Circle(500,500,80);
    ctx.beginPath();
    ctx.arc(circle.x=genRandomX(),circle.y =genRandomY(),circle.r = genRandomRadius(),0,2*Math.PI);
    ctx.fillStyle = genRandomColor();
    ctx.fill();
}

for (let i = 0; i< 30;i++){
    createCircle();
}
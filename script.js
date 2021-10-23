var canvas = document.getElementById("canvas");

var c = canvas.getContext("2d");


points = []

function makeArt(){
    c.fillStyle = 'rgb(236, 235, 229)'
    c.fillRect(0,0,900, 500)
    
    createPoints()
    console.log(points)
    createLines()
}
function createPoints(){
    points = []
    for (x = 0; x < 13; x++){
        points.push([Math.random()*canvas.width, Math.random()*canvas.height])
    }
}
function createLines(){
c.beginPath()
c.moveTo(points[0][0], points[0][1])
for (x = 1; x < points.length; x++){
c.lineTo(points[x][0], points[x][1])
}
c.stroke()

}
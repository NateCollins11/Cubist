var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var height = canvas.height
var width = canvas.width
var image = document.createElement('img')
var widthunit = width/20
var heightunit = height/20
var characters = [  
    player = {
        image: 'player',
        y: height-heightunit*3,
        x: widthunit*6,
        height: heightunit*2,
        width: widthunit*2
    }
]
function upDate() {
    c.fillStyle = 'blue'
    c.fillRect(0,0,width,height/2)
    c.fillStyle = 'green'
    c.fillRect(0,height/2,width,height/2)
    for (i=0; i < characters.length; i++) {
        var image = document.getElementById(characters[i].image)
        c.drawImage(image, characters[i].x, characters[i].y,characters[i].width, characters[i].height)
    }   
    requestAnimationFrame(upDate)
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode == '38'){
        characters[0].y -= heightunit;
    }
    if (event.keyCode == '40') {
        characters[0].y += heightunit;
    }
    if (event.keyCode == '37'){
        characters[0].x -= heightunit;
    }
    if (event.keyCode == '39') {
        characters[0].x += heightunit;
    }
})


requestAnimationFrame(upDate)
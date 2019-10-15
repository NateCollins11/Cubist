var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var height = canvas.height
var width = canvas.width
var image = document.createElement('img')
var unit = width/20
var characters = [  
    player = {
        image: 'player',
        y: height-unit*3,
        x: unit*6,
        height: unit*2,
        width: unit*2
    }
]
function reDrawCanvas () {
    c.fillStyle = 'blue'
    c.fillRect(0,0,width,height/2)
    c.fillStyle = 'green'
    c.fillRect(0,height/2,width,height/2)
    for (i=0; i < characters.length; i++) {
        var image = document.getElementById(characters[i].image)
        c.drawImage(image, characters[i].x, characters[i].y,characters[i].width, characters[i].height)
        console.log(characters[i])
    }   
}
requestAnimationFrame(reDrawCanvas)

// reDrawCanvas()
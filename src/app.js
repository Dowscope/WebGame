const canvas = document.getElementById('game_board')
const context = canvas.getContext("2d")

const spritesheet = new Image()
spritesheet.src = './images/outerworld.png'

function draw() {
    context.drawImage(spritesheet,0,0,canvas.width,canvas.height)
    requestAnimationFrame(draw)
}

draw()

class Tile {
    constructor(x,y,sprite){
        this.x = x
        this.y = y
        this.sprite = sprite
    }

    draw(ctx) {
        ctx.drawImage(this.sprite,0,0,16,16,this.x,this.y,16,16)
    }
}

tiles = []

const canvas = document.getElementById('game_board')
const context = canvas.getContext("2d")

const spritesheet = new Image()
spritesheet.src = './images/outerworld.png'


function draw() {
    tiles.forEach(tile => {
        tile.draw(context)
    })
    requestAnimationFrame(draw)
}

function initialize() {
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++){
            tiles.push(new Tile(x,y,spritesheet))
        } 
    }
}


initialize()
draw()


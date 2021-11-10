
class OuterWorld {
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector("#game-board");
        this.ctx = this.canvas.getContext("2d");
        this.startingWidth = config.startingWidth;
        this.startingHeight = config.startingHeight;
    }

    init() {
        this.tiles = [];

        for (let x = 0; x < this.startingWidth; x++) {
            for (let y = 0; y < this.startingHeight; y++) {
                const tileType = Math.random() >= 0.65 ? 0 : 1;
                this.tiles.push( new Tile(x, y, tileType));
            }
        }
    }

    draw() {
        this.tiles.forEach(t => {
            const tile = new Image();
            tile.onload = () => {
                this.ctx.drawImage(tile, t.type * 16, 0, 16, 16, t.x * 15, t.y* 16, 15, 16);
            };
            tile.src = "./images/outerworld.png"; 
        })
    }
}
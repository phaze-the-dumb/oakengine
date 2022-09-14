class ColourMaterial{
    constructor(colour){
        this.type = 'colour';
        this.colour = colour;
    }
}

class TextureMaterial{
    constructor(src, opts = { tiling: [ 1, 1 ] }){
        this.type = 'texture'
        this.img = new Image();
        this.img.src = src;
        this.opts = opts
    }
}
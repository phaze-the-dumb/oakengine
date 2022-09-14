class GameObject{
    constructor(){
        this.components = [];
        objects.push(this);

        this.shadows = true;
        this.mat = new ColourMaterial('#cfcfcf');
    }
    getComponent(type){
        return this.components.find(x => x.componentType === type);
    }
    addComponent(type){
        let componentClasses = [
            Transform,
            Collider
        ]

        let c = new componentClasses[type](this);
        this.components.push(c);

        return c;
    }
    applyMaterial(mat){
        this.mat = mat;
    }
    render(ctx, shadows){
        let transform = this.getComponent(components.transform);
        if(!transform)return;

        if(this.shadows)
            shadows.push(transform)

        if(this.mat.type === 'colour'){
            ctx.fillStyle = this.mat.colour;
            ctx.fillRect((transform.x - camX) * scale, (transform.y - camY) * scale, transform.width * scale, transform.height * scale);
        }

        if(this.mat.type === 'texture'){
            for (let x = 0; x < this.mat.opts.tiling[0]; x++) {
                for (let y = 0; y < this.mat.opts.tiling[1]; y++) {
                    ctx.drawImage(this.mat.img,
                        ((transform.x - camX) * scale) + ((transform.width * scale) / this.mat.opts.tiling[0]) * x,
                        ((transform.y - camY) * scale) + ((transform.height * scale) / this.mat.opts.tiling[1]) * y,
                        (transform.width * scale) / this.mat.opts.tiling[0],
                        (transform.height * scale) / this.mat.opts.tiling[1]
                    )
                }
            }
        }
    }
}
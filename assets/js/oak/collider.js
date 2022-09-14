class Collider{
    constructor(go){
        this.GameObject = go;
        this.componentType = 1;

        let transform = go.getComponent(components.transform);
        if(!transform)throw new Error('No Transform, Cannot Create Collider');

        this.x = transform.x;
        this.y = transform.y;
        this.w = transform.width;
        this.h = transform.height;

        this.allowClimb = false;
        this.isRest = false;
    }
    update(){
        let transform = go.getComponent(components.transform);
        if(!transform)throw new Error('No Transform, Cannot Create Collider');

        this.x = transform.x;
        this.y = transform.y;
        this.w = transform.width;
        this.h = transform.height;
    }
}
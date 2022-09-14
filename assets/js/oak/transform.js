class Transform{
    constructor(go){
        this.GameObject = go;
        this.componentType = 0;
        this.x = 0;
        this.y = 0;
        this.width = 10;
        this.height = 10;
    }
    setX(x){
        this.x = x;
    }
    setY(y){
        this.y = y;
    }
    setXY(x, y){
        this.x = x;
        this.y = y;
    }
    setWidth(w){
        this.width = w;
    }
    setHeight(h){
        this.height = h;
    }
}
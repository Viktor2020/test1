import {DHTMLSprite} from "./DHTMLSprite";


class BouncySprite extends DHTMLSprite {

    protected xDir: number = 0;
    protected yDir: number = 0;
    protected maxX: number = 0;
    protected maxY: number = 0;
    protected animIndex: number = 0;

    /**
     Параметр   Описание
     xDir       Движение по оси x
     yDir       Движение по оси y
     maxX       Максимальное положение x
     maxY       Максимальное положение y
     */
    constructor(params) {
        super(params);
        this.xDir = params.xDir;
        this.yDir = params.yDir;
        this.maxX = params.maxX;
        this.maxY = params.maxY;
    }

    moveAndDraw() {
        this.x += this.xDir;
        this.y += this.yDir;
        this.animIndex += this.xDir > 0 ? 1 : -1;
        this.animIndex %= 7;
        this.animIndex += this.animIndex < 0 ? 7 : 0;
        if ((this.xDir < 0 && this.x < 0) || (this.xDir > 0 && this.x >= this.maxX)) {
            this.xDir = -this.xDir;
        }
        if ((this.yDir < 0 && this.y < 0) || (this.yDir > 0 && this.y >= this.maxY)) {
            this.yDir = -this.yDir;
        }
        this.changeImage(this.animIndex);
        this.draw(this.x, this.y);
    }

}

export {BouncySprite}
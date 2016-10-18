import {BouncySprite} from './BouncySprite';

class BouncyBoss {git

    protected bouncys: BouncySprite[] = [];

    /**
     Параметр    Описание
     numBouncy   Количество объектов bouncySprite, которые необходимо инициализировать
     $drawTarget Родительский элемент, к которому будут прикрепляться объекты bouncySprite
     */
    constructor(protected numBouncy, protected $drawTarget) {

        for (var i = 0; i < numBouncy; i++) {
            let params = {
                images:'src/res/pic.png',
                imagesWidth:438,
                width:438/7,
                height:129/2,
                $drawTarget:$drawTarget,
                x: Math.random() * ($drawTarget.width() - 64),
                y: Math.random() * ($drawTarget.height() - 64),
                xDir: Math.random() * 20 - 10,
                yDir: Math.random() * 20 - 10,
                maxX: $drawTarget.width()||500 - 64,
                maxY: $drawTarget.height()||500 - 64
            };
            this.bouncys.push(new BouncySprite(params));
        }
    }

    moveAll() {
        for (var i = 0, len = this.bouncys.length; i < len; i++) {
            this.bouncys[i].moveAndDraw();
        }
        setTimeout(this.moveAll.bind(this), 100);
    }
}

export {BouncyBoss}
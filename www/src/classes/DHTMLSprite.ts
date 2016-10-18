

class DHTMLSprite {
    /*
     Параметр       Описание
     images         Путь к файлу с изображениями
     imagesWidth    Ширина файла изображения в пикселах
     width          Ширина спрайта в пикселах
     height         Высота спрайта в пикселах
     x              Позиция пиксела по оси x
     y              Позиция пиксела по оси y
     $drawTarget    Родительский элемент, к которому спрайт будет прикреплять свой элемент div
     */
    protected width: number = 1;
    protected height: number = 1;
    protected imagesWidth: number = 1;
    protected x: number = 0;
    protected y: number = 0;
    protected $element;
    protected elemStyle;

    constructor(params) {
        this.x = params.x;
        this.y = params.y;
        this.width = params.width;
        this.height = params.height;
        this.imagesWidth = params.imagesWidth;
        this.$element = params.$drawTarget.append('<div/>').find(':last');
        this.elemStyle = this.$element[0].style;
        this.$element.css({
            position: 'absolute',
            width: this.width,
            height: this.height,
            backgroundImage: 'url(' + params.images + ')'
        });

    }

    /**
     * Обновляет информацию о положении div элемента, относя щегося к спрайту
     * @param x
     * @param y
     */
    draw(x, y) {
        this.x = x;
        this.y = y;
        this.elemStyle.left = x + 'px';
        this.elemStyle.top = y + 'px';
    }

    /**
     * Изменяет спрайтовое изображение, отображаемое в настоящий момент
     * @param index
     */
    changeImage(index) {
        index *= this.width;
        var vOffset = -Math.floor(index / this.imagesWidth) * this.height;
        var hOffset = -index % this.imagesWidth;
        this.elemStyle.backgroundPosition = hOffset + 'px ' + vOffset + 'px';
    }

    get visible(): boolean {
        return this.elemStyle.display === 'block';
    }

    set visible(value: boolean) {
        this.elemStyle.display = value ? 'block' : 'none';
    }

    destroy() {
        this.$element.remove();
    }

}

export {DHTMLSprite}
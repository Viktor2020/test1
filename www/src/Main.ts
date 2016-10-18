/// <reference path="dts/stats.d.ts"/>

///<reference path="dts/jquery.d.ts"/>


import {BouncyBoss} from "./classes/BouncyBoss";
function  Main() {
    var container, stats;



    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );
        stats = new Stats();
        stats.setMode( 1 );
        document.body.appendChild( stats.domElement );
        window.addEventListener( 'resize', onWindowResize, false );

        let drawTarget:HTMLDivElement = document.createElement( 'div' );
        drawTarget.style.width = '500px'
        drawTarget.style.height= '500px'
        $(drawTarget).attr( 'id', 'drawTarget' );
        $(drawTarget).attr( 'width', '500' );
        $(drawTarget).attr( 'height', '500' );
        document.body.appendChild( drawTarget );

        let boss:BouncyBoss = new BouncyBoss(10, $(drawTarget));
        boss.moveAll();

        // let params = {
        //     images:'src/res/pic.png',
        //     imagesWidth:438,
        //     width:438/7,
        //     height:129/2,
        //     $drawTarget:$(drawTarget)
        // };
        // console.log(params)
        // let sprite:DHTMLSprite = new DHTMLSprite(params);
        // let sprite1:DHTMLSprite = new DHTMLSprite(params);
        // let sprite2:DHTMLSprite = new DHTMLSprite(params);
        // sprite1.draw(100,100)
        // sprite2.draw(200,100)
        // sprite.draw(56,120)
        // sprite2.changeImage(2)
        // sprite1.changeImage(3)
        // var x = 100, y = 100;
        // var i = 0;
        // setInterval(function () {
        //     sprite1.changeImage(++i);
        //     // sprite1.draw(++x,++y)
        // },100)


    }

    function onWindowResize() {

    }



    function animate() {

        setTimeout(requestAnimationFrame( animate ), 5000)

        render();

    }

    function render() {
        stats.update();

    }

}

var m = new Main();





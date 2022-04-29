var oWarp = document.querySelector('#wrap')
let deg = 360 / (oWarp.children.length)




for(i=0;i<oWarp.children.length;++i) {
    oWarp.children[i].style.transform = `rotateY(${i*deg}deg) translateZ(400px)`;
    oWarp.children[i].style.transition = `transform 1s ${(oWarp.children.length-i)*0.1}s`
}

var nowX,nowY,lastX,lastY,minusX,minusY;
var roX=-10,roY=0;
document.addEventListener('mousedown', e => {
    e = e || window.event
    lastX = e.clientX;
    lastY = e.clientY;
    this.onmousemove = function(ev) {
        ev = ev || window.event;

        //当前鼠标距离页面左边的距离

        nowX=ev.clientX;

        //当前鼠标距离页面上边的距离

        nowY=ev.clientY;

        //X方向上的差值

        minusX=nowX - lastX;

        //Y方向上的差值

        minusY=nowY - lastY;

        //X轴的旋转角度(乘0.1是防止旋转过快)

        roX-=minusY*0.1;

        //y轴的旋转角度(乘0.2是防止旋转过快)

        roY+=minusX*0.2;

        oWarp.style.transform='rotateX('+roX+'deg) rotateY('+roY+'deg)';

        lastX=nowX;

        lastY=nowY;
    }
    this.onmouseup = function(){

        //鼠标抬起，结束鼠标移动事件

        this.onmousemove=null;
        timer=setInterval(function(){

            minusX*=0.95;
            minusY*=0.95;
            roY+=minusX*0.2;
            roX-=minusY*0.1;
            oWarp.style.transform='rotateX('+roX+'deg) rotateY('+roY+'deg)';
            if(Math.abs(minusX)<0.5 && Math.abs(minusY)<0.5){
                clearInterval(timer);
            }

        },13)
    }
    return false
})


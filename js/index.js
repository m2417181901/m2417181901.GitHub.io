var oWarp = document.querySelector('#wrap')
let deg = 360 / (oWarp.children.length)
let st = document.getElementById('wrap')
let per = document.getElementById('perspective')

for(i=0;i<oWarp.children.length;++i) {
    oWarp.children[i].style.transform = `rotateY(${i*deg}deg) translateZ(470px)`;
    oWarp.children[i].style.transition = `transform 1s ${(oWarp.children.length-i)*0.1}s`
}


let audio = document.getElementById('audio')

let buttonJia = document.querySelector('#jia')
let buttonJian = document.querySelector('#jian')
buttonJia.addEventListener('click',()=>{
    let data = getComputedStyle(per, null)['perspective']
    console.log(data)
    per.style.perspective = data.split('px')[0]*1 + 100 + 'px'
})

buttonJian.addEventListener('click',()=>{
    let data = getComputedStyle(per, null)['perspective']
    console.log(data)
    per.style.perspective = data.split('px')[0]*1 - 100 + 'px'
})

// let autotimer = setInterval(()=>{
//     let nowx = st.style.transform
//     console.log(nowx)
    
// },1000)
var nowX,nowY,lastX,lastY,minusX,minusY;
var roX=-10,roY=0;
let userAgentInfo = navigator.userAgent;
console.log(userAgentInfo)
let flag = true
let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"); 
for (let v = 0; v < Agents.length; v++) {  
    if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
}
if(flag)
    document.addEventListener('mousedown', e => {
        e = e || window.event
        lastX = e.clientX;
        lastY = e.clientY;
        audio.play();
        // clearInterval(timer);
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
                    // timer = setInterval(()=>{
                    //     oWarp.style.transform='rotateX('+2+'deg) rotateY('+2+'deg)';
                    
                    // },1000)
                }

            },13)
        }
        return false
    })
else 
    document.addEventListener('touchstart', e => {
      
        e = e || window.event
        lastX = e.targetTouches[0].pageX;
        lastY = e.targetTouches[0].pageY;
        audio.play();
        // clearInterval(timer);
        this.ontouchmove = function(ev) {
            // ev.preventDefault()
            ev = ev || window.event;
            //当前鼠标距离页面左边的距离

            nowX=ev.targetTouches[0].pageX;

            //当前鼠标距离页面上边的距离

            nowY=ev.targetTouches[0].pageY;

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
        this.ontouchend = function(){

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
                    // timer = setInterval(()=>{
                    //     oWarp.style.transform='rotateX('+2+'deg) rotateY('+2+'deg)';
                    
                    // },1000)
                }

            },13)
        }
        return false
    })

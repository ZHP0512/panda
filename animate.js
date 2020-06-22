        // 第二种方法：将当前的对象赋值给定时器，谁调用了就赋值给谁
        //obj:目标对象(需要进行动画运动的元素)    target:目标终点位置   callBack:定时器结束后执行的函数(写在定时器结束的函数里面)
        function animate(obj,target,callBack) {       
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                if (obj.offsetLeft == target) {
                    clearInterval(obj.timer);
                    // 判断实参中是否有回调函数，有就执行
                    if(callBack){
                        callBack();
                    }
                } else {
                    // 缓动动画功能实现   公式：(目标值 - 盒子当前位置) / 10   步长值需要取整 Math.ceil
                    // var step = Math.ceil((target - obj.offsetLeft) / 10);
                    //判断步长值可能会出现负数的情况
                    var step = (target - obj.offsetLeft) / 10;
                    if(step > 0){
                        step = Math.ceil(step);
                    }else {
                        step = Math.floor(step);
                    }
                    obj.style.left = obj.offsetLeft + step + 'px';
                }
            }, 15);
        }
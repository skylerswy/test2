var div = document.getElementById('box');
//var div=document.getElementsByTagName('div')[0];

var disX,
    disY;

// 鼠标移入时，清除掉 onmousemove 监听事件，防止之前
// 鼠标移动太快，移出 div 后才触发 onmouseup 事件，此时鼠标已经不在 div 内
// 不会执行 div.onmouseup 的监听事件，所以当鼠标再次移入到 div 时，不用按下就可以移动 div
// div.onmouseenter = function() {
//     div.onmousemove = null;
// }

div.onmousedown = function(e) {
    e = e || window.event;
    // console.log(e.pageX);
    // console.log(e.pageY);

    /**
     * div.style.left 只能获取到内联样式，像：<div style="left: 100px;top: 100px;">
     * 不能获取到外联样式文件 file.css 的 css 值
     * 要获取 file.css 中的，也就是 div 的最终样式，需要调用：getComputedStyle
     * this 代表当前的 html element：<div id="box"></div>，可以：console.log(this) 查看
     */
    var cs = getComputedStyle(this, null);
    console.log(this);
    disX = e.pageX - parseInt(cs.getPropertyValue('left'));
    disY = e.pageY - parseInt(cs.getPropertyValue('top'));


    div.onmousemove = function(e) {
        e = e || window.event;
        //兼容ie
        // console.log(event);
        div.style.left = e.pageX - disX + "px";
        div.style.top = e.pageY - disY + "px";
    }

    div.onmouseup = function() {
        div.onmousemove = null;
    }

}
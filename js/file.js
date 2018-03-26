var div=document.getElementById('box');
//var div=document.getElementsByTagName('div')[0];

var disX,
    disY;

div.onmousedown=function(e){
    // var event=e||window.event;
    // console.log(e.pageX);
    // console.log(e.pageY);
    disX=e.pageX-parseInt(div.style.left);
    disY=e.pageY-parseInt(div.style.top);


div.onmousemove=function(e){
    var event=e||window.event;
    //兼容ie
    // console.log(event);
    div.style.left=e.pageX-disX+"px";
    div.style.top=e.pageY-disY+"px";
} 

div.onmouseup=function(){
    div.onmousemove=null;
}

}
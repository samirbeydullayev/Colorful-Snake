$(function(){
    var divs=[]
    $(document).mousemove(function(){

        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    if(divs.length>=10){
        document.body.removeChild(divs[0]);
        divs.shift();        
        var span=document.createElement("span");
        span.style.top=event.pageY-30+"px";
        span.style.left=event.pageX-25+"px";
        document.body.appendChild(span);
        span.style.backgroundColor=bgColor;
        divs.push(span)
    }
    else if (divs.length<10){
        var span=document.createElement("span");
        span.style.top=event.pageY-30+"px";
        span.style.left=event.pageX-25+"px";
        document.body.appendChild(span);
        span.style.backgroundColor=bgColor;
        divs.push(span);
    };
  
    
    });

});
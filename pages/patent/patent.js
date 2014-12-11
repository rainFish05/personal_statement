window.onload = function() {
    var picUl = document.getElementById("pic-list");
    var picLi = picUl.getElementsByTagName("li");
    var numUl = document.getElementById("num-list");
    var numLi = numUl.getElementsByTagName("li");
    var timer = null;          //定时器
    var currPic = 0;           //当前正在播放的图片，与数组同步
    /*
     *实现自动播放功能
     */
    function autoPlay() {
        timer = setInterval(function() {
            currPic == 4?currPic = 0:currPic++;
            play(currPic);
        },2000);
    }
    function play(e) {
        for(var i = 0;i < picLi.length;i++) {
            picLi[i].className = "";
        }
        picLi[e].className = "current";
        for(var j = 0;j < numLi.length;j++) {
            numLi[j].className = "";
        }
        numLi[e].className = "current";
    }
    autoPlay();
    /*
     *鼠标移入手动播放的实现
     */
    for(var i = 0;i < numLi.length;i++) {
        numLi[i].index = i;

        numLi[i].onmouseover = function() {
            clearInterval(timer);
            currPic = this.index;
            play(currPic);
        };

        numLi[i].onmouseout = function() {
            autoPlay();
        };
    }
}
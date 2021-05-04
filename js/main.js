var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
mySong.play();

icon.onclick = function(){
    if(mySong.paused){
        mySong.play()
        mySong.volume=0.07;
        icon.src= "img/pause.png"
    }
    else{
        mySong.pause()
        icon.src= "img/play.png"
    }
}
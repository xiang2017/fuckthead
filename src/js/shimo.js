/**
 * Created by xiang on 18/10/23.
 */
setTimeout(function(){
    var els = document.getElementsByClassName("sm-ad-wrapper");
    for (var i = 0; i < els.length; i ++){
        els[i].style.display = "none";
    }
}, 3000);
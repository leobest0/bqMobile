/**
 * Created by play on 2017/5/12.
 */
window.onload=function(){
    var oBtn=document.getElementById('up_button');
    var oCon=document.getElementById('container');
    var i=setInterval(timer,30);
    function timer() {
        var L=$(document).scrollTop();
        if(L>200){
            oBtn.style.display='block';
        }else {
            oBtn.style.display='none';
        }
    }
    oBtn.onclick=function () {
        $('html,body').animate({scrollTop:0},150);
    }
    //swiper焦点图
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay : 5000,
        // 如果需要分页器
        pagination: '.swiper-pagination',
    })
}
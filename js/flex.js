// (function(){
// 				var html=document.documentElement;
// 				var hWidth=html.getBoundingClientRect().width;
// 				/*console.log(hWidth);*/
// 				html.style.fontSize=hWidth/15+'px';
// })();
setSize();
window.addEventListener('resize',setSize,false);
window.addEventListener('orientation',setSize,false);
function setSize(){
    var html = document.getElementsByTagName('html')[0];
    var pageWidth = html.getBoundingClientRect().width;
    pageWidth= pageWidth>540? 540:pageWidth;
    html.style.fontSize = pageWidth / 15 + 'px';
}
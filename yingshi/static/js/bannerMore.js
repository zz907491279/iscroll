$(function () {
    $(".sex li").click(function () {
        $(this).not($(".sex li")[0]).addClass("active").siblings().removeClass("active");
    })
    const ch=document.documentElement.clientHeight;
     var obj=scrollobj();//获取当前浏览器
    function scrollobj(){
        var body=document.body;
       var html=document.documentElement;
        body.scrollTop=1;
        html.scrollTop=1;
        var obj;
        if(body.scrollTop==0){
            obj=html;
        }else{
            obj=body;
        }
        return obj;
    }

    window.onscroll=function () {
        if($(".ysthink")[0].offsetTop<=obj.scrollTop){
            function LeftIn(x) {
                $('.ysthink .tu1').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass();
                });
            };
            function RightIn(x) {
                $('.ysthink .tu2').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass();
                });
            }
            var anim1 = $('.ysthink .tu1').attr("attr");
            var anim2=$(".ysthink .tu2").attr("attr");
            LeftIn(anim1);
            RightIn(anim2);
        }
    }
})
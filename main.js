//adds a line after each posting
$(".postings").children().append($("<div>",{class: "hr"}));

//change project img css depending on screen size
$(document).ready(function(){
    if(window.innerWidth < 450){
        $("#logo").css({height: 30});
    }
    if(window.innerWidth < 800){
        $(".postings img").css({
            height: window.innerHeight * 0.3,
        });
    }
});

//does device orientation change innerwidth?
//change logo size depending on window size
$(window).resize(function(){
    if(window.innerWidth < 450){
        TweenLite.to($("#logo"), 0.2,{height: 30})
        $(".hr").css({
            marginLeft: "4%",
            marginRight: "4%"
        })
        $(".postings p").css({
            paddingLeft: "5%",
            paddingRight: "5%"
        })
    }
    else{
        TweenLite.to($("#logo"), 0.2,{height: 40})
        $(".hr").css({
            marginLeft: "12%",
            marginRight: "12%"
        })
        $(".postings p").css({
            paddingLeft: "15%",
            paddingRight: "15%"
        })
    }
    if(window.innerWidth < 800){
        $(".postings img").css({
            height: window.innerHeight * 0.3,
        });
    }
});

//animate scrolling
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 60
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

//animate dropdowns
$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
});

//highlights project images on hover
var smallIMG = true;
$(".postings img").click(function(e){
    if(smallIMG){
        TweenLite.to(e.target, 0.2, {
            scaleY: 1.6,
            scaleX: 1.6});
        smallIMG = false;
    }
    else{
        TweenLite.to(e.target, 0.2, {
            scaleY: 1,
            scaleX: 1});
        smallIMG = true;
    }
});

//lowlights project images after set amount of scrolling
var bar = 150;
var scrollTop = 0;
$(window).scroll(function(){
    var diff = Math.abs($(window).scrollTop() - scrollTop);
    if(diff > bar){
        TweenLite.to($(".postings img"), 0.2, {
            scaleY: 1,
            scaleX: 1});
        scrollTop = $(window).scrollTop();
        smallIMG = true;
    }
});


$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

//$('html, body').stop().animate({
//     'scrollTop': $target.offset().top
//}, 900, 'swing');

/* blank postings skeleton

<div id="main subject">
            <h3>title</h3>
            <img src="Pictures/picName.jpg" alt="text for img">
            <div class="content">
            <p>
                write stuff here
            </p>
            </div>
        </div>
        
*/
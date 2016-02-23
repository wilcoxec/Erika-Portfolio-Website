$(function() {

  $(".MenuContainer").hide(0).delay(3800).fadeIn(2000);
  $("#title").hide(0).delay(3800).fadeIn(2000);
  $("#titleInfo").hide(0).delay(3800).fadeIn(2000);
  $(".menu-collapsed").hide(0).delay(3800).fadeIn(2000);

  var divs = $('.mydiv');
  var div = 0;

  var workBack = $('.Work');

  var about = $('#aboutLink');
  var work = $('#workLink');
  var contact = $('#contactLink');
  var aboutDiv = $('#aboutDiv');
  var workDiv = $('#workDiv');
  var contactDiv = $('#contactDiv');
  var resumeDiv = $('#resumeDiv');
  var resume = $('#resumeLink');


  about.css({
    color: '#000',
  });
  work.css({
    color: '#000',
  });
  contact.css({
    color: '#000',
  });
  resume.css({
    color: '#000',
  });

  aboutDiv.css({
    color: '#000',
  });     
  workDiv.css({
    color: '#000',
  });
  contactDiv.css({
    color: '#000',
  });

  /*div = -1
  divs.each(function(i) {
    if (div < 0 && ($(this).offset().top >=       $(window).scrollTop())) {
        div = i;
    }
  });*/


$(window).scroll(function() {
  
  if ($(window).scrollTop() > $(".Title").offset().top - 600 ) {
      about.css({
        color: '#000',
      });
      work.css({
        color: '#000',
      });
      contact.css({
        color: '#000',
      });
      resume.css({
        color: '#000',
      });

      aboutDiv.css({
        color: '#000',
      });     
      workDiv.css({
        color: '#000',
      });
      contactDiv.css({
        color: '#000',
      });
      resumeDiv.css({
        color: '#000',
      });
  
  }


  if ($(window).scrollTop() > $(".About").offset().top - 600 ) {
      about.css({
        color: '#000',
      });
      work.css({
        color: '#000',
      });
      contact.css({
        color: '#000',
      });
      resume.css({
        color: '#000',
      });

      aboutDiv.css({
        color: '#00ddd8',
      });     
      workDiv.css({
        color: '#000',
      });
      contactDiv.css({
        color: '#000',
      });
      resumeDiv.css({
        color: '#000',
      });
  
  }

  if ($(window).scrollTop() > $(".Work").offset().top - 550 ) {
      about.css({
        color: '#fff',
      });
      work.css({
        color: '#fff',
      });
      contact.css({
        color: '#fff',
      });
      resume.css({
        color: '#fff',
      });

      aboutDiv.css({
        color: '#fff',
      });     
      workDiv.css({
        color: '#00ddd8',
      });
      contactDiv.css({
        color: '#fff',
      });
      resumeDiv.css({
        color: '#fff',
      });
  
  }

  if ($(window).scrollTop() > $(".Contact").offset().top - 550 ) {
      about.css({
        color: '#000',
      });
      work.css({
        color: '#000',
      });
      contact.css({
        color: '#000',
      });
      resume.css({
        color: '#000',
      });

      aboutDiv.css({
        color: '#000',
      });     
      workDiv.css({
        color: '#000',
      });
      contactDiv.css({
        color: '#00ddd8',
      });
      resumeDiv.css({
        color: '#000',
      });
  
  }
  
});

  
  

/*  $(window).on('mousewheel DOMMouseScroll', function(e) {
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      if (div > 0) {
        div--;
      }
    } else {
      if (div < divs.length) {
        div++;
      }
    }
    if(div == 0){
      about.css({
        color: '#000',
      });
      work.css({
        color: '#000',
      });
      contact.css({
        color: '#000',
      });
      resume.css({
        color: '#000',
      });

      aboutDiv.css({
        color: '#000',
      });     
      workDiv.css({
        color: '#000',
      });
      contactDiv.css({
        color: '#000',
      });
      resumeDiv.css({
        color: '#000',
      });
    }

    if(div == 1){
      about.css({
        color: '#000',
      });
      work.css({
        color: '#000',
      });
      contact.css({
        color: '#000',
      });
      resume.css({
        color: '#000',
      });

      aboutDiv.css({
        color: '#00ddd8',
      });     
      workDiv.css({
        color: '#000',
      });
      contactDiv.css({
        color: '#000',
      });
      resumeDiv.css({
        color: '#000',
      });
    }
    if(div == 2){

      about.css({
        color: '#fff',
      });
      work.css({
        color: '#fff',
      });
      contact.css({
        color: '#fff',
      });
      resume.css({
        color: '#fff',
      });

      aboutDiv.css({
        color: '#fff',
      });     
      workDiv.css({
        color: '#00ddd8',
      });
      contactDiv.css({
        color: '#fff',
      });
      resumeDiv.css({
        color: '#fff',
      });
    }
    if(div == 3){

      about.css({
        color: '#000',
      });
      work.css({
        color: '#000',
      });
      contact.css({
        color: '#000',
      });
      resume.css({
        color: '#000',
      });

      aboutDiv.css({
        color: '#000',
      });     
      workDiv.css({
        color: '#000',
      });
      contactDiv.css({
        color: '#00ddd8',
      });
      resumeDiv.css({
        color: '#000',
      });


    }
    if(div == 4){

      about.css({
        color: '#000',
      });
      work.css({
        color: '#000',
      });
      contact.css({
        color: '#000',
      });
      resume.css({
        color: '#000',
      });

      aboutDiv.css({
        color: '#000',
      });     
      workDiv.css({
        color: '#000',
      });
      contactDiv.css({
        color: '#000',
      });
      resumeDiv.css({
        color: '#000',
      });
    }

    $('html,body').stop().animate({
      scrollTop: divs.eq(div).offset().top
    }, 800);
    return false;
  });*/

  /*$(window).resize(function() {
    $('html,body').scrollTop(divs.eq(div).offset().top);
  });*/




  $( "#aboutLink" ).click(function() {
      div = 1;
      
      about.css({
        color: '#000',
      });
      work.css({
        color: '#000',
      });
      contact.css({
        color: '#000',
      });
      resume.css({
        color: '#000',
      });

      aboutDiv.css({
        color: '#00ddd8',
      });     
      workDiv.css({
        color: '#000',
      });
      contactDiv.css({
        color: '#000',
      });
      resumeDiv.css({
        color: '#000',
      });
  });


  $( "#workLink" ).click(function() {
      div = 2;

      about.css({
        color: '#fff',
      });
      work.css({
        color: '#fff',
      });
      contact.css({
        color: '#fff',
      });
      resume.css({
        color: '#fff',
      });

      aboutDiv.css({
        color: '#fff',
      });     
      workDiv.css({
        color: '#00ddd8',
      });
      contactDiv.css({
        color: '#fff',
      });
      resumeDiv.css({
        color: '#fff',
      });
  });

  $( "#contactLink" ).click(function() {
      div = 3;

      about.css({
        color: '#000',
      });
      work.css({
        color: '#000',
      });
      contact.css({
        color: '#000',
      });
      resume.css({
        color: '#000',
      });

      aboutDiv.css({
        color: '#000',
      });     
      workDiv.css({
        color: '#000',
      });
      contactDiv.css({
        color: '#00ddd8',
      });
      resumeDiv.css({
        color: '#000',
      });
  });



  /*$("#workA").hover(
        function(){
           $(".Work").css({"animation" : "swing 5s infinite","-webkit-animation" : "swing 5s infinite" });
        },
        function(){
          $(".Work").css({"animation" : "swing 0s","-webkit-animation" : "swing 0s" });
        }
    );*/



});
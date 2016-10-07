
  var glow = $('.headname');
  setInterval(function(){
      glow.hasClass('glow') ? glow.removeClass('glow') : glow.addClass('glow');
  }, 1000);

  var glowtail = $('.tailname');
  setInterval(function(){
      glowtail.hasClass('glow') ? glowtail.removeClass('glow') : glowtail.addClass('glow');
  }, 1000);


  var randomStrings = [
        "Passionate Coder",
        "Acheiver",
        "Foodie",
        "Social Being",
        "Traveller",
        "Philanthropist",
        "Environmentalist"
    ];

  var messageDisplay = function(){
    displayText = _.sample(randomStrings);
      $('.aboutphrases').html(displayText);
      console.log(displayText);
  };

setInterval(messageDisplay, 2000);

  var hobbies = [
  "img/books.png",
  "img/cricket.png",
  "img/joystick.png",
  "img/driving.png",
];

 var displayHobbies = function(){
   _.each(hobbies, function(logo){
      var img = $('<img />').attr({'src':logo,
                                        'class': "hobbyimg"

                                       });
      $('.interests').append(img);
   });

  };

displayHobbies();

var logos = [
  "img/html5.png",
  "img/jquery.png",
  "img/javascript.png",
  "img/nodejs.png",
  "img/rails.png",
  "img/ruby.png",
  "img/backbone.png",
  "img/css3.png",
  "img/expressjs.png",
  "img/postgresql.png",
  "img/github.png",
  "img/SQLite.png",
  "img/selenium.png",
  "img/underscore.png",
  "img/reactjs.png",
  "img/python.png"
];

var displayTechnologies = function(){
  _.each(logos, function(logo){
    var img = $('<img />').attr({'src':logo,
                                       'id': logo.split('/')[1].split('.')[0],
                                       'height': '50px',
                                       'width': '75px'
                                      });
     $('.technologies').append(img);
   });
 };

 displayTechnologies();

 $('.technologies > img').hover( function(){
   str = this.id;
   console.log(str);
   $('.technologies > h3').text(str.toUpperCase());
  //  $('.technologies').slideToggle('slow');
 });


// Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });

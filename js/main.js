$(document).ready(function(){

var timer;
var tooltipTimeout;

  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
    $(window).scroll(function(){
      var yPos = -($(window).scrollTop() / $bgobj.data('speed'));

      // Put together our final background position
      var coords = '50% '+ yPos + 'px';

      // Move the background
      $bgobj.css({ backgroundPosition: coords });

    });
  });

  var randomStrings = [
    "Passionate Coder",
    "Acheiver",
    "Foodie",
    "Social Being"
];


var messageDisplay = function(){
  displayText = _.sample(randomStrings);
    $('.scrolltext').html(displayText);
    console.log(displayText);
};

setInterval(messageDisplay, 2000);

var glow = $('.headname');
setInterval(function(){
    glow.hasClass('glow') ? glow.removeClass('glow') : glow.addClass('glow');
}, 1000);

var logos = [
  "css/images/logos/html5.png",
  "css/images/logos/jquery.png",
  "css/images/logos/javascript.png",
  "css/images/logos/nodejs.png",
  "css/images/logos/rails.png",
  "css/images/logos/ruby.png",
  "css/images/logos/backbone.png",
  "css/images/logos/css3.png",
  "css/images/logos/expressjs.png",
  "css/images/logos/postgresql.png",


  "css/images/logos/github.png",

  "css/images/logos/SQLite.png",
  "css/images/logos/selenium.png",
  "css/images/logos/underscore.png",

  "css/images/logos/reactjs.png",
  "css/images/logos/python.png"

];

var displayTechnologies = function(){
  _.each(logos, function(logo){
     var img = $('<img />').attr({'src':logo,
                                       'class': "techimg",
                                       'height': '50px',
                                       'width': '75px'
                                      });
     $('.technologies').append(img);
  });

 };

displayTechnologies();


// Sliding the banner functionality

// (function slide(){
//   $('#clientSlider').animate({backgroundPosition : '-=2px'}, 20, 'linear', slide);
// })();



var typeText = function(p1, p2, speed){
  var myText = p1.text();
  var myContent = myText.split("");
  var i = 0;
  var showText = function(){
    if(i < myContent.length){
      p2.append(myContent[i]);
      i++;
    }

  };

  var timer = setInterval(showText, speed);
};

var displayQuote = function(){
  typeText($('.heading'), $('.p1'), 100);
  clearInterval(timer);

};

displayQuote();





var tip1 = "Description: Tic Tac Toe is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game."+"\nTechnologies Used: 1. HTML 2. CSS 3. Javascript 4. JQuery v3.0";

var tip2 = "Description: Remote assist is to help frequent travellers who might be wanting some information about the destination they are heading to and they can always know more from the people who live in that location than anyone else and hence this application."+"\nTechnologies Used: Ruby, Rails 4.2.6, Bootstrap, CSS, HTML 5, Heroku for cloud deployment, Sendgrid for mailing and notifications Cloudinary for the image upload.";

var tip3 = "Description: Palate is the project 2 of the web developer program. The main idea behind developing this application is to help people find their favorite dishes. Technologies Used: Ruby, Rails 4.2.6, Bootstrap, jQuery, CSS, HTML 5, Javascript, Nokogiri(Gem), Chrome dev tools extension for bookmarking, Heroku for cloud deployment, Cloudinary for the image upload., Ratyrate gem, Disqus, bcrypt httparty";

var tip4 = "Decription: Have you ever thought of an app to track where your friends are. Trackpal is your solution. With Trackpal you can track all the people within the group about their journey to the destination based on the geolocation of the browser. Technologies Used: Ruby, Rails 4.2.6, Bootstrap, CSS, HTML 5, jQuery, Underscore.js, Leaflet API for interactive maps, Twilio API for SMS messages, Heroku for cloud deployment, Sendgrid for mailing and notifications, Cloudinary for the image upload.";

$(".project1").hover(function()
                    {tooltipTimeout = setTimeout(showTooltip(tip1), 500);},
                    hideTooltip);

$(".project2").hover(function()
                    {tooltipTimeout = setTimeout(showTooltip(tip2), 500);},
                    hideTooltip);

$(".project3").hover(function()
                    {tooltipTimeout = setTimeout(showTooltip(tip3), 500);},
                    hideTooltip);

$(".project4").hover(function()
                    {tooltipTimeout = setTimeout(showTooltip(tip4), 500);},
                    hideTooltip);

function showTooltip(tip)
    {
    var tooltip = $("#tooltip").text(tip);
    tooltip.appendTo($(".addTooltip"));
    }

function hideTooltip()
    {

    $("#tooltip").text("Hover on the projects for details !!");
    clearTimeout(tooltipTimeout);
    }


    $(".project2").hover(function()
                        {tooltipTimeout = setTimeout(showTooltip, 500);},
                        hideTooltip);

$('.mail').on('click', function(){
  window.open('mailto:ganti.phani@gmail.com');
});

var quoteskey = "mashape-key=Sf3DgiShucmshwKMPYkORgRld8iqp1cQhg8jsnoiiBAa9bFo6e";




setInterval(getQuotes, 30000);
function getQuotes() {
$.ajax({
  url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous?'+quoteskey,
  type: 'POST',
  data: {},
  dataType:'json',
  success: function(data) {
    $("#quote").text("\"" + data.quote + "\"");
    $("#author").text("- " + data.author);
                          },
    error: function(err) { alert(err); },
    // beforeSend: function(xhr) {
    // xhr.setRequestHeader("X-Mashape-Key", "Sf3DgiShucmshwKMPYkORgRld8iqp1cQhg8jsnoiiBAa9bFo6e");} // Enter here your Mashape key
    });
}





});

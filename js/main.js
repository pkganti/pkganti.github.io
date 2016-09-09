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
  "css/images/logos/alm.png",
  "css/images/logos/cucumber.png",
  "css/images/logos/github.png",
  "css/images/logos/Heroku.png",
  "css/images/logos/oracle.png",
  "css/images/logos/SQLite.png",
  "css/images/logos/selenium.png",
  "css/images/logos/underscore.png",
  "css/images/logos/soapui.png",
  "css/images/logos/rspec.png",
  "css/images/logos/reactjs.png",
  "css/images/logos/python.png"

];

// var displayTechnologies = function(){
//   _.each(logos, function(logo){
//      var img = $('<img />').attr({'src':logo,
//                                        'class': "techimg",
//                                        'height': '50px',
//                                        'width': '75px'
//                                       });
//      $('.alltechnologies').append(img);
//   });
//
//  };
//
// displayTechnologies();

(function slide(){
  $('#clientSlider').animate({backgroundPosition : '-=2px'}, 20, 'linear', slide);
})();



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
var tip2 = "test2";
var tip3 = "test3";
var tip4 = "test4";

$(".project1").hover(function()
                    {tooltipTimeout = setTimeout(showTooltip, 500);},
                    hideTooltip);

function showTooltip()
    {
    var tooltip = $("#tooltip").text(tip1);
    tooltip.appendTo($(".addTooltip"));
    }

function hideTooltip()
    {

    $("#tooltip").text("Hover on the projects for details !!");
    clearTimeout(tooltipTimeout);
    }



//Mailer code goes here

$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});


});

$(document).ready(function(){
  // clear page
  var $app = $('#app');
  $app.html('');

  // Create new HTML elements
  var $welcomeBody = $('<div id="welcome-body"></div>');
  var $welcomeSection = $('<section class="welcome-section"></section>')
  var $welcomeSubMessage = $('<h4 class="welcome-message">Let\'s get to work</h4>');
  var $welcomeMessage = $('<h1 class="welcome-message">Want to build something? We\'re ready to help.</h1>');
  var $signUpClient = $('<button type="button" class="btn btn-warning" id="signUpClient">Sign up to Hire</button>');
  var $signUpEngineer = $('<button type="button" class="btn btn-light" id="signUpEngineer">Apply to Help</button>');

  // Append new HTML elements to the DOM
  $welcomeBody.appendTo($app);
  $welcomeSection.appendTo($welcomeBody);
  $welcomeMessage.appendTo($welcomeSection);
  $welcomeSubMessage.appendTo($welcomeSection);
  $signUpClient.appendTo($welcomeSection);
  $signUpEngineer.appendTo($welcomeSection);

})
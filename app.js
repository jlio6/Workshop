$(document).ready(function(){
  // clear page
  var $app = $('#app');
  $app.html('');

  // Create new HTML elements
  var $welcomeBody = $('<div id="welcome-body"></div>');
  var $welcomeSection = $('<section class="welcome-section bg-dark"></section>');
  var $welcomeMessage = $('<h1 class="welcome-message">A community effort to help build what you need.</h1>');
  var $welcomeSubMessage = $('<h4 class="welcome-message">Let\'s get to work</h4>');
  var $signUpClient = $('<button type="button" class="btn btn-warning sign-up" id="signUpClient">Sign up to Ask</button>');
  var $signUpEngineer = $('<button type="button" class="btn btn-light sign-up" id="signUpEngineer">Apply to Help</button>');

  var $descriptSection = $('<div class="description-body d-flex flex-wrap justify-content-center bg-dark"></div>');
  var $stampSection = $('<div id="description-stamp" class="p-2 descript"></div>');
  var $stampPic = $('<img alt="stamp of approval" src="assets/icons/stamp.png">');
  var $stampPara = $('<p id="stamp-para" class="text-light">Get your drawings stamped faster than ever with an extra set of eyes so you can build with confidence.</p>');
  var $forumSection = $('<div id="description-forum" class="p-2 descript"></div>');
  var $forumPic = $('<img id="forum-pic" alt="forum discussion" src="assets/icons/chat.png">');
  var $forumPara = $('<p id="forum-para" class="text-light">Ask the community for feedback from your latest bedroom addition to your rooftop AC unit installation.</p>');
  var $detailSection = $('<div id="description-details" class="p-2 descript"></div>');
  var $detailPic = $('<img alt="blueprint drawings" src="assets/icons/blueprint.png">');
  var $detailPara = $('<p id="detail-para" class="text-light">Let our engineers refine your drawings directly through our user interface.</p>');
  var $descriptLearnMore = $('<button type="button" class="btn btn-warning" id="descript-learn-more">Learn More</button>');

  var $randomDiv = $('<div class="bg-dark"></div>');
  var $randomImg = $('<img id="random-image" src="assets/img/man-drawing-sketchpad.jpeg" alt="man drawing sketch">');



  // Append new HTML elements to the welcome section
  $welcomeBody.appendTo($app);
  $welcomeSection.appendTo($welcomeBody);
  $welcomeMessage.appendTo($welcomeSection);
  $welcomeSubMessage.appendTo($welcomeSection);
  $signUpClient.appendTo($welcomeSection);
  $signUpEngineer.appendTo($welcomeSection);

  // Append new HTML elements to the description section
  $descriptSection.appendTo($app);
  $forumSection.appendTo($descriptSection);
  $forumPic.appendTo($forumSection);
  $forumPara.appendTo($forumSection);
  $detailSection.appendTo($descriptSection);
  $detailPic.appendTo($detailSection);
  $detailPara.appendTo($detailSection);
  $stampSection.appendTo($descriptSection);
  $stampPic.appendTo($stampSection);
  $stampPara.appendTo($stampSection);
  $descriptLearnMore.appendTo($descriptSection);

  // Append new HTML elements to random divider
  $randomDiv.appendTo($app);
  $randomImg.appendTo($randomDiv);

})
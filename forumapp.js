$(document).ready(function(){
  // clear page
  var $app = $('#app');
  $app.html('');

  // Create new HTML elements for filters
  var $filterForum = $('<div class="filter-forum bg-dark"></div>');
  var $topThread = $('<button class="btn btn-outline-warning filter-button active"><i class="fas fa-trophy"></i>Top</button>');
  var $trendingThread = $('<button type="button" class="btn btn-outline-warning filter-button"><i class="fas fa-chart-line"></i>Trending</button>');
  var $debatedThread = $('<button type="button" class="btn btn-outline-warning filter-button"><i class="fas fa-pepper-hot"></i>Most Debated</button>');
  var $newestThread = $('<button type="button" class="btn btn-outline-warning filter-button"><i class="fas fa-concierge-bell"></i>Newest</button>');
  var $seeMoreThread = $('<button type="button" class="btn btn-outline-warning filter-button ellipsis"><i class="fas fa-ellipsis-h" id="ellipsis"></i></button>');

  // Create new HTML elements for creating a new post
  var $newPostSection = $('<form class="new-post dropdown bg-dark"></form>');
  var $communityButton = $('<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose a Community</button>');
  var $communityList = $('<div class="dropdown-menu" aria-labelledby="dropdownMenuButton"></div>');
  var $communityOptions = $('<a class="dropdown-item" href="#">ws/all</a><a class="dropdown-item" href="#">ws/campuswork</a><a class="dropdown-item" href="#">ws/retrofit</a><a class="dropdown-item" href="#">ws/residential</a><a class="dropdown-item" href="#">ws/renovation</a>');
  var $userCircle = $('<img class="user" alt="logged in user pic" src="assets/img/jlio.jpg">');
  var $newPost = $('<button type="button" class="btn btn-light" id="new-post">Ask a question...</button>');
  var $newPostSubmit = $('<button class="btn btn-warning" type="button" id="new-post-submit">New Post</button>');

  // Create new HTML elements for creating a new post
  var $feed = $('<div id="feed"></div>')

  // Append new HTML elements to the filter section
  $filterForum.appendTo($app);
  $topThread.appendTo($filterForum);
  $trendingThread.appendTo($filterForum);
  $debatedThread.appendTo($filterForum);
  $newestThread.appendTo($filterForum);
  $seeMoreThread.appendTo($filterForum);

  // Append new HTML elements to the new post section
  $newPostSection.appendTo($app);
  $userCircle.appendTo($newPostSection);
  $communityButton.appendTo($newPostSection);
  $communityList.appendTo($newPostSection);
  $communityOptions.appendTo($communityList);
  $newPost.appendTo($newPostSection);
  $newPostSubmit.appendTo($newPostSection);

  $feed.appendTo($app);

  // Create event handler functions
  var handleCommnityClick = function(event) {
    var selectedComm = event.target.innerText.slice(3);
    $feed.html('');
    $communityButton.text(event.target.innerText);
    renderForum(streams.users[selectedComm]);
  }

  // Create event listeners
  $(".dropdown-menu").on("click", ".dropdown-item",handleCommnityClick);

  // Define helper function to append tweets
  var renderForum = function(user) {
    user = user ? user : streams.home;
    var index = user.length - 1;
    while(index >= 0){
      var tweet = user[index];

      // Create new HTML elements for RenderFeed
      var $tweet = $('<div class="tweet container new-post bg-dark"></div>');
      var $profilePhoto = $('<img class="profile-photo" alt="profile pic">');
      var $username = $('<span class="username"></span>');
      var $message = $('<a class="message" href="#"></a>');
      var $details = $('<p class="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet vulputate nunc, sit amet pretium est suscipit vel. Integer fringilla, mi quis elementum pulvinar, lacus mi quis elementum...</p>');
      // var $timestamp = $('<span class="timeago"></span>');
      var $commentDiv = $('<div class="comment-div d-flex flex-row"></div>');
      var $iconComment = $('<i class="fas fa-comment p-1"></i>');
      var $commentNum = $('<span class="p-1" id="comment-num"></span>');
      var $hr = $('<hr>');
      var $stampDescribe = $('<div id="stamp-wrapper"></div>');
      var $stampPic = $('<img class="forum-pic" id="stamp-pic" alt="stamp of approval" src="assets/icons/stamp.png">');
      var $stampHover = $('<p class="hidden bg-dark stamp-hover" id="stamp-hover">User needs a stamp</p>');
      var $detailDescribe = $('<div id="detail-wrapper"></div>');
      var $detailPic = $('<img class="forum-pic" id="detail-pic" alt="blueprint drawings" src="assets/icons/blueprint.png">');
      var $detailHover = $('<p class="hidden bg-dark detail-hover" id="detail-hover">User needs a detail</p>');

      // Alter pic icons given conditionals
      if (!tweet.needStamp) {
        $stampPic.addClass("halftone");
      } else {
        $stampHover.addClass("icon-hover");
      }
      if (!tweet.needDetail) {
        $detailPic.addClass("halftone");
      } else {
        $detailHover.addClass("icon-hover");
      }


      // Append new HTML elements to the DOM
      $tweet.appendTo($feed);
      // $profilePhoto.attr('src', tweet.profilePhotoURL);
      // $profilePhoto.appendTo($tweet);
      $message.text(tweet.message);
      $message.appendTo($tweet);
      $details.appendTo($tweet);
      $hr.appendTo($tweet);
      $username.text('asked in: ws/' + tweet.user);
      $username.appendTo($tweet);
      // $timestamp.text(jQuery.timeago(tweet.created_at));
      // $timestamp.appendTo($tweet);
      // $iconComment.attr('src', 'assets/icons/placeholder.png');
      $commentDiv.appendTo($tweet);
      $iconComment.appendTo($commentDiv);
      $commentNum.text(' ' + Math.floor(Math.random()*20));
      $commentNum.appendTo($commentDiv);
      $stampDescribe.appendTo($tweet);
      $stampPic.appendTo($stampDescribe);
      $stampHover.appendTo($stampDescribe);
      $detailDescribe.appendTo($tweet);
      $detailPic.appendTo($detailDescribe);
      $detailHover.appendTo($detailDescribe);


      index -= 1;
    }


    // Add event listener for usernames
    // var $users = $('.username');
    // $users.on("click", handleUsernameClick);

  };
  renderForum();
})
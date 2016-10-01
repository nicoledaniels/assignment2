$(document).ready(function(){
  $("#beyonce_form").submit(function(e){
    warnings = [];

    era = $('input[name=beyonce_era]:checked').length;
    if(era == 0) {
      warnings.push("You didn't select a radio button for beyonce_era!");
    }

    anthem  = $('input[name=beyonce_anthem]:checked').length;
    if(anthem == 0) {
      warnings.push("You didn't select a checkbox for beyonce_anthem!");
    }

    emotions = $('input[name=beyonce_emotions]').val();
    if(emotions == "") {
      warnings.push("You didn't enter text for beyonce_emotions!");
    }

    rating = $('input[name=beyonce_album_rating]').val()
    if(rating == "" || isNaN(rating) || parseInt(rating) > 5 || parseInt(rating) < 1) {
      warnings.push("You entered an invalid value for beyonce_album_rating. Must be a number between 1 and 5.");
    }

    if (warnings.length > 0) {
      displayErrors = warnings.join("<br/>");
      $("#errors").html(displayErrors);
    }
    else {
      text = "<h1>Your response has been recorded! The #BeyHive rejoices</h1>";
      $("#beyonce_form").replaceWith(text);
    }

    return false;
  });
});

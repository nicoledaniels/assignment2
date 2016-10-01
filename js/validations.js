$(document).ready(function(){
  $("#beyonce_form").submit(function(e){
    var warnings = [];

    var era = $('input[name=beyonce_era]:checked').length;
    if(era == 0) {
      var message = 'You did not select a radio button for beyonce_era.'
      warnings.push(message);
    }

    var anthem  = $('input[name=beyonce_anthem]:checked').length;
    if(anthem == 0) {
      var message = 'You did not select a checkbox for beyonce_anthem.';
      warnings.push(message);
    }

    var emotions = $('input[name=beyonce_emotions]').val();
    if(emotions == "") {
      var message = 'You did not enter text for beyonce_emotions.';
      warnings.push(message);
    }

    var rating = $('input[name=beyonce_album_rating]').val()
    if(rating == "" || isNaN(rating) || parseInt(rating) > 5 || parseInt(rating) < 1) {
      var message = 'You entered an invalid value for beyonce_album_rating. Must be a number between 1 and 5.';
      warnings.push(message);
    }

    if (warnings.length > 0) {
      var displayErrors = warnings.join('<br/>');
      $("#errors").html(displayErrors);
    }
    else {
      var text = '<h1>Your response has been recorded! The #BeyHive rejoices.</h1>';
      $("#beyonce_form").replaceWith(text);
    }

    return false;
  });
});

$(function() {

get_policy();

function get_policy() {
  $.ajax({
      url: basepath + "passwordpolicy",
      type: "GET",
      contentType: 'application/json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Token', TOKEN);
      },
      success: function(data) {
        console.log(data);
        if(data.status == 'success') {
          var max_len = data.data.max_len;
          var min_len = data.data.min_len;
          var prompt = data.data.password_prompt + '';
          var username = data.data.similar_username + '';
          var character = data.data.special_character + '';
          var upper_case = data.data.upper_case + '';

          $("#max-length").val(max_len);
          $("#min-length").val(min_len);
          $("#special-character").selectpicker('val', character);
          $("#uppercase").selectpicker('val', upper_case);
          $("#can-match-username").selectpicker('val', username);
          $("#prompt").selectpicker('val', prompt);


          $(".card").fadeIn("fast");
        }
      },
      error: function(error) {
        $(".loader").hide();
        $("#submit").show();
        showError("Error in Server! Try again!")
      },
  });// Ajax
}

$("#submit").click(function() {
  var min_length = $("#min-length").val();
  var max_length = $("#max-length").val();
  var special_character = $("#special-character").val();
  var uppercase = $("#uppercase").val();
  var can_match_username = $("#can-match-username").val();
  var prompt = $("#prompt").val();

  if(min_length < 3) {
    showError("Minimum Password Length Cannot be Less than 3");
    return false;
  }
  if(max_length < 4) {
    showError("Maximum Password Length Cannot be Less than 4");
    return false;
  }

  if(parseInt(min_length) > parseInt(max_length)) {
    showError("Maximum Length Should be Greater than Minimum Length");
    return false;
  }

  $.ajax({
      url: basepath + "passwordpolicy",
      type: "PUT",
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function(xhr) {
        $(".loader").show();
        $("#submit").hide();
        xhr.setRequestHeader('Token', TOKEN);
      },
      data: JSON.stringify({
        "max_len": max_length,
        "min_len": min_length,
        "password_prompt": prompt,
        "similar_username": can_match_username,
        "special_character": special_character,
        "upper_case": uppercase
      }),
      success: function(data) {
        $(".loader").hide();
        $("#submit").show();
        if(data.status == 'success') {
          showSuccess("Policy Updated Successfully!");          
        } else {
          showError(data.message);
        }
      },
      error: function(error) {
        $(".loader").hide();
        $("#submit").show();
        showError("Error in Server! Try again!")
      },
  });// Ajax

});//Submit

})// Ready

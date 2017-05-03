$(function() {

get_policy();

function get_policy() {

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
  if(min_length > max_length) {
    showError("Maximum Length Should be Greater than Minimum Length")
  }
  return false;
  $.ajax({
      url: basepath + "/"+id,
      type: "PUT",
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function(xhr) {
        $(".loader").show();
        $("#add").hide();
        xhr.setRequestHeader('Token', TOKEN);
      },
      data: JSON.stringify({

      }),
      success: function(data) {
        $(".loader").hide();
        $("#save").show();
        if(data.status == 'success') {
          showSuccess("Policy Updated Successfully!");
        } else {
          showError(data.message);
        }
      },
      error: function(error) {
        $(".loader").hide();
        $("#save").show();
        showError("Error in Server! Try again!")
      },
  });// Ajax

});//Submit

})// Ready

var basepath = "http://192.168.100.47:9000/api/"

function clearAlert() {
  $(".sp-alert-danger").html('');
  $(".sp-alert-danger").hide();
}
function showError(message) {
  $(".sp-alert-danger").html(message);
  $(".sp-alert-danger").show();
}

String.prototype.isBlank = function (type = 'Field') {
  var value = this.toString();
  value = value.trim();
  if (value == '' || (/^\s*$/.test(value))) {
    showError(type + " is required!")
    return true;
  }
  else
  return false;
};

$(function() {  
  $("#login-btn").click(function() {
    var username = $("#username").val();
    var password = $("#password").val();
    if(username.isBlank("Username")) {
      return false;
    }
    if(password.isBlank("Password")) {
      return false;
    }
    clearAlert();
    $.ajax({
        url: basepath + "users?action=login",
        type: "POST",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function() {
          $(".loader").show();
          $("#login-btn").hide();
        },
        data: JSON.stringify({
          "user_name": username,
          "password": password
        }),
        success: function(data) {
          $(".loader").hide();
          $("#login-btn").show();
          console.log(data);
          if(data.status == 'success') {
            var token = data.data.access_token;
            console.log(token);
            localStorage.setItem('token', token);
            window.location.href = "dashboard.php";
          } else {
            showError(data.message);
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#login-btn").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  })// Login click
})

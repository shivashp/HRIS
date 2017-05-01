var basepath = "http://139.59.37.232:5000/api/";
var basepath = "http://182.93.91.147:5000/api/";
function clearAlert() {
  $(".sp-alert-danger").html('');
  $(".sp-alert-danger").hide();
}
function showError(message) {
  $(".sp-alert-danger").html(message);
  $(".sp-alert-danger").show();
}

String.prototype.isBlank = function (type) {
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
  $("#login-btn").click(function(e) {
    e.preventDefault();
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
          if(data.status == 'success') {
            var token = data.data.access_token;
            var role_id = data.data.role_id;
            localStorage.clear();
            localStorage.setItem('username', username);
            localStorage.setItem('token', token);
            delete data.data.permissions['id'];
            delete data.data.permissions['activate'];
            delete data.data.permissions['role_type'];
            localStorage.setItem("per_json", JSON.stringify(data.data.permissions))
            document.cookie = "token="+token;
            document.cookie = "permissions="+JSON.stringify(data.data.permissions);
            window.location.href = "dashboard";

          } else {
	    $(".loader").hide();
            $("#login-btn").show();
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


  function get_permissions(id) {
    $.ajax({
        url: basepath + "roles/"+id,
        type: "GET",
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
          if(data.status == 'success') {
            $(".loader").hide();
            delete data.data['id'];
            delete data.data['activate'];
            delete data.data['role_type'];
            localStorage.setItem("per_json", JSON.stringify(data.data))
            window.location.href = "dashboard";
          } else {
              showError("Error in Server! Try again!")
          }
          return false;
        },
        error: function(error) {
          $(".loader").hide();
          $("#login-btn").show();

          showError("Error in Server! Try again!")
        },
    });// Ajax
  }
})

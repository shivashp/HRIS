var basepath = "http://139.59.37.232:5000/api/";

var settimeout = 1000;
$(".logout").click(function() {
  localStorage.clear();
  window.location.href="index.html";
})
//check_permissions()
function check_permissions(){
  var default_permission  = {
    "company_mgmt_permission": "E",
    "employee_mgmt_permission": "W",
    "user_mgmt_permission": "R",
  }
  // Get permission instead of default_permission or logout user
  var permission = localStorage.getItem("per_json") || default_permission;
  $.map(permission, function(value, key) {
    key = key.split("_")[0];
    map_permission(key, value);
  });
}

function map_permission(key, value) {
  var per_details = ['none', 'read', 'write', 'execute'];
  var per_type = ['N', 'R', 'W', 'E'];
  for(var i = per_type.length-1; i=>0; i--) {
    if(value === per_type[i]){
      break;
    } else {
      var selector = '.' + key + '-' + per_details[i];
      $(selector).remove();
    }
  }
}

function toggle_top_menu(className = '.form-input') {
  $(className).slideToggle("slow");
  $('.sp-add-btn').html($('.sp-add-btn').text() == 'Add' ? 'Close' : 'Add');
}

// Slides the top menu down
function slideMenu(className = '.form-input', btnName = '.sp-add-btn'){
  $(className).slideDown();
  $(btnName).html('Close');
  $(btnName).attr("value", 1);
}

//Pulls the top menu up
function pullMenu(className = '.form-input', btnName = '.sp-add-btn', name = '') {
  $(className).slideUp("slow");
  $(btnName).html('Add '+ name);
  $(btnName).attr("value", 0);
  $("#add").attr("status", 0);
}

// Displays the error notification
function showError(message) {
  demo.showNotification('top','right',message, 'danger');
}

//Displays the success notification
function showSuccess(message) {
  demo.showNotification('top','right',message, 'success');
}

// Checks if the string is blank
String.prototype.isBlank = function (type = 'Field') {
  var value = this.toString();
  value = value.trim();
  if (value == '' || (/^\s*$/.test(value))) {
    showError(type + " Can Not Be Empty");
    return false;
  }
  else
  return true;
};

// Checks if the string is equal to another string
String.prototype.equals = function (value2, type = 'Data') {
  var value1 = this.toString();
  if (value1 != value2) {
    showError(type + " Do Not Match");
    return false;
  }
  else
  return true;
};

// Checks if the string is valid email
String.prototype.isEmail = function (type = 'Email') {
  var value = this.toString();
  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  if (!(testEmail.test(value))) {
    showError(type + " Should Be Valid");
    return false;
  }
  else
  return true;
};

function active(link){
  $(document).ready(function() {
    $(".link").removeClass("active");
    $("."+link).addClass("active");
  });
}

function checkEmpty(arr){
	arr = arr.filter(data => {return !data})
	if(arr.length > 0){
		return true;
	}
	return false;
}

$(document).ready(function() {
  $(".sp-add-btn").click(function() {
    $(".form-horizontal")[0].reset();
    var value = $(this).attr("value");
    (value == 1)?pullMenu():slideMenu();
  });//sp-add-btn
})//Document

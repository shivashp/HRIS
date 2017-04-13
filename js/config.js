var basepath = "http://139.59.37.232:5000/api/";
var TOKEN = localStorage.getItem('token');
if(TOKEN === undefined || TOKEN == '' || TOKEN == null){
  console.log("Undefined");
  window.location.href = "index.html";
}
$(".logout").click(function() {
  localStorage.clear();
  window.location.href="index.html";
})

function toggle_top_menu() {
  $(".form-input").slideToggle("slow");
  $('.sp-add-btn').html($('.sp-add-btn').text() == 'Add' ? 'Close' : 'Add');
}

// Slides the top menu down
function slideMenu(){
  $(".form-input").slideDown();
  $('.sp-add-btn').html('Close');
  $('.sp-add-btn').attr("value", 1);
}

//Pulls the top menu up
function pullMenu() {
  $(".form-input").slideUp("slow");
  $('.sp-add-btn').html('Add');
  $('.sp-add-btn').attr("value", 0);
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

var basepath = "http://182.93.91.147:5000/api/";
// var basepath = "http://192.168.100.47:5000/api/";

var settimeout = 1000;
$(".logout").click(function() {
  localStorage.clear();
  deleteAllCookies();
  window.location.href="index.php";
})

var company_display_name = localStorage.getItem("company_name");
$("#company-display-name").html(company_display_name);

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

check_permissions()
function check_permissions(){
  var permission = JSON.parse(getCookie('permissions'));
  $.map(permission, function(value, key) {
    key = key.split("_");
    if(key[1] === "emp"){
      key[0] = key[0]+key[1];
    }
    map_permission(key[0], value);
  });
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function map_permission(key, value) {
  var per_details = ['none', 'read', 'write', 'execute'];
  var per_type = ['N', 'R', 'W', 'E'];
  for(var i = per_type.length-1; i >= 0; i--) {
    if(value === per_type[i]){
      break;
    } else {
      var selector = '.' + key + '-' + per_details[i];
      $(selector).remove();
    }
  }
  $(".per").show();
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
    showError(type + " Cannot Be Empty");
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
var isNull = function(value, type = 'Field') {
  if(value === null) {
    showError(" Please Choose " + type);
    return false;
  }
  return true;
}

function parseURL() {
  var str = window.location.search;
  var objURL = {};

  str.replace(
      new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
      function( $0, $1, $2, $3 ){
          objURL[ $1 ] = $3;
      }
  );
  return objURL;
}

// Manage active state of dropdown menus
$(document).delegate(".select-with-transition", "focusin", function() {
  var selector = $(this).attr("data-id");
  $("button[data-id=\""+selector+"\"]").addClass("activeSelect");
})
$(document).delegate(".select-with-transition", "focusout", function() {
  var selector = $(this).attr("data-id");
  $("button[data-id=\""+selector+"\"]").removeClass("activeSelect");
})

// Switch nav link active status
function active(link, className = "link"){
  $(document).ready(function() {
    $("." + className).removeClass("active");
    $("."+link).addClass("active");
    if(className == 'link') {
      $("."+link).find('div').addClass('in');
    }
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
  var nav_username = localStorage.getItem('username') || 'user';
  $("#nav-username").html(nav_username);
})//Document

var basepath = 'http://139.59.37.232:4000/'

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
    return true;
  }
  else
  return false;
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
	arr = arr.filter(data => data)
	if(arr.length > 0){
		return true;
	}
	return false;
}

$(document).ready(function() {
  $(".sp-add-btn").click(function() {
    toggle_top_menu();
  });//sp-add-btn

  $(".menu").click(function() {
    var name = $(this).attr("data-name");
    switch (name) {
      case 'branch':
        get_branches();
        active('branch');
      break;

      case 'denomination':
        get_denominations();
        active('denomination');
      break;

      case 'users':
        get_users();
        active('users');
      break;
    }
  })

})//Document

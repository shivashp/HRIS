$(function() {

var EMPLOYEES;
var ROLES;

get_employees();
get_role();


$(document).delegate(".assign-user", "click", function() {
  pullMenu(".password-input");
  $("html, body").animate({scrollTop: 0});
  $(".form-horizontal")[0].reset();
  var index = $(this).attr("data-id");
  $("#save-user").attr("data-id", index);
  var value = $(this).attr("value");
  (value == 1)?pullMenu(".username-input"):slideMenu(".username-input");
});//assign-username

$(document).delegate(".update-password", "click", function() {
  var id = $(this).attr("data-id");
  var role_id = $(this).attr("data-role");
  var name = $(this).attr("data-name");
  prepareEdit(id, role_id, name);
  pullMenu(".username-input");
  $("html, body").animate({scrollTop: 0});
  $(".form-horizontal")[0].reset();
  var index = $(this).attr("data-id");
  $("#update-user").attr("data-id", index);
  var value = $(this).attr("value");
  (value == 1)?pullMenu(".password-input"):slideMenu(".password-input");
});//update-password

$(".close-menu").click(function() {
  $(".form-horizontal")[0].reset();
  $("#save-user").attr("data-id", "");
  pullMenu(".username-input");
  pullMenu(".password-input");
})

function search_data(obj, search_item, key1 = "name") {
    var index = -1;
    $.each(obj, function(key, value) {
      if(value[key1] == search_item){
        index = value.id
      }
    })
    return index;
}

function prepareEdit(id, role, name) {
  var id = search_data(ROLES, id, "id");
  $(".update-password-name").html(name);
  $("#edit-role").selectpicker('val', role);
}

$("#update-role").click(function(e) {
  e.preventDefault();
  var user_id = $("#update-user").attr("data-id");
  var role_id = $("#edit-role").val();
  $.ajax({
      url: basepath + "users/"+user_id + "?action=update_role",
      type: "PUT",
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Token', TOKEN);
      },
      data: JSON.stringify({
        role_id: role_id
      }),
      success: function(data) {
        if(data.status == 'success') {
          showSuccess("Role Updated Successfully!");
          pullMenu(".password-input");
          get_employees()
        } else {
          showError(data.message);
        }
      },
      error: function(error) {
        $(".loader").hide();
        $("#add").show();
        showError("Error in Server! Try again!")
      },
  });// Ajax
})


$("#update-user").click(function(e) {
  e.preventDefault();
  var password1 = $("#update-password").val();
  var password2 = $("#conf_update_password").val();
  var user_id = $(this).attr("data-id");

  if(!password1.isBlank("Password")){
    return false;
  }
  if(!password1.equals(password2, "Passwords")){
    return false;
  }

  $.ajax({
      url: basepath + "users/"+user_id,
      type: "PUT",
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Token', TOKEN);
      },
      data: JSON.stringify({
        password: password1
      }),
      success: function(data) {
        if(data.status == 'success') {
          showSuccess("Password Updated Successfully!");
          pullMenu(".password-input");
          get_employees()
        } else {
          showError(data.message);
        }
      },
      error: function(error) {
        $(".loader").hide();
        $("#add").show();
        showError("Error in Server! Try again!")
      },
  });// Ajax



})

$("#save-user").click(function(e) {
  e.preventDefault();
  var username = $("#username").val();
  var password = $("#password").val();
  var conf_password = $("#conf_password").val();
  var role = $("#roles").val();
  var i = $(this).attr("data-id");
  var emp_id = EMPLOYEES[i].id;

  if(!username.isBlank("Username") || !password.isBlank("Password") || !role.isBlank("Role")){
    return false;
  }
  if(!password.equals(conf_password, "Passwords")){
    return false;
  }

  var my_json = {
    "user_name": username,
    "password": password,
    "role_id": parseInt(role)
  }
  $.ajax({
      url: basepath + "users?action=registeruserforemployee&e_id="+emp_id,
      type: "POST",
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Token', TOKEN);
      },
      data: JSON.stringify(my_json),
      success: function(data) {
        if(data.status == 'success') {
          showSuccess("Username Assigned Successfully!");
          pullMenu(".username-input");
          get_employees()
        } else {
          showError(data.message);
        }
      },
      error: function(error) {
        $(".loader").hide();
        $("#add").show();
        showError("Error in Server! Try again!")
      },
  });// Ajax


})

function get_employees() {
  $.ajax({
      url: basepath + "employees",
      type: "GET",
      contentType: 'application/json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Token', TOKEN);
      },
      success: function(data) {
        var data1 = [];
        console.log(data);
        if(data.status === 'success') {
          for (var i = 0; i < data.data.length; i++) {
              var id = data.data[i].id;
              var user_id = data.data[i].user_id;
              var first_name = data.data[i].first_name;
              var last_name = data.data[i].last_name;
              var middle_name = data.data[i].middle_name;
              var address1 = data.data[i].address_one;
              var email = data.data[i].email_address;
              var country = data.data[i].country;
              var employee_number = data.data[i].employement_number;
              var role_id = data.data[i].role_id;

              middle_name = (middle_name.trim() == '')?' ':` ${middle_name} `;
              var json = {
                i: i,
                id: id,
                name: first_name + middle_name + last_name,
                address1: address1,
                employee_number: employee_number,
                country: country,
                email: email,
                user_id: user_id,
                role_id: role_id
              }
              data1.push(json);
          }
          EMPLOYEES = data1;
          $("#data-body").html(data1.map(data => generate_table(data)).join(''));
          check_permissions();
          $('#datatables').DataTable();
          $(".page-loader").hide();
          $(".card").fadeIn("fast");
        }
      },
      error: function(error) {
        $(".loader").hide();
        $("#submit").show();
        showError("Error in Server! Try again!")
      },
  });// Ajax
}// get agency employees

function generate_table(data) {
  data.user_id = data.user_id + "";
  var str = '';
  str += "<tr class=\"active-row-"+data.user_id+"\">";
  str += "                          <td>"+data.name+"<\/td>";
  str += "                          <td>"+data.employee_number+"<\/td>";
  str += "                          <td>"+data.address1+"<\/td>";
  str += "                          <td>"+data.country+"<\/td>";
  str += "                          <td class=\"text-right\">";
  if(data.user_id.trim() !== '') {
      str += "                              <a class=\"btn btn-success btn-sm btn-icon update-password\" data-id= \""+data.user_id+"\" data-name=\""+data.name+"\" data-role= \""+data.role_id+"\"><i class='material-icons'>settings</i><\/a>";
  } else {
      str += "                              <a class=\"btn btn-person btn-sm btn-icon assign-user\" data-id= \""+data.i+"\"><i class='material-icons'>person_add</i><\/a>";
  }
  str += "                          <\/td>";
  str += "                      <\/tr>";
  return str;
}

function get_role() {
  $.ajax({
      url: basepath + "roles",
      type: "GET",
      contentType: 'application/json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Token', TOKEN);
      },
      success: function(data) {
        if(data.status == 'success') {
          ROLES = data.data;
          var str = data.data.map((data) => {
      			var str = `<option value ="${data.id}">${data.role_type}</option>`;
      			return str;
      		})
      		str = str.join('');
      		$("#roles").html(str);
          $("#edit-role").html(str);
      		$('#roles').selectpicker({
            size: 7
          });
          $('#edit-role').selectpicker({
            size: 7
          });
        }
      },
      error: function(error) {
        $(".loader").hide();
        $("#submit").show();
        showError("Error in Server! Try again!")
      },
  });// Ajax
};// Get Role



})// Document

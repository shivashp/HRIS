$(function() {


  $("#add").click(function(e) {
    e.preventDefault();

    var title = $("#role-name").val();
    var code = $("#role-code").val();
    if(!title.isBlank("Title") || !code.isBlank("Code")){
      return false;
    }
    var company = $(".company:checked").val();
    var division = $(".division:checked").val();
    var agency = $(".agency:checked").val();
    var agency_employee = $(".agency-employee:checked").val();
    var division_employee = $(".division-employee:checked").val();
    var user = $(".user:checked").val();
    var config = $(".config:checked").val();
    var activate = $("#role-activate").is(':checked');

    var json = {
          "activate": activate,
          "agency_emp_perm": agency_employee,
          "agency_management_perm": agency,
          "company_management_perm": company,
          "config_management_perm": config,
          "division_emp_perm": division_employee,
          "division_management_perm": division,
          "read_management_perm": "A",
          "role_type": title,
          "role_code": code,
          "user_management_perm": user
        }


    if(role_action == 'edit') {
      update_role(json);
    } else {
      add_role(json);
    }
  })



function update_role(json) {
  $.ajax({
      url: basepath + "roles/"+ID,
      type: "POST",
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Token', TOKEN);
      },
      data: JSON.stringify(json),
      success: function(data) {
        if(data.status == 'success') {
          showSuccess(name + " Role Updated Successfully!");
          setTimeout(function() {
            window.location.href = 'role.php';
          }, settimeout);
        } else {
          showError(data.message);
        }
      },
      error: function(error) {
        showError("Error in Server! Try again!")
      },
  });// Ajax
}


function add_role(json) {
  $.ajax({
      url: basepath + "roles",
      type: "POST",
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Token', TOKEN);
      },
      data: JSON.stringify(json),
      success: function(data) {
        if(data.status == 'success') {
          showSuccess(name + " Role Updated Successfully!");
          setTimeout(function() {
            window.location.href = 'role.php';
          }, settimeout);
        } else {
          showError(data.message);
        }
      },
      error: function(error) {
        showError("Error in Server! Try again!")
      },
  });// Ajax
}


})// Document

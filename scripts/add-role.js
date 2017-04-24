$(function() {
  var params = parseURL();
  var count = Object.keys(params).length

  if(count > 0 ) {
    if(params.action == 'edit' && params.id !== undefined) {
      prepareEdit(params.id);
      $("#role-title").html("Edit Role");
    }
  }
$(".page-loader").hide();
$(".card").fadeIn("fast");

  function prepareEdit(id) {
    $.ajax({
        url: basepath + "roles/"+id,
        type: "GET",
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
          if(data.status == 'success') {
            var agency = data.data.agency_management_perm;
            var employee = data.data.agency_emp_perm;
            var company  = data.data.company_management_perm;
            var config = data.data.config_management_perm;
            var division = data.data.division_management_perm;
            var user = data.data.user_management_perm;
            var role = data.data.role_type;
            var activate = true;

            $("input[name=agency][value='"+agency+"']").prop("checked",true);
            $("input[name=agency-employee][value='"+employee+"']").prop("checked",true);
            $("input[name=company][value='"+company+"']").prop("checked",true);
            $("input[name=config][value='"+config+"']").prop("checked",true);
            $("input[name=division][value='"+division+"']").prop("checked",true);
            $("input[name=user][value='"+user+"']").prop("checked",true);
            $("#role-name").val(role);
            $("#role-code").val(role);
            if(activate) {
                $("#role-activate").prop("checked", true);
            }
            $("#add").attr("data-status", 1);
          } else {
              showError("Error in Server! Try again!")
          }
          return false;
        },
        error: function(error) {
          showError("Error in Server! Try again!")
        },
    });// Ajax
  }


  $("#add").click(function(e) {
    e.preventDefault();

    var title = $("#role-name").val();
    var code = $("#role-code").val();
    if(!title.isBlank("Title") || !code.isBlank("Code")){
      return false;
    }

  
    var activate = true;

    company = $("input[name=company]:checkbox:checked").map(function()
    {
    return $(this).val();
    }).get();
    company  = company[company.length-1]

    division = $("input[name=division]:checkbox:checked").map(function()
    {
    return $(this).val();
    }).get();
    division  = division[division.length-1]

    agency = $("input[name=agency]:checkbox:checked").map(function()
    {
    return $(this).val();
    }).get();
    agency  = agency[agency.length-1]

    agency_employee = $("input[name=agency-employee]:checkbox:checked").map(function()
    {
    return $(this).val();
    }).get();
    agency_employee  = agency_employee[agency_employee.length-1]

    user = $("input[name=user]:checkbox:checked").map(function()
    {
    return $(this).val();
    }).get();
    user  = user[user.length-1]

     config = $("input[name=config]:checkbox:checked").map(function()
    {
    return $(this).val();
    }).get();
    config  = config[config.length-1]


    var json = {
          "activate": activate,
          "agency_emp_perm": agency_employee,
          "agency_management_perm": agency,
          "company_management_perm": company,
          "config_management_perm": config,
          "division_emp_perm": "N",
          "division_management_perm": division,
          "read_management_perm": "A",
          "role_type": title,
          "role_code": code,
          "user_management_perm": user
        }


    var status = $(this).attr("data-status");
    if(status){
      update_role(json, params.id);
    } else {
      add_role(json);
    }

  })



function update_role(json, id) {
  $.ajax({
      url: basepath + "roles/"+id,
      type: "PUT",
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function(xhr) {
        $(".loader").show();
        $("#add").hide();
        xhr.setRequestHeader('Token', TOKEN);
      },
      data: JSON.stringify(json),
      success: function(data) {
        $(".loader").hide();
        $("#add").show();
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
        $(".loader").hide();
        $("#add").show();
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


/* =============================================== 
**                              Checkbox Edit Handle
** =============================================== */

$(".company").change(function() {
    var per = $(this).val();        
    map_permissions('company', per)
  })
  
  $(".division").change(function() {
    var per = $(this).val();
    map_permissions('division', per);
  })

    $(".agency").change(function() {
    var per = $(this).val();
    map_permissions('agency', per);
  })
  
  $(".user").change(function() {
    var per = $(this).val();
    map_permissions('user', per);
  })

  $(".config").change(function() {
    var per = $(this).val();
    map_permissions('config', per);
  })

  $(".agency-employee").change(function() {
    var per = $(this).val();
    map_permissions('agency-employee', per);
  })
  
  function map_permissions(name, per) {
   
    switch(per) {
      case 'R':        
        $('input[name='+name+']').prop('checked', false);
        $('input[name='+name+'][value=R]').prop('checked', true);
        break;
      case 'W':
        $('input[name='+name+']').prop('checked', false);
        $('input[name='+name+'][value=R]').prop('checked', true);
        $('input[name='+name+'][value=W]').prop('checked', true);
        break;
      case 'E':
        $('input[name='+name+']').prop('checked', false);
        $('input[name='+name+'][value=R]').prop('checked', true);
        $('input[name='+name+'][value=W]').prop('checked', true);
        $('input[name='+name+'][value=E]').prop('checked', true);
        break;
      case 'N': 
        $('input[name='+name+']').prop('checked', false);
        $('input[name='+name+'][value=N]').prop('checked', true);
        break;
     }
  }

})// Document

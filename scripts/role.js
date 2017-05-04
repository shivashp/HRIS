var ROLE_JSON;

$(function() {

get_role();


function _urlPasser(id) {
  document.cookie = "role_action=edit";
  document.cookie = "role_id="+id;
  window.location.href="add-role.php";
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
            ROLE_JSON = data.data;
            var str="";
            for (var i = 0; i < data.data.length; i++) {
              var id = data.data[i].id;
              var name = data.data[i].role_type;
              str += "<tr>";
              str += "<td></td>";
              str += "                          <td>"+name+"<\/td>";
              str += "                          <td class=\"user-write text-right\">";
              str += "                              <a class=\"edit btn btn-sm btn-success btn-icon like\" href1='add-role.php?action=edit&id="+id+"' data-id=\""+id+"\"><i class=\"material-icons\">edit<\/i><\/a>";
              str += "                          <\/td>";
              str += "                      <\/tr>";
            }
            // $('#datatables').DataTable().destroy();
            $("#data-body").html(str);
            check_permissions();
            $('#datatables').DataTable({
                   "fnRowCallback": function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                        var index = iDisplayIndexFull + 1;
                        $("td:first", nRow).html(index);
                        return nRow;
                    },
                    "columnDefs": [
                      { "width": "5px", "targets": 0 }
                    ]
                });
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
  };// Get Role


  function add_role(){
    var name = $("#role-name").val();
    if(!name.isBlank("Role")){
      return false;
    }
    $.ajax({
        url: basepath + "roles",
        type: "POST",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify({
          "role_type": name,
          'permission_two': false,
          "permission_four": false,
          "permission_three": false,
          "permission_six": false,
          "permission_nine": false,
          "permission_ten": false,
          "permission_five": false,
          "permission_one": false,
          "permission_seven": false,
          "permission_eight": false
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          if(data.status == 'success') {
            showSuccess("Role Added Successfully!");
            pullMenu();
            get_role();
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
  }// Add Role

  function edit_role(i) {
    var name = ROLE_JSON[i].role_type;
    var id = ROLE_JSON[i].id;
    $("#role-name").val(name);
    $("#add").attr({"status": 1, "data-id": id});
  }

  function update_role(){
    var name = $("#role-name").val();
    var id = $("#add").attr("data-id");
    if(!name.isBlank("Role")){
      return false;
    }
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
        data: JSON.stringify({
          "role_type": name,
          'permission_two': false,
          "permission_four": false,
          "permission_three": false,
          "permission_six": false,
          "permission_nine": false,
          "permission_ten": false,
          "permission_five": false,
          "permission_one": false,
          "permission_seven": false,
          "permission_eight": false
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          console.log(data);
          if(data.status == 'success') {
            $("#add").attr("status", 0)
            showSuccess("Role Updated Successfully!");
            pullMenu();
            get_role();
          } else {
            showError(data.message);
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#add").show();
          showError("Error in Server! Try again!")
        }
    });// Ajax
  }

  $("#add").click(function() {
    var status = $(this).attr("status");
    if(status === "1") {
      update_role();
    } else {
      add_role();
    }
  })
  $(document).delegate(".edit", "click", function() {
    var i = $(this).attr("data-id");
    _urlPasser(i);
  })
})// Document

$(function() {

  var permissions=[{"id":"two","name":'Can create &amp; update employee for all divisions',},{"id":"three","name":'Can create &amp; update employee for all agencies',},{"id":"four","name":'Can create &amp; update employee of only his/her division',},{"id":"five","name":'Can create &amp; update employee of only his/her agency',},{"id":"six","name":'User can view employee of all divisions',},{"id":"seven","name":'User can view employee of all agencies',},{"id":"eight","name":'User can view employees of his/her division',},{"id":"nine","name":'User can view employees of his/her agency',}]

  var ROLES;

  get_roles();

  $("#clear").click(function() {
    generate_table(ROLES,permissions);
  });

  $("#save").click(function() {
    for (var i = 0; i < ROLES.length; i++) {
      var my_json = {};
      for (var j = 0; j < permissions.length; j++) {
        var selector = ROLES[i].name.replace(" ","").toLowerCase() + "-" + permissions[j].id;
        var value = $("#"+selector).is(':checked');
        var permission = "permission_"+permissions[j].id;
        my_json[permission] = value;
      }

      update_role(ROLES[i].id, my_json, ROLES[i].name);
    }
    //showSuccess("Roles Updated Successfully! ");
  })


  function update_role(id, json, name){
    $.ajax({
        url: basepath + "roles/" + id,
        type: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify(json),
        success: function(data) {
          if(data.status == 'success') {
            showSuccess(name + " Role Updated Successfully!");
          } else {
            showError(data.message);
          }
        },
        error: function(error) {
          showError("Error in Server! Try again!")
        },
    });// Ajax
  }


  function get_roles() {
    $.ajax({
        url: basepath + "roles",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            ROLES = data.data.map(role => {
              role.name = role.role_type;
              return role;
            })
            generate_table(ROLES, permissions);
          }
        },
        error: function(error) {
          showError("Error in Server! Try again!")
        },
    });// Ajax
  }

  function generate_table(roles, permissions) {
    var str="";
    str += "<table id='datatables' class=\"table table-striped\">";
    str += "              <thead>";
    str += "                <th>Permission<\/th>";
    str += "                <th>Admin<\/th>";
    for (var i = 0; i < roles.length; i++) {
        str += "                <th>"+roles[i].name+"<\/th>";
    }
    str += "              <\/thead>";
    str += "              <tbody>";
    for (var i = 0; i < permissions.length; i++) {
      str += generate_row(permissions[i], roles);
    }
    str += "</tbody></table>";

    $("#permission-table").html(str);
  }



  function generate_row(row, roles) {
    var str="";
    str += "<tr>";
    str += "                    <td>"+row.name+"<\/td>";
    str += "                    <td><input type=\"checkbox\" id=\"root-admin-"+row.id+"\" checked disabled><\/td>";
    for (var i = 0; i < roles.length; i++) {
      var permission = "permission_" + row.id;
      var checked = (roles[i][permission])?"checked":"";
      var name = roles[i].name.replace(" ","").toLowerCase() + "-" + row.id;
        str += "                    <td><input type=\"checkbox\" id=\""+ name +"\" "+checked+" ><\/td>";
    }
    str += "                <\/tr>";
    return str;
  }


})

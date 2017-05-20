var PROVINCE_JSON;

$(function() {

get_province();
hris.get_region("select");

  function get_province() {
    $.ajax({
        url: basepath + "provinces",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            PROVINCE_JSON = data.data;
            var str="";
            for (var i = 0; i < data.data.length; i++) {
              var name = data.data[i].name;
              var code = data.data[i].province_code;
              var region = data.data[i].region;
              var id = data.data[i].id;
              var del_flag = data.data[i].del_flag;
              var status = status_generator("facility", "provinces", del_flag, id);
              str += "<tr>";
              str += "<td></td>";
              str += "                          <td>"+code+"<\/td>";
              str += "                          <td>"+name+"<\/td>";
              str += "                          <td>"+region+"<\/td>";
              str += "<td>"+status.label+"</td>";
              str += "                          <td class=\"per company-write text-right\">";
              str += "                              <a href=\"#\" class=\"edit btn btn-sm btn-success btn-icon like\"  data-id=\""+i+"\"><i class=\"material-icons\">edit<\/i><\/a>";
              str += status.button;
              str += "                          <\/td>";
              str += "                      <\/tr>";
            }
            $('#datatables').DataTable().destroy();
            $("#data-body").html(str);
            check_permissions();
            var table = $('#datatables').DataTable({
                   "fnRowCallback": function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                        var index = iDisplayIndexFull + 1;
                        $("td:first", nRow).html(index);
                        return nRow;
                    },
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
  };// Get Province


  function add_province(){
    var name = $("#province-name").val();
    var region = $("#region").val();
    var code = $("#province-code").val();
    if(!isNull(region, "Region") || !name.isBlank("Name") || !code.isBlank("Province Code")){
      return false;
    }
    if(code.length > 5) {
      showError("Province Code Cannot be Greater Than 5 letters/digits");
      return false;
    }
    $.ajax({
        url: basepath + "provinces",
        type: "POST",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify({
          "name": name,
          "province_code":code,
          "region_id":region
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          if(data.status == 'success') {
            showSuccess("Province Added Successfully!");
            pullMenu();
            get_province();
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
  }// Add Province

  function edit_province(i) {
    var name = PROVINCE_JSON[i].name;
    var code = PROVINCE_JSON[i].province_code;
    var region = PROVINCE_JSON[i].region_id;
    var id = PROVINCE_JSON[i].id;
    $("#province-name").val(name);
    $("#province-code").val(code);
    $('#region').selectpicker('val', region);
    $("#add").attr({"status": 1, "data-id": id});
  }

  function update_province(){
    var name = $("#province-name").val();
    var id = $("#add").attr("data-id");
    if(!name.isBlank("Name")){
      return false;
    }
    $.ajax({
        url: basepath + "provinces/"+id,
        type: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify({
          "name": name
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          console.log(data);
          if(data.status == 'success') {
            $("#add").attr("status", 0)
            showSuccess("Province Updated Successfully!");
            pullMenu();
            get_province();
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

  $("#add").click(function(e) {
    e.preventDefault();
    var status = $(this).attr("status");
    if(status === "1") {
      update_province();
    } else {
      add_province();
    }
  })
  $(document).delegate(".edit", "click", function() {
    var i = $(this).attr("data-id");
    edit_province(i);
    slideMenu();
    $("#province-name").focus();
  })


  function delete_province(id) {
    $.ajax({
        url: basepath + "provinces/"+id,
        type: "DELETE",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            showSuccess("Province Deleted Successfully!");
            get_province();
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

  $(document).delegate(".delete", "click", function() {
    var i = $(this).attr("data-id");
    delete_province(i);
  })
  function prepare_selectpicker(obj) {
    var str = obj.map(obj => {
      if(obj.del_flag){
        return '';
      }
      return `<option value = "${obj.id}">${obj.name}</option>`;
    })
    str = str.join('');
    return str;
  }

  $("#refresh-control").click(function() {
    get_province();
  })

})// Document

var REGION_JSON;

$(function() {

get_region();

  function get_region() {
    $.ajax({
        url: basepath + "regions",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            REGION_JSON = data.data;
            var str="";
            for (var i = 0; i < data.data.length; i++) {
              var name = data.data[i].name;
              var id = data.data[i].id;
              var code = data.data[i].region_code || "N/A";
              var del_flag = data.data[i].del_flag;
              var status = status_generator("facility", "regions", del_flag, id);
              str += "<tr>";
              str += "<td></td>";
              str += "                          <td>"+code+"<\/td>";
              str += "                          <td>"+name+"<\/td>";
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
  };// Get Region


  function add_region(){
    var name = $("#region-name").val();
    var code = $("#region-code").val();
    if(!name.isBlank("Name") || !code.isBlank("Region Code")){
      return false;
    }
    if(code.length > 5) {
      showError("Region Code Cannot be Greater Than 5 letters/digits")
      return false;
    }
    $.ajax({
        url: basepath + "regions",
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
          "region_code": code
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          console.log(data);
          if(data.status == 'success') {
            showSuccess("Region Added Successfully!");
            pullMenu();
            get_region();
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
  }// Add Region

  function edit_region(i) {
    var name = REGION_JSON[i].name;
    var id = REGION_JSON[i].id;
    $("#region-name").val(name);
    $("#add").attr({"status": 1, "data-id": id});
  }

  function update_region(){
    var name = $("#region-name").val();
    var id = $("#add").attr("data-id");
    if(!name.isBlank("Name")){
      return false;
    }
    $.ajax({
        url: basepath + "regions/"+id,
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
            showSuccess("Region Updated Successfully!");
            pullMenu();
            get_region();
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

  function delete_region(id) {
    $.ajax({
        url: basepath + "regions/"+id,
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
            showSuccess("Region Deleted Successfully!");
            get_region();
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
      update_region();
    } else {
      add_region();
    }
  })
  $(document).delegate(".edit", "click", function() {
    var i = $(this).attr("data-id");
    edit_region(i);
    slideMenu();
    $("#region-name").focus();
  })
  $(document).delegate(".delete", "click", function() {
    var i = $(this).attr("data-id");
    swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
            confirmButtonClass: "btn btn-success",
            cancelButtonClass: "btn btn-danger",
            buttonsStyling: false
        }).then(function() {
          delete_region(i);
        }, function(dismiss) {
        })
  })

  $("#refresh-control").click(function() {
    get_province();
  })
})// Document

var DISTRICT_JSON;
var PROVINCE;

$(function() {

get_district();

hris.get_province("select");

$("#province").change(function() {
  var province = $(this).val();
  // Finds the region details of selected Province
  var region = PROVINCE.filter((data) => {
    return data.id == province;
  });
  $("#region").val(region[0].region)
})

  function get_district() {
    $.ajax({
        url: basepath + "districts",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          console.log(data);
          if(data.status == 'success') {
            DISTRICT_JSON = data.data;
            var str="";
            for (var i = 0; i < data.data.length; i++) {
              var id = data.data[i].id;
              var name = data.data[i].name;
              var province = data.data[i].province;
              var code = data.data[i].district_code || 'N/A';
              var del_flag = data.data[i].del_flag;
              var status = status_generator("facility", "districts", del_flag, id);
              str += "<tr>";
              str += "<td></td>";
              str += "                          <td>"+code+"<\/td>";
              str += "                          <td>"+name+"<\/td>";
              str += "                          <td>"+province+"<\/td>";
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
  };// Get District


  function add_district(){
    var name = $("#district-name").val();
    var province = $("#province").val();
    var code = $("#district-code").val();
    if(!isNull(province, "Province") || !name.isBlank("District Name") || !code.isBlank("District Code")){
      return false;
    }
    if(code.length > 5) {
      showError("District Code Cannot be Greater Than 5 letters/digits");
      return false;
    }
    $.ajax({
        url: basepath + "districts",
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
          "province_id": province,
          "district_code":code
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          console.log(data);
          if(data.status == 'success') {
            showSuccess("District Added Successfully!");
            pullMenu();
            get_district();
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
  }// Add District

  function edit_district(i) {
    var name = DISTRICT_JSON[i].name;
    var id = DISTRICT_JSON[i].id;
    var province = DISTRICT_JSON[i].province_id;
    var code = DISTRICT_JSON[i].district_code;
    var region = PROVINCE.filter((data) => {
      return data.id == province;
    });
    $("#district-name").val(name);
    $("#district-code").val(code);
    $('#province').selectpicker('val', province);
    $("#region").val(region[0].region);
    $("#add").attr({"status": 1, "data-id": id});
  }

  function update_district(){
    var name = $("#district-name").val();
    var province = $("#province").val();
    var code = $("#district-code").val();
    var id = $("#add").attr("data-id");
    if(!isNull(province, "Province") || !name.isBlank("District Name") || !code.isBlank("District Code")){
      return false;
    }
    if(code.length > 5) {
      showError("District Code Cannot be Greater Than 5 letters/digits");
      return false;
    }

    $.ajax({
        url: basepath + "districts/"+id,
        type: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify({
          "name": name,
          "province_id": province,
          "district_code":code
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          console.log(data);
          if(data.status == 'success') {
            $(this).attr("status", 0)
            showSuccess("District Updated Successfully!");
            pullMenu();
            get_district();
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
      update_district();
    } else {
      add_district();
    }
  })
  $(document).delegate(".edit", "click", function() {
    var i = $(this).attr("data-id");
    edit_district(i);
    slideMenu();
    $("#district-name").focus();
  })


  function delete_district(id) {
    $.ajax({
        url: basepath + "districts/"+id,
        type: "DELETE",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            showSuccess("District Deleted Successfully!");
            get_district();
          } else {
            showError(data.message);
          }
        },
        error: function(error) {
          showError("Error in Server! Try again!")
        }
    });// Ajax
  }
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
          delete_district(i);
        }, function(dismiss) {
        })
  })

  $("#refresh-control").click(function() {
    get_district();
  })

})// Document

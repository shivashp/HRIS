var LLG_JSON;

$(function() {

get_llg();
hris.get_district("select")

  function get_llg() {
    $.ajax({
        url: basepath + "llg",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            LLG_JSON = data.data;
            var str="";
            for (var i = 0; i < data.data.length; i++) {
              var id = data.data[i].id;
              var name = data.data[i].name;
              var code = data.data[i].llg_code || 'N/A';
              var district = data.data[i].district || 'N/A';
              var del_flag = data.data[i].del_flag;
              var status = status_generator("facility", "llg", del_flag, id);
              str += "<tr>";
              str += "<td></td>";
              str += "                          <td>"+code+"<\/td>";
              str += "                          <td>"+name+"<\/td>";
              str += "                          <td>"+district+"<\/td>";
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
  };// Get LLG


  function add_llg(){
    var name = $("#llg-name").val();
    var code = $("#llg-code").val();
    var district = $("#district").val();
    if(!isNull(district, "District") || !name.isBlank("Name") || !code.isBlank("LLG Code")){
      return false;
    }
    if(code.length > 5) {
      showError("LLG Code Cannot be Greater Than 5 letters/digits");
      return false;
    }
    $.ajax({
        url: basepath + "llg",
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
          "llg_code":code,
          "district_id":district
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          console.log(data);
          if(data.status == 'success') {
            showSuccess("LLG Added Successfully!");
            pullMenu();
            get_llg();
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
  }// Add LLG

  function edit_llg(i) {
    var name = LLG_JSON[i].name;
    var id = LLG_JSON[i].id;
    $("#llg-name").val(name);
    $("#add").attr({"status": 1, "data-id": id});
  }

  function update_llg(){
    var name = $("#llg-name").val();
    var id = $("#add").attr("data-id");
    if(!name.isBlank("Name")){
      return false;
    }
    $.ajax({
        url: basepath + "llg/"+id,
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
            showSuccess("LLG Updated Successfully!");
            pullMenu();
            get_llg();
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
      update_llg();
    } else {
      add_llg();
    }
  })
  $(document).delegate(".edit", "click", function() {
    var i = $(this).attr("data-id");
    edit_llg(i);
    slideMenu();
    $("#llg-name").focus();
  })

  
  $("#refresh-control").click(function() {
    get_llg();
  })

})// Document

var RELATIVE_JSON;

$(function() {

get_relative_types();

  function get_relative_types() {
    $.ajax({
        url: basepath + "empreltypes",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            RELATIVE_JSON = data.data;
            var str="";
            for (var i = 0; i < data.data.length; i++) {
              var type = data.data[i].name;
              var code = data.data[i].code;
              var id = data.data[i].id;
              var del_flag = data.data[i].del_flag;
              var status = status_generator("empreltypes", "empreltypes", del_flag, id);
              str += "<tr>";
              str += "<td></td>";
              str += "                          <td>"+code+"<\/td>";
              str += "                          <td>"+type+"<\/td>";
              str += "<td>"+status.label+"</td>";
              str += "                          <td class=\"per config-write text-right\">";
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
                     "order": [[ 1, "desc" ]]
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
  };// Get Position Title


  function add_relative_type(){
    var type = $("#relative-type").val();
    var code = $("#relative-code").val();

    if(!type.isBlank("Relative Type") || !code.isBlank("Code")){
      return false;
    }
    $.ajax({
        url: basepath + "empreltypes",
        type: "POST",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify({
          "name":type,
          "code": code,
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          if(data.status == 'success') {
            showSuccess("Relative Type Added Successfully!");
            pullMenu();
            get_relative_types();
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
  }// Add Rank

  function edit_relative_type(i) {
    var type = RELATIVE_JSON[i].name;
    var code = RELATIVE_JSON[i].code;
    var id = RELATIVE_JSON[i].id;

    $("#relative-type").val(type);
    $("#relative-code").val(code);
    $("#add").attr({"status": 1, "data-id": id});
  }

  function update_relative_type(){
    var type = $("#relative-type").val();
    var code = $("#relative-code").val();
    var id = $("#add").attr("data-id");

    if(!type.isBlank("Relative Type") || !code.isBlank("Code")){
      return false;
    }

    $.ajax({
        url: basepath + "empreltypes/"+id,
        type: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify({
          "name":type,
          "code": code,
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          if(data.status == 'success') {
            $(this).attr("status", 0)
            showSuccess("Relative Type Updated Successfully!");
            pullMenu();
            get_relative_types();
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
      update_relative_type();
    } else {
      add_relative_type();
    }
  })
  $(document).delegate(".edit", "click", function() {
    $("#relative-type").focus();
    var i = $(this).attr("data-id");
    edit_relative_type(i);
    slideMenu();
  })

  $("#refresh-control").click(function() {
    get_relative_types();
  })
})// Document

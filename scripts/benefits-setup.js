var BENEFIT_JSON;

$(function() {

get_benefit_types();

  function get_benefit_types() {
    $.ajax({
        url: basepath + "empbentypes",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            BENEFIT_JSON = data.data;
            var str="";
            for (var i = 0; i < data.data.length; i++) {
              var type = data.data[i].name;
              var code = data.data[i].code;
              var id = data.data[i].id;
              var del_flag = data.data[i].del_flag;
              var status = status_generator("empbentypes", "empbentypes", del_flag, id);
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


  function add_benefit_type(){
    var type = $("#benefit-type").val();
    var code = $("#benefit-code").val();

    if(!type.isBlank("Benefit Type") || !code.isBlank("Code")){
      return false;
    }
    $.ajax({
        url: basepath + "empbentypes",
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
            showSuccess("Benefit Type Added Successfully!");
            pullMenu();
            get_benefit_types();
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

  function edit_benefit_type(i) {
    var type = BENEFIT_JSON[i].name;
    var code = BENEFIT_JSON[i].code;
    var id = BENEFIT_JSON[i].id;

    $("#benefit-type").val(type);
    $("#benefit-code").val(code);
    $("#add").attr({"status": 1, "data-id": id});
  }

  function update_benefit_type(){
    var type = $("#benefit-type").val();
    var code = $("#benefit-code").val();
    var id = $("#add").attr("data-id");

    if(!type.isBlank("Benefit Type") || !code.isBlank("Code")){
      return false;
    }

    $.ajax({
        url: basepath + "empbentypes/"+id,
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
            showSuccess("Benefit Type Updated Successfully!");
            pullMenu();
            get_benefit_types();
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
      update_benefit_type();
    } else {
      add_benefit_type();
    }
  })
  $(document).delegate(".edit", "click", function() {
    $("#benefit-type").focus();
    var i = $(this).attr("data-id");
    edit_benefit_type(i);
    slideMenu();
  })

  $("#refresh-control").click(function() {
    get_benefit_types();
  })
})// Document

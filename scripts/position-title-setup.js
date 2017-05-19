var POSITION_JSON;

$(function() {

get_position_title();

  function get_position_title() {
    $.ajax({
        url: basepath + "emppositions",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          console.log(data);
          if(data.status == 'success') {
            POSITION_JSON = data.data;
            var str="";
            for (var i = 0; i < data.data.length; i++) {
              var title = data.data[i].emp_pos_title;
              var code = data.data[i].emp_pos_code;
              var sequence = data.data[i].emp_pos_sequence;

              str += "<tr>";
              str += "<td></td>";
              str += "                          <td>"+code+"<\/td>";
              str += "                          <td>"+title+"<\/td>";
              str += "                          <td>"+sequence+"<\/td>";
              str += "                          <td class=\"per config-write text-right\">";
              str += "                              <a href=\"#\" class=\"edit btn btn-sm btn-success btn-icon like\"  data-id=\""+i+"\"><i class=\"material-icons\">edit<\/i><\/a>";
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
                     "order": [[ 3, "desc" ]]
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


  function add_position_title(){
    var title = $("#position-title").val();
    var code = $("#position-code").val();
    var sequence = $("#sequence").val();

    if(!title.isBlank("Position Title") || !code.isBlank("Position Code") || !sequence.isBlank("Sequence")){
      return false;
    }
    $.ajax({
        url: basepath + "emppositions",
        type: "POST",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify({
          "emp_pos_title":title,
          "emp_pos_code": code,
          "emp_pos_sequence": sequence
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          console.log(data);
          if(data.status == 'success') {
            showSuccess("Position Title Added Successfully!");
            pullMenu();
            get_position_title();
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

  function edit_position_title(i) {
    var title = POSITION_JSON[i].emp_pos_title;
    var code = POSITION_JSON[i].emp_pos_code;
    var sequence = POSITION_JSON[i].emp_pos_sequence;
    var id = POSITION_JSON[i].id;
    $("#position-title").val(title);
    $("#position-code").val(code);
    $("#sequence").val(sequence);
    $("#add").attr({"status": 1, "data-id": id});
  }

  function update_position_title(){
    var title = $("#position-title").val();
    var code = $("#position-code").val();
    var sequence = $("#sequence").val();
    var id = $("#add").attr("data-id");
    if(!title.isBlank("Position Title") || !code.isBlank("Position Code") || !sequence.isBlank("Sequence")){
      return false;
    }
    $.ajax({
        url: basepath + "emppositions/"+id,
        type: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify({
          "emp_pos_title":title,
          "emp_pos_code": code,
          "emp_pos_sequence": sequence
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          console.log(data);
          if(data.status == 'success') {
            $(this).attr("status", 0)
            showSuccess("Position Title Updated Successfully!");
            pullMenu();
            get_position_title();
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
      update_position_title();
    } else {
      add_position_title();
    }
  })
  $(document).delegate(".edit", "click", function() {
    $("#position-title").focus();
    var i = $(this).attr("data-id");
    edit_position_title(i);
    slideMenu();
  })
})// Document

var RANK_JSON;

$(function() {

get_rank();

  function get_rank() {
    $.ajax({
        url: basepath + "empcategoryranks",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          console.log(data);
          if(data.status == 'success') {
            RANK_JSON = data.data;
            var str="";
            for (var i = 0; i < data.data.length; i++) {
              var name = data.data[i].name;
              var id = data.data[i].id;
              var del_flag = data.data[i].del_flag;
              var status = status_generator("empcategoryranks", "empcategoryranks", del_flag, id);
              str += "<tr>";
              str += "<td></td>";
              str += "                          <td>"+name+"<\/td>";
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
  };// Get Rank


  function add_rank(){
    var name = $("#rank-name").val();
    if(!name.isBlank("Name")){
      return false;
    }
    $.ajax({
        url: basepath + "empcategoryranks",
        type: "POST",
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
            showSuccess("Rank Added Successfully!");
            pullMenu();
            get_rank();
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

  function edit_rank(i) {
    var name = RANK_JSON[i].name;
    var id = RANK_JSON[i].id;
    $("#rank-name").val(name);
    $("#add").attr({"status": 1, "data-id": id});
  }

  function update_rank(){
    var name = $("#rank-name").val();
    var id = $("#add").attr("data-id");
    if(!name.isBlank("Name")){
      return false;
    }
    $.ajax({
        url: basepath + "empcategoryranks/"+id,
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
            $(this).attr("status", 0)
            showSuccess("Rank Updated Successfully!");
            pullMenu();
            get_rank();
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
      update_rank();
    } else {
      add_rank();
    }
  })
  $(document).delegate(".edit", "click", function() {
    $("#rank-name").focus();
    var i = $(this).attr("data-id");
    edit_rank(i);
    slideMenu();
  })

  $("#refresh-control").click(function() {
    get_rank();
  })
})// Document

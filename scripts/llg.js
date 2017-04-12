var LLG_JSON;

$(function() {

get_llg();

  function get_llg() {
    $.ajax({
        url: basepath + "llg",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          console.log(data);
          if(data.status == 'success') {
            LLG_JSON = data.data;
            var str="";
            for (var i = 0; i < data.data.length; i++) {
              var name = data.data[i].name;
              str += "<tr>";
              str += "                          <td>"+name+"<\/td>";
              str += "                          <td class=\"text-right\">";
              str += "                              <a class=\"btn btn-simple btn-danger btn-icon edit\" data-id=\""+i+"\"><i class=\"material-icons\">edit<\/i><\/a>";
              str += "                          <\/td>";
              str += "                      <\/tr>";
            }
            $("#data-body").html(str);
            var table = $('#datatables').DataTable();
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
    if(!name.isBlank("Name")){
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
          "name": name
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

  $("#add").click(function() {
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
  })
})// Document

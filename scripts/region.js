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
          console.log(data);
          if(data.status == 'success') {
            REGION_JSON = data.data;
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
  };// Get Region


  function add_region(){
    var name = $("#region-name").val();
    if(!name.isBlank("Name")){
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
          "name": name
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

  $("#add").click(function() {
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
  })
})// Document

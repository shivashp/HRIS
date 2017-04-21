var RANK_JSON;
var CATEGORY_JSON;

$(function() {
get_category();
get_rank();


  function generate_select(data, selected = null) {
    var str="";
    for (var i = 0; i < data.length; i++) {
      var name = data[i].name;
      var id = data[i].id;
      if(name.toLowerCase() == selected) {
        str += `<option value = "${id}" selected>${name}</option>`;
      } else {
        str += `<option value = "${id}">${name}</option>`;
      }

    }
    $("#category-rank").html(str);
    $('#category-rank').selectpicker({
      size: 7,
      // liveSearch: true
    });
  }

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
            generate_select(data.data)
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get Rank

  function get_category() {
    $.ajax({
        url: basepath + "empcategories",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            console.log(data);
            CATEGORY_JSON = data.data;
            var str="";
            for (var i = 0; i < data.data.length; i++) {
              var name = data.data[i].name;
              var rank = data.data[i].emp_cat_rank;
              str += "<tr>";
              str += "                          <td>"+name+"<\/td>";
              str += "                          <td>"+rank+"<\/td>";
              str += "                          <td class=\"per config-write text-right\">";
              str += "                              <a class=\"btn btn-simple btn-danger btn-icon edit\" data-id=\""+i+"\"><i class=\"material-icons\">edit<\/i><\/a>";
              str += "                          <\/td>";
              str += "                      <\/tr>";
            }
            $("#data-body").html(str);
            check_permissions();
            var table = $('#datatables').DataTable();
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get Rank


  function add_category(){
    var name = $("#category-name").val();
    var rank = $("#category-rank").val();
    if(!name.isBlank("Name") || !rank.isBlank("Rank")){
      return false;
    }
    $.ajax({
        url: basepath + "empcategoryranks/" + rank + "/empcategories",
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
          if(data.status == 'success') {
            showSuccess("Category Added Successfully!");
            pullMenu();
            get_category();
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

  function edit_category(i) {
    var name = CATEGORY_JSON[i].name;
    var id = CATEGORY_JSON[i].id;
    var rank = CATEGORY_JSON[i].emp_cat_rank;
    var rank_id = CATEGORY_JSON[i].emp_cat_rank_id;
    $('#category-rank').selectpicker('val', rank_id);
    $("#category-name").val(name);
    $("#add").attr({"status": 1, "data-id": id});
  }

  function update_category(){
    var name = $("#category-name").val();
    var id = $("#add").attr("data-id");
    var rank = $("#category-rank").val();
    console.log(rank);
    if(!name.isBlank("Name")){
      return false;
    }
    $.ajax({
        url: basepath + "empcategories/" + id,
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
          "emp_cat_rank_id": rank
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          console.log(data);
          if(data.status == 'success') {
            $(this).attr("status", 0);
            // generate_select(RANK_JSON, null);
            $('#category-rank').selectpicker('render');
            showSuccess("Category Updated Successfully!");
            pullMenu();
            get_category();
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
      update_category();
    } else {
      add_category();
    }
  })
  $(document).delegate(".edit", "click", function() {
    var i = $(this).attr("data-id");
    edit_category(i);
    slideMenu();
  })
})// Document

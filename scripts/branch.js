$(function() {
  get_branches();

  hris.get_address_details();
  hris.get_facility("select");


  function edit_branch(i) {
    var id = BRANCH_JSON[i].id;
    var type = BRANCH_JSON[i].facility_type;
    var llg = BRANCH_JSON[i].llg;
    var district = BRANCH_JSON[i].district;
    var province = BRANCH_JSON[i].province;
    var region = BRANCH_JSON[i].region;
    var name = BRANCH_JSON[i].facility_name;

    var llg = search_data(LLG, llg);
    var district = search_data(DISTRICT, district);
    var province = search_data(PROVINCE, province);
    var region = search_data(REGION, region);
    var type = search_data(FACILITY, type);

    $("#facility").selectpicker('val', type);
    $('#llg').selectpicker('val', llg);
    $('#district').selectpicker('val', district);
    $('#province').selectpicker('val', province);
    $('#region').selectpicker('val', region);
    $("#facility-name").val(name);
    $("#add").attr({"status": 1, "data-id": id});
  }

  $(document).delegate(".edit", "click", function() {
    var i = $(this).attr("data-id");
    edit_branch(i);
    slideMenu();
    $("#facility-name").focus();
  })

  function get_branches() {
    $.ajax({
        url: basepath + "branches",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          BRANCH_JSON = data.data;
          if(data.status == 'success') {
            var st="";
            for (var i = 0; i < data.data.length; i++) {
              var district = data.data[i].district;
              var facility_name = data.data[i].facility_name;
              var facility_type = data.data[i].facility_type;
              var llg = data.data[i].llg;
              var province = data.data[i].province;
              var region = data.data[i].region;
              var id = data.data[i].id;
              var del_flag = data.data[i].del_flag;
              var status = status_generator("empcategoryranks", "branches", del_flag, id);
              st += "<tr>";
              st += "<td></td>";
              st += "                          <td>"+facility_name+"<\/td>";
              st += "                          <td>"+facility_type+"<\/td>";
              st += "                          <td>"+llg+"<\/td>";
              st += "                          <td>"+district+"<\/td>";
              st += "                          <td>"+province+"<\/td>";
              st += "                          <td>"+region+"<\/td>";
              st += "<td>"+status.label+"</td>";
              st += "                          <td class=\"per division-write text-right\">";
              st += "                              <a href=\"#\" class=\"edit btn btn-sm btn-success btn-icon\" data-id=\""+i+"\"><i class=\"material-icons\">edit<\/i><\/a>";
              st += status.button;
              st += "                          <\/td>";
              st += "                      <\/tr>";
            }
            $('#datatables').DataTable().destroy();
            $("#data-body").html(st);
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
  }


  $("#add").click(function(e) {
    e.preventDefault();
    var status = $(this).attr("status");
    if(status === "1") {
      update_branch();
    } else {
      add_branch();
    }
  })

  function update_branch() {
    var id = $("#add").attr("data-id");
    var type = $("#facility").val();
    var llg = $("#llg").val();
    var district = $("#district").val();
    var province = $("#province").val();
    var region = $("#region").val();
    var name = $("#facility-name").val();

    var arr = [name.isBlank("Name"), isNull(type, "Facility Type"), isNull(llg, "LLG"), isNull(district,"District"), isNull(province, "Province"), isNull(region, "Region")];
    if(checkEmpty(arr)){
      return false;
  }


    $.ajax({
        url: basepath + "branches/"+id,
        type: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify({
          // "is_branch": "true",
          "facility_name": name,
          "facility_type_id": type,
          "llg_id": llg,
          "district_id": district,
          "province_id": province,
          "region_id": region
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          if(data.status == 'success') {
            showSuccess("Division Updated Successfully!");
            pullMenu();
            $("#facility").selectpicker('val', -1);
            $('#llg').selectpicker('val', -1);
            $('#district').selectpicker('val', -1);
            $('#province').selectpicker('val', -1);
            $('#region').selectpicker('val', -1);
            get_branches();
            reset_dropdown();
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
  }

  $(".sp-add-btn").click(function() {
    reset_dropdown();
  })

  function reset_dropdown() {
    $("#facility").selectpicker('val', -1);
    $('#llg').selectpicker('val', -1);
    $('#district').selectpicker('val', -1);
    $('#province').selectpicker('val', -1);
    $('#region').selectpicker('val', -1);
  }

  function add_branch() {
    var type = $("#facility").val();
    var llg = $("#llg").val();
    var district = $("#district").val();
    var province = $("#province").val();
    var region = $("#region").val();
    var name = $("#facility-name").val();

    /* -------------------- New -------------- */
    var address1 = $("#address1").val();
    var address2 = $("#address2").val();
    var village = $("#village").val();
    var email = $("#email").val();
    var phone = $("#phone").val();



    var arr = [name.isBlank("Name"), isNull(type, "Facility Type"), isNull(llg, "LLG"), isNull(district,"District"), isNull(province, "Province"), isNull(region, "Region")];
    if(checkEmpty(arr)){
			return false;
	}


    $.ajax({
        url: basepath + "branches",
        type: "POST",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify({
          // "is_branch": "true",
          "facility_name": name,
          "facility_type_id": type,
          "llg_id": llg,
          "district_id": district,
          "province_id": province,
          "region_id": region
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          if(data.status == 'success') {
            showSuccess("Division Added Successfully!");
            pullMenu();
            get_branches();
            reset_dropdown();
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
  }// Add

  function search_data(obj, search_item, key1 = "name") {
      var index = -1;
      $.each(obj, function(key, value) {
        if(value[key1] === search_item){
          index = value.id
        }
      })
      return index;
  }

  $("#refresh-control").click(function() {
    get_branches();
  })

})

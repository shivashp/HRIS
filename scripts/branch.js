$(function() {
  get_branches();
  get_llg();
  get_district();
  get_province();
  get_region();
  get_facility();

  var LLG, DISTRICT, PROVINCE, REGION, FACILITY;


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
              st += "<tr>";
              st += "<td></td>";
              st += "                          <td>"+facility_name+"<\/td>";
              st += "                          <td>"+facility_type+"<\/td>";
              st += "                          <td>"+llg+"<\/td>";
              st += "                          <td>"+district+"<\/td>";
              st += "                          <td>"+province+"<\/td>";
              st += "                          <td>"+region+"<\/td>";
              st += "                          <td class=\"per division-write text-right\">";
              st += "                              <a href=\"#\" class=\"edit btn btn-sm btn-success btn-icon\" data-id=\""+i+"\"><i class=\"material-icons\">edit<\/i><\/a>";
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

  function get_llg() {
    if(localStorage.getItem("llg")) {
      var llg = JSON.parse(localStorage.getItem("llg"));
      LLG = llg;
      var llg_obj = prepare_selectpicker(llg);
      $("#llg").html(llg_obj);
      $('#llg').selectpicker({
        size: 7
      });
      return false;
    }
    $.ajax({
        url: basepath + "llg",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            LLG = data.data;
            localStorage.setItem("llg", JSON.stringify(data.data))
            var llg_obj = prepare_selectpicker(data.data);
            $("#llg").html(llg_obj);
            $('#llg').selectpicker({
              size: 7
            });
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get LLG

  function get_district() {
    var DISTRICT_JSON = {};
    if(localStorage.getItem("district")) {
      var district = JSON.parse(localStorage.getItem("district"));
      DISTRICT = district;
      var district_obj = prepare_selectpicker(district);
      $("#district").html(district_obj);
      $('#district').selectpicker({
        size: 7
      });
      return false;
    }
    $.ajax({
        url: basepath + "districts",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            DISTRICT = data.data;
            localStorage.setItem("district", JSON.stringify(data.data))
            var district_obj = prepare_selectpicker(data.data);
            $("#district").html(district_obj);
            $('#district').selectpicker({
              size: 7
            });
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get District

  function get_province() {
    var PROVINCE_JSON = {};
    if(localStorage.getItem("province")) {
      var province = JSON.parse(localStorage.getItem("province"));
      PROVINCE = province;
      var province_obj = prepare_selectpicker(province);
      $("#province").html(province_obj);
      $('#province').selectpicker({
        size: 7
      });
      return false;
    }
    $.ajax({
        url: basepath + "provinces",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            PROVINCE = data.data;
            localStorage.setItem("province", JSON.stringify(data.data))
            var province_obj = prepare_selectpicker(data.data);
            $("#province").html(province_obj);
            $('#province').selectpicker({
              size: 7
            });
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get Province

  function get_region() {
    var REGION_JSON = {};
    if(localStorage.getItem("region")) {
      var region = JSON.parse(localStorage.getItem("region"));
      REGION = region;
      var region_obj = prepare_selectpicker(region);
      $("#region").html(region_obj);
      $('#region').selectpicker({
        size: 7
      });
      return false;
    }
    $.ajax({
        url: basepath + "regions",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            REGION = data.data;
            localStorage.setItem("region", JSON.stringify(data.data))
            var region_obj = prepare_selectpicker(data.data);
            $("#region").html(region_obj);
            $('#region').selectpicker({
              size: 7
            });
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get Region

  function get_facility() {
    var FACILITY_JSON = {};
    if(localStorage.getItem("facility")) {
      var facility = JSON.parse(localStorage.getItem("facility"));
      FACILITY = facility;
      var facility_obj = prepare_selectpicker(facility);
      $("#facility").html(facility_obj);
      $('#facility').selectpicker({
        size: 7
      });
      return false;
    }
    $.ajax({
        url: basepath + "facilities",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          console.log(data);
          if(data.status == 'success') {
            FACILITY = data.data;
            localStorage.setItem("facility", JSON.stringify(data.data))
            var facility_obj = prepare_selectpicker(data.data);
            $("#facility").html(facility_obj);
            $('#facility').selectpicker({
              size: 7
            });
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get Facility

  function prepare_selectpicker(obj) {
    var str = obj.map(obj => {
      return `<option value = "${obj.id}">${obj.name}</option>`;
    })
    str = str.join('');
    return str;
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

})

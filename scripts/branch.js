$(function() {
  get_branches();
  var llg = JSON.parse(localStorage.getItem('llg')) || get_llg();
  var district = JSON.parse(localStorage.getItem('district')) || get_district();
  var province = JSON.parse(localStorage.getItem('province')) || get_province();
  var region = JSON.parse(localStorage.getItem('region')) || get_region();
  var facility = JSON.parse(localStorage.getItem('facility')) || get_facility();

  var LLG = llg;
  var DISTRICT = district;
  var PROVINCE = province;
  var REGION = region;
  var FACILITY = facility;
  var BRANCH_JSON;


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
              st += "                          <td>"+facility_name+"<\/td>";
              st += "                          <td>"+facility_type+"<\/td>";
              st += "                          <td>"+llg+"<\/td>";
              st += "                          <td>"+district+"<\/td>";
              st += "                          <td>"+province+"<\/td>";
              st += "                          <td>"+region+"<\/td>";
              st += "                          <td class=\"text-right\">";
              st += "                              <a href=\"#\" class=\"edit btn btn-sm btn-success btn-icon\" data-id=\""+i+"\"><i class=\"material-icons\">edit<\/i><\/a>";
              st += "                          <\/td>";
              st += "                      <\/tr>";
            }
            $("#data-body").html(st);
            var table = $('#datatables').DataTable();
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
    var LLG_JSON = {};
    $.ajax({
        url: basepath + "llg",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            localStorage.setItem("llg", JSON.stringify(data.data))
            LLG_JSON = data.data;
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
    $.ajax({
        url: basepath + "districts",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            DISTRICT_JSON = data.data;
            localStorage.setItem("district", JSON.stringify(data.data))
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
    $.ajax({
        url: basepath + "provinces",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          console.log(data);
          if(data.status == 'success') {
            PROVINCE_JSON = data.data;
            localStorage.setItem("province", JSON.stringify(data.data))
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
    $.ajax({
        url: basepath + "regions",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            REGION_JSON = data.data;
            localStorage.setItem("region", JSON.stringify(data.data))
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
            FACILITY_JSON = data.data;
            localStorage.setItem("facility", JSON.stringify(data.data))
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get Facility

  function prepare_dropDown(){
    var llg_obj = llg.map((llg) => {
      return `<option value = "${llg.id}">${llg.name}</option>`;
    })
    var district_obj = district.map((llg) => {
      return `<option value = "${llg.id}">${llg.name}</option>`;
    })
    var province_obj = province.map((llg) => {
      return `<option value = "${llg.id}">${llg.name}</option>`;
    })
    var region_obj = region.map((llg) => {
      return `<option value = "${llg.id}">${llg.name}</option>`;
    })
    var facility_obj = facility.map((llg) => {
      return `<option value = "${llg.id}">${llg.name}</option>`;
    })

    district_obj = district_obj.join('');
    llg_obj = llg_obj.join('');
    province_obj = province_obj.join('');
    region_obj = region_obj.join('');
    facility_obj = facility_obj.join('');


    $("#province").html(province_obj);
    $('#province').selectpicker({
      size: 7
    });
    $("#facility").html(facility_obj);
    $('#facility').selectpicker({
      size: 7
    });
    $("#region").html(region_obj);
    $('#region').selectpicker({
      size: 7
    });
    $("#district").html(district_obj);
    $('#district').selectpicker({
      size: 7
    });
    $("#llg").html(llg_obj);
    $('#llg').selectpicker({
      size: 7
    });
  }

  prepare_dropDown();


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
    var arr = [name.isBlank("Name"), type.isBlank("Facility Type"), llg.isBlank("LLG"), district.isBlank("District"), province.isBlank("Province"), region.isBlank("Region")];
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
            showSuccess("Branch Updated Successfully!");
            pullMenu();
            $("#facility").selectpicker('render');
            $('#llg').selectpicker('render');
            $('#district').selectpicker('render');
            $('#province').selectpicker('render');
            $('#region').selectpicker('render');
            get_branches();
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

  function add_branch() {
    var type = $("#facility").val();
    var llg = $("#llg").val();
    var district = $("#district").val();
    var province = $("#province").val();
    var region = $("#region").val();
    var name = $("#facility-name").val();
    var arr = [name.isBlank("Name"), type.isBlank("Facility Type"), llg.isBlank("LLG"), district.isBlank("District"), province.isBlank("Province"), region.isBlank("Region")];
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
            showSuccess("Branch Added Successfully!");
            pullMenu();
            get_branches();
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

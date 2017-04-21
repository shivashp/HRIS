$(function() {
  get_agencies();
  get_llg();
  get_district();
  get_province();
  get_region();
  get_facility();

  function get_agencies() {
    $.ajax({
        url: basepath + "agencies",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
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
              st += "                          <td class=\"per agency-write text-right\">";
              st += "                              <a href=\"#\" class=\"edit btn btn-sm btn-success btn-icon like\"><i class=\"material-icons\">edit<\/i><\/a>";
              st += "                          <\/td>";
              st += "                      <\/tr>";
            }
            $("#data-body").html(st);
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
  }

  function get_llg() {
    if(localStorage.getItem("llg")) {
      var llg = JSON.parse(localStorage.getItem("llg"));
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
            DISTRICT_JSON = data.data;
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
            PROVINCE_JSON = data.data;
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
            REGION_JSON = data.data;
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
            FACILITY_JSON = data.data;
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
        url: basepath + "agencies",
        type: "POST",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify({
          // "is_branch": "false",
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
            showSuccess("Agency Added Successfully!");
            pullMenu();
            get_agencies();
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


  })// Add


})

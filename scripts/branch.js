$(function() {
  get_branches();

  function get_branches() {
    $.ajax({
        url: basepath + "branches",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          console.log(data);
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
              st += "                              <a href=\"#\" class=\"edit btn btn-sm btn-success btn-icon like\"><i class=\"material-icons\">edit<\/i><\/a>";
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


  var llg = JSON.parse(localStorage.getItem('llg')) || get_llg();
  var district = JSON.parse(localStorage.getItem('district')) || get_district();
  var province = JSON.parse(localStorage.getItem('province')) || get_province();
  var region = JSON.parse(localStorage.getItem('region')) || get_region();
  var facility = JSON.parse(localStorage.getItem('facility')) || get_facility();

  

})

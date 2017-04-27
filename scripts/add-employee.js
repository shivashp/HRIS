$(function() {
  get_agencies();
  get_branches();
  get_llg();
  get_district();
  get_province();
  get_region();
  get_type();
  get_category();

  $(".select-with-transition").focusin(function() {
    var selector = $(this).attr("data-id");
    $("button[data-id=\""+selector+"\"]").addClass("activeSelect");
    // $(this).parent().addClass("open");
  })
  $(".select-with-transition").focusout(function() {
    var selector = $(this).attr("data-id");
    $("button[data-id=\""+selector+"\"]").removeClass("activeSelect");
  })


$("#add").click(function(e) {
  $("#myform").validate({
    rules: {
      firstname: {
        required: true,
        minlength: 3
      },
      lastname: {
        required: true,
        minlength: 3
      },
      dob: {
        required: true
      },
      // sex: {
      //   required: true
      // },
      address1: {
        required: true,
        minlength: 3
      },
      village: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      },
      employeenumber: {
        required: true
      },
      salarystep: {
        required: true
      },
      startdate: {
        required: true
      },
      retirement_age: {
        required: true,
        min:17,
        max:70
      }
    },
    messages: {
      firstname: 'First name is required',      
    },
    errorPlacement: function(error, element) {
        $(element).next('div').html(error);
        $(element).parent('div').addClass('has-error');
     },
    submitHandler: function() {
      add_data();
    }
  });
})


function next_select(nextSelect) {

  $(nextSelect).selectpicker("show");
}

function add_data() {
  var first_name = $("#first-name").val();
  var middle_name = $("#middle-name").val();
  var last_name = $("#last-name").val();
  var sex = $("#sex").val();
  var age = $("#age").val() || '23';
  var dob = $("#dob").val();
  var address1 = $("#address1").val();
  var address2 = $("#address2").val();
  var village  = $("#village").val();
  var llg = $("#llg").val();
  var district = $("#district").val();
  var province = $("#province").val();
  var region = $("#region").val();
  var country = $("#country").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var phone1 = $("#phone1").val();
  var employee_number = $("#employee-number").val();
  var salary_step = $("#salary-step").val();
  var retirement_age = $("#retirement-age").val();
  var start_date = $("#start-date").val();
  var branch_agency = $("#branch-agency").val();
  var branch_agency_id = (branch_agency == "branch")?$("#branch").val():$("#agency").val();
  var employee_category = $("#employee-category").val();
  var employee_type = $("#employee-type").val();
  var end_date = $("#contract-end-date").val() || '';
  var is_branch = $("#branch-agency").val() == 'branch'?true:false;

  if(!sex.isBlank("Sex") || !country.isBlank("Country") || !branch_agency_id.isBlank("Branch / Agency") || !employee_category.isBlank("Employee Category") || !employee_type.isBlank("Employee Type")){
    return false;
  }
  if(branch_agency.trim() === '' || branch_agency == undefined) {
    showError("Please choose Branch / Agency")
    return false;
  }

  dob = new Date(dob);
  start_date = new Date(start_date);
  dob = moment(dob).format("YYYY-MM-DD");
  start_date = moment(start_date).format("YYYY-MM-DD");
  if(end_date.trim() !== ''){
    end_date = new Date(end_date);
    end_date = moment(end_date).format("YYYY-MM-DD");
  }

  var my_json = {
    "first_name" : first_name,
    "middle_name": middle_name,
    "last_name" : last_name,
    "sex" : sex,
    "age" : age,
    "date_of_birth" : dob,
    "address_one" : address1,
    "address_two" : address2,
    "village": village,
    "llg": llg,
    "district": district,
    "province": province,
    "region": region,
    "country": country,
    "email_address": email,
    "contact_number": phone,
    "alt_contact_number": phone1,
    "employement_number" :employee_number,
    "salary_step": salary_step,
    "retirement_age" : retirement_age,
    "date_of_commencement": start_date,
    "employee_branch_id" : branch_agency_id,
    "employee_category_id" : employee_category,
    "employee_type_id" : employee_type,
    "contract_end_date": end_date,
    "is_branch":is_branch
  }

  // Traverse each data and remove any blank, null and undefined value rows
  $.each(my_json, function(key, value) {
    if(value === '' || value === null || value === undefined) {
      delete my_json[key];
    }
  })

  $.ajax({
      url: basepath + "employees",
      type: "POST",
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function(xhr) {
        $(".loader").show();
        $("#add").hide();
        xhr.setRequestHeader('Token', TOKEN);
      },
      data: JSON.stringify(my_json),
      success: function(data) {
        $(".loader").hide();
        $("#add").show();
        if(data.status == 'success') {
          showSuccess("Employee Added Successfully!");
          setTimeout(function() {
              window.location.href= 'employee.php'
          }, 1000)
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





/* =============================================================
**        Show Hide Branch / Agency and Contract end date
** ============================================================= */

  $("#branch-agency").change(function() {
    var name = $(this).val();
    (name === "branch")?showBranch():showAgency();
  });

  $("#employee-type").change(function() {
    var type = $("#employee-type option:selected").text();
    type = type.toLowerCase().trim();
    (type === 'contract')?$("#contract-end").show():$("#contract-end").hide();
  })

  function showBranch() {
    $("#choose-agency").hide();
    $("#choose-branch").show();
  }
  function showAgency() {
    $("#choose-branch").hide();
    $("#choose-agency").show();
  }


/* =============================================================
**                  Location & Dropdown Data
** ============================================================= */
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
          var str = data.data.map(obj => {
            return `<option value = "${obj.id}">${obj.name}</option>`;
          })
          str = str.join('');
          $("#employee-category").html(str);
          $('#employee-category').selectpicker({
            size: 7,
            liveSearch: true
          });
        }
      },
      error: function(error) {
        $(".loader").hide();
        $("#submit").show();
        showError("Error in Server! Try again!")
      },
  });// Ajax
};// Get Category

function get_type() {
  $.ajax({
      url: basepath + "employeetypes",
      type: "GET",
      contentType: 'application/json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Token', TOKEN);
      },
      success: function(data) {
        if(data.status == 'success') {
          var str = data.data.map(obj => {
            return `<option value = "${obj.id}">${obj.name}</option>`;
          })
          str = str.join('');
          $("#employee-type").html(str);
          $('#employee-type').selectpicker({
            size: 7
          });
        }
      },
      error: function(error) {
      },
  });// Ajax
};// Get Type

function get_agencies() {
  if(localStorage.getItem("agencies")) {
    var agency = JSON.parse(localStorage.getItem("agencies"));
    AGENCY = agency;
    var agency_obj = agency.map(obj => {
      return `<option value = "${obj.id}">${obj.facility_name}</option>`;
    })
    agency_obj = agency_obj.join('');
    $("#agency").html(agency_obj);
    $('#agency').selectpicker({
      size: 7,
      liveSearch: true
    });
    return false;
  }
  $.ajax({
      url: basepath + "agencies",
      type: "GET",
      contentType: 'application/json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Token', TOKEN);
      },
      success: function(data) {
        if(data.status == 'success') {
          AGENCY = data.data;
          localStorage.setItem("agencies", JSON.stringify(data.data))
          var agency_obj = data.data.map(obj => {
            return `<option value = "${obj.id}">${obj.facility_name}</option>`;
          })
          agency_obj = agency_obj.join('');
          $("#agency").html(agency_obj);
          $('#agency').selectpicker({
            size: 7,
            liveSearch: true
          });
        }
      },
      error: function(error) {
        $(".loader").hide();
        $("#submit").show();
        showError("Error in Server! Try again!")
      },
  });// Ajax
}

function get_branches() {
  if(localStorage.getItem("branches")) {
    var branches = JSON.parse(localStorage.getItem("branches"));
    BRANCHES = branches;
    var branch_obj = branches.map(obj => {
      return `<option value = "${obj.id}">${obj.facility_name}</option>`;
    })
    branch_obj = branch_obj.join('');
    $("#branch").html(branch_obj);
    $('#branch').selectpicker({
      size: 7,
      liveSearch: true
    });
    return false;
  }
  $.ajax({
      url: basepath + "branches",
      type: "GET",
      contentType: 'application/json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Token', TOKEN);
      },
      success: function(data) {
        if(data.status == 'success') {
          BRANCHES = data.data;
          localStorage.setItem("branches", JSON.stringify(data.data))
          var branch_obj = data.data.map(obj => {
            return `<option value = "${obj.id}">${obj.facility_name}</option>`;
          })
          branch_obj = branch_obj.join('');
          $("#branch").html(branch_obj);
          $('#branch').selectpicker({
            size: 7,
            liveSearch: true
          });
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
      size: 7,
      liveSearch: true
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
            size: 7,
            liveSearch: true
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
      size: 7,
      liveSearch: true
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
            size: 7,
            liveSearch: true
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
      size: 7,
      liveSearch: true
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
            size: 7,
            liveSearch: true
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
      size: 7,
      liveSearch: true
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
            size: 7,
            liveSearch: true
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

function prepare_selectpicker(obj) {
  var str = obj.map(obj => {
    return `<option value = "${obj.name}">${obj.name}</option>`;
  })
  str = str.join('');
  return str;
}

var COUNTRY_LIST = ["Afghanistan","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Georgia","Germany","Ghana",
    "Greece","Greenland","Grenada","Malaysia","Maldives","Mali","Malta","Mauritania","Mozambique","Namibia","Nepal","Netherlands","Pakistan","Palestine","Panama","Papua New Guinea","United Arab Emirates","United Kingdom","United States"];

    function get_country() {
      var country_obj = COUNTRY_LIST.map((country) => {
        var str = `<option value ="${country}">${country}</option>`;
        return str;
      })
      country_obj = country_obj.join('');
      $("#country").html(country_obj);
      $("#country").selectpicker({
        size: 7,
        liveSearch: true
      });
    }

    get_country();

})// Document

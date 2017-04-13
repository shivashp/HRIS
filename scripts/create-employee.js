$(function() {
  var COUNTRY_LIST = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
  		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
  		,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
  		,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
  		,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
  		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
  		,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
  		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
  		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
  		,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
  		,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
  		,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
  		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
  		,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
  		,"Yemen","Zambia","Zimbabwe"];

get_country();
get_agencies();
get_branches();
get_type();
get_category();

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
            var str = formatToOption(data.data);
            $("#employee-category").html(str);
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
            var str = formatToOption(data.data);
            $("#employee-type").html(str);
          }
        },
        error: function(error) {

        },
    });// Ajax
  };// Get Type

  function get_branches() {
    $.ajax({
        url: basepath + "branches",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            var str = formatToOption(data.data, 'branch');
            $("#branch").html(str);
            console.log(data);
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  }

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
            var str = formatToOption(data.data, true);
            $("#agency").html(str);
          }
        },
        error: function(error) {

        },
    });// Ajax
  }

  function get_district() {
    $.ajax({
        url: basepath + "districts",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            var str = formatToOption(data.data);
            $("#district").html(str);
          }
        },
        error: function(error) {
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get District

  function get_llg() {
    $.ajax({
        url: basepath + "llg",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            var str = formatToOption(data.data);
            $("#llg").html(str);
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get LLG

  function get_province() {
    $.ajax({
        url: basepath + "provinces",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            var str = formatToOption(data.data);
            $("#province").html(str);
          }
        },
        error: function(error) {
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get Province

  function get_region() {
    $.ajax({
        url: basepath + "regions",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            var str = formatToOption(data.data);
            $("#region").html(str);
          }
        },
        error: function(error) {
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get Region

  function get_country() {
    var country_obj = COUNTRY_LIST.map((country) => {
      var str = `<option value ="${country}">${country}</option>`;
      return str;
    })
    country_obj = country_obj.join('');
    $("#country").html(country_obj);
  }

  function formatToOption(data, type = false){
    if(!type){
      var obj = data.map((data) => {
        var str = `<option value ="${data.id}">${data.name}</option>`;
        return str;
      })
    } else {
      var obj = data.map((data) => {
        var str = `<option value ="${data.id}">${data.facility_name}</option>`;
        return str;
      })
    }
    obj = obj.join('');
    return obj;
  }

// Don't Send Blank Data
  $("#finish").click(function() {
    var first_name = $("#first-name").val();
    var middle_name = $("#middle-name").val();
    var last_name = $("#last-name").val();
    var sex = $("#sex").val();
    var age = $("#age").val();
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

    dob = new Date(dob);
    start_date = new Date(start_date);
    dob = moment(dob).format("YYYY-MM-DD");
    start_date = moment(start_date).format("YYYY-MM-DD");
    if(end_date.trim() == ''){
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
      "contract_end_date": end_date
    }

    // Traverse each data and remove any blank, null and undefined value rows
    $.each(my_json, function(key, value) {
      if(value == '' || value == null || value == undefined) {
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


  })//button click



  function generate_json(arr){
    var obj = arr.filter(data => {
      data = data.trim();
      if(data === ''){
        return false;
      } else {
        return true;
      }
    })
    return obj;
  }









})//document

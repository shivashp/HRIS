$(function() {

  hris.get_address_details();
  hris.get_facility("select");
  hris.get_branches("select");
  hris.get_type("select");
  hris.get_agencies("select");
  hris.get_category("select");
  hris.get_position_title("select");
  hris.get_country();

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
  var salutation = $("#salutation").val();
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
  var position_title = $("#position-title").val();
  var employee_type = $("#employee-type").val();
  var end_date = $("#contract-end-date").val() || '';
  var is_branch = $("#branch-agency").val() == 'branch'?true:false;

  if(!salutation.isBlank("Salutation") || !sex.isBlank("Sex") || !country.isBlank("Country") || !branch_agency_id.isBlank("Branch / Agency") || !employee_category.isBlank("Employee Category") || !position_title.isBlank("Position Title") || !employee_type.isBlank("Employee Type")){
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
    "is_branch":is_branch,
    "employee_position_id": position_title
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

})// Document

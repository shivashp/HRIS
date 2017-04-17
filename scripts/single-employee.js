$(function() {
	get_user_details();

	function get_user_details() {
		$.ajax({
        url: basepath + "employees/"+action_id,
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
        console.log(data);
          if(data) {
            var id = data.id;
            var first_name = data.first_name;
            var last_name = data.last_name;
            var middle_name = data.middle_name;
						var age = data.age;
						var sex = data.sex;
						var dob = data.date_of_birth;
            var address1 = data.address_one;
						var address2 = data.address_two;
						var village = data.village;
						var district = data.district;
						var region = data.region;
            var email = data.email_address;
            var contact_number =data.contact_number;
						var phone1 = data.alt_phone_number;
            var country = data.country;
            var employee_number = data.employement_number;
						var retirement_age = data.retirement_age;
						var branch_agency = "N/A";
						var emp_type = "N/A";

						middle_name = (middle_name.trim() == '')?' ':` ${middle_name} `;

						$("#prfl-name").html(first_name + middle_name + last_name);
						$("#first-name").html(first_name);
						$("#last-name").html(last_name);
						$("#sex").html(sex);

						$("#middle-name").html(middle_name);
						$("#age").html(age);
						$("#dob").html(dob);
						$("#address1").html(address1);
						$("#village").html(village);
						$("#district").html(district);
						$("#region").html(region);
						$("#phone").html(contact_number);
						$("#phone1").html(phone1);

						$("#address2").html(address2);
						$("#llg").html(llg);
						$("#province").html(province);
						$("#country").html(country);
						$("#email").html(email);

						$("#emp-number").html(employee_number);
						$("#retirement-age").html(retirement_age);
						$("#branch-agency").html(branch_agency);
						$("#emp-type").html(emp_type);
						$("#salary-step").html(salary_step);

          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
	}
});

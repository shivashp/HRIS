$(function() {
	get_user_details();
	get_trainings();
	get_certifications();
	get_qualifications();


	$("#add-training").click(function() {
    $(".form-horizontal")[0].reset();
    var value = $(this).attr("value");
    (value == 1)?pullMenu(".training-input", "#add-training", "Training"):slideMenu(".training-input", "#add-training");
  });//add-training

	$("#add-certification").click(function() {
    $(".form-horizontal")[0].reset();
    var value = $(this).attr("value");
    (value == 1)?pullMenu(".certification-input", "#add-certification", "Certification"):slideMenu(".certification-input", "#add-certification");
  });//add-certification

	$("#add-qualification").click(function() {
    $(".form-horizontal")[0].reset();
    var value = $(this).attr("value");
    (value == 1)?pullMenu(".qualification-input", "#add-qualification", "Qualification"):slideMenu(".qualification-input", "#add-qualification");
  });//add-qualification


	$("#save-training").click(function() {
		var name = $("#name").val();
		var organizer = $("#organizer-name").val();
		var funding = $("#funding-source").val();
		var duration = $("#duration").val();
		var institute = $("#institute").val();
		var city = $("#training-city").val();
		var state = $("#training-state").val();
		var province = $("#training-province").val();
		var start_date = $("#start-date").val() || '';
		var end_date = $("#end-date").val() || '';
		var country = $("#training-country").val();

		if(end_date.trim() !== ''){
      end_date = new Date(end_date);
      end_date = moment(end_date).format("YYYY-MM-DD");
    }
		if(start_date.trim() !== ''){
      start_date = new Date(start_date);
      start_date = moment(start_date).format("YYYY-MM-DD");
    }

		 var my_json = {
			 "organiser_name" : organizer,
			 "funding_source" : funding,
			 "duration" : duration,
			 "institue" : institute,
			 "city" : city,
			 "state" : state,
			 "province" : province,
			 "country" : country,
			 "start_date" : start_date,
			 "end_date" : end_date,
			 "name" : name,
			 "country": country
		 }

		 $.each(my_json, function(key, value) {
       if(value == '' || value == null || value == undefined) {
         delete my_json[key];
       }
     })

		$.ajax({
        url: basepath + "employees/"+action_id+"/trainings",
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
            showSuccess("Training Added Successfully!");
            pullMenu(".training-input", "#add-training");
						get_trainings();
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
	})

	$("#save-certification").click(function() {
		var reg_type = $("#registration-type").val();
		var reg_body = $("#regulatory-body").val();
		var reg_number = $("#registration-number").val();
		var expiry_date = $("#expiry-date").val() || '';
		var renewal_date = $("#last-renewal-date").val() || '';

		if(expiry_date.trim() !== ''){
      expiry_date = new Date(expiry_date);
      expiry_date = moment(expiry_date).format("YYYY-MM-DD");
    }
		if(renewal_date.trim() !== ''){
      renewal_date = new Date(renewal_date);
      renewal_date = moment(renewal_date).format("YYYY-MM-DD");
    }

		 var my_json = {
			"expiry_date": expiry_date,
			"last_renewal_date": renewal_date,
			"registration_number": reg_number,
			"registration_type": reg_type,
			"regulatory_body": reg_body
		 }

		 $.each(my_json, function(key, value) {
       if(value == '' || value == null || value == undefined) {
         delete my_json[key];
       }
     })

		$.ajax({
        url: basepath + "employees/"+action_id+"/certifications",
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
            showSuccess("Certification Added Successfully!");
            pullMenu(".certification-input", "#add-certification");
						get_certifications();
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

	})

	$("#save-qualification").click(function() {
		var name = $("#qualification-name").val();
		var institute_name = $("#institute-name").val();
		var start_date = $("#qualification-start-date").val();
		var end_date = $("#qualification-end-date").val();
		var province = $("#qualification-province").val();
		var city = $("#qualification-city").val();
		var state = $("#qualification-state").val();
		var country = $("#qualification-country").val();

		console.log(name, institute_name, start_date, end_date, province, state, city, country);


		if(start_date.trim() !== ''){
      start_date = new Date(start_date);
      start_date = moment(start_date).format("YYYY-MM-DD");
    }
		if(end_date.trim() !== ''){
      end_date = new Date(end_date);
      end_date = moment(end_date).format("YYYY-MM-DD");
    }

		 var my_json = {
			 "city": city,
			 "country": country,
			 "end_date": end_date,
			 "institute_name": institute_name,
			 "name": name,
			 "province": province,
			 "start_date": start_date,
			 "state": state
		 }

		 $.each(my_json, function(key, value) {
       if(value == '' || value == null || value == undefined) {
         delete my_json[key];
       }
     })

		$.ajax({
        url: basepath + "employees/"+action_id+"/qualifications",
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
            showSuccess("Qualification Added Successfully!");
            pullMenu(".qualification-input", "#add-qualification");
						get_qualifications();
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

	})

	function get_qualifications() {
		$.ajax({
        url: basepath + "employees/"+action_id + "/qualifications",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
				var str="";
          if(data.status == "success") {
						for (var i = 0; i < data.data.length; i++) {
							var name = data.data[i].name;
							var city = data.data[i].city;
							var country = data.data[i].country;
							var end_date = data.data[i].end_date;
							var institute_name = data.data[i].institute_name;
							var province = data.data[i].province;
							var start_date = data.data[i].start_date;
							var state = data.data[i].state;

							str += "<tr>";
							str += "                  <td>"+name+"<\/td>";
							str += "                  <td>"+institute_name+"<\/td>";
							str += "                  <td>"+start_date+"<\/td>";
							str += "                  <td>"+end_date+"<\/td>";
							str += "                  <td>"+province+"<\/td>";
							str += "                  <td>"+city+"<\/td>";
							str += "                  <td>"+state+"<\/td>";
							str += "                  <td>"+country+"<\/td>";
							str += "                  <td class=\"text-center\"><a href=\"#\" class=\"btn btn-success btn-sm\">View<\/a><\/td>";
							str += "                <\/tr>";
						}
          }
					$("#qualification-body").html(str);
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
	}

	function get_trainings() {
		$.ajax({
        url: basepath + "employees/"+action_id + "/trainings",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
				var str="";
          if(data.status == "success") {
						for (var i = 0; i < data.data.length; i++) {
							var organizer = data.data[i].organiser_name;
							var funding = data.data[i].funding_source;
							var duration = data.data[i].duration;
							var institute = data.data[i].institute;
							var city = data.data[i].city;
							var state = data.data[i].state;
							var province = data.data[i].province;
							var country = data.data[i].country;
							var start_date = data.data[i].start_date;
							var end_date = data.data[i].end_date;
							var name =data.data[i].name;
							str += "<tr>";
							str += "                  <td>Training Name of Person<\/td>";
							str += "                  <td>IT training Nepal Pvt. Ltd.<\/td>";
							str += "                  <td>2 months<\/td>";
							str += "                  <td>Institute Name<\/td>";
							str += "                  <td>2016-12-12<\/td>";
							str += "                  <td>Nepal<\/td>";
							str += "                  <td class=\"text-center\"><a href=\"#\" class=\"btn btn-success btn-sm\">Edit<\/a><a href=\"#\" class=\"btn btn-success btn-sm\">View<\/a><\/td>";
							str += "                <\/tr>";
						}
          }
					$("#training-body").html(str);
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
	}

	function get_certifications() {
		$.ajax({
        url: basepath + "employees/"+action_id + "/certifications",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
				var str="";
          if(data.status == "success") {
						for (var i = 0; i < data.data.length; i++) {
							var expiry_date = data.data[i].expiry_date;
							var last_renewal_date = data.data[i].last_renewal_date;
							var registration_number = data.data[i].registration_number;
							var registration_type = data.data[i].registration_type;
							var registration_body = data.data[i].registration_body;

							str += "<tr>";
							str += "                  <td>1234<\/td>";
							str += "                  <td>New<\/td>";
							str += "                  <td>Freakoids<\/td>";
							str += "                  <td>2016-12-12<\/td>";
							str += "                  <td>2016-14-13<\/td>";
							str += "                  <td class=\"text-center\"><a href=\"#\" class=\"btn btn-success btn-sm\">View<\/a><\/td>";
							str += "                <\/tr>";

						}
          }
					$("#certification-body").html(str);
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
	}

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
						// $("#salary-step").html(salary_step);

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

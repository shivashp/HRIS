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


	get_user_details();
	get_trainings();
	get_certifications();
	get_qualifications();
	get_country();

	var TRAININGS;
	var CERTIFICATIONS;
	var QUALIFICATIONS;


	function get_country() {
		var country_obj = COUNTRY_LIST.map((country) => {
			var str = `<option value ="${country}">${country}</option>`;
			return str;
		})
		country_obj = country_obj.join('');
		$(".country").html(country_obj);
		$('.country').selectpicker({
		      size: 7,
		      liveSearch: true
		});
	}

	$("#add-training").click(function() {
    $('.form-horizontal').trigger("reset");
    var value = $(this).attr("value");
    (value == 1)?pullMenu(".training-input", "#add-training", "Training"):slideMenu(".training-input", "#add-training");
  });//add-training

	$("#add-certification").click(function() {
		$('.form-horizontal').trigger("reset");
    var value = $(this).attr("value");
		if(value == 1){
			pullMenu(".certification-input", "#add-certification", "Certification");
			$("#save-certification").attr("data-status", "0");
		} else {
			slideMenu(".certification-input", "#add-certification")
		}
  });//add-certification

	$("#add-qualification").click(function() {
    $('.form-horizontal').trigger("reset");
    var value = $(this).attr("value");
    (value == 1)?pullMenu(".qualification-input", "#add-qualification", "Qualification"):slideMenu(".qualification-input", "#add-qualification");
  });//add-qualification

	$("#add-emp-extra").click(function() {
    $('.form-horizontal').trigger("reset");
    var value = $(this).attr("value");
    (value == 1)?pullMenu(".emp-extra-input", "#add-emp-extra", "Employee Extras"):slideMenu(".emp-extra-input", "#add-emp-extra");
  });//add-qualification



	$("#add-emp-extra").click(function() {
		var father_name = $("#father-name").val();
		var mother_name = $("#mother-name").val();
		var children = $("#children").val();
		var maritial_status = $("#maritial-status").val();
		var wife_name = $("#wife_name").val();
		var address = $("#emp-address").val();
		var contact = $("#emp-contact-number").val();
		var ref_name = $("#emp-ref-name").val();

		var my_json = {
			"emp_father_name": father_name,
			"emp_mother_name": mother_name,
			"emp_num_of_children": children,
			"emp_single": maritial_status,
			"emp_wife_name": wife_name,
			"ref_address": address,
			"ref_contact_number": contact,
			"ref_name": ref_name
		 }

		 $.each(my_json, function(key, value) {
       if(value == '' || value == null || value == undefined) {
         delete my_json[key];
       }
     })

		$.ajax({
        url: basepath + "employees/"+action_id+"/empextras",
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
            showSuccess("Emp Extras Added Successfully!");
            pullMenu(".emp-extras-input", "#add-emp-extras");
						// get_trainings();
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
	})// Emp extras
	$('.date-obj').on('dp.change', function(e){
		var start_date = $("#start-date").val() || '';
		var end_date = $("#end-date").val() || '';

		if(start_date.trim() !== ''){
      start_date = new Date(start_date);
      start_date = moment(start_date).format("YYYY-MM-DD");
    } else {
			return false;
		}
		if(end_date.trim() !== ''){
      end_date = new Date(end_date);
      end_date = moment(end_date).format("YYYY-MM-DD");
    } else {
			return false;
		}
		var end = moment(end_date);
		var start = moment(start_date);
		var duration = end.from(start, true);
		var diff = end.diff(start, 'days') // 1
		if(diff < 1) {
			showError("Trainig Duration cannot be less than 1 day");
			return false;
		}
		$("#duration").val(duration);
	})

	$(".qual-date-obj").on('dp.change', function() {
		var start_date = $("#qualification-start-date").val();
		var end_date = $("#qualification-end-date").val();

				if(start_date.trim() !== ''){
		      start_date = new Date(start_date);
		      start_date = moment(start_date).format("YYYY-MM-DD");
		    } else {
					return false;
				}
				if(end_date.trim() !== ''){
		      end_date = new Date(end_date);
		      end_date = moment(end_date).format("YYYY-MM-DD");
		    } else {
					return false;
				}
				var end = moment(end_date);
				var start = moment(start_date);
				var duration = end.from(start, true);
				var diff = end.diff(start, 'days') // 1
				if(diff < 2) {
					showError("Qualification Duration cannot be less than 2 days");
					return false;
				}
				$("#qual-duration").val(duration);
	})

	$("#save-training").click(function() {
		var name = $("#name").val();
		var organizer = $("#organizer-name").val();
		var funding = $("#funding-source").val();
		var institute = $("#institute").val();
		var city = $("#training-city").val();
		var state = $("#training-state").val();
		var province = $("#training-province").val();
		var start_date = $("#start-date").val() || '';
		var end_date = $("#end-date").val() || '';
		var country = $("#training-country").val();
		var duration = $("#duration").val() || '';


		if(start_date.trim() !== ''){
      start_date = new Date(start_date);
      start_date = moment(start_date).format("YYYY-MM-DD");
    } else {
			showError("Please Select Start Date");
			return false;
		}
		if(end_date.trim() !== ''){
      end_date = new Date(end_date);
      end_date = moment(end_date).format("YYYY-MM-DD");
    } else {
			showError("Please Select End Date");
			return false;
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



	$("#save-qualification").click(function() {
		var name = $("#qualification-name").val();
		var institute_name = $("#institute-name").val();
		var start_date = $("#qualification-start-date").val();
		var end_date = $("#qualification-end-date").val();
		var province = $("#qualification-province").val();
		var city = $("#qualification-city").val();
		var state = $("#qualification-state").val();
		var country = $("#qualification-country").val();


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
            pullMenu(".qualification-input", "#add-qualification", "Qualification");
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
						QUALIFICATIONS = data.data;
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
							// str += "                  <td class=\"text-center\"><a href=\"#\" class=\"btn btn-success btn-sm\">View<\/a><\/td>";
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
					TRAININGS = data.data
					var str="";
          if(data.status == "success") {
						for (var i = 0; i < data.data.length; i++) {
							var organizer = data.data[i].organiser_name || "N/A";
							var funding = data.data[i].funding_source || "N/A";
							var duration = data.data[i].duration || "N/A";
							var institute = data.data[i].institute || "N/A";
							var city = data.data[i].city || "N/A";
							var state = data.data[i].state || "N/A";
							var province = data.data[i].province || "N/A";
							var country = data.data[i].country || "N/A";
							var start_date = data.data[i].start_date || "N/A";
							var end_date = data.data[i].end_date || "N/A";
							var name =data.data[i].name || "N/A";
							str += "<tr>";
							str += "                  <td>"+name+"<\/td>";
							str += "                  <td>"+organizer+"<\/td>";
							str += "                  <td>"+duration+"<\/td>";
							str += "                  <td>"+institute+"<\/td>";
							str += "                  <td>"+start_date + "<\/td>";
							str += "                  <td>"+country +"<\/td>";
							str += "                  <td class=\"text-center\"><a href=\"#\" class=\"edit-training btn btn-success btn-sm\">Edit<\/a><a href=\"#\" class=\"view-training btn btn-success btn-sm\" data-id=\""+i+"\">View<\/a><\/td>";
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
					CERTIFICATIONS = data.data;
					var str="";
          if(data.status == "success") {
						for (var i = 0; i < data.data.length; i++) {
							var expiry_date = data.data[i].expiry_date;
							var last_renewal_date = data.data[i].last_renewal_date;
							var registration_number = data.data[i].registration_number;
							var registration_type = data.data[i].registration_type;
							var regulatory_body = data.data[i].regulatory_body;

							str += "<tr>";
							str += "                  <td>"+registration_number +"<\/td>";
							str += "                  <td>"+registration_type+"<\/td>";
							str += "                  <td>"+regulatory_body +"<\/td>";
							str += "                  <td>"+last_renewal_date +"<\/td>";
							str += "                  <td>"+expiry_date +"<\/td>";
							str += "                  <td class=\"agencyemp-write text-center\"><a href=\"#\" class=\"edit-certification btn btn-success btn-sm\" data-id=\""+i+"\">Edit<\/a><\/td>";
							str += "                <\/tr>";

						}
          }
					$("#certification-body").html(str);
					check_permissions();
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
          if(data) {
            var id = data.id;
            var first_name = data.first_name || "N/A";
            var last_name = data.last_name || "N/A";
            var middle_name = data.middle_name || "N/A";
						var age = data.age || "N/A";
						var sex = data.sex || "N/A";
						var dob = data.date_of_birth || "N/A";
            var address1 = data.address_one || "N/A";
						var address2 = data.address_two || "N/A";
						var llg = data.llg || "N/A";
						var province = data.province || "N/A";
						var village = data.village || "N/A";
						var district = data.district || "N/A";
						var region = data.region || "N/A";
            var email = data.email_address || "N/A";
            var contact_number =data.contact_number || "N/A";
						var phone1 = data.alt_phone_number || "N/A";
            var country = data.country || "N/A";
            var employee_number = data.employement_number || "N/A";
						var retirement_age = data.retirement_age || "N/A";
						var salary_step = data.salary_step || "N/A";
						var date_of_commencement = data.date_of_commencement || "N/A";
						var emp_category = data.employee_category || "N/A";
						var branch_agency = data.employee_branch || "N/A";
						var emp_type = data.employee_type || "N/A";
						var emp_position = data.employee_position || "N/A"

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
						$("#village").html(village);

						$("#emp-number").html(employee_number);
						$("#retirement-age").html(retirement_age);
						$("#branch-agency").html(branch_agency);
						$("#emp_type").html(emp_type);
						$("#salary-step").html(salary_step);
						$("#date-of-commencement").html(date_of_commencement);
						$("#emp-category").html(emp_category);
						$("#emp-position").html(emp_position);
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
	}//get user-details

	$(document).delegate(".view-training", "click", function() {
		var i = $(this).attr("data-id");
		var organizer = TRAININGS[i].organiser_name || "N/A";
		var funding = TRAININGS[i].funding_source || "N/A";
		var duration = TRAININGS[i].duration || "N/A";
		var institute = TRAININGS[i].institute || "N/A";
		var city = TRAININGS[i].city || "N/A";
		var state = TRAININGS[i].state || "N/A";
		var province = TRAININGS[i].province || "N/A";
		var country = TRAININGS[i].country || "N/A";
		var start_date = TRAININGS[i].start_date || "N/A";
		var end_date = TRAININGS[i].end_date || "N/A";
		var name =TRAININGS[i].name || "N/A";

		$("#t-training-name").html(name);
		$("#t-organizer-name").html(organizer);
		$("#t-institute").html(institute);
		$("#t-funding-source").html(funding);
		$("#t-duration").html(duration);
		$("#t-start-date").html(start_date);
		$("#t-end-date").html(end_date);
		$("#t-city").html(city);
		$("#t-province").html(province);
		$("#t-state").html(state);
		$("#t-country").html(country);

		$("#training-modal").modal();
	})


/* ===========================================================================
**												Certification
** =========================================================================== */


/* ------------ Actions to be performed on save button click ---------------- */
$("#save-certification").click(function() {
	var reg_type = $("#registration-type").val();
	var reg_body = $("#regulatory-body").val();
	/* ----------------------- New ------------------------------ */
	var reg_body_addr1 = $("#regulatory-body-addr1").val();
	var reg_body_addr2 = $("#regulatory-body-addr2").val();
	var country = $("#regulatory-country").val();
	var issue_date = $("#issue-date").val();
	/* ----------------------- New ------------------------------ */
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
		"regulatory_body": reg_body,
		"regulatory_body_address_one": reg_body_addr1,
		"regulatory_body_address_two": reg_body_addr2,
		"regulatory_body_address_three": "",
		"regulatory_body_address_country": country,
		"issue_data": issue_date
	 }

	 $.each(my_json, function(key, value) {
		 if(value == '' || value == null || value == undefined) {
			 delete my_json[key];
		 }
	 })

	 var status = $(this).attr("data-status");
	 if(status == "1"){
		 var cert_id = $(this).attr("data-certification");
		 update_certification(my_json, action_id, cert_id)
	 } else {
		 add_certification(my_json, action_id)
	 }
})


/* --------------------- Insert data in form to edit ------------------------ */
$(document).delegate(".edit-certification", "click", function() {

	var i = $(this).attr("data-id");
	var id = CERTIFICATIONS[i].id;
	var expiry_date = CERTIFICATIONS[i].expiry_date;
	var last_renewal_date = CERTIFICATIONS[i].last_renewal_date;
	var registration_number = CERTIFICATIONS[i].registration_number;
	var registration_type = CERTIFICATIONS[i].registration_type;
	var regulatory_body = CERTIFICATIONS[i].regulatory_body;

	var reg_body_addr1 = CERTIFICATIONS[i].regulatory_body_address_one;
	var reg_body_addr2 = CERTIFICATIONS[i].regulatory_body_address_two;
	var country = CERTIFICATIONS[i].regulatory_body_address_country;
	var issue_date = CERTIFICATIONS[i].issue_date;

	$("#registration-type").val(registration_type);
	$("#regulatory-body").val(regulatory_body);
	$("#registration-number").val(registration_number);
	$("#expiry-date").val(expiry_date) || '';
	$("#last-renewal-date").val(last_renewal_date) || '';
	$("#save-certification").attr("data-status", "1");
	$("#save-certification").attr("data-certification", id);
	$("#regulatory-body-addr1").val(reg_body_addr1);
	$("#regulatory-body-addr2").val(reg_body_addr2);
	$("#regulatory-country").selectpicker('val', country);
	$("#issue-date").val(issue_date);

	var value = $("#add-certification").attr("value");
	(value == 1)?pullMenu(".certification-input", "#add-certification", "certification"):slideMenu(".certification-input", "#add-certification");
})// edit-certification


/* --------------------- Add a new certification ------------------------ */
function add_certification(json, action_id) {
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
			data: JSON.stringify(json),
			success: function(data) {
				$(".loader").hide();
				$("#add").show();
				if(data.status == 'success') {
					showSuccess("Certification Added Successfully!");
					pullMenu(".certification-input", "#add-certification", "Certification");
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
}

/* --------------------- Update a certification ------------------------ */
function update_certification(json, action_id, id) {
	$.ajax({
			url: basepath + "employees/"+action_id+"/certifications/"+id,
			type: "PUT",
			contentType: 'application/json',
			dataType: 'json',
			beforeSend: function(xhr) {
				$(".loader").show();
				$("#save-certification").hide();
				xhr.setRequestHeader('Token', TOKEN);
			},
			data: JSON.stringify(json),
			success: function(data) {
				$(".loader").hide();
				$("#save-certification").show();
				if(data.status == 'success') {
					showSuccess("Certification Updated Successfully!");
					$("#save-certification").attr("data-status", "0");
					pullMenu(".certification-input", "#add-certification", "Certification");
					get_certifications();
				} else {
					showError(data.message);
				}
			},
			error: function(error) {
				$(".loader").hide();
				$("#save-certification").show();
				showError("Error in Server! Try again!")
			},
	});// Ajax
}// update_certification


});

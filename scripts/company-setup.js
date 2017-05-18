
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
var FREE_TEXT_INDEX = 1;
var MAX_COUNT = 5;
var FREE_TEXT_ARRAY = [1];
var intToStr = ['one', 'two', 'three', 'four', 'five'];
get_llg();
get_district();
get_province();
get_region();


$("#submit").click(function(e) {
	e.preventDefault();
	var company_name = $("#company-name").val();
	var display_name = $("#display-name").val();
	var code = $("#code").val();
	var code_desc = $("#code-desc").val();
	var address1 = $("#address1").val();
	var address2 = $("#address2").val();
	var district = $("#district").val();
	var province = $("#province").val();
	var region = $("#region").val();
	var llg = $("#llg").val();
	var village = $("#village").val();
	var web = $("#web").val();
	var email = $("#email").val();
	var contact_name = $("#contact-name").val();
	var contact_mobile = $("#contact-mobile").val();
	var contact_email = $("#contact-email").val();
	var contact_alternate_email = $("#contact-alternate-email").val();

	if(!company_name.isBlank("Company Name") || !display_name.isBlank("Display Name")) {
		return false;
	}

	var json = {};
	for (var i = 0; i < FREE_TEXT_ARRAY.length; i++) {
		var val = FREE_TEXT_ARRAY[i];
		var key = 'free_text_'+ intToStr[i];
		json[key] = $("#free-text-val-"+val).val();
	}
	var my_json = {
			"address_one": address1,
			"address_two": address2,
			"company_code": code,
			"company_code_desc": code_desc,
			"contact_person_alt_email": contact_alternate_email,
			"contact_person_email": contact_email,
			"contact_person_name": contact_name,
			"description": contact_mobile, // Actually contact person mobile number
			"country": "PNG",
			"display_name": display_name,
			"district": district,
			"email": email,
			"llg": llg,
			"name": company_name,
			"province": province,
			"region": region,
			"village": village,
			"web_address": web
		}

		// Traverse each data and remove any blank, null and undefined value rows
	  $.each(my_json, function(key, value) {
	    if(value === '' || value === null || value === undefined) {
	      delete my_json[key];
	    }
	  })
		Object.assign(my_json, json);
		add_data(my_json);
})//submit

function add_data(json) {
	$.ajax({
      url: basepath + "company",
      type: "PUT",
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function(xhr) {
        $(".loader").show();
        $("#submit").hide();
        xhr.setRequestHeader('Token', TOKEN);
      },
      data: JSON.stringify(json),
      success: function(data) {
        $(".loader").hide();
        $("#submit").show();
        if(data.status == 'success') {
					$("#company-display-name").html(json.display_name);
          showSuccess("Company Details Updated Successfully!");
					setTimeout(function () {
							window.location.href = "company.php";
					}, 1000);
        } else {
          showError(data.message);
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
		return `<option value = "${obj.id}">${obj.name}</option>`;
	})
	str = str.join('');
	return str;
}

var token = localStorage.getItem("token");
$(".page-loader").hide();
$(".card").fadeIn("fast");
$(function() {
	get_company_details();
	demo.initFormExtendedDatetimepickers();
  (function() {
    var country_obj = COUNTRY_LIST.map((country) => {
      var str = `<option value ="${country}">${country}</option>`;
      return str;
    })
    country_obj = country_obj.join('');
    $("#country").html(country_obj);
    $('#country').selectpicker({
      size: 7
    });
  })() // country list

	$("#add-free-text").click(function() {
		add_free_text();
	})

	function add_free_text(val = '') {
		FREE_TEXT_INDEX++;
		if(FREE_TEXT_INDEX == MAX_COUNT){
			$("#add-free-text").hide();
		}
		FREE_TEXT_ARRAY.push(FREE_TEXT_INDEX);
		$("#free-text-row").append(freeText(FREE_TEXT_INDEX));
		$("#free-text-"+FREE_TEXT_INDEX).hide().fadeIn(500);
		$("#add-free-text").attr("value", FREE_TEXT_INDEX);
		$("#free-text-val-"+FREE_TEXT_INDEX).val(val);
	}

	$(document).delegate(".delete-free-text", "click", function() {
		var val = $(this).attr("value");
		MAX_COUNT++;
		FREE_TEXT_ARRAY = jQuery.grep(FREE_TEXT_ARRAY, function(value) {
		  return value != val;
		});
		$("#free-text-"+val).hide("slow", function(){
			$("#free-text-"+val).remove();
		});
		$("#add-free-text").show();
	})

	function freeText(i) {
		var str="";
		var val = (i % 2 === 0)?'6':'6';
		str += "<div class=\"col-md-"+ val +"\" id='free-text-"+i+"'>";
		str += "                    <label class=\"col-sm-4 label-on-left\" style=\"padding-left:0\">Free Text<\/label>";
		str += "                    <div class=\"col-sm-8\">";
		str += "                        <div class=\"form-group label-floating is-empty\">";
		str += "                            <label class=\"control-label\"><\/label>";
		str += "                            <input type=\"text\" id=\"free-text-val-"+i+"\" class=\"form-control\" placeholder = \"Free Text\" value> <a href=\"#\" class=\"delete-free-text\" value=\""+i+"\"><i class=\"material-icons\">remove_circle_outline<\/i><\/a>";
		str += "                        <\/div>";
		str += "                    <\/div>";
		str += "                  <\/div>";
		return str;
	}


	function get_company_details() {
		$.ajax({
	      url: basepath + "company",
	      type: "GET",
	      contentType: 'application/json',
	      dataType: 'json',
	      beforeSend: function(xhr) {
	        xhr.setRequestHeader('Token', TOKEN);
	      },
	      success: function(data) {
					console.log(data);
	        if(data.status == 'success') {
						var address1 = data.data.address_one;
						var address2 = data.data.address_two;
						var code = data.data.company_code;
						var code_desc = data.data.company_code_desc;
						var contact_person_alt_email = data.data.contact_person_alt_email;
						var contact_person_email = data.data.contact_person_email;
						var contact_person_name = data.data.contact_person_name;
						var country = data.data.country;
						var display_name = data.data.display_name;
						var district = data.data.district;
						var email = data.data.email;
						var llg = data.data.llg;
						var name = data.data.name;
						var province = data.data.province;
						var region = data.data.region;
						var village = data.data.village;
						var web = data.data.web_address;
						var free_text_one = data.data.free_text_one;
						var contact_mobile = data.data.description || '';

						for (var i = 1; i < 5; i++) {
							var value = data.data['free_text_'+intToStr[i]]
							add_free_text(value);
						}

						$("#free-text-val-1").val(free_text_one);
						$("#company-name").val(name);
						$("#display-name").val(display_name);
						$("#code").val(code);
						$("#code-desc").val(code_desc);
						$("#address1").val(address1);
						$("#address2").val(address2);

						$("#district").selectpicker('val', district);
						$("#province").selectpicker('val', province);
						$("#region").selectpicker('val', region);
						$("#llg").selectpicker('val', llg);

						$("#village").val(village);
						$("#web").val(web);
						$("#email").val(email);
						$("#contact-name").val(contact_person_name);
						$("#contact-mobile").val(contact_mobile);
						$("#contact-email").val(contact_person_email);
						$("#contact-alternate-email").val(contact_person_alt_email);
	        }
	      },
	      error: function(error) {
	        showError("Error in Server! Try again!")
	      },
	  });// Ajax
	}

})// Document

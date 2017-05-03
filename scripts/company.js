
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
get_llg();
get_district();
get_province();
get_region();

$("#submit").click(function(e) {
	e.preventDefault();
	$("#myform").validate({
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			// lastname: {
			// 	required: true,
			// 	minlength: 3
			// },
			// dob: {
			// 	required: true
			// },
			// // sex: {
			// //   required: true
			// // },
			// address1: {
			// 	required: true,
			// 	minlength: 3
			// },
			// village: {
			// 	required: true
			// },
			// email: {
			// 	required: true,
			// 	email: true
			// },
			// phone: {
			// 	required: true
			// },
			// employeenumber: {
			// 	required: true
			// },
			// salarystep: {
			// 	required: true
			// },
			// startdate: {
			// 	required: true
			// },
			// retirement_age: {
			// 	required: true,
			// 	min:17,
			// 	max:70
			// }
		},
		messages: {
			name: 'Company name is required',
		},
		errorPlacement: function(error, element) {
				$(element).next('div').html(error);
				$(element).parent('div').addClass('has-error');
		 },
		submitHandler: function() {
			add_data();
		}
	});
})//submit

function add_data() {

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
		FREE_TEXT_INDEX++;
		if(FREE_TEXT_INDEX == MAX_COUNT){
			$("#add-free-text").hide();
		}
		$("#free-text-row").append(freeText(FREE_TEXT_INDEX));
		$("#free-text-"+FREE_TEXT_INDEX).hide().fadeIn(500);
		$("#add-free-text").attr("value", FREE_TEXT_INDEX);
	})

	$(document).delegate(".delete-free-text", "click", function() {
		var val = $(this).attr("value");
		MAX_COUNT++;
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
		str += "                            <input type=\"text\" id=\"contact-alternate-email\" class=\"form-control\" placeholder = \"Free Text\" value> <a href=\"#\" class=\"delete-free-text\" value=\""+i+"\"><i class=\"material-icons\">remove_circle_outline<\/i><\/a>";
		str += "                        <\/div>";
		str += "                    <\/div>";
		str += "                  <\/div>";
		return str;
	}
})// Document

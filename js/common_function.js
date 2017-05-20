var LLG;
var DISTRICT;
var REGION;
var PROVINCE;
var FACILITY;
var BRANCHES;
var AGENCY;
var TYPES
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
hris = {
  get_region: function(type="normal") {
    return new Promise((resolve, reject) => {
      $.ajax({
          url: basepath + "regions",
          type: "GET",
          contentType: 'application/json',
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Token', TOKEN);
          },
          success: function(data) {
            if(data.status == 'success') {
              if(type === "select"){
                REGION = data.data;
                var region_obj = prepare_selectpicker(data.data);
                $("#region").html(region_obj);
                $('#region').selectpicker({
                  size: 7,
                  liveSearch: true
                });
                resolve(region_obj);
              } else {
                resolve(data.data);
              }
            }// success
          },
          error: function(error) {
            $(".loader").hide();
            $("#submit").show();
            showError("Error in Server! Try again!")
          },
      });// Ajax
    })
  },// GET REGION
  get_province: function(type="normal", id=null) {
    return new Promise((resolve, reject) => {
      $.ajax({
    			url: basepath + "provinces",
    			type: "GET",
    			contentType: 'application/json',
    			beforeSend: function(xhr) {
    				xhr.setRequestHeader('Token', TOKEN);
    			},
    			success: function(data) {
    				if(data.status == 'success') {
              if(type === "select"){
                PROVINCE = data.data;
								if(id !== null) {
									var newData = data.data.filter((data) => {
										if(data.region_id != id) {
											return false;
										} else {
											return true;
										}
									})
								} else {
									var newData = data.data;
								}
      					var province_obj = prepare_selectpicker(newData);
      					$("#province").html(province_obj);
      					$('#province').selectpicker({
      						size: 7,
      						liveSearch: true
      					});
								$('#province').selectpicker('refresh');
                resolve(province_obj);
              } else {
                resolve(data.data);
              }
    				}// success
    			},
    			error: function(error) {
    				showError("Error in Server! Try again!")
    			},
    	});// Ajax
    })
  },// GET PROVINCE
  get_district: function(type="normal", id=null) {
    return new Promise((resolve, reject) => {
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
              if(type === "select"){
								if(id !== null) {
									var newData = data.data.filter((data) => {
										if(data.province_id != id) {
											return false;
										} else {
											return true;
										}
									})
								} else {
									var newData = data.data;
								}
      					var district_obj = prepare_selectpicker(newData);
      					$("#district").html(district_obj);
      					$('#district').selectpicker({
      						size: 7,
      						liveSearch: true
      					});
								$('#district').selectpicker('refresh');
                resolve(district_obj);
              } else {
                resolve(data.data);
              }
    				}
    			},
    			error: function(error) {
    				showError("Error in Server! Try again!")
    			},
    	});// Ajax
    })
  }, //GET DISTRICT
  get_llg: function(type="normal", id=null) {
    return new Promise((resolve, reject) => {
      $.ajax({
    			url: basepath + "llg",
    			type: "GET",
    			contentType: 'application/json',
    			beforeSend: function(xhr) {
    				xhr.setRequestHeader('Token', TOKEN);
    			},
    			success: function(data) {
    				if(data.status == 'success') {
              if(type === "select"){
								if(id !== null) {
									var newData = data.data.filter((data) => {
										if(data.district_id != id) {
											return false;
										} else {
											return true;
										}
									})
								} else {
									var newData = data.data;
								}
                LLG = data.data;
      					var llg_obj = prepare_selectpicker(newData);
      					$("#llg").html(llg_obj);
      					$('#llg').selectpicker({
      						size: 7,
      						liveSearch: true
      					});
								$('#llg').selectpicker('refresh');
                resolve(llg_obj);
              } else {
                resolve(data.data);
              }
    				}
    			},
    			error: function(error) {
    				showError("Error in Server! Try again!")
    			},
    	});// Ajax
    })
  },//Get LLG
  get_address_details: function() {
    this.get_region("select");
		this.get_province("select")
    this.get_district("select");
    this.get_llg("select");

		$("#province").prop("disabled", true);
		$("#district").prop("disabled", true);
		$("#llg").prop("disabled", true);

		$("#region").change(function() {
			var id = $(this).val();
			hris.get_province("select", id);
			$("#province").prop("disabled", false);
		})
		$("#province").change(function() {
			var id = $(this).val();
			hris.get_district("select", id);
			$("#district").prop("disabled", false);
		})
		$("#district").change(function() {
			var id = $(this).val();
			hris.get_llg("select", id);
			$("#llg").prop("disabled", false);
		})
  }, // Get address details
  get_facility: function(type="normal") {
    return new Promise((resolve, reject) => {
      $.ajax({
          url: basepath + "facilities",
          type: "GET",
          contentType: 'application/json',
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Token', TOKEN);
          },
          success: function(data) {
            if(data.status == 'success') {
              FACILITY = data.data;
              if(type === "select"){
                var facility_obj = prepare_selectpicker(data.data);
                $("#facility").html(facility_obj);
                $('#facility').selectpicker({
                  size: 7
                });
                resolve(facility_obj);
              } else {
                resolve(data.data);
              }
            }
          },
          error: function(error) {
            showError("Error in Server! Try again!")
          },
      });// Ajax
    })
  },//Get facility
  get_branches: function(type="normal") {
    return new Promise((resolve, reject) => {
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
              if(type === "select"){
                var branch_obj = data.data.map(obj => {
                  return `<option value = "${obj.id}">${obj.facility_name}</option>`;
                })
                branch_obj = branch_obj.join('');
                $("#branch").html(branch_obj);
                $('#branch').selectpicker({
                  size: 7,
                  liveSearch: true
                });
                resolve(branch_obj);
              } else {
                resolve(data.data);
              }
            }
          },
          error: function(error) {
            $(".loader").hide();
            $("#submit").show();
            showError("Error in Server! Try again!")
          },
      });// Ajax
    })
  },// Get Branches
  get_type: function (type="normal") {
      return new Promise((resolve, reject) => {
        $.ajax({
            url: basepath + "employeetypes",
            type: "GET",
            contentType: 'application/json',
            beforeSend: function(xhr) {
              xhr.setRequestHeader('Token', TOKEN);
            },
            success: function(data) {
              if(data.status == 'success') {
                if(type === "select"){
                  var str = data.data.map(obj => {
                    return `<option value = "${obj.id}">${obj.name}</option>`;
                  })
                  str = str.join('');
                  $("#employee-type").html(str);
                  $('#employee-type').selectpicker({
                    size: 7
                  });
                  resolve(str);
                } else {
                  resolve(data.data);
                }
              }
            },
            error: function(error) {
            },
        });// Ajax
      })
  },//Get Type
  get_agencies: function(type="normal") {
    return new Promise(function(resolve, reject) {
      $.ajax({
          url: basepath + "agencies",
          type: "GET",
          contentType: 'application/json',
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Token', TOKEN);
          },
          success: function(data) {
            if(data.status == 'success') {
              if(type === "select"){
                AGENCY = data.data;
                var agency_obj = data.data.map(obj => {
                  return `<option value = "${obj.id}">${obj.facility_name}</option>`;
                })
                agency_obj = agency_obj.join('');
                $("#agency").html(agency_obj);
                $('#agency').selectpicker({
                  size: 7,
                  liveSearch: true
                });
                resolve(agency_obj);
              } else {
                resolve(data.data);
              }
            }
          },
          error: function(error) {
          },
      });// Ajax
    });
  }, //Get agency
  get_category: function(type="normal"){
    return new Promise(function(resolve, reject) {
      $.ajax({
          url: basepath + "empcategories",
          type: "GET",
          contentType: 'application/json',
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Token', TOKEN);
          },
          success: function(data) {
            if(data.status == 'success') {
              if(type === "select"){
                var str = data.data.map(obj => {
                  return `<option value = "${obj.id}">${obj.name}</option>`;
                })
                str = str.join('');
                $("#employee-category").html(str);
                $('#employee-category').selectpicker({
                  size: 7,
                  liveSearch: true
                });
                resolve(str);
              } else {
                resolve(data.data);
              }
            }
          },
          error: function(error) {
            $(".loader").hide();
            $("#submit").show();
            showError("Error in Server! Try again!")
          },
      });// Ajax
    });
  }, // Get category
  get_position_title: function(type="normal") {
    return new Promise(function(resolve, reject) {
      $.ajax({
          url: basepath + "emppositions",
          type: "GET",
          contentType: 'application/json',
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Token', TOKEN);
          },
          success: function(data) {
            if(data.status == 'success') {
              if(type === "select"){
                var str = data.data.map((position) => {
                  return `<option value= "${position.id}">${position.emp_pos_title}</option>`;
                });
                str = str.join('');
                $("#position-title").html(str);
                $('#position-title').selectpicker({
                  size: 7,
                  liveSearch: true
                });
                resolve(str);
              } else {
                resolve(data.data);
              }
            }
          },
          error: function(error) {
            $(".loader").hide();
            $("#submit").show();
            showError("Error in Server! Try again!")
          },
      });// Ajax
    });
  }, // Get Position Title
  get_country: function() {
    var country_obj = COUNTRY_LIST.map((country) => {
      var str = `<option value ="${country}">${country}</option>`;
      return str;
    })
    country_obj = country_obj.join('');
    $("#country").html(country_obj);
    $('#country').selectpicker({
      size: 7,
      liveSearch: true
    });
  },//Get Country

}// hris

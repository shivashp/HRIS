$(function() {
  $("#submit").click(function() {
    var health_facility_name = $("#health-facility-name").val();
    var type = $("#type").val();
    var agency_code = $("#agency-code").val();
    var email = $("#email").val();
    var agency = $("#agency").val();
    var llg = $("#llg").val();
    var district = $("#district").val();
    var province = $("#province").val();
    var region = $("#region").val();

    var arr = [health_facility_name.isBlank('Health Facility Name'), type.isBlank('Type of Health Facility'), agency_code.isBlank('Agency Code'), email.isBlank('Email'),agency.isBlank('Agency'), llg.isBlank('LLG'), district.isBlank('District'), province.isBlank('Province'), region.isBlank('Region')]
    if(checkEmpty(arr)){
			return false;
		}
		showSuccess("Agency added successfully!");


  });// Submit
}) // Document Ready

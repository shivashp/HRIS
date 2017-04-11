$(function() {
  $("#submit").click(function() {
    var health_facility_name = $("#facility-name").val();
    var type = $("#type").val();
    var llg = $("#llg").val();
    var district = $("#district").val();
    var province = $("#province").val();
    var region = $("#region").val();
    var arr = [health_facility_name.isBlank('Health Facility Name'), type.isBlank('Type of Health Facility'), llg.isBlank('LLG'), district.isBlank('District'), province.isBlank('Province'), region.isBlank('Region')]
    if(checkEmpty(arr)){
			return false;
		}
		showSuccess("Branch added successfully!");


  });// Submit
}) // Document Ready

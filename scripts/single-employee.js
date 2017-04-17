$(function() {
	console.log(action_id);
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
          if(data.status === '1success') {
            for (var i = 0; i < data.data.length; i++) {
                var id = data.data[i].id;
                var first_name = data.data[i].first_name;
                var last_name = data.data[i].last_name;
                var middle_name = data.data[i].middle_name;
                var address1 = data.data[i].address_one;
                var email = data.data[i].email_address;
                var contact_number =data.data[i].contact_number;
                var country = data.data[i].country;
                var employee_number = data.data[i].employement_number;
            }
                       
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
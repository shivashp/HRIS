$(function() {

  var HISTORY;

get_emp_history();
get_references();

  function get_emp_history() {
    $.ajax({
  			url: basepath + "employees/"+action_id+"/histories",
  			type: "GET",
  			contentType: 'application/json',
  			dataType: 'json',
  			beforeSend: function(xhr) {
  				xhr.setRequestHeader('Token', TOKEN);
  			},
  			success: function(data) {
  				if(data.status == 'success') {            
            var str = '';
            HISTORY = data.data;
            for(var i = 0; i < data.data.length; i++) {
              var id = data.data[i].id;
              var position = data.data[i].position;
              var reason_leaving = data.data[i].reason_leaving;
              var start_date = data.data[i].start_date;
              var end_date = data.data[i].end_date;
              var desc = data.data[i].description;
              str += "<tr>";
              str += "                  <td>"+start_date+"<\/td>";
              str += "                  <td>"+end_date+"<\/td>";
              str += "                  <td>"+position+"<\/td>";
              str += "                  <td>"+reason_leaving+"<\/td>";
              str += "                  <td>"+desc+ "<\/td>";
              str += "                  <td class=\"text-center\"><a href=\"#\" data-id=\""+i+"\" class=\"edit-history btn btn-success btn-sm\">Edit<\/a";
              str += "                <\/tr>";
            }
            $("#emp-history-body").html(str);
  				}
  			},
  			error: function(error) {
  				showError("Error in Server! Try again!")
  			},
  	});// Ajax
  }

  function addEmpHistory(json, id) {
    $.ajax({
  			url: basepath + "employees/"+id+"/histories",
  			type: "POST",
  			contentType: 'application/json',
  			dataType: 'json',
  			beforeSend: function(xhr) {
  				$(".loader").show();
  				$("#save-emp-history").hide();
  				xhr.setRequestHeader('Token', TOKEN);
  			},
  			data: JSON.stringify(json),
  			success: function(data) {
  				$(".loader").hide();
  				$("#save-emp-history").hide();
  				if(data.status == 'success') {
  					showSuccess("Employee History Added Successfully!");
  					pullMenu(".emp-history-input", "#add-emp-history", "Employee History");
  					get_emp_history();
  				} else {
  					showError(data.message);
  				}
  			},
  			error: function(error) {
  				$(".loader").hide();
  				$("#save-emp-history").hide();
  				showError("Error in Server! Try again!")
  			},
  	});// Ajax
  }

  $("#save-emp-history").click(function() {
    var start_date = $("#emp-history-start-date").val();
    var end_date = $("#emp-history-end-date").val();
    var position = $("#emp-history-position").val();
    var desc = $("#emp-history-desc").val();
    var reason_leaving = $("#emp-reason-leaving").val();

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
      "description": desc,
      "end_date": start_date,
      "position": position,
      "reason_leaving": reason_leaving,
      "start_date": end_date
    }

    $.each(my_json, function(key, value) {
      if(value == '' || value == null || value == undefined) {
        delete my_json[key];
      }
    })

    var status = $(this).attr("data-status");
   	if(status == "1"){
   		 var id = $(this).attr("data-history");
   		 updateEmpHistory(my_json, action_id, id)
   	} else {
       addEmpHistory(my_json, action_id);
   	}
  })//SAVE EMP

  $(document).delegate(".edit-history", "click", function() {
    var i = $(this).attr("data-id");
    var id = HISTORY[i].id;
    var position = HISTORY[i].position;
    var reason_leaving = HISTORY[i].reason_leaving;
    var start_date = HISTORY[i].start_date;
    var end_date = HISTORY[i].end_date;
    var desc = HISTORY[i].description;

    $("#emp-history-start-date").val(start_date);
    $("#emp-history-end-date").val(end_date);
    $("#emp-history-position").val(position);
    $("#emp-history-desc").val(desc);
    $("#emp-reason-leaving").val(reason_leaving);
    $("#save-emp-history").attr("data-status", "1");
  	$("#save-emp-history").attr("data-history", id);

    var value = $("#add-emp-history").attr("value");
  	(value == 1)?pullMenu(".emp-history-input", "#add-emp-history", "Employee History"):slideMenu(".emp-history-input", "#add-emp-history");

  })// Edit History

  function updateEmpHistory(json, action_id, id) {
  	$.ajax({
  			url: basepath + "employees/"+action_id+"/histories/"+id,
  			type: "PUT",
  			contentType: 'application/json',
  			dataType: 'json',
  			beforeSend: function(xhr) {
  				$(".loader").show();
  				$("#save-emp-history").hide();
  				xhr.setRequestHeader('Token', TOKEN);
  			},
  			data: JSON.stringify(json),
  			success: function(data) {
  				$(".loader").hide();
  				$("#save-emp-history").show();
  				if(data.status == 'success') {
  					showSuccess("Employee History Updated Successfully!");
  					$("#save-emp-history").attr("data-status", "0");
  					pullMenu(".emp-history-input", "#add-emp-history", "Employee History");
  					get_references();
  				} else {
  					showError(data.message);
  				}
  			},
  			error: function(error) {
  				$(".loader").hide();
  				$("#save-emp-history").show();
  				showError("Error in Server! Try again!")
  			},
  	});// Ajax
  }// update history






/* ------------------------------------------- References ------------------------------------ */





function get_references() {
  $.ajax({
      url: basepath + "employees/"+action_id+"/empreferences",
      type: "GET",
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Token', TOKEN);
      },
      success: function(data) {
        if(data.status == 'success') {
          var str = '';
          REFERENCES = data.data;
          for(var i = 0; i < data.data.length; i++) {
            var id = data.data[i].id;
            var address1 = data.data[i].address_one;
            var address2 = data.data[i].address_two;
            var contact = data.data[i].contact_number;
            var company = data.data[i].company;
            var email = data.data[i].email;
            var first_name = data.data[i].first_name;
            var last_name = data.data[i].last_name;

            str += "<tr>";
            str += "                  <td>"+first_name + " " + last_name+"<\/td>";
            str += "                  <td>"+email+"<\/td>";
            str += "                  <td>"+contact+"<\/td>";
            str += "                  <td>"+company+"<\/td>";
            str += "                  <td>"+address1+ "<\/td>";
            str += "                  <td>"+address2+ "<\/td>";
            str += "                  <td class=\"text-center\"><a href=\"#\" data-id=\""+i+"\" class=\"edit-reference btn btn-success btn-sm\">Edit<\/a";
            str += "                <\/tr>";
          }
          $("#reference-body").html(str);
        }
      },
      error: function(error) {
        showError("Error in Server! Try again!")
      },
  });// Ajax
}

function addReferences(json, id) {
  $.ajax({
      url: basepath + "employees/"+id+"/empreferences",
      type: "POST",
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function(xhr) {
        $(".loader").show();
        $("#save-reference").hide();
        xhr.setRequestHeader('Token', TOKEN);
      },
      data: JSON.stringify(json),
      success: function(data) {
        $(".loader").hide();
        $("#save-reference").hide();
        if(data.status == 'success') {
          showSuccess("Employee Reference Added Successfully!");
          pullMenu(".reference-input", "#add-reference", "References");
          get_references();
        } else {
          showError(data.message);
        }
      },
      error: function(error) {
        $(".loader").hide();
        $("#save-reference").hide();
        showError("Error in Server! Try again!")
      },
  });// Ajax
}

$("#save-reference").click(function() {
  var first_name = $("#reference-first-name").val();
  var last_name = $("#reference-last-name").val();
  var address1 = $("#reference-address1").val();
  var address2 = $("#reference-address2").val();
  var email = $("#reference-email").val();
  var contact = $("#reference-contact-no").val();
  var company = $("#reference-company").val();

  var my_json = {
    "address_one": address1,
    "address_two": address2,
    "company": company,
    "contact_number": contact,
    "email": email,
    "first_name": first_name,
    "last_name": last_name,
  }


  $.each(my_json, function(key, value) {
    if(value == '' || value == null || value == undefined) {
      delete my_json[key];
    }
  })

  var status = $(this).attr("data-status");
  if(status == "1"){
     var id = $(this).attr("data-history");
     updateEmpReference(my_json, action_id, id)
  } else {
     addReferences(my_json, action_id);
  }
})//SAVE EMP

$(document).delegate(".edit-reference", "click", function() {
  var i = $(this).attr("data-id");
  var id = REFERENCES[i].id;
  var address1 = REFERENCES[i].address_one;
  var address2 = REFERENCES[i].address_two;
  var contact = REFERENCES[i].contact_number;
  var company = REFERENCES[i].company;
  var email = REFERENCES[i].email;
  var first_name = REFERENCES[i].first_name;
  var last_name = REFERENCES[i].last_name;

  $("#reference-first-name").val(first_name);
  $("#reference-last-name").val(last_name);
  $("#reference-address1").val(address1);
  $("#reference-address2").val(address2);
  $("#reference-email").val(email);
  $("#reference-contact-no").val(contact);
  $("#reference-company").val(company);

  $("#save-reference").attr("data-status", "1");
  $("#save-reference").attr("data-history", id);

  var value = $("#add-emp-history").attr("value");
  (value == 1)?pullMenu(".reference", "#add-reference", "Employee History"):slideMenu(".reference-input", "#add-reference");

})// Edit History

function updateEmpReference(json, action_id, id) {
  $.ajax({
      url: basepath + "employees/"+action_id+"/empreferences/"+id,
      type: "PUT",
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function(xhr) {
        $(".loader").show();
        $("#save-reference").hide();
        xhr.setRequestHeader('Token', TOKEN);
      },
      data: JSON.stringify(json),
      success: function(data) {
        $(".loader").hide();
        $("#save-reference").show();
        if(data.status == 'success') {
          showSuccess("Employee Reference Updated Successfully!");
          $("#save-reference").attr("data-status", "0");
          pullMenu(".reference-input", "#add-reference", "References");
          get_references();
        } else {
          showError(data.message);
        }
      },
      error: function(error) {
        $(".loader").hide();
        $("#save-reference").show();
        showError("Error in Server! Try again!")
      },
  });// Ajax
}// update history

})// Document Ready

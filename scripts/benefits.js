$(function() {

  get_benefits();
  get_benefit_types();

  function get_benefit_types() {
    $.ajax({
        url: basepath + "empbentypes",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            BENEFIT_JSON = data.data;
            var str="";
            var facility_obj = prepare_selectpicker(data.data);
            $("#benefits-type").html(facility_obj);
            $('#benefits-type').selectpicker({
              size: 7
            });
          }
        },
        error: function(error) {
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get Position Title

    function get_benefits() {
      $.ajax({
    			url: basepath + "employees/"+action_id+"/empbenifits",
    			type: "GET",
    			contentType: 'application/json',
    			dataType: 'json',
    			beforeSend: function(xhr) {
    				xhr.setRequestHeader('Token', TOKEN);
    			},
    			success: function(data) {
    				if(data.status == 'success') {
              console.log(data);
              var str = '';
              BENEFITS = data.data;

              for(var i = 0; i < data.data.length; i++) {
                var id = data.data[i].id;
                var benefit_type = data.data[i].benifit_type;
                var comment = data.data[i].comment;
                var date = data.data[i].date;
                var amount = data.data[i].amount;

                str += "<tr>";
                str += "                  <td>"+benefit_type+"<\/td>";
                str += "                  <td>"+amount+"<\/td>";
                str += "                  <td>"+date+"<\/td>";
                str += "                  <td>"+comment+"<\/td>";
                str += "                  <td class=\"text-center\"><a href=\"#\" data-id=\""+i+"\" class=\"edit-benefit btn btn-success btn-sm\">Edit<\/a";
                str += "                <\/tr>";
              }
              $("#benefits-body").html(str);
    				}
    			},
    			error: function(error) {
    				showError("Error in Server! Try again!")
    			},
    	});// Ajax
    }

    function addBenefit(json, id) {
      $.ajax({
    			url: basepath + "employees/"+id+"/empbenifits",
    			type: "POST",
    			contentType: 'application/json',
    			dataType: 'json',
    			beforeSend: function(xhr) {
    				$(".loader").show();
    				$("#save-benefits").hide();
    				xhr.setRequestHeader('Token', TOKEN);
    			},
    			data: JSON.stringify(json),
    			success: function(data) {
    				$(".loader").hide();
    				$("#save-benefits").hide();
    				if(data.status == 'success') {
    					showSuccess("Benefit Added Successfully!");
    					pullMenu(".benefits-input", "#add-benefits", "Benefits");
    					get_benefits();
    				} else {
    					showError(data.message);
    				}
    			},
    			error: function(error) {
    				$(".loader").hide();
    				$("#save-benefits").hide();
    				showError("Error in Server! Try again!")
    			},
    	});// Ajax
    }

    $("#save-benefits").click(function() {
      var type = $("#benefits-type").val();
      var amount = $("#benefits-amount").val();
      var start_date = $("#benefits-start-date").val();
      var comment = $("#benefits-comments").val();


      if(start_date.trim() !== ''){
        start_date = new Date(start_date);
        start_date = moment(start_date).format("YYYY-MM-DD");
      } else {
  			showError("Please Select Start Date");
  			return false;
  		}

      var my_json = {
        "amount": amount,
        "benifit_type": type,
        "comment": comment,
        "date": start_date,
      }

      console.log(my_json);

      $.each(my_json, function(key, value) {
        if(value == '' || value == null || value == undefined) {
          delete my_json[key];
        }
      })

      var status = $(this).attr("data-status");
     	if(status == "1"){
     		 var id = $(this).attr("data-history");
     		 updateBenefit(my_json, action_id, id)
     	} else {
         addBenefit(my_json, action_id);
     	}
    })//SAVE EMP

    $(document).delegate(".edit-benefit", "click", function() {
      var i = $(this).attr("data-id");
      var id = BENEFITS[i].id;
      var benefit_type = BENEFITS[i].benifit_type;
      var comment = BENEFITS[i].comment;
      var date = BENEFITS[i].date;
      var amount = BENEFITS[i].amount;

      $("#benefits-type").val(benefit_type);
      $("#benefits-amount").val(amount);
      $("#benefits-start-date").val(date);
      $("#benefits-comment").val(comment);
      $("#save-benefits").attr("data-status", "1");
    	$("#save-benefits").attr("data-history", id);

      var value = $("#add-benefits").attr("value");
    	(value == 1)?pullMenu(".benefits-input", "#add-benefits", "Benefits"):slideMenu(".benefits-input", "#add-benefits");

    })// Edit History

    function updateBenefit(json, action_id, id) {
    	$.ajax({
    			url: basepath + "employees/"+action_id+"/empbenifits/"+id,
    			type: "PUT",
    			contentType: 'application/json',
    			dataType: 'json',
    			beforeSend: function(xhr) {
    				$(".loader").show();
    				$("#save-benefits").hide();
    				xhr.setRequestHeader('Token', TOKEN);
    			},
    			data: JSON.stringify(json),
    			success: function(data) {
    				$(".loader").hide();
    				$("#save-benefits").show();
    				if(data.status == 'success') {
    					showSuccess("Benefits Updated Successfully!");
    					$("#save-benefits").attr("data-status", "0");
    					pullMenu(".benefits-input", "#add-benefits", "Benefits");
    					get_benefits();
    				} else {
    					showError(data.message);
    				}
    			},
    			error: function(error) {
    				$(".loader").hide();
    				$("#save-benefits").show();
    				showError("Error in Server! Try again!")
    			},
    	});// Ajax
    }// update history


    function prepare_selectpicker(obj) {
      var str = obj.map(obj => {
        if(obj.del_flag){
          return '';
        }
        return `<option value = "${obj.name}">${obj.name}</option>`;
      })
      str = str.join('');
      return str;
    }

})

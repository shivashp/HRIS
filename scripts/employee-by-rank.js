$(function() {
  get_rank();

  $("#rank").change(function() {
    var id = $(this).val();
    get_employees(id);
  })

  function get_rank() {
    $.ajax({
        url: basepath + "empcategoryranks",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
					xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          console.log(data);
          if(data.status == 'success') {
            RANK_JSON = data.data;
            var str="";
            for (var i = 0; i < data.data.length; i++) {
              var id = data.data[i].id;
              var name = data.data[i].name;
              str += `<option value = "${id}">${name}</option>`;
            }
            $("#rank").html(str);
            $('#rank').selectpicker({
              size: 7,
            });
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  };// Get Rank

  function get_employees(id) {
    $.ajax({
        url: basepath + "empcategoryranks/"+id+"/employees",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          console.log(data);
          var data1 = [];
          var str = '';
          if(data.status === 'success') {
            for (var i = 0; i < data.data.length; i++) {
                var id = data.data[i].id;
                var first_name = data.data[i].first_name;
                var last_name = data.data[i].last_name;
                var middle_name = data.data[i].middle_name;
                var address1 = data.data[i].address_one;
                // var email = data.data[i].email_address;
                var contact =data.data[i].contact_number;
                var country = data.data[i].country;
                var employee_number = data.data[i].employement_number;

                middle_name = (middle_name.trim() == '')?' ':` ${middle_name} `;

                str += "<tr>";
                str += "                          <td>"+employee_number+"<\/td>";
                str += "                          <td>"+first_name + middle_name + last_name+"<\/td>";
                str += "                          <td>"+address1+"<\/td>";
                // str += "                          <td>"+email+"<\/td>";
                str += "                          <td>"+contact+"<\/td>";
                str += "                          <td>"+country+"<\/td>";
                str += "</tr>";

            }

            $("#data-body").html(str);
            $('#datatables').DataTable();

          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  }// get agency employees


})

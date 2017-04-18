$(function() {

  get_employees();


  function get_employees() {
    $.ajax({
        url: basepath + "users",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          console.log(data);
          var str ='';
          if(data.status === 'success') {
            for (var i = 0; i < data.data.length; i++) {
                var first_name = data.data[i].employee_data.first_name;
                var last_name = data.data[i].employee_data.last_name;
                var middle_name = data.data[i].employee_data.middle_name;
                var employee_number = data.data[i].employee_data.employement_number;
                var address1 = data.data[i].employee_data.address_one;
                var country = data.data[i].employee_data.country;
                var contact = data.data[i].employee_data.contact_number;
                var username = data.data[i].user_name;

                middle_name = (middle_name.trim() == '')?' ':` ${middle_name} `;

                str += "<tr>";
                str += "                          <td>"+employee_number+"<\/td>";
                str += "                          <td>"+username+"<\/td>";
                str += "                          <td>"+first_name + middle_name + last_name+"<\/td>";
                str += "                          <td>"+contact+"<\/td>";
                str += "                          <td>"+address1+"<\/td>";
                str += "                          <td>"+country+"<\/td>";
                str += "</tr>";
            }
            $("#data-body").html(str);
            $('#datatables').DataTable();
          }
        },
        error: function(error) {
          showError("Error in Server! Try again!")
        },
    });// Ajax
  }// get employees
})

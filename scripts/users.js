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
          var str ='';
          if(data.status === 'success') {
            for (var i = 0; i < data.data.length; i++) {
                var first_name = data.data[i].employee_data.first_name;
                var last_name = data.data[i].employee_data.last_name;
                var middle_name = data.data[i].employee_data.middle_name || '';
                var employee_number = data.data[i].employee_data.employement_number;
                var address1 = data.data[i].employee_data.address_one;
                var country = data.data[i].employee_data.country;
                var contact = data.data[i].employee_data.contact_number;
                var username = data.data[i].user_name;
                var role = data.data[i].role_name;
                var id = data.data[i].id;
                var del_flag = data.data[i].del_flag;
                var status = status_generator("empcategoryranks", "users/"+id+"?action=update_activation", del_flag, '');

                middle_name = (middle_name.trim() == '')?' ':` ${middle_name} `;

                str += "<tr>";
                str += "<td></td>";
                str += "                          <td>"+first_name + middle_name + last_name+"<\/td>";
                str += "                          <td>"+employee_number+"<\/td>";
                str += "                          <td>"+username+"<\/td>";
                str += "                          <td>"+role+"<\/td>";
                str += "                          <td>"+contact+"<\/td>";
                str += "                          <td>"+address1+"<\/td>";
                str += "                          <td>"+country+"<\/td>";
                str += "<td>"+status.label+"</td>";
                str += "<td>"+status.button + "</td>";
                str += "</tr>";
            }
            $('#datatables').DataTable().destroy();
            $("#data-body").html(str);
            $('#datatables').DataTable({
                   "fnRowCallback": function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                        var index = iDisplayIndexFull + 1;
                        $("td:first", nRow).html(index);
                        return nRow;
                    },
                    "order": [[ 2, "desc" ]]
                });
            $(".page-loader").hide();
            $(".card").fadeIn("fast");

          }
        },
        error: function(error) {
          showError("Error in Server! Try again!")
        },
    });// Ajax
  }// get employees

  $("#refresh-control").click(function() {
    get_employees();
  })
})

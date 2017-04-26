$(function() {

var EMPLOYEES;

get_agency_employee();

function get_agency_employee() {
  $.ajax({
      url: basepath + "employees",
      type: "GET",
      contentType: 'application/json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Token', TOKEN);
      },
      success: function(data) {
        console.log(data);
        var data1 = [];
        if(data.status === 'success') {
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

              middle_name = (middle_name.trim() == '')?' ':` ${middle_name} `;
              var json = {
                i: i,
                id: id,
                name: first_name + middle_name + last_name,
                address1: address1,
                employee_number: employee_number,
                country: country,
                email: email,
                contact_number: contact_number
              }
              data1.push(json);
          }
          EMPLOYEES = data1;
          $("#data-body").html(data1.map(data => generate_table(data)).join(''));
          $('#datatables').DataTable();
          check_permissions();
          $(".page-loader").hide();
          $(".card").fadeIn("fast");

        }
      },
      error: function(error) {
        $(".loader").hide();
        $("#submit").show();
        showError("Error in Server! Try again!")
      },
  });// Ajax
}// get agency employees

function generate_table(data) {
  var str = '';
  str += "<tr>";
    str += "                          <td>"+data.name+"<\/td>";
  str += "                          <td>"+data.employee_number+"<\/td>";
  str += "                          <td>"+data.address1+"<\/td>";
  str += "                          <td>"+data.contact_number+"<\/td>";
  str += "                          <td>"+data.country+"<\/td>";
  str += "                          <td class=\"text-right\">";
  str += "                              <a class=\"btn btn-success btn-sm btn-icon\" href= \"single-employee.php?action="+data.id+"\">View<\/a>";
  str += "                              <a class=\"btn btn-success btn-sm btn-danger agencyemp-write btn-icon edit\" data-id=\""+data.i+"\"><i class=\"material-icons\">edit<\/i><\/a>";
  str += "                          <\/td>";
  str += "                      <\/tr>";
  return str;
}

$(document).delegate(".login","click", function() {
  var i = $(this).attr("data-id");
  $("#username-modal").modal();
  $("#save-data").attr("index", i);
})

$("#save-data").click(function(e) {
  e.preventDefault();
  var i = $(this).attr("index");
  var username = $("#username").val();
  var password = $("#password").val();

  console.log(EMPLOYEES[i]);
})

})// Document

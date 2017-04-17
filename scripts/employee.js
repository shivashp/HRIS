$(function() {

var EMPLOYEES;

get_agency_employee();

  function filter(q){
    var obj = EMPLOYEES.filter((data) => {
      return (data['name'].toLowerCase().search(q.toLowerCase()) !== -1);
    })
    $("#employee-data").html(obj.map(data => generate_box(data)).join('')).fadeIn(1000);
  }


  $("#search-employee").on("input", function(){
    var query = $(this).val();
    filter(query);
  })

  function get_agency_employee() {
    $.ajax({
        url: basepath + "employees",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {          
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
            $("#employee-data").html(data1.map(data => generate_box(data)).join(''))
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#submit").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  }// get agency employees


  function generate_box(data) {        
    var str="";
    str += "<div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">";
    str += "        <div class=\"single-box\">";
    str += "          <a href=\"single-employee.php?action="+data.id+"\">";
    str += "            <div class=\"col-sm-4\">";
    str += "                <div class=\"text-center\">";
    str += "                    <img alt=\"image\" class=\"img-circle emp-image img-responsive\" src=\"img\/user.jpg\">";
    str += "                <\/div>";
    str += "            <\/div>";
    str += "            <div class=\"col-sm-8\">";
    str += "                <h3><strong>"+data.name+"<\/strong><\/h3>";
    str += "                <p><i class=\"fa fa-map-marker\"><\/i> "+data.address1+"<\/p>";
    str += "                <address>";
    str += "                    <strong>"+data.employee_number+"<\/strong><br>";
    str += "                    "+data.email+"<br>";
    str += "                    "+data.country+"<br>";
    str +=                     data.contact_number;
    str += "                <\/address>";
    str += "            <\/div>";
    str += "            <div class=\"clearfix\"><\/div>";
    str += "          <\/a>";
    str += "        <\/div><!-- single-box-->";
    str += "      <\/div>";
    return str;
  }




})// Document

$(function() {
get_company_details();
var INDEX = 1;
var intToStr = ['one', 'two', 'three', 'four', 'five'];
  function get_company_details() {
		$.ajax({
	      url: basepath + "company",
	      type: "GET",
	      contentType: 'application/json',
	      dataType: 'json',
	      beforeSend: function(xhr) {
	        xhr.setRequestHeader('Token', TOKEN);
	      },
	      success: function(data) {
					console.log(data);
	        if(data.status == 'success') {
						var address1 = data.data.address_one;
						var address2 = data.data.address_two;
						var code = data.data.company_code;
						var code_desc = data.data.company_code_desc;
						var contact_person_alt_email = data.data.contact_person_alt_email;
						var contact_person_email = data.data.contact_person_email;
						var contact_person_name = data.data.contact_person_name;
						var country = data.data.country;
						var display_name = data.data.display_name;
						var district = data.data.district;
						var email = data.data.email;
						var llg = data.data.llg;
						var name = data.data.name;
						var province = data.data.province;
						var region = data.data.region;
						var village = data.data.village;
						var web = data.data.web_address;
						var free_text_one = data.data.free_text_one;
						var contact_mobile = data.data.description || '';

						for (var i = 1; i < 5; i++) {
							var value = data.data['free_text_'+intToStr[i]]
              if(value.trim() !== ''){
                add_free_text(value);
              }
						}
            $(".page-loader").hide();
            $(".card").fadeIn("fast");

						$("#company-name").html(display_name);
						$("#code").html(code);
						$("#code-desc").html(code_desc);
						$("#address1").html(address1);
						$("#address2").html(address2);
						$("#district").html(district);
						$("#province").html(province);
						$("#region").html(region);
            $("#country").html(country);
						$("#llg").html(llg);
						$("#village").html(village);
						$("#web").html(web);
						$("#email").html(email);
						$("#contact-name").html(contact_person_name);
						$("#contact-mobile").html(contact_mobile);
						$("#contact-email").html(contact_person_email);
						$("#contact-alternate-email").html(contact_person_alt_email);
            if(free_text_one.trim() == '') {
              $("#free-text-1-container").remove();
            }
            $("#free-text-1").html(free_text_one);
	        }
	      },
	      error: function(error) {
	        showError("Error in Server! Try again!")
	      },
	  });// Ajax
	}

  function add_free_text(val) {
    INDEX++;
    var str="";
    str += "<tr>";
    str += "            <td>Free Text "+INDEX+"<\/td>";
    str += "            <td> : <\/td>";
    str += "            <td>"+val+"<\/td>";
    str += "          <\/tr>";

    $("#free-text-content").append(str);
  }
})

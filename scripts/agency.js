$(function() {
  get_agencies();

  hris.get_address_details();
  hris.get_facility("select");



  function edit_agency(i) {
    var id = AGENCY_JSON[i].id;
    var type = AGENCY_JSON[i].facility_type;
    var llg = AGENCY_JSON[i].llg;
    var district = AGENCY_JSON[i].district;
    var province = AGENCY_JSON[i].province;
    var region = AGENCY_JSON[i].region;
    var name = AGENCY_JSON[i].facility_name;

    var address1 = AGENCY_JSON[i].address_one;
    var address2 = AGENCY_JSON[i].address_two;
    var email = AGENCY_JSON[i].email;
    var code = AGENCY_JSON[i].branch_code;
    var code_desc = AGENCY_JSON[i].branch_code_desc;
    var web = AGENCY_JSON[i].web_address;
    var contact_person_name = AGENCY_JSON[i].contact_person_name;
    var contact_person_email = AGENCY_JSON[i].contact_person_email;
    var contact_person_alt_email = AGENCY_JSON[i].contact_person_alt_email;

    var llg = search_data(LLG, llg);
    var district = search_data(DISTRICT, district);
    var province = search_data(PROVINCE, province);
    var region = search_data(REGION, region);
    var type = search_data(FACILITY, type);

    $("#facility").selectpicker('val', type);
    $('#llg').selectpicker('val', llg);
    $('#district').selectpicker('val', district);
    $('#province').selectpicker('val', province);
    $('#region').selectpicker('val', region);
    $("#facility-name").val(name);
    $("#add").attr({"status": 1, "data-id": id});
  }

  $(document).delegate(".edit", "click", function() {
    var i = $(this).attr("data-id");
    edit_agency(i);
    slideMenu();
    $("#facility-name").focus();
  })


  function get_agencies() {
    $.ajax({
        url: basepath + "agencies",
        type: "GET",
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Token', TOKEN);
        },
        success: function(data) {
          if(data.status == 'success') {
            AGENCY_JSON = data.data;
            var st="";
            for (var i = 0; i < data.data.length; i++) {
              var district = data.data[i].district;
              var facility_name = data.data[i].facility_name;
              var facility_type = data.data[i].facility_type;
              var llg = data.data[i].llg;
              var province = data.data[i].province;
              var region = data.data[i].region;
              var id = data.data[i].id;
              var del_flag = data.data[i].del_flag;
              var status = status_generator("empcategoryranks", "agencies", del_flag, id);
              st += "<tr>";
              st += "<td></td>";
              st += "                          <td>"+facility_name+"<\/td>";
              st += "                          <td>"+facility_type+"<\/td>";
              st += "                          <td>"+llg+"<\/td>";
              st += "                          <td>"+district+"<\/td>";
              st += "                          <td>"+province+"<\/td>";
              st += "                          <td>"+region+"<\/td>";
              st += "<td>"+status.label+"</td>";
              st += "                          <td class=\"per agency-write text-right\">";
              st += "                              <a href=\"#\" class=\"edit btn btn-sm btn-success btn-icon like\"  data-id=\""+i+"\"><i class=\"material-icons\">edit<\/i><\/a>";
              st += status.button;
              st += "                          <\/td>";
              st += "                      <\/tr>";
            }
            $('#datatables').DataTable().destroy();
            $("#data-body").html(st);
            check_permissions();
            var table = $('#datatables').DataTable({
                   "fnRowCallback": function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                        var index = iDisplayIndexFull + 1;
                        $("td:first", nRow).html(index);
                        return nRow;
                    },
                });
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
  }


  function update_agency() {
    var id = $("#add").attr("data-id");
    var type = $("#facility").val();
    var llg = $("#llg").val();
    var district = $("#district").val();
    var province = $("#province").val();
    var region = $("#region").val();
    var name = $("#facility-name").val();

    var address1 = $("#address1").val();
    var address2 = $("#address2").val();
    var email = $("#email").val();
    var code = $("#division-code").val();
    var code_desc = $("#division-code-desc").val();
    var web = $("#web-address").val();
    var contact_person_name = $("#contact-person-name").val();
    var contact_person_email = $("#contact_person_email").val();
    var contact_person_alt_email = $("#contact_person_alt_email").val();

    var arr = [name.isBlank("Name"), isNull(type, "Facility Type"), isNull(llg, "LLG"), isNull(district,"District"), isNull(province, "Province"), isNull(region, "Region")];
    if(checkEmpty(arr)){
      return false;
  }


    $.ajax({
        url: basepath + "agencies/"+id,
        type: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify({
          // "is_branch": "true",
          "facility_name": name,
          "facility_type_id": type,
          "llg_id": llg,
          "district_id": district,
          "province_id": province,
          "region_id": region,
          "branch_code": code,
          "branch_code_desc": code_desc,
          "address_one": address1,
          "address_two": address2,
          "web_address": web,
          "email": email,
          "contact_person_name": contact_person_name,
          "contact_person_email": contact_person_email,
          "contact_person_alt_email": contact_person_alt_email,
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          if(data.status == 'success') {
            showSuccess("Agency Updated Successfully!");
            pullMenu();
            $("#facility").selectpicker('val', -1);
            $('#llg').selectpicker('val', -1);
            $('#district').selectpicker('val', -1);
            $('#province').selectpicker('val', -1);
            $('#region').selectpicker('val', -1);
            get_agencies();
          } else {
            showError(data.message);
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#add").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  }

  $("#add").click(function(e) {
    e.preventDefault();
    var status = $(this).attr("status");
    if(status === "1") {
      update_agency();
    } else {
      add_agency();
    }
  })

  $(".sp-add-btn").click(function() {
    $("#facility").selectpicker('val', -1);
    $('#llg').selectpicker('val', -1);
    $('#district').selectpicker('val', -1);
    $('#province').selectpicker('val', -1);
    $('#region').selectpicker('val', -1);
  })


  function add_agency() {
    var type = $("#facility").val();
    var llg = $("#llg").val();
    var district = $("#district").val();
    var province = $("#province").val();
    var region = $("#region").val();
    var name = $("#facility-name").val();

    var address1 = $("#address1").val();
    var address2 = $("#address2").val();
    var email = $("#email").val();
    var code = $("#division-code").val();
    var code_desc = $("#division-code-desc").val();
    var web = $("#web-address").val();
    var contact_person_name = $("#contact-person-name").val();
    var contact_person_email = $("#contact_person_email").val();
    var contact_person_alt_email = $("#contact_person_alt_email").val();

    var arr = [name.isBlank("Name"), isNull(type, "Facility Type"), isNull(llg, "LLG"), isNull(district,"District"), isNull(province, "Province"), isNull(region, "Region")];
    if(checkEmpty(arr)){
      return false;
  }


    $.ajax({
        url: basepath + "agencies",
        type: "POST",
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function(xhr) {
          $(".loader").show();
          $("#add").hide();
					xhr.setRequestHeader('Token', TOKEN);
        },
        data: JSON.stringify({
          // "is_branch": "false",
          "facility_name": name,
          "facility_type_id": type,
          "llg_id": llg,
          "district_id": district,
          "province_id": province,
          "region_id": region,
          "branch_code": code,
          "branch_code_desc": code_desc,
          "address_one": address1,
          "address_two": address2,
          "web_address": web,
          "email": email,
          "contact_person_name": contact_person_name,
          "contact_person_email": contact_person_email,
          "contact_person_alt_email": contact_person_alt_email,
        }),
        success: function(data) {
          $(".loader").hide();
          $("#add").show();
          if(data.status == 'success') {
            showSuccess("Agency Added Successfully!");
            pullMenu();
            get_agencies();
          } else {
            showError(data.message);
          }
        },
        error: function(error) {
          $(".loader").hide();
          $("#add").show();
          showError("Error in Server! Try again!")
        },
    });// Ajax
  }


  function search_data(obj, search_item, key1 = "name") {
      var index = -1;
      $.each(obj, function(key, value) {
        if(value[key1] === search_item){
          index = value.id
        }
      })
      return index;
  }
  $("#refresh-control").click(function() {
    get_agencies();
  })

})

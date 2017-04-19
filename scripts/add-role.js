$(function() {

  $("#add").click(function(e) {
    e.preventDefault();

    var title = $("#role-name").val();
    var code = $("#role-code").val();

    if(!title.isBlank("Title") || !code.isBlank("Code")){
      return false;
    }

    var company = $(".company:checked").val();
    var division = $(".division:checked").val();
    var agency = $(".agency:checked").val();
    
  })


})// Document

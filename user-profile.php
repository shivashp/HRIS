<?php
$page_permission = array("key" => "config_management_perm", "value" => "R");
include('header.php');
?>

<div class="content">
  <div class="page-loader">
  <img src="img/loader.gif"><br>
  <div class="page-loader-text">Please Wait...</div>
</div><!-- page-loader-->
<div class="row" style="margin-top:60px;">
  <div class="col-md-3">
    <div class="card card-profile">
      <a href="user.html#pablo">
          <img class="img" src="img/user.jpg" style="border-radius: 50%;width: 115px;height: 115px;margin-top: 15px;"/>
      </a>
        <div class="card-content">
            <h4 class="card-title">Shiva Pandey</h4>
            <h6 class="category">Senior Manager, Sub Agency</h6>            
        </div>
    </div>
  </div>
  <div class="col-md-8">
    <div class="card">

    </div>
  </div>
</div><!-- row -->

</div><!-- content -->
<?php include('footer.php'); ?>
<script>
  active('rank', 'sub-link')
  active('config')
  $(".card").show();
  $(".page-loader").hide();
</script>

<?php include('header.php');
  if(!isset($_GET['action'])){
    echo '<script>
            window.location.href="employee"
          </script>';
  }
?>
<style>
.tab-pane .col-md-6 {
  padding-left: 0;
  padding-right: 0;
}
</style>
<script>
  var action_id = "<?php echo $_GET['action']; ?>" || false;
</script>

<div class="content">
 <div class="page-loader">
  <img src="img/loader.gif"><br>
  <div class="page-loader-text">Please Wait...</div>
</div><!-- page-loader-->
  <div class="form-section">

    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a href="#personal" aria-controls="home" role="tab" data-toggle="tab">Personal Details</a></li>
      <li role="presentation"><a href="#training" aria-controls="training" role="tab" data-toggle="tab">Training / Certification</a></li>
      <li role="presentation"><a href="#qualificatoin" aria-controls="qualificatoin" role="tab" data-toggle="tab">Qualifications</a></li>
      <li role="presentation"><a href="#employment" aria-controls="employment" role="tab" data-toggle="tab">Employment History</a></li>
      <li role="presentation"><a href="#benefits" aria-controls="benefits" role="tab" data-toggle="tab">Benefits</a></li>
      <li role="presentation"><a href="#discipline" aria-controls="discipline" role="tab" data-toggle="tab">Disciplinary Records</a></li>
      <li role="presentation"><a href="#appraisals" aria-controls="appraisals" role="tab" data-toggle="tab">Appraisals</a></li>
    </ul>

  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="personal">
      <?php include("components/personal.php"); ?>
    </div><!-- personal -->
    <div role="tabpanel" class="tab-pane" id="training">
      <?php include("components/certifications.php"); ?>
    </div><!-- training -->
    <div role="tabpanel" class="tab-pane" id="qualificatoin">
      <?php include("components/qualification.php"); ?>
    </div><!-- qualificatoin -->
    <div role="tabpanel" class="tab-pane" id="employment">

    </div><!-- employment -->
    <div role="tabpanel" class="tab-pane" id="benefits"></div><!-- benefits -->
    <div role="tabpanel" class="tab-pane" id="discipline"></div><!-- discipline -->
    <div role="tabpanel" class="tab-pane" id="appraisals"></div><!-- appraisals -->
  </div><!-- tab-content -->
  </div><!-- form-section -->
</div><!-- content -->




<?php include('footer.php'); ?>
<script src="js/moment.min.js" charset="utf-8"></script>
<script src = 'scripts/single-employee.js'></script>
<script>
  active('employee')
  $(function() {
    demo.initFormExtendedDatetimepickers();
  })
</script>

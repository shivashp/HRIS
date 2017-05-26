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
.nav-tabs {
  display: block;
}
.main-panel > .content {
    margin-top: 120px;
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
      <?php include("components/emp-history.php"); ?>
    </div><!-- employment -->
    <div role="tabpanel" class="tab-pane" id="benefits">
      <?php include("components/benefits.php"); ?>
    </div><!-- benefits -->
    <div role="tabpanel" class="tab-pane" id="discipline">
      <?php include("components/disciplinary-records.php"); ?>
    </div><!-- discipline -->
    <div role="tabpanel" class="tab-pane" id="appraisals">
      <?php include("components/appraisals.php"); ?>
    </div><!-- appraisals -->
  </div><!-- tab-content -->
  </div><!-- form-section -->
</div><!-- content -->




<?php include('footer.php'); ?>
<script src="js/moment.min.js" charset="utf-8"></script>
<script src = 'scripts/single-employee.js'></script>
<script src = 'scripts/emp-history.js'></script>
<script src = 'scripts/benefits.js'></script>
<script src = 'scripts/emp-disciplinary.js'></script>
<script>
  active('employee')
  $(function() {
    demo.initFormExtendedDatetimepickers();
  })
</script>

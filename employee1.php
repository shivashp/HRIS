<?php include('header.php'); ?>

<div class="content">
  <div class="row">
    <a href="create-employee.php" class="btn btn-success pull-right">Add Employee</a>
  </div>
  <div class="row" id="top-bar">
    <div class="col-md-6">
      <h3>Employees</h3>
    </div>
    <div class="col-md-6 col-sm-6 pull-right">
      <form class="navbar-form navbar-right" id="employee-search" role="search">
        <div class="col-md-6" id="branch-agency-select">
          <select class="selectpicker" data-style="btn select-with-transition sp-select">
            <option value="agency" selected="">Agency</option>
            <option value="branch">Branch</option>
          </select>
        </div>
          <div class="form-group form-search is-empty col-md-6">
              <input type="text" class="form-control" id="search-employee" placeholder="Search Employee">
              <span class="material-input"></span>
          </div>
      </form>
    </div>
  </div><!-- row-->
  <div class="container">
    <div class="row" id="employee-data">
      <!-- <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div class="single-box">
          <a href="single-employee.php">
            <div class="col-sm-4">
                <div class="text-center">
                    <img alt="image" class="img-circle emp-image img-responsive" src="img/user.jpg">
                </div>
            </div>
            <div class="col-sm-8">
                <h3><strong>John Smith</strong></h3>
                <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>
                <address>
                    <strong>Twitter, Inc.</strong><br>
                    795 Folsom Ave, Suite 600<br>
                    San Francisco, CA 94107<br>
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
            </div>
            <div class="clearfix"></div>
          </a>
        </div><!- single-box->
      </div> -->

    </div><!-- row-->
  </div><!-- container -->
</div><!-- content -->

<?php include('footer.php'); ?>
<script src="scripts/employee.js"></script>
<script>
  active('employee')
</script>

<?php include('header.php');
  if(!isset($_GET['action'])){
    echo '<script>
            window.location.href="employee.php"
          </script>';
  }
?>

<script>
  var action_id = "<?php echo $_GET['action']; ?>" || false;
  console.log(action_id);
</script>

<div class="content">
  <div class="form-section">
    <div class="card">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-content">
          <h4 class="card-title">Employee Details</h4>
          <div class="row">
            <div id="prfl-intro">
              <img src="img/user.jpg" class="img-circle" id="prfl-img">
              <h3 id="prfl-name">Shiva Pandey</h3>
            </div><!-- prfl-intro -->
          </div><!-- row -->
          <div id="tabs">
            <ul class="nav">
              <li class="nav-item active">
                <a class="nav-link" data-toggle="tab" href="#personal">Personal Details</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#contact">Contact Details</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#employment">Employment Details</a>
              </li>
            </ul>
          </div><!-- row -->
          <div class="tab-content">
              <div class="tab-pane active" id="personal">
                <div class="row">
                  <div class="col-md-5 col-md-offset-2">

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">First Name</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="first-name">Shiva</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Last Name</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="last-name">Pandey</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Sex</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="sex">Male</span>
                      </div>
                    </div><!--se-single-data-->

                  </div><!-- col-md-6 -->

                  <div class="col-md-5 ">
                    <!-- Data on right side -->

                    <div class="se-single-data row">
                      <div class="col-sm-5">
                        <span class="se-label">Middle Name</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-6">
                        <span class="se-value" id="middle-name"></span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-5">
                        <span class="se-label">Age</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-6">
                        <span class="se-value" id="age">23</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-5">
                        <span class="se-label">Date of Birth</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-6">
                        <span class="se-value" id="dob">1993-12-19</span>
                      </div>
                    </div><!--se-single-data-->

                  </div><!-- col-md-6-->
                </div><!-- row -->
              </div><!-- personal -->
              <div class="tab-pane" id="contact">
                <div class="row">
                  <div class="col-md-5 col-md-offset-1">

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Address 1</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="address1">Old baneshwor</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Village</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="villlage">Ambika Marg</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">District</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="district">Kathmandu</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Region</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="region">Central</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Phone No</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="phone">9811934727</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Alternate Phone No</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="phone1">9867274283</span>
                      </div>
                    </div><!--se-single-data-->

                  </div><!-- col-md-6 -->

                  <div class="col-md-6">
                    <!-- Data on right side -->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Address 2</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="address2"></span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">LLG</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="llg">llg</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Province</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="province">Bagmati</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Country</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="country">Nepal</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Email</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-7">
                        <span class="se-value" id="email"></span>
                      </div>
                    </div><!--se-single-data-->

                  </div><!-- col-md-6-->
                </div><!-- row -->
              </div><!-- contact -->
              <div class="tab-pane" id="employment">
                <div class="row">
                  <div class="col-md-6 col-md-offset-1">

                    <div class="se-single-data row">
                      <div class="col-sm-6">
                        <span class="se-label">Employee Number</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-5">
                        <span class="se-value" id="emp-number">12345</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-6">
                        <span class="se-label">Retirement Age</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-5">
                        <span class="se-value" id="retirement-age">79</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-6">
                        <span class="se-label">Branch/Agency</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-5">
                        <span class="se-value" id="branch-agency">Kathmandu</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-6">
                        <span class="se-label">Employee Type</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-5">
                        <span class="se-value" id="emp_type">Full Time</span>
                      </div>
                    </div><!--se-single-data-->

                  </div><!-- col-md-6 -->

                  <div class="col-md-5 ">
                    <!-- Data on right side -->

                    <div class="se-single-data row">
                      <div class="col-sm-6">
                        <span class="se-label">Salary Step</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-5">
                        <span class="se-value" id="salary-step">2.2</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-6">
                        <span class="se-label">Date of Commencement</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-5">
                        <span class="se-value" id="date-of-commencement">2016-01-01</span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-6">
                        <span class="se-label">Employee Category</span>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-5">
                        <span class="se-value">Doctor</span>
                      </div>
                    </div><!--se-single-data-->

                  </div><!-- col-md-6-->
                </div><!-- row -->
              </div><!-- employmnet -->
          </div><!--tab-content-->
      </div><!-- card-content -->

    </div><!-- card -->
  </div><!-- form-section -->
</div><!-- content -->

<?php include('footer.php'); ?>
<script src = 'scripts/single-employee.js'></script>
<script>
  active('employee')
</script>

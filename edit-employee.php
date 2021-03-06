<?php
  $page_permission = array("key" => "agency_emp_perm", "value" => "W");
  include('header.php');
?>
<script>
  var action_id = '<?php echo $_GET['action']; ?>';
  if(action_id === undefined || action_id === null || action_id === '') {
    window.location.href="employee.php";
  }
</script>
<div class="content">
 <div class="page-loader">
  <img src="img/loader.gif"><br>
  <div class="page-loader-text">Please Wait...</div>
</div><!-- page-loader-->
  <div class="card">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">person</i>
      </div>
      <div class="card-content">
          <h4 class="card-title">Edit Employee</h4>
          <form class="form-horizontal" id="myform">
            <div class="row add-emp-row" style="background: #4B8DF8;margin-left: -20px;margin-right: -20px;">
              <h3>Personal Details</h3>
            </div>

            <div class="row add-emp-row">
              <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label date-label">Salutation</label>
                    <select class="selectpicker" name="salutation" id="salutation" data-style="select-with-transition" title="Choose Salutation" data-size="7">
                      <option value="Mr">Mr.</option>
                      <option value="Ms">Ms.</option>
                      <option value="Dr">Dr.</option>
                    </select>
                    <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label date-label">First Name</label>
                    <input type="text" name="firstname" id="first-name" class="form-control">
                    <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label date-label">Middle Name</label>
                    <input type="text" name ="middlename" id="middle-name" class="form-control">
                    <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->

            </div><!--row -->

            <div class="row add-emp-row">
              <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label date-label">Last Name</label>
                    <input type="text" name="lastname" id="last-name" class="form-control">
                    <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group">
                <label class="control-label date-label">Sex</label>
                    <select class="selectpicker" name="sex" id="sex" data-style="select-with-transition" title="Choose Sex" data-size="7">
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                      <option value="O">Others</option>
                    </select>
                    <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label date-label">Date of Birth</label>
                    <input type="text" name="dob" id="dob" class="datepicker form-control" >
                    <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->
            </div><!--row -->

            <div class="row add-emp-row">
              <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label date-label">Address 1</label>
                    <input type="text" name="address1" id="address1" class="form-control">
                    <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label date-label">Address 2</label>
                    <input type="text" id="address2" class="form-control">
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group">
                  <label class="control-label date-label">Village</label>
                  <input type="text" id="village" name="village" class="form-control">
                  <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->

            </div><!--row -->

            <div class="row add-emp-row">
              <div class="col-md-4">
                <div class="form-group label-floating">
                    <label class="control-label">Region</label>
                    <select class="selectpicker1" id="region" data-style="select-with-transition" title="Choose Region" data-size="7">
                    </select>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group label-floating">
                  <label class="control-label">Province</label>
                  <select class="selectpicker1" id="province" data-style="select-with-transition" title="Choose Province" data-size="7">
                  </select>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group label-floating">
                    <label class="control-label">District</label>
                    <select class="selectpicker1" id="district" data-style="select-with-transition" title="Choose District" data-size="7">
                    </select>
                </div>
              </div><!-- col-md-4-->

            </div><!--row -->

            <div class="row add-emp-row">
              <div class="col-md-4">
                <div class="form-group label-floating">
                    <label class="control-label">LLG</label>
                    <select class="selectpicker1" id="llg" name="llg" data-style="select-with-transition" title="Choose LLG" data-size="7">
                    </select>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label date-label">Country</label>
                    <select name="country" id="country" data-style="select-with-transition" title="Choose Country" data-size="7">
                      <option value="Nepal">Nepal</option>
                    </select>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group">
                  <label class="control-label date-label">Email</label>
                  <input type="email" id="email" name="email" class="form-control">
                  <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->
            </div><!--row -->

            <div class="row add-emp-row">
              <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label date-label">Phone No.</label>
                    <input type="number" name="phone" id="phone" class="form-control">
                    <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->
              <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label date-label">Alternate Phone No.</label>
                    <input type="number" id="phone1" class="form-control">
                </div>
              </div><!-- col-md-4-->
            </div><!--row -->

            <div class="row add-emp-row" style="background: #4B8DF8;margin-left: -20px;margin-right: -20px;">
              <h3>Employment Details</h3>
            </div>

            <div class="row add-emp-row">
              <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label date-label">Employment Number</label>
                    <input type="text" name="employeenumber" id="employee-number" class="form-control">
                    <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group">
                  <label class="control-label date-label">Salary Step</label>
                  <input type="text" name="salarystep" id="salary-step" class="form-control">
                  <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label date-label">Retirement Age</label>
                    <input type="number" name="retirement_age" id="retirement-age" class="form-control">
                    <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->
            </div><!--row -->

            <div class="row add-emp-row">
              <div class="col-md-4">
               <div class="form-group " style="margin-top:15px">
                  <label class="control-label date-label">Date of Commencement</label>
                    <input type="text" name="startdate" id="start-date" class="datepicker form-control">
                    <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group">
                <label class="control-label date-label">Branch / Agency</label>
                  <select class="selectpicker" id="branch-agency" data-style="select-with-transition" title="Choose Branch/Agency" data-size="7">
                    <option value="branch">Branch</option>
                    <option value="agency">Agency</option>
                  </select>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4" id="choose-agency">
                <div class="form-group">
                <label class="control-label date-label">Agency</label>
                  <select class="selectpicker1" id="agency" data-style="select-with-transition" title="Choose Agency" data-size="7">

                  </select>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4" id="choose-branch">
                <div class="form-group">
                <label class="control-label date-label">Branch</label>
                  <select id="branch" data-style="select-with-transition" title="Choose Branch" data-size="7">
                  </select>
                </div>
              </div><!-- col-md-4-->
            </div><!--row -->


            <div class="row add-emp-row">
              <div class="col-md-4">
                <div class="form-group"  style="margin-top:0">
                <label class="control-label date-label">Employee Category</label>
                  <select id="employee-category" data-style="select-with-transition" title="Choose Employee Category" data-size="7">

                  </select>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group"  style="margin-top:3px">
                    <label class="control-label date-label">Position Title</label>
                    <select class="selectpicker1" name="position-title" id="position-title" data-style="select-with-transition" title="Choose Position" data-size="7">

                    </select>
                    <div class="help-block with-errors"></div>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4">
                <div class="form-group"  style="margin-top:3px">
                <label class="control-label date-label">Employee Type</label>
                  <select id="employee-type" data-style="select-with-transition" title="Choose Employee Type" data-size="7">

                  </select>
                </div>
              </div><!-- col-md-4-->

              <div class="col-md-4" id="contract-end">
                <div class="form-group " style="margin-top:0">
                  <label class="control-label date-label">Contract End Date</label>
                  <input type="text" class="form-control datepicker" id="contract-end-date" >
                </div>
              </div><!-- <colgroup></colgroup>l-md-4-->
            </div><!--row -->

            <div class="row text-center" style="margin-top:20px;">
              <button type="submit" name="Save" class="btn btn-success" id="add">Save</button>
              <input type="reset" class="btn btn-danger" value="Clear" name="Clear">
            </div>
          </form>
      </div> <!-- end content-->
  </div> <!--  end card  -->
</div><!-- content -->
<?php include('footer.php'); ?>
<script src="js/jquery-validate.js" charset="utf-8"></script>
<script>
  $(".card").fadeIn("fast")
  active('add-employee')
  $().ready(function() {
      demo.initFormExtendedDatetimepickers();
  });
</script>
<script src="scripts/edit-employee.js" charset="utf-8"></script>
<style>
  .btn-group.bootstrap-select {
    margin-top: 2px;
  }
  label.error {
    color: #f44336;
  }
  label.control-label.date-label {
    font-size: 14px;
    margin-top: -27px;
    margin-bottom: 8px;
}
</style>

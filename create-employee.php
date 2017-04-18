<?php include('header.php'); ?>

<div class="content">
  <div class="container-fluid">
          <!--      Wizard container        -->
          <div class="wizard-container">
              <div class="card wizard-card" data-color="rose" id="wizardProfile">
                  <form action="wizard.html" method="">
                      <!--        You can switch " data-color="purple" "  with one of the next bright colors: "green", "orange", "red", "blue"       -->
                      <div class="wizard-header">
                          <h3 class="wizard-title">
                              Create Employee Details
                          </h3>

                      </div>
                      <div class="wizard-navigation">
                          <ul>
                              <li>
                                  <a href="#personal" data-toggle="tab">Personal Details</a>
                              </li>
                              <li>
                                  <a href="#contact" data-toggle="tab">Contact Details</a>
                              </li>
                              <li>
                                  <a href="#employment" data-toggle="tab">Employment Details</a>
                              </li>
                              <li>
                                  <a href="#finish-screen" data-toggle="tab">Submit</a>
                              </li>
                          </ul>
                      </div>
                      <div class="tab-content">
                          <div class="tab-pane" id="personal">
                              <div class="row">
                                  <div class="col-sm-4">
                                      <div class="picture-container" style="margin-top: 100px;">
                                          <div class="picture">
                                              <img src="img/default-avatar.png" class="picture-src" id="wizardPicturePreview" title="" />
                                              <input type="file" id="wizard-picture">
                                          </div>
                                          <h6>Choose Picture</h6>
                                      </div>
                                  </div>
                                  <div class="col-sm-6">
                                      <div class="input-group">
                                          <span class="input-group-addon"><i class="material-icons">face</i></span>
                                          <div class="form-group label-floating">
                                              <label class="control-label">First Name<small>(required)</small></label>
                                              <input name="firstname" type="text" id="first-name" class="form-control">
                                              <span class="help-block with-errors">First name is required</span>
                                          </div>
                                      </div><!-- input-group-->
                                      <div class="input-group">
                                          <span class="input-group-addon"><i class="material-icons">face</i></span>
                                          <div class="form-group label-floating">
                                              <label class="control-label">Middle Name</label>
                                              <input name="middlename" id="middle-name" type="text" class="form-control">
                                          </div>
                                      </div><!-- input-group-->
                                      <div class="input-group">
                                          <span class="input-group-addon"><i class="material-icons">record_voice_over</i></span>
                                          <div class="form-group label-floating">
                                              <label class="control-label">Last Name<small>(required)</small></label>
                                              <input name="lastname" id="last-name" type="text" class="form-control">
                                              <span class="help-block with-errors">Last name is required</span>
                                          </div>
                                      </div><!-- input-group-->

                                      <div class="input-group">
                                        <span class="input-group-addon">Sex</span>
                                          <div class="form-group label-floating">
                                              <select class="selectpicker1 form-control" data-style="btn select-with-transition sp-select" id="sex"  title="Choose Sex">
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                                <option value="O">Others</option>
                                              </select>
                                          </div>
                                      </div><!-- input-group -->

                                      <div class="input-group">
                                        <span class="input-group-addon">Age</span>
                                          <div class="form-group label-floating">
                                              <input name="age" id="age" type="number" class="form-control">
                                              <span class="help-block with-errors">Age should be greater than 18 and less than 7</span>
                                          </div>
                                      </div><!-- input-group-->

                                      <div class="input-group">
                                          <span class="input-group-addon">DoB</span>
                                          <div class="form-group label-floating is-empty">
                                              <input name="dob" type="text" id="dob" class="form-control datepicker" />
                                              <span class="help-block with-errors">Date is required</span>
                                          </div>
                                      </div><!-- input-group-->
                                  </div>
                              </div><!-- row -->
                          </div><!-- about -->
                          <div class="tab-pane" id="contact">
                              <div class="row">

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Address 1</span>
                                      <div class="form-group label-floating">
                                          <input name="address1" id="address1" type="text" class="form-control">
                                          <span class="help-block with-errors">Address length should be greater than 3 characters</span>
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Address 2</span>
                                      <div class="form-group label-floating">
                                          <input name="address2" id="address2" type="text" class="form-control">
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Village</span>
                                      <div class="form-group label-floating">
                                          <input name="village" id="village" type="text" class="form-control">
                                          <span class="help-block with-errors">Village is required</span>
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">LLG</span>
                                      <div class="form-group label-floating">
                                        <input type="text" name="llg" id="llg" class="form-control">
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">District</span>
                                      <div class="form-group label-floating">
                                        <input type="text" name="district" id="district" class="form-control">
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Province</span>
                                      <div class="form-group label-floating">
                                        <input type="text" name="province" id="province" class="form-control">
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Region</span>
                                      <div class="form-group label-floating">
                                        <input type="text" name="region" id="region" class="form-control">
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Country</span>
                                      <div class="form-group label-floating">
                                        <select class="form-control" id="country" name="">
                                        </select>
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Email</span>
                                      <div class="form-group label-floating">
                                        <input type="email" id="email" name="email" class="form-control">
                                        <span class="help-block with-errors">Email should be valid and not empty</span>
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Phone No</span>
                                      <div class="form-group label-floating">
                                        <input type="text" id="phone" name="phone" class="form-control">
                                        <span class="help-block with-errors">Phone number is required</span>
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Alternate Phone No</span>
                                      <div class="form-group label-floating">
                                        <input type="text" id="phone1" name="phone" class="form-control">
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->


                              </div><!-- row -->
                          </div><!-- contact -->
                          <div class="tab-pane" id="employment">
                              <div class="row">

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Employee Number</span>
                                      <div class="form-group label-floating">
                                          <input name="employeenumber" id="employee-number" type="text" class="form-control">
                                          <span class="help-block with-errors">Employee number is required</span>
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Salary Step</span>
                                      <div class="form-group label-floating">
                                          <input name="salaryStep" id="salary-step" type="text" class="form-control">
                                          <span class="help-block with-errors">Salary step is required</span>
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Retirement Age</span>
                                      <div class="form-group label-floating">
                                          <input name="retirementage" id="retirement-age" type="number" class="form-control">
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Date of Commencement</span>
                                      <div class="form-group label-floating">
                                          <input name="startdate" id="start-date" type="text" class="form-control datepicker">
                                          <span class="help-block with-errors">Date of Commencement is required</span>
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Branch/Agency</span>
                                      <div class="form-group label-floating">
                                        <select class="form-control" id="branch-agency" name="">
                                          <!-- <option value="" disabled selected>Choose Branch/Agency</option> -->
                                          <option value="branch">Branch</option>
                                          <option value="agency">Agency</option>
                                        </select>
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6" id="choose-branch">
                                  <div class="input-group">
                                    <span class="input-group-addon">Branch</span>
                                      <div class="form-group label-floating">
                                        <select class="form-control" id="branch" name="">

                                        </select>
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6" id="choose-agency">
                                  <div class="input-group">
                                    <span class="input-group-addon">Agency</span>
                                      <div class="form-group label-floating">
                                        <select class="form-control" id="agency" name="">

                                        </select>
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Employee Category</span>
                                      <div class="form-group label-floating">
                                        <select class="form-control" id="employee-category" name="">

                                        </select>
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6">
                                  <div class="input-group">
                                    <span class="input-group-addon">Employee Type</span>
                                      <div class="form-group label-floating">
                                        <select class="form-control" id="employee-type" name="">

                                        </select>
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->

                                <div class="col-md-6" id="contract-end">
                                  <div class="input-group">
                                    <span class="input-group-addon">Contract End Date</span>
                                      <div class="form-group label-floating">
                                        <input type="text" class="form-control datepicker" id="contract-end-date" name="" value="">
                                      </div>
                                  </div><!-- input-group-->
                                </div><!-- col-md-6 -->
                              </div><!--row -->
                          </div><!-- employment-details -->

                          <div class="tab-pane" id="finish-screen">
                            <div class="row">
                              <div class="col-lg-10 col-lg-offset-1" style="text-align: center;">
                                <h2>Employee Data Entry Finished!</h2>
                                <h5>If you want to change any details press previous button to go back and change details</h5>
                              </div>
                            </div>
                          </div><!-- finish-screen -->
                      </div>
                      <div class="wizard-footer">
                          <div class="pull-right">
                              <input type='button' class='btn btn-next btn-fill btn-success btn-wd' name='next' value='Next' />
                              <input type='button' class='btn btn-finish btn-fill btn-success btn-wd' id="finish" name='finish' value='Finish' />
                          </div>
                          <div class="pull-left">
                              <input type='button' class='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />
                          </div>
                          <div class="clearfix"></div>
                      </div>
                  </form>
              </div>
          </div>
          <!-- wizard container -->
  </div>
</div><!-- content-->
<?php include('footer.php'); ?>
<!-- Forms Validations Plugin -->
<script src="js/jquery-validate.js"></script>
<!--  Plugin for the Wizard -->
<script src="js/bootstrap-wizard.js"></script>
<script src="scripts/create-employee.js"></script>
<script>
  active('employee')
  $().ready(function() {
      demo.initMaterialWizard();
      demo.initFormExtendedDatetimepickers();
  });
</script>

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
                                  <a href="wizard.html#about" data-toggle="tab">Personal Details</a>
                              </li>
                              <li>
                                  <a href="wizard.html#account" data-toggle="tab">Contact Details</a>
                              </li>
                              <li>
                                  <a href="wizard.html#address" data-toggle="tab">Employment Details</a>
                              </li>
                          </ul>
                      </div>
                      <div class="tab-content">
                          <div class="tab-pane" id="about">
                              <div class="row">
                                  <div class="col-sm-4">
                                      <div class="picture-container">
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
                                              <input name="firstname" type="text" class="form-control">
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
                                          </div>
                                      </div><!-- input-group-->
                                  </div>
                              </div><!-- row -->
                              <div class="row">
                                <div class="col-lg-11">
                                  <div class="col-md-6">
                                    <div class="input-group">
                                      <span class="input-group-addon">Employee Number</span>
                                        <div class="form-group label-floating">
                                            <input name="employeenumber" id="employee-number" type="text" class="form-control">
                                        </div>
                                    </div><!-- input-group-->
                                  </div><!-- col-md-3 -->
                                  <div class="col-md-6">
                                    <div class="input-group">
                                      <span class="input-group-addon">Sex</span>
                                        <div class="form-group label-floating">
                                            <select class="selectpicker" data-style="btn select-with-transition sp-select" id="sex"  title="Choose Sex">
                                              <option value="M">Male</option>
                                              <option value="F">Female</option>
                                              <option value="O">Others</option>
                                            </select>
                                        </div>
                                    </div><!-- input-group-->
                                  </div><!-- col-md-3 -->
                                  <div class="col-md-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">Date Of Birth</span>
                                        <div class="form-group label-floating is-empty">
                                            <input type="text" id="dob" class="form-control datepicker" />
                                        </div>
                                    </div><!-- input-group-->
                                  </div><!-- col-md-3-->
                                  <div class="col-md-6">
                                    <div class="input-group">
                                      <span class="input-group-addon">Age</span>
                                        <div class="form-group label-floating">
                                            <input name="age" id="age" type="text" class="form-control">
                                        </div>
                                    </div><!-- input-group-->
                                  </div>
                                </div><!-- col-lg-->
                              </div><!-- row -->
                          </div><!-- about -->
                          <div class="tab-pane" id="account">
                              <h4 class="info-text"> What are you doing? (checkboxes) </h4>
                              <div class="row">
                                  <div class="col-lg-10 col-lg-offset-1">
                                      <div class="col-sm-4">
                                          <div class="choice" data-toggle="wizard-checkbox">
                                              <input type="checkbox" name="jobb" value="Design">
                                              <div class="icon">
                                                  <i class="fa fa-pencil"></i>
                                              </div>
                                              <h6>Design</h6>
                                          </div>
                                      </div>
                                      <div class="col-sm-4">
                                          <div class="choice" data-toggle="wizard-checkbox">
                                              <input type="checkbox" name="jobb" value="Code">
                                              <div class="icon">
                                                  <i class="fa fa-terminal"></i>
                                              </div>
                                              <h6>Code</h6>
                                          </div>
                                      </div>
                                      <div class="col-sm-4">
                                          <div class="choice" data-toggle="wizard-checkbox">
                                              <input type="checkbox" name="jobb" value="Develop">
                                              <div class="icon">
                                                  <i class="fa fa-laptop"></i>
                                              </div>
                                              <h6>Develop</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane" id="address">
                              <div class="row">
                                  <div class="col-sm-12">
                                      <h4 class="info-text"> Are you living in a nice area? </h4>
                                  </div>
                                  <div class="col-sm-7 col-sm-offset-1">
                                      <div class="form-group label-floating">
                                          <label class="control-label">Street Name</label>
                                          <input type="text" class="form-control">
                                      </div>
                                  </div>
                                  <div class="col-sm-3">
                                      <div class="form-group label-floating">
                                          <label class="control-label">Street No.</label>
                                          <input type="text" class="form-control">
                                      </div>
                                  </div>
                                  <div class="col-sm-5 col-sm-offset-1">
                                      <div class="form-group label-floating">
                                          <label class="control-label">City</label>
                                          <input type="text" class="form-control">
                                      </div>
                                  </div>
                                  <div class="col-sm-5">
                                      <div class="form-group label-floating">
                                          <label class="control-label">Country</label>
                                          <select name="country" class="form-control">
                                              <option disabled="" selected=""></option>
                                              <option value="Afghanistan"> Afghanistan </option>
                                              <option value="Albania"> Albania </option>
                                              <option value="Algeria"> Algeria </option>
                                              <option value="American Samoa"> American Samoa </option>
                                              <option value="Andorra"> Andorra </option>
                                              <option value="Angola"> Angola </option>
                                              <option value="Anguilla"> Anguilla </option>
                                              <option value="Antarctica"> Antarctica </option>
                                              <option value="...">...</option>
                                          </select>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="wizard-footer">
                          <div class="pull-right">
                              <input type='button' class='btn btn-next btn-fill btn-rose btn-wd' name='next' value='Next' />
                              <input type='button' class='btn btn-finish btn-fill btn-rose btn-wd' name='finish' value='Finish' />
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
<!--  Plugin for the Wizard -->
<script src="js/bootstrap-wizard.js"></script>
<script>
  active('employee')
  $().ready(function() {
      demo.initMaterialWizard();
      demo.initFormExtendedDatetimepickers();
  });
</script>

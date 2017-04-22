<?php include('header.php');
  if(!isset($_GET['action'])){
    echo '<script>
            window.location.href="employee.php"
          </script>';
  }
?>

<script>
  var action_id = "<?php echo $_GET['action']; ?>" || false;
</script>

<div class="content">
  <div class="form-section">
    <div class="card">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-content">
          <h4 class="card-title">Personal Details</h4>
          <div class="tab-content">
              <div class="tab-pane active" id="personal">
                <div class="row">
                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">First Name</span>
                      </div>

                      <div class="col-sm-8">
                        <span class="se-value" id="first-name"></span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Last Name</span>
                      </div>

                      <div class="col-sm-8">
                        <span class="se-value" id="last-name"></span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Sex</span>
                      </div>

                      <div class="col-sm-8">
                        <span class="se-value" id="sex"></span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Middle Name</span>
                      </div>

                      <div class="col-sm-8">
                        <span class="se-value" id="middle-name"></span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Age</span>
                      </div>

                      <div class="col-sm-8">
                        <span class="se-value" id="age"></span>
                      </div>
                    </div><!--se-single-data-->

                    <div class="se-single-data row">
                      <div class="col-sm-4">
                        <span class="se-label">Date of Birth</span>
                      </div>

                      <div class="col-sm-8">
                        <span class="se-value" id="dob"></span>
                      </div>
                    </div><!--se-single-data-->
                </div><!-- row -->
              </div><!-- personal -->
          </div><!--tab-content-->
      </div><!-- card-content -->
    </div><!-- card -->

    <div class="card">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
        <div class="card-content">
            <h4 class="card-title">Contact Details</h4>
            <form class="form-horizontal">
              <div class="row">
                  <div class="se-single-data row">
                    <div class="col-sm-4">
                      <span class="se-label">Address 1</span>
                    </div>

                    <div class="col-sm-8">
                      <span class="se-value" id="address1"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-4">
                      <span class="se-label">Village</span>
                    </div>

                    <div class="col-sm-8">
                      <span class="se-value" id="village"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-4">
                      <span class="se-label">District</span>
                    </div>

                    <div class="col-sm-8">
                      <span class="se-value" id="district"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-4">
                      <span class="se-label">Region</span>
                    </div>

                    <div class="col-sm-8">
                      <span class="se-value" id="region"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-4">
                      <span class="se-label">Phone No</span>
                    </div>

                    <div class="col-sm-8">
                      <span class="se-value" id="phone"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-4">
                      <span class="se-label">Alternate Phone No</span>
                    </div>

                    <div class="col-sm-8">
                      <span class="se-value" id="phone1"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-4">
                      <span class="se-label">Address 2</span>
                    </div>

                    <div class="col-sm-8">
                      <span class="se-value" id="address2"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-4">
                      <span class="se-label">LLG</span>
                    </div>

                    <div class="col-sm-8">
                      <span class="se-value" id="llg"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-4">
                      <span class="se-label">Province</span>
                    </div>

                    <div class="col-sm-8">
                      <span class="se-value" id="province"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-4">
                      <span class="se-label">Country</span>
                    </div>

                    <div class="col-sm-8">
                      <span class="se-value" id="country"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-4">
                      <span class="se-label">Email</span>
                    </div>
                    <div class="col-sm-8">
                      <span class="se-value" id="email"></span>
                    </div>
                  </div><!--se-single-data-->
              </div><!-- row -->
            </form>
        </div>
    </div><!-- card-->

    <div class="card">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
        <div class="card-content">
            <h4 class="card-title">Employment Details</h4>
            <form class="form-horizontal">
              <div class="row">
                  <div class="se-single-data row">
                    <div class="col-sm-6">
                      <span class="se-label">Employee Number</span>
                    </div>

                    <div class="col-sm-6">
                      <span class="se-value" id="emp-number"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-6">
                      <span class="se-label">Retirement Age</span>
                    </div>

                    <div class="col-sm-6">
                      <span class="se-value" id="retirement-age"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-6">
                      <span class="se-label">Branch/Agency</span>
                    </div>

                    <div class="col-sm-6">
                      <span class="se-value" id="branch-agency"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-6">
                      <span class="se-label">Employee Type</span>
                    </div>

                    <div class="col-sm-6">
                      <span class="se-value" id="emp_type"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-6">
                      <span class="se-label">Salary Step</span>
                    </div>

                    <div class="col-sm-6">
                      <span class="se-value" id="salary-step"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-6">
                      <span class="se-label">Date of Commencement</span>
                    </div>

                    <div class="col-sm-6">
                      <span class="se-value" id="date-of-commencement"></span>
                    </div>
                  </div><!--se-single-data-->

                  <div class="se-single-data row">
                    <div class="col-sm-6">
                      <span class="se-label">Employee Category</span>
                    </div>

                    <div class="col-sm-6">
                      <span class="se-value" id="emp-category"></span>
                    </div>
                  </div><!--se-single-data-->

              </div><!-- row -->
            </form>
        </div>
    </div><!-- card-->

    <div class ="training-input">
      <div class="card">
          <div class="card-content">
              <h4 class="card-title">Add Training</h4>
              <form method="get" action="#" class="form-horizontal">
                  <div class="card-content">

                    <div class="row">
                        <label class="col-sm-2 label-on-left">Name</label>
                        <div class="col-sm-10">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" id="name" class="form-control" placeholder = "Name" value>
                            </div>
                        </div>
                    </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Organizer Name</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="organizer-name" class="form-control" placeholder = "Organizer Name" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Funding Source</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="funding-source" class="form-control" placeholder = "Funding Source" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Duration</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="duration" class="form-control" placeholder = "Duration" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Institute</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="institute" class="form-control" placeholder = "Institute" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">City</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="training-city" class="form-control" placeholder = "City" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">State</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="training-state" class="form-control" placeholder = "State" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Province</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="training-province" class="form-control" placeholder = "Province" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Country</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <select class="selectpicker1 country" data-style="btn select-with-transition sp-select" id="training-country"  title="Choose Country">
                                  </select>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Start Date</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input name="dob" type="text" id="start-date" class="form-control datepicker" />
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">End Date</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input name="dob" type="text" id="end-date" class="form-control datepicker" />
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <div class="col-md-12" style = "text-align:center;margin-top:30px">
                              <div class="form-group form-button">
                                <span class="loader"><img src="img/loader.gif"></span><button type="button" id="save-training" class="btn btn-fill btn-success sp-save-btn">Save</button>
                                <button type="reset" class="btn btn-fill btn-danger"><i class="material-icons">delete_forever</i> Clear</button>
                              </div>
                          </div>
                      </div>
                  </div><!-- card-content -->
              </form>
          </div>
      </div><!-- card-->
    </div><!-- training-input -->

    <div class="card" id="trainings">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-header card-header-icon" data-background-color="purple" style="float:right;font-size: 18px;font-weight: 400;background: #4c68a2;">
          <a href="#" id="add-training">Add Training</a>
      </div>

        <div class="card-content">
            <h4 class="card-title">Trainings</h4>
            <table id="datatables" class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Organizer</th>
                  <th>Duration</th>
                  <th>Institute</th>
                  <th>Start Date</th>
                  <th>Country</th>
                  <th class="text-center">Actions</th>
                </tr>
              </thead>
              <tbody id="training-body">
              </tbody>
            </table>
        </div>
    </div><!-- card-->

    <div class ="certification-input">
      <div class="card">
          <div class="card-content">
              <h4 class="card-title">Add Certification</h4>
              <form method="get" action="#" id="certification-form" class="form-horizontal">
                  <div class="card-content">

                    <div class="row">
                        <label class="col-sm-2 label-on-left">Registration Type</label>
                        <div class="col-sm-10">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" id="registration-type" class="form-control" placeholder = "Registration Type" value>
                            </div>
                        </div>
                    </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Regulatory Body</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="regulatory-body" class="form-control" placeholder = "Regulatory Body" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Registration Number</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="registration-number" class="form-control" placeholder = "Registration Number" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Expiry Date</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input name="dob" type="text" id="expiry-date" class="form-control datepicker" placeholder="Expiry Date"/>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Last Renewal Date</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input name="dob" type="text" id="last-renewal-date" class="form-control datepicker" placeholder="Last Renewal Date" />
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <div class="col-md-12" style = "text-align:center;margin-top:30px">
                              <div class="form-group form-button">
                                <span class="loader"><img src="img/loader.gif"></span><button type="button" id="save-certification" class="btn btn-fill btn-success sp-save-btn">Save</button>
                                <button type="reset" class="btn btn-fill btn-danger"><i class="material-icons">delete_forever</i> Clear</button>
                              </div>
                          </div>
                      </div>
                  </div><!-- card-content -->
              </form>
          </div>
      </div><!-- card-->
    </div><!-- certification-input -->

    <div class="card" id="certifications">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-header card-header-icon" data-background-color="purple" style="float:right;font-size: 18px;font-weight: 400;background: #4c68a2;">
          <a href="#" id="add-certification">Add Certification</a>
      </div>

        <div class="card-content">
            <h4 class="card-title">Certifications</h4>
            <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
              <thead>
                <tr>
                  <th>Registration No.</th>
                  <th>Registration Type</th>
                  <th>Regulatory Body</th>
                  <th>Last Renewal Date</th>
                  <th>Expiry Date</th>
                  <th class="agencyemp-write text-center">Actions</th>
                </tr>
              </thead>
              <tbody id="certification-body">

              </tbody>
            </table>
        </div>
    </div><!-- card-->

    <div class ="qualification-input">
      <div class="card">
          <div class="card-content">
              <h4 class="card-title">Add Qualification</h4>
              <form method="get" action="#" class="form-horizontal">
                  <div class="card-content">

                    <div class="row">
                        <label class="col-sm-2 label-on-left">Qualification Name</label>
                        <div class="col-sm-10">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" id="qualification-name" class="form-control" placeholder = "Qualification Name" value>
                            </div>
                        </div>
                    </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Institute Name</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="institute-name" class="form-control" placeholder = "Institute Name" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Start Date</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input name="dob" type="text" id="qualification-start-date" class="form-control datepicker" placeholder="Start Date"/>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">End Date</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input name="dob" type="text" id="qualification-end-date" class="form-control datepicker" placeholder="End Date" />
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Province</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="qualification-province" class="form-control" placeholder = "Province" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">City</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="qualification-city" class="form-control" placeholder = "City" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">State</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="qualification-state" class="form-control" placeholder = "State" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Country</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <select class="selectpicker1 country" data-style="btn select-with-transition sp-select" id="qualification-country"  title="Choose Country">
                                  </select>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <div class="col-md-12" style = "text-align:center;margin-top:30px">
                              <div class="form-group form-button">
                                <span class="loader"><img src="img/loader.gif"></span><button type="button" id="save-qualification" class="btn btn-fill btn-success sp-save-btn">Save</button>
                                <button type="reset" class="btn btn-fill btn-danger"><i class="material-icons">delete_forever</i> Clear</button>
                              </div>
                          </div>
                      </div>
                  </div><!-- card-content -->
              </form>
          </div>
      </div><!-- card-->
    </div><!-- qualification-input -->

    <div class="card" id="qualifications">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-header card-header-icon" data-background-color="purple" style="float:right;font-size: 18px;font-weight: 400;background: #4c68a2;">
          <a href="#" id="add-qualification">Add Qualification</a>
      </div>

        <div class="card-content">
            <h4 class="card-title">Qualifications</h4>
            <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Institute Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Province</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country</th>
                  <!-- <th class="text-center">Actions</th> -->
                </tr>
              </thead>
              <tbody id="qualification-body">

              </tbody>
            </table>
        </div>
    </div><!-- card-->

    <div class ="emp-extra-input">
      <div class="card">
          <div class="card-content">
              <h4 class="card-title">Add Employee Extras</h4>
              <form method="get" action="#" class="form-horizontal">
                  <div class="card-content">

                    <div class="row">
                        <label class="col-sm-2 label-on-left">Father's Name</label>
                        <div class="col-sm-10">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" id="father-name" class="form-control" placeholder = "Father's Name" value>
                            </div>
                        </div>
                    </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Mother's Name</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="mother-name" class="form-control" placeholder = "Mother's Name" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">No. of Children</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="children" class="form-control" placeholder = "No. of Children" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Maritial Status</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <select class="selectpicker" data-style="btn select-with-transition sp-select" id="maritial-status"  title="Choose Maritial Status">
                                    <option value="true">Single</option>
                                    <option value="false">Married</option>
                                  </select>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Wife's Name</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" class="form-control" id="wife-name" placeholder="Wife Name">
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Reference Address</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="emp-address" class="form-control" placeholder = "Address" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Reference Contact Number</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="emp-contact-number" class="form-control" placeholder = "Reference Contact Number" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <label class="col-sm-2 label-on-left">Reference Name</label>
                          <div class="col-sm-10">
                              <div class="form-group label-floating is-empty">
                                  <label class="control-label"></label>
                                  <input type="text" id="emp-ref-name" class="form-control" placeholder = "Reference Name" value>
                              </div>
                          </div>
                      </div><!--row-->

                      <div class="row">
                          <div class="col-md-12" style = "text-align:center;margin-top:30px">
                              <div class="form-group form-button">
                                <span class="loader"><img src="img/loader.gif"></span><button type="button" id="save-qualification" class="btn btn-fill btn-success sp-save-btn">Save</button>
                                <button type="reset" class="btn btn-fill btn-danger"><i class="material-icons">delete_forever</i> Clear</button>
                              </div>
                          </div>
                      </div>
                  </div><!-- card-content -->
              </form>
          </div>
      </div><!-- card-->
    </div><!-- emp-extra-input -->

    <!-- <div class="card" id="emp-extra">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-header card-header-icon" data-background-color="purple" style="float:right;font-size: 18px;font-weight: 400;background: #4c68a2;">
          <a href="#" id="add-emp-extra">Add Employee Extras</a>
      </div>

        <div class="card-content">
            <h4 class="card-title">Employee Extras</h4>
            <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
              <thead>
                <tr>
                  <th>Father Name</th>
                  <th>Mother Name</th>
                  <th>No. of Children</th>
                  <th>Maritial Status</th>
                  <th>Wife Name</th>
                  <th class="text-center">Actions</th>
                </tr>
              </thead>
              <tbody id="emp-extra-body">

              </tbody>
            </table>
        </div>
    </div><!- card-> -->

  </div><!-- form-section -->
</div><!-- content -->


<!-- Classic Modal -->
<div class="modal fade" id="training-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="training-modal-header modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    <i class="material-icons">clear</i>
                </button>
                <h4 class="modal-title" id="t-training-name"></h4>
            </div>
            <div class="modal-body">

                <div class="row training-row">
                  <div class="col-md-4">
                    <span class="training-label">Organizer Name</span>
                  </div>
                  <div class="col-md-1">
                    :
                  </div>
                  <div class="col-md-6">
                    <span class="training-value" id="t-organizer-name"></span>
                  </div>
                </div><!-- row -->

                <div class="row training-row">
                  <div class="col-md-4">
                    <span class="training-label">Institute</span>
                  </div>
                  <div class="col-md-1">
                    :
                  </div>
                  <div class="col-md-6">
                    <span class="training-value" id="t-institute"></span>
                  </div>
                </div><!-- row -->

                <div class="row training-row">
                  <div class="col-md-4">
                    <span class="training-label">Funding Source</span>
                  </div>
                  <div class="col-md-1">
                    :
                  </div>
                  <div class="col-md-6">
                    <span class="training-value" id="t-funding-source"></span>
                  </div>
                </div><!-- row -->

                <div class="row training-row">
                  <div class="col-md-4">
                    <span class="training-label">Duration</span>
                  </div>
                  <div class="col-md-1">
                    :
                  </div>
                  <div class="col-md-6">
                    <span class="training-value" id="t-duration"></span>
                  </div>
                </div><!-- row -->

                <div class="row training-row">
                  <div class="col-md-4">
                    <span class="training-label">Start Date</span>
                  </div>
                  <div class="col-md-1">
                    :
                  </div>
                  <div class="col-md-6">
                    <span class="training-value" id="t-start-date"></span>
                  </div>
                </div><!-- row -->

                <div class="row training-row">
                  <div class="col-md-4">
                    <span class="training-label">End Date</span>
                  </div>
                  <div class="col-md-1">
                    :
                  </div>
                  <div class="col-md-6">
                    <span class="training-value" id="t-end-date"></span>
                  </div>
                </div><!-- row -->

                <div class="row training-row">
                  <div class="col-md-4">
                    <span class="training-label">City</span>
                  </div>
                  <div class="col-md-1">
                    :
                  </div>
                  <div class="col-md-6">
                    <span class="training-value" id="t-city"></span>
                  </div>
                </div><!-- row -->

                <div class="row training-row">
                  <div class="col-md-4">
                    <span class="training-label">Province</span>
                  </div>
                  <div class="col-md-1">
                    :
                  </div>
                  <div class="col-md-6">
                    <span class="training-value" id="t-province"></span>
                  </div>
                </div><!-- row -->

                <div class="row training-row">
                  <div class="col-md-4">
                    <span class="training-label">State</span>
                  </div>
                  <div class="col-md-1">
                    :
                  </div>
                  <div class="col-md-6">
                    <span class="training-value" id="t-state"></span>
                  </div>
                </div><!-- row -->

                <div class="row training-row">
                  <div class="col-md-4">
                    <span class="training-label">Country</span>
                  </div>
                  <div class="col-md-1">
                    :
                  </div>
                  <div class="col-md-6">
                    <span class="training-value" id="t-country"></span>
                  </div>
                </div><!-- row -->






            </div><!-- modal-body -->
            <div class="modal-footer">

            </div>
        </div>
    </div>
</div>
<!--  End Modal -->

<?php include('footer.php'); ?>
<script src = 'scripts/single-employee.js'></script>
<script>
  active('employee')
  $(function() {
    demo.initFormExtendedDatetimepickers();
  })
</script>

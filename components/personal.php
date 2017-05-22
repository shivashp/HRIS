<div class="card">
  <div class="card-header card-header-icon" data-background-color="purple">
      <i class="material-icons">assignment</i>
  </div>
  <div class="card-content">
      <h4 class="card-title">Personal Details</h4>
        <div class="row">
          <div class="col-md-4">
            <table class="table table-striped table-list">
              <tr>
                <td style="min-width: 112px;">First Name</td>
                <td> : </td>
                <td id="first-name">Apple</td>
              </tr>
              <tr>
                <td>Middle Name</td>
                <td> : </td>
                <td id="middle-name">Ball</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td> : </td>
                <td id="last-name">Cat</td>
              </tr>
              <tr>
                <td>Age</td>
                <td> : </td>
                <td id="age">44</td>
              </tr>
              <tr>
                <td>Sex</td>
                <td> : </td>
                <td id="sex">Male</td>
              </tr>

              <tr>
                <td>Date of Birth</td>
                <td> : </td>
                <td id="dob"></td>
              </tr>
              <tr>
                <td>Phone No.</td>
                <td> : </td>
                <td id="phone"></td>
              </tr>
              <tr>
                <td>Alternate Phone No.</td>
                <td> : </td>
                <td id="phone1"></td>
              </tr>
              <tr>
                <td>Email</td>
                <td> : </td>
                <td id="email"></td>
              </tr>
            </table>
          </div>

           <div class="col-md-4">
            <table class="table table-striped table-list">
              <tr>
                <td>Address one</td>
                <td> : </td>
                <td id="address1"></td>
              </tr>
              <tr>
                <td>Address two</td>
                <td> : </td>
                <td id="address2"></td>
              </tr>
              <tr>
                <td>Village</td>
                <td> : </td>
                <td id="village"></td>
              </tr>
              <tr>
                <td>LLG</td>
                <td> : </td>
                <td id="llg"></td>
              </tr>
              <tr>
                <td>District</td>
                <td> : </td>
                <td id="district"></td>
              </tr>
              <tr>
                <td>Province</td>
                <td> : </td>
                <td id="province"></td>
              </tr>
              <tr>
                <td>Region</td>
                <td> : </td>
                <td id="region"></td>
              </tr>
              <tr>
                <td>Country</td>
                <td> : </td>
                <td id="country"></td>
              </tr>

            </table>
          </div>

           <div class="col-md-4">
            <table class="table table-striped table-list">
               <tr>
                <td>Employment No.</td>
                <td> : </td>
                <td id="emp-number"></td>
              </tr>
               <tr>
                <td>Branch / Agency</td>
                <td> : </td>
                <td id="branch-agency"></td>
              </tr>
               <tr>
                <td>Employee Type</td>
                <td> : </td>
                <td id="emp_type"></td>
              </tr>
              <tr>
               <td>Employee Position</td>
               <td> : </td>
               <td id="emp-position"></td>
              </tr>
               <tr>
                <td>Employee Category</td>
                <td> : </td>
                <td id="emp-category"></td>
              </tr>
               <tr>
                <td>Salary Step</td>
                <td> : </td>
                <td id="salary-step"></td>
              </tr>
               <tr>
                <td>Date of Commencement</td>
                <td> : </td>
                <td id="date-of-commencement"></td>
              </tr>
              <tr>
                <td>Retirement Age</td>
                <td> : </td>
                <td id="retirement-age"></td>
              </tr>
            </table>
          </div>
      </div><!-- row -->
  </div><!-- card-content -->
</div><!-- card -->

<div class ="emp-extra-input agencyemp-write">
  <div class="card">
      <div class="card-content">
          <h4 class="card-title">Employee Relatives</h4>
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
                            <span class="loader"><img src="img/loader.gif"></span><button type="button" id="save-emp-extra" class="btn btn-fill btn-success sp-save-btn">Save</button>
                            <button type="reset" class="btn btn-fill btn-danger"><i class="material-icons">delete_forever</i> Clear</button>
                          </div>
                      </div>
                  </div>
              </div><!-- card-content -->
          </form>
      </div>
  </div><!-- card-->
</div><!-- emp-extra-input -->
<div class="card" id="emp-extra">
  <div class="card-header card-header-icon" data-background-color="purple">
      <i class="material-icons">assignment</i>
  </div>
  <div class="card-header card-header-icon" data-background-color="purple" style="float:right;font-size: 18px;font-weight: 400;background: #4c68a2;">
      <a href="#" id="add-emp-extra">Edit Employee Relatives</a>
  </div>

    <div class="card-content">
      <h4 class="card-title">Employee Relatives</h4>
      <div class="row">
        <div class="col-md-6">
          <table class="table table-striped table-list">
            <tr>
              <td>Father Name</td>
              <td> : </td>
              <td id="e-father-name"></td>
            </tr>
            <tr>
              <td>Mother Name</td>
              <td> : </td>
              <td id="e-mother-name"></td>
            </tr>
            <tr>
              <td>No. of Children</td>
              <td> : </td>
              <td id="e-no-of-children"></td>
            </tr>
            <tr>
              <td>Maritial Status</td>
              <td> : </td>
              <td id="e-maritial-status"></td>
            </tr>
            <tr>
              <td>Wife Name</td>
              <td> : </td>
              <td id="e-wife-name"></td>
            </tr>
            <tr>
              <td>Reference Address</td>
              <td> : </td>
              <td id="e-ref-address"></td>
            </tr>
            <tr>
              <td>Reference Contact Number</td>
              <td> : </td>
              <td id="e-ref-contact"></td>
            </tr>
            <tr>
              <td>Reference Person Name</td>
              <td> : </td>
              <td id="e-ref-name"></td>
            </tr>
          </table>
        </div>
      </div><!-- row -->
    </div>
</div><!-- card-->

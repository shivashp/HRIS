<div class ="qualification-input agencyemp-write">
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
                              <input name="dob" type="text" id="qualification-start-date" class="form-control datepicker qual-date-obj" placeholder="Start Date"/>
                          </div>
                      </div>
                  </div><!--row-->

                  <div class="row">
                      <label class="col-sm-2 label-on-left">End Date</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input name="dob" type="text" id="qualification-end-date" class="form-control datepicker qual-date-obj" placeholder="End Date" />
                          </div>
                      </div>
                  </div><!--row-->

                  <div class="row">
                      <label class="col-sm-2 label-on-left">Duration</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input name="dob" type="text" id="qual-duration" class="form-control datepicker" placeholder="Duration" disabled/>
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
  <div class="card-header card-header-icon agencyemp-write" data-background-color="purple" style="float:right;font-size: 18px;font-weight: 400;background: #4c68a2;">
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

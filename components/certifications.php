<div class ="training-input agencyemp-write">
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
                              <input name="dob" type="text" id="start-date" class="form-control datepicker date-obj" />
                          </div>
                      </div>
                  </div><!--row-->

                  <div class="row">
                      <label class="col-sm-2 label-on-left">End Date</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input name="dob" type="text" id="end-date" class="form-control datepicker date-obj" />
                          </div>
                      </div>
                  </div><!--row-->

                  <div class="row">
                      <label class="col-sm-2 label-on-left">Duration</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input type="text" id="duration" class="form-control" placeholder = "Duration" value disabled>
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
  <div class="card-header card-header-icon agencyemp-write" data-background-color="purple" style="float:right;font-size: 18px;font-weight: 400;background: #4c68a2;">
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

<div class ="certification-input agencyemp-write">
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
                      <label class="col-sm-2 label-on-left">Regulatory Body Address 1</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input type="text" id="regulatory-body-addr1" class="form-control" placeholder = "Regulatory Body Address 1" value>
                          </div>
                      </div>
                  </div><!--row-->

                  <div class="row">
                      <label class="col-sm-2 label-on-left">Regulatory Body Address 2</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input type="text" id="regulatory-body-addr2" class="form-control" placeholder = "Regulatory Body Address 2" value>
                          </div>
                      </div>
                  </div><!--row-->

                  <div class="row">
                      <label class="col-sm-2 label-on-left">Regulatory Body Country</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <select class="selectpicker1 country" data-style="btn select-with-transition sp-select" id="regulatory-country"  title="Choose Country">
                              </select>
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
                      <label class="col-sm-2 label-on-left">Issue Date</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input name="dob" type="text" id="issue-date" class="form-control datepicker" placeholder="Issue Date" />
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
  <div class="card-header card-header-icon agencyemp-write" data-background-color="purple" style="float:right;font-size: 18px;font-weight: 400;background: #4c68a2;">
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

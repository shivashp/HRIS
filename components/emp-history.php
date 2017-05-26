<div class ="emp-history-input agencyemp-write">
  <div class="card">
      <div class="card-content">
          <h4 class="card-title">Add Employee History</h4>
          <form method="get" action="#" class="form-horizontal">
              <div class="card-content">

                  <div class="row">
                      <label class="col-sm-2 label-on-left">Start Date</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input name="dob" type="text" id="emp-history-start-date" class="form-control datepicker" placeholder="Start Date"/>
                          </div>
                      </div>
                  </div><!--row-->

                  <div class="row">
                      <label class="col-sm-2 label-on-left">End Date</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input name="dob" type="text" id="emp-history-end-date" class="form-control datepicker" placeholder="End Date" />
                          </div>
                      </div>
                  </div><!--row-->

                  <div class="row">
                      <label class="col-sm-2 label-on-left">Position</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input type="text" id="emp-history-position" class="form-control" placeholder = "Employee Position" value>
                          </div>
                      </div>
                  </div><!--row-->

                  <div class="row">
                      <label class="col-sm-2 label-on-left">Reason of Leaving</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input type="text" id="emp-reason-leaving" class="form-control" placeholder = "Reason of Leaving" value>
                          </div>
                      </div>
                  </div><!--row-->

                  <div class="row">
                      <label class="col-sm-2 label-on-left">Description</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <textarea id="emp-history-desc" class="form-control" rows="5" placeholder = "Description"></textarea>
                          </div>
                      </div>
                  </div><!--row-->

                  <div class="row">
                      <div class="col-md-12" style = "text-align:center;margin-top:30px">
                          <div class="form-group form-button">
                            <span class="loader"><img src="img/loader.gif"></span><button type="button" id="save-emp-history" class="btn btn-fill btn-success sp-save-btn">Save</button>
                            <button type="reset" class="btn btn-fill btn-danger"><i class="material-icons">delete_forever</i> Clear</button>
                          </div>
                      </div>
                  </div>
              </div><!-- card-content -->
          </form>
      </div>
  </div><!-- card-->
</div><!-- qualification-input -->
<div class="card" id="emp-history">
  <div class="card-header card-header-icon" data-background-color="purple">
      <i class="material-icons">assignment</i>
  </div>
  <div class="card-header card-header-icon agencyemp-write" data-background-color="purple" style="float:right;font-size: 18px;font-weight: 400;background: #4c68a2;">
      <a href="#" id="add-emp-history">Add Employee History</a>
  </div>

    <div class="card-content">
        <h4 class="card-title">Employee History</h4>
        <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
          <thead>
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Position</th>
              <th>Reason of Leaving</th>
              <th>Description</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody id="emp-history-body">

          </tbody>
        </table>
    </div>
</div><!-- card-->

<!-- ======================================================= References ============================================================= -->

<div class ="reference-input agencyemp-write">
  <div class="card">
      <div class="card-content">
          <h4 class="card-title">Add References</h4>
          <form method="get" action="#" class="form-horizontal">
              <div class="card-content">

                <div class="row">
                    <label class="col-sm-2 label-on-left">First Name</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="reference-first-name" class="form-control" placeholder = "First Name" value>
                        </div>
                    </div>
                </div><!--row-->

                <div class="row">
                    <label class="col-sm-2 label-on-left">Last Name</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="reference-last-name" class="form-control" placeholder = "Last Name" value>
                        </div>
                    </div>
                </div><!--row-->

                <div class="row">
                    <label class="col-sm-2 label-on-left">Address 1</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="reference-address1" class="form-control" placeholder = "Address 1" value>
                        </div>
                    </div>
                </div><!--row-->

                <div class="row">
                    <label class="col-sm-2 label-on-left">Address 2</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="reference-address2" class="form-control" placeholder = "Address 2" value>
                        </div>
                    </div>
                </div><!--row-->

                <div class="row">
                    <label class="col-sm-2 label-on-left">Email</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="reference-email" class="form-control" placeholder = "Email" value>
                        </div>
                    </div>
                </div><!--row-->

                <div class="row">
                    <label class="col-sm-2 label-on-left">Contact No.</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="reference-contact-no" class="form-control" placeholder = "Contact No." value>
                        </div>
                    </div>
                </div><!--row-->

                <div class="row">
                    <label class="col-sm-2 label-on-left">Company</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="reference-company" class="form-control" placeholder = "Company" value>
                        </div>
                    </div>
                </div><!--row-->

                  <div class="row">
                      <div class="col-md-12" style = "text-align:center;margin-top:30px">
                          <div class="form-group form-button">
                            <span class="loader"><img src="img/loader.gif"></span><button type="button" id="save-reference" class="btn btn-fill btn-success sp-save-btn">Save</button>
                            <button type="reset" class="btn btn-fill btn-danger"><i class="material-icons">delete_forever</i> Clear</button>
                          </div>
                      </div>
                  </div>
              </div><!-- card-content -->
          </form>
      </div>
  </div><!-- card-->
</div><!-- reference-input -->
<div class="card" id="reference">
  <div class="card-header card-header-icon" data-background-color="purple">
      <i class="material-icons">assignment</i>
  </div>
  <div class="card-header card-header-icon agencyemp-write" data-background-color="purple" style="float:right;font-size: 18px;font-weight: 400;background: #4c68a2;">
      <a href="#" id="add-reference">Add References</a>
  </div>

    <div class="card-content">
        <h4 class="card-title">References</h4>
        <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Company</th>
              <th>Address 1</th>
              <th>Address 2</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody id="reference-body">

          </tbody>
        </table>
    </div>
</div><!-- card-->



<style>
  .emp-history-input, .reference-input {
    display: none;
  }
</style>

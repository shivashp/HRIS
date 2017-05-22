<div class ="disciplinary-input agencyemp-write">
  <div class="card">
      <div class="card-content">
          <h4 class="card-title">Add Disciplinary</h4>
          <form method="get" action="#" class="form-horizontal">
              <div class="card-content">

                <div class="row">
                    <label class="col-sm-2 label-on-left">Type</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="disciplinary-type" class="form-control" placeholder = "Disciplinary Type" value>
                        </div>
                    </div>
                </div><!--row-->

                <div class="row">
                    <label class="col-sm-2 label-on-left">Date</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input name="dob" type="text" id="disciplinary-date" class="form-control datepicker" placeholder="Date"/>
                        </div>
                    </div>
                </div><!--row-->

                <div class="row">
                    <label class="col-sm-2 label-on-left">Department</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="disciplinary-department" class="form-control" placeholder = "Department" value>
                        </div>
                    </div>
                </div><!--row-->

                <div class="row">
                    <label class="col-sm-2 label-on-left">Warning</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="disciplinary-warning" class="form-control" placeholder = "Warning" value>
                        </div>
                    </div>
                </div><!--row-->

                  <div class="row">
                      <div class="col-md-12" style = "text-align:center;margin-top:30px">
                          <div class="form-group form-button">
                            <span class="loader"><img src="img/loader.gif"></span><button type="button" id="save-disciplinary" class="btn btn-fill btn-success sp-save-btn">Save</button>
                            <button type="reset" class="btn btn-fill btn-danger"><i class="material-icons">delete_forever</i> Clear</button>
                          </div>
                      </div>
                  </div>
              </div><!-- card-content -->
          </form>
      </div>
  </div><!-- card-->
</div><!-- disciplinary-input -->
<div class="card" id="disciplinary">
  <div class="card-header card-header-icon" data-background-color="purple">
      <i class="material-icons">assignment</i>
  </div>
  <div class="card-header card-header-icon agencyemp-write" data-background-color="purple" style="float:right;font-size: 18px;font-weight: 400;background: #4c68a2;">
      <a href="#" id="add-disciplinary">Add Disciplinary</a>
  </div>

    <div class="card-content">
        <h4 class="card-title">Disciplinary</h4>
        <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
          <thead>
            <tr>
              <th>Type</th>
              <th>Date</th>
              <th>Department</th>
              <th>Warning</th>
              <th>Comments</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody id="disciplinary-body">

          </tbody>
        </table>
    </div>
</div><!-- card-->
<style>
  .disciplinary-input {
    display: none;
  }
</style>

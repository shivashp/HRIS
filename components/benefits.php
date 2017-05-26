<div class ="benefits-input agencyemp-write">
  <div class="card">
      <div class="card-content">
          <h4 class="card-title">Add Benefits</h4>
          <form method="get" action="#" class="form-horizontal">
              <div class="card-content">

                <div class="row">
                    <label class="col-sm-2 label-on-left">Type</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>                            
                            <select class="selectpicker1" data-style="btn select-with-transition sp-select" id="benefits-type"  title="Choose Benefit Type">
                            </select>
                        </div>
                    </div>
                </div><!--row-->

                <div class="row">
                    <label class="col-sm-2 label-on-left">Amount</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="benefits-amount" class="form-control" placeholder = "Benefits Amount" value>
                        </div>
                    </div>
                </div><!--row-->

                  <div class="row">
                      <label class="col-sm-2 label-on-left">Start Date</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input name="dob" type="text" id="benefits-start-date" class="form-control datepicker" placeholder="Start Date"/>
                          </div>
                      </div>
                  </div><!--row-->

                  <div class="row">
                      <label class="col-sm-2 label-on-left">Comments</label>
                      <div class="col-sm-10">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <textarea id="benefits-comments" class="form-control" rows="5" placeholder = "Comments"></textarea>
                          </div>
                      </div>
                  </div><!--row-->

                  <div class="row">
                      <div class="col-md-12" style = "text-align:center;margin-top:30px">
                          <div class="form-group form-button">
                            <span class="loader"><img src="img/loader.gif"></span><button type="button" id="save-benefits" class="btn btn-fill btn-success sp-save-btn">Save</button>
                            <button type="reset" class="btn btn-fill btn-danger"><i class="material-icons">delete_forever</i> Clear</button>
                          </div>
                      </div>
                  </div>
              </div><!-- card-content -->
          </form>
      </div>
  </div><!-- card-->
</div><!-- benefits-input -->
<div class="card" id="benefits">
  <div class="card-header card-header-icon" data-background-color="purple">
      <i class="material-icons">assignment</i>
  </div>
  <div class="card-header card-header-icon agencyemp-write" data-background-color="purple" style="float:right;font-size: 18px;font-weight: 400;background: #4c68a2;">
      <a href="#" id="add-benefits">Add Benefits</a>
  </div>

    <div class="card-content">
        <h4 class="card-title">Benefits</h4>
        <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount(p.a)</th>
              <th>Start Date</th>
              <th>Comment</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody id="benefits-body">

          </tbody>
        </table>
    </div>
</div><!-- card-->
<style>
  .benefits-input {
    display: none;
  }
</style>

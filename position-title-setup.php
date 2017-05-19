<?php
$page_permission = array("key" => "config_management_perm", "value" => "R");
include('header.php');
?>

<div class="content">
  <div class="row per config-write">
    <a class="btn btn-success pull-right sp-add-btn">Add</a>
  </div><!-- row-->
   <div class="page-loader">
  <img src="img/loader.gif"><br>
  <div class="page-loader-text">Please Wait...</div>
</div><!-- page-loader-->
  <div class ="form-input">
    <div class="card">
        <div class="card-content">
            <h4 class="card-title">Add Position Title</h4>
            <form class="form-horizontal">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                      <label class="col-md-3 label-on-left">Position Title</label>
                      <div class="col-md-9">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input type="text" id="position-title" class="form-control">
                          </div>
                      </div>
                  </div><!--row-->
                  <div class="row">
                      <label class="col-md-3 label-on-left">Position Code</label>
                      <div class="col-md-9">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input type="text" id="position-code" class="form-control">
                          </div>
                      </div>
                  </div><!--row-->
                  <div class="row">
                      <label class="col-md-3 label-on-left">Sequence</label>
                      <div class="col-md-9">
                          <div class="form-group label-floating is-empty">
                              <label class="control-label"></label>
                              <input type="text" id="sequence" class="form-control">
                          </div>
                      </div>
                  </div><!--row-->
                </div>
              </div><!--row -->
                <div class="row">
                    <div class="col-md-12" style = "text-align:center;margin-top:30px">
                        <div class="form-group form-button">
                          <span class="loader"><img src="img/loader.gif"></span><button type="submit" id="add" class="btn btn-fill btn-success sp-save-btn">Save</button>
                          <button type="reset" class="btn btn-fill btn-danger"><i class="material-icons">delete_forever</i> Clear</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div><!-- card-->
  </div><!-- from-input -->
  <div class="card">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-content">
          <h4 class="card-title">Position Titles</h4>
          <div class="material-datatables">
              <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
                  <thead>
                      <tr>
                          <th class="disabled-sorting sn">Sn.</th>
                          <th>Code</th>
                          <th>Title</th>
                          <th>Sequence</th>
                          <th class="per config-write disabled-sorting text-right">Actions</th>
                      </tr>
                  </thead>
                  <tbody id="data-body">

                  </tbody>
              </table>
          </div>
      </div> <!-- end content-->
  </div> <!--  end card  -->
</div><!-- content -->
<?php include('footer.php'); ?>
<script src="scripts/position-title-setup.js"></script>
<script>
  active('position-title', 'sub-link')
  active('config')
  $(".card").show();
</script>

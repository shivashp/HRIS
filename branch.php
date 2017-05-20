<?php
$page_permission = array("key" => "division_management_perm", "value" => "R");
include('header.php');
?>

<div class="content">
  <div class="row per division-write">
    <a class="btn btn-success pull-right sp-add-btn">Add</a>
  </div><!-- row-->
   <div class="page-loader">
  <img src="img/loader.gif"><br>
  <div class="page-loader-text">Please Wait...</div>
</div><!-- page-loader-->
  <div class ="form-input">
    <div class="card">
        <div class="card-content">
            <h4 class="card-title">Add Division</h4>
            <form method="get" id="form" action="#" class="form-horizontal">
                <div class="card-content">
                    <div class="row">
                        <label class="col-sm-2 label-on-left">Facility Name</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" id="facility-name" class="form-control" placeholder = "Facility Name" value>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                      <label class="col-sm-2 label-on-left">Type of Health Facility</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                              <select class="selectpicker1" data-style="btn select-with-transition sp-select" id="facility"  title="Choose Health Facility">
                              </select>
                            </div>
                        </div>
                    </div><!-- row -->
                    <div class="row">
                        <label class="col-sm-2 label-on-left">Division Code</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" id="division-code" class="form-control" placeholder = "Division Code" value>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                        <label class="col-sm-2 label-on-left">Code Description</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" id="division-code-desc" class="form-control" placeholder = "Division Code Description" value>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                        <label class="col-sm-2 label-on-left">Web Address</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" id="web-address" class="form-control" placeholder = "Web Address" value>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                        <label class="col-sm-2 label-on-left">Email</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="email" id="email" class="form-control" placeholder = "Email" value>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                        <label class="col-sm-2 label-on-left">Contact Person Name</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" id="contact-person-name" class="form-control" placeholder = "Contact Person Name" value>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                        <label class="col-sm-2 label-on-left">Contact Person Email</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="email" id="contact-person-email" class="form-control" placeholder = "Contact Person Email" value>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                        <label class="col-sm-2 label-on-left">Contact Person Alternate Email</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="email" id="contact-person-alt-email" class="form-control" placeholder = "Contact Person Alternate Email" value>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                        <label class="col-sm-2 label-on-left">Address 1</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" id="address1" class="form-control" placeholder = "Address 1" value>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                        <label class="col-sm-2 label-on-left">Address 2</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" id="address2" class="form-control" placeholder = "Address 2" value>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                      <label class="col-sm-2 label-on-left">LLG</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                              <select class="selectpicker1" data-style="btn select-with-transition sp-select" id="llg"  title="Choose LLG">
                              </select>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                      <label class="col-sm-2 label-on-left">District</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                              <select class="selectpicker1" data-style="btn select-with-transition sp-select" id="district"  title="Choose District">

                              </select>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                      <label class="col-sm-2 label-on-left">Province</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                              <select class="selectpicker1" data-style="btn select-with-transition sp-select" id="province"  title="Choose Province">
                              </select>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                      <label class="col-sm-2 label-on-left">Region</label>
                        <div class="col-sm-6">
                            <div class="form-group label-floating is-empty">
                              <select class="selectpicker1" data-style="btn select-with-transition sp-select" id="region"  title="Choose Region">

                              </select>
                            </div>
                        </div>
                    </div><!--row-->
                    <div class="row">
                        <div class="col-md-12" style = "text-align:center;margin-top:30px">
                            <div class="form-group form-button">
                              <span class="loader"><img src="img/loader.gif"></span><button type="submit" id="add" class="btn btn-fill btn-success sp-save-btn">Save</button>
                              <button type="reset" id="clear" class="btn btn-fill btn-danger"><i class="material-icons">delete_forever</i> Clear</button>
                            </div>
                        </div>
                    </div>
                </div><!-- card-content -->
            </form>
        </div>
    </div><!-- card-->
  </div><!-- from-input -->
  <div class="card">
      <div class="card-header card-header-text" data-background-color="rose">
          <h4 class="card-title"><span class="fa fa-home"> </span> Divisions</h4>
      </div>
      <div class="card-content">
          <div class="material-datatables">
              <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
                  <thead>
                      <tr>
                        <th class="disabled-sorting">Sn.</th>
                        <th>Facility Name</th>
                        <th>Facility Type</th>
                        <th>LLG</th>
                        <th>District</th>
                        <th>Province</th>
                        <th>Region</th>
                        <th>Status</th>
                        <th class="per division-write disabled-sorting text-right">Actions</th>
                      </tr>
                  </thead>
                  <tbody id = "data-body">
                  </tbody>
              </table>
          </div>
      </div> <!-- end content-->
  </div><!--  end card  -->
</div>
<?php include('footer.php'); ?>
<script src="scripts/branch.js"></script>
<script>
active('branch', 'sub-link')
active('division')
</script>

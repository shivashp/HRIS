<?php
$page_permission = array("key" => "company_management_perm", "value" => "W");
include('header.php');
?>

<div class="content">
 <div class="page-loader">
  <img src="img/loader.gif"><br>
  <div class="page-loader-text">Please Wait...</div>
</div><!-- page-loader-->
  <div class="form-section">
    <div class="card">
        <form method="get" id="myform" class="form-horizontal">
            <div class="card-header card-header-text" data-background-color="rose">
                <h4 class="card-title">Company Setup</h4>
            </div>
            <div class="card-content">
                <div class="row">
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">Company Name</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" name="firstname" id="company-name" class="form-control" placeholder="Company Name">
                            <div class="help-block with-errors">Company Name is required</div>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">Display Name</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" name="displayName" id="display-name" class="form-control" placeholder = "Display Name" value>
                            <div class="help-block with-errors">Display Name is required</div>
                        </div>
                    </div>
                  </div>
                </div><!-- row -->

                <div class="row">
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">Company Code</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="code" class="form-control" placeholder = "Company Code" multiline value>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">Code Description</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="code-desc" class="form-control" placeholder = "Company Code Description" value>
                        </div>
                    </div>
                  </div>
                </div><!-- row -->

                <div class="row">
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">Address 1</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="address1" class="form-control" placeholder = "Address 1" value>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">Address 2</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="address2" class="form-control" placeholder = "Address 2" value>
                        </div>
                    </div>
                  </div>
                </div><!-- row -->

                <div class="row">
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">District</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <select class="selectpicker1" data-style="btn select-with-transition sp-select" id="district"  title="Choose District">
                            </select>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">Province</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <select class="selectpicker1" data-style="btn select-with-transition sp-select" id="province"  title="Choose Province">
                            </select>
                        </div>
                    </div>
                  </div>
                </div><!-- row -->

                <div class="row">
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">Region</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <select class="selectpicker1" data-style="btn select-with-transition sp-select" id="region"  title="Choose Region">
                            </select>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">LLG</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <select class="selectpicker1" data-style="btn select-with-transition sp-select" id="llg"  title="Choose LLG">
                            </select>
                        </div>
                    </div>
                  </div>
                </div><!-- row -->

                <div class="row">
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">Village/Town</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="village" class="form-control" placeholder = "Village/Town" value>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                  </div>
                </div><!-- row -->

                <hr>
                <div class="row">
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">Web Address</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="web" class="form-control" placeholder = "Web Address" value>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">Email</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="email" class="form-control" placeholder = "Email" value>
                        </div>
                    </div>
                  </div>
                </div><!-- row -->

                <div class="row">
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left" style="padding-left:0">Contact Person Name</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="contact-name" class="form-control" placeholder = "Contact Person Name" value>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left">Contact Person Mobile</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="number" id="contact-mobile" class="form-control" placeholder = "Contact Person Mobile" value>
                        </div>
                    </div>
                  </div>
                </div><!-- row -->

                <div class="row">
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left" style="padding-left:0">Contact Person Email</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="email" id="contact-email" class="form-control" placeholder = "Contact Person Email" value>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left" style="padding-left:0">Contact Person Alternate Email</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="email" id="contact-alternate-email" class="form-control" placeholder = "Contact Person Alternate Email" value>
                        </div>
                    </div>
                  </div>
                </div><!-- row -->

                <div class="row" id="free-text-row">
                  <div class="col-md-6">
                    <label class="col-sm-4 label-on-left" style="padding-left:0">Free Text</label>
                    <div class="col-sm-8">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="free-text-val-1" class="form-control" placeholder = "Free Text" value>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="row" style="text-align:center;margin-top:50px;">
                  <a href="#" id="add-free-text" value="1" style="color:#355089"><i class="material-icons">add_circle</i></a>
                </div>

                <div class="row sp-save-btn-row" style="margin-top:80px">
                  <span class="loader"><img src="img/loader.gif"></span><button type="submit" id="submit" class="btn btn-success">Save</button>
                  <button type="reset" id="reset" class="btn btn-danger">Clear</button>
                </div>
            </div><!-- card-content -->
        </form>
    </div><!-- card -->
  </div><!-- form-section -->
</div>

<?php include('footer.php'); ?>
<script src="js/jquery-validate.js" charset="utf-8"></script>
<script src="scripts/company-setup.js"></script>
<script>
active('ndoh', 'sub-link')
active('company');
</script>
<style media="screen">
  .card-content {
    padding-right: 35px !important;
    padding-left: 0 !important;
  }
</style>

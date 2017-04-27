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
        <form method="get" action="#" class="form-horizontal">
            <div class="card-header card-header-text" data-background-color="rose">
                <h4 class="card-title">Company Setup</h4>
            </div>
            <div class="card-content">
                <div class="row">
                    <label class="col-sm-2 label-on-left">Company Name</label>
                    <div class="col-sm-5">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="name" class="form-control" placeholder = "Company Name" value>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-sm-2 label-on-left">Description</label>
                    <div class="col-sm-5">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <textarea id="desc" class="form-control" rows="3" placeholder="Description about company"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-sm-2 label-on-left">Currency Symbol</label>
                    <div class="col-sm-5">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="symbol" class="form-control" placeholder="eg. $, €">
                        </div>
                    </div>
                </div>
                <div class="row">
                  <label class="col-sm-2 label-on-left">Country</label>
                    <div class="col-sm-5">
                        <div class="form-group label-floating is-empty">
                          <select data-style="btn select-with-transition sp-select" id="country"  title="Choose Country">
                          </select>
                        </div>
                    </div>
                </div>
                <div class="row sp-save-btn-row">
                  <span class="loader"><img src="img/loader.gif"></span><button type="button" id="submit" class="btn btn-success">Save</button>
                  <button type="reset" id="reset" class="btn btn-danger">Clear</button>
                </div>
            </div><!-- card-content -->
        </form>
    </div><!-- card -->
  </div><!-- form-section -->
</div>

<?php include('footer.php'); ?>
<script src="scripts/company.js"></script>
<script>
active('ndoh', 'sub-link')
active('company')
</script>

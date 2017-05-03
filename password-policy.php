<?php
$page_permission = array("key" => "user_management_perm", "value" => "W");
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
                <h4 class="card-title">Password Policy Setup</h4>
            </div>
            <div class="card-content">

                <div class="row">
                    <label class="col-sm-3 label-on-left">Minimum Password Length</label>
                    <div class="col-sm-5">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="number" id="min-length" class="form-control" value="5">
                        </div>
                    </div>
                </div><!-- row -->

                <div class="row">
                    <label class="col-sm-3 label-on-left">Maximum Password Length</label>
                    <div class="col-sm-5">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="number" id="max-length" class="form-control" value="16">
                        </div>
                    </div>
                </div><!-- row -->

                <div class="row">
                    <label class="col-sm-3 label-on-left">Require Special Character</label>
                    <div class="col-sm-5">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <select class="selectpicker" data-style="btn select-with-transition sp-select" id="special-character">
                              <option value=true>Yes</option>
                              <option value=false selected>No</option>
                            </select>
                        </div>
                    </div>
                </div><!-- row -->

                <div class="row">
                    <label class="col-sm-3 label-on-left">One Uppercase Required</label>
                    <div class="col-sm-5">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <select class="selectpicker" data-style="btn select-with-transition sp-select" id="uppercase">
                              <option value="true">Yes</option>
                              <option value="false" selected>No</option>
                            </select>
                        </div>
                    </div>
                </div><!-- row -->

                <div class="row">
                    <label class="col-sm-3 label-on-left">Can Match Username</label>
                    <div class="col-sm-5">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <select class="selectpicker" data-style="btn select-with-transition sp-select" id="can-match-username">
                              <option value="true">Yes</option>
                              <option value="false" selected>No</option>
                            </select>
                        </div>
                    </div>
                </div><!-- row -->

                <div class="row">
                    <label class="col-sm-3 label-on-left">Prompt Password Change</label>
                    <div class="col-sm-5">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <select class="selectpicker" data-style="btn select-with-transition sp-select" id="prompt">
                              <option value="true">Yes</option>
                              <option value="false" selected>No</option>
                            </select>
                        </div>
                    </div>
                </div><!-- row -->

                <div class="row sp-save-btn-row" style="margin-top:80px">
                  <span class="loader"><img src="img/loader.gif"></span><button type="button" id="submit" class="btn btn-success">Save</button>
                  <button type="reset" id="reset" class="btn btn-danger">Clear</button>
                </div>
            </div><!-- card-content -->
        </form>
    </div><!-- card -->
  </div><!-- form-section -->
</div>

<?php include('footer.php'); ?>
<script src="scripts/password-policy.js"></script>
<script>
active('password-policy', 'sub-link')
active('user-mgmt')
</script>
<style media="screen">
.perfect-scrollbar-off .sidebar .sidebar-wrapper, .perfect-scrollbar-off .main-panel {
  overflow: hidden !important;
}
</style>

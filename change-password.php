<?php
$page_permission = array("key" => "user_management_perm", "value" => "N");
include('header.php');
?>

<div class="content">
  <div class="form-section">
    <div class="card">
        <form method="get" id="myform" class="form-horizontal">
            <div class="card-header card-header-text" data-background-color="rose">
                <h4 class="card-title">Change Password</h4>
            </div>
            <div class="card-content">
              <div class="row">
                <div class="col-md-5 col-md-offset-3">
                  <form class="form-horizontal">
                    <div class="form-group label-floating">
                        <label class="control-label">Old Password</label>
                        <input type="password" id="old-password" class="form-control">
                    </div>
                      <div class="form-group label-floating">
                          <label class="control-label">New Password</label>
                          <input type="password" id="update-password" class="form-control">
                      </div>
                      <div class="form-group label-floating">
                          <label class="control-label">Retype Password</label>
                          <input type="password" id="conf_update_password" class="form-control">
                      </div>
                      <div style="margin-top:50px;margin-bottom:20px;text-align:center">
                        <span class="loader"><img src="img/loader.gif"></span><button type="submit" id="update-user" class="btn btn-fill btn-success">Save</button>
                        <button type="button" id="" class="close-menu btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                  </form>
                </div>
              </div>
            </div><!-- card-content -->
        </form>
    </div><!-- card -->
  </div><!-- form-section -->
</div>

<?php include('footer.php'); ?>
<script>
$(".card").fadeIn("fast");
</script>

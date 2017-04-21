<?php include('header.php'); ?>

<div class="content">
  <div class ="username-input">
    <div class="card">
        <div class="card-content">
            <h4 class="card-title">Add Username</h4>
            <div class="col-md-8 col-md-offset-2">
              <form class="form-horizontal">
                  <div class="form-group label-floating">
                      <label class="control-label">Username</label>
                      <input type="text" id="username" class="form-control">
                  </div>
                  <div class="form-group label-floating">
                      <label class="control-label">Password</label>
                      <input type="password" id="password" class="form-control">
                  </div>
                  <div class="form-group label-floating">
                      <label class="control-label">Retype Password</label>
                      <input type="password" id="conf_password" class="form-control">
                  </div>
                  <div class="form-group label-floating">
                      <select data-style="btn select-with-transition sp-select" id="roles"  title="Choose Role">
                      </select>
                  </div>
                  <div style="margin-top:50px;margin-bottom:20px;text-align:center">
                    <button type="submit" id="save-user" class="btn btn-fill btn-success">Save</button>
                    <button type="button" class="close-menu btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
              </form>
            </div>
        </div>
    </div><!-- card-->
  </div><!-- username-input -->

  <div class ="password-input">
    <div class="card">
        <div class="card-content">
            <h4 class="card-title">Update Password</h4>
            <div class="col-md-8 col-md-offset-2">
              <form class="form-horizontal">
                  <div class="form-group label-floating">
                      <label class="control-label">Password</label>
                      <input type="password" id="update-password" class="form-control">
                  </div>
                  <div class="form-group label-floating">
                      <label class="control-label">Retype Password</label>
                      <input type="password" id="conf_update_password" class="form-control">
                  </div>
                  <div style="margin-top:50px;margin-bottom:20px;text-align:center">
                    <button type="submit" id="update-user" class="btn btn-fill btn-success">Save</button>
                    <button type="button" id="" class="close-menu btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
              </form>
            </div>
        </div>
    </div><!-- card-->
  </div><!-- password-input -->

  <div class="card">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-content">
          <h4 class="card-title">Employees</h4>
          <div class="material-datatables">
            <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
                <thead>
                    <tr>
                      <th>Emp No.</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Country</th>
                      <th class="disabled-sorting text-right">Actions</th>
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
<script src="scripts/add-user.js"></script>
<script>
  active('settings')
</script>

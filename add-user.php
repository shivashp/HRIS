<?php
  $page_permission = array("key" => "user_management_perm", "value" => "W");
  include('header.php');
?>

<div class="content">
 <div class="page-loader">
  <img src="img/loader.gif"><br>
  <div class="page-loader-text">Please Wait...</div>
</div><!-- page-loader-->
  <div class ="username-input">
    <div class="card" style="display:inline-block">
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
                    <label class="control-label">Role</label>
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

  <div class="row">
    <div class="col-md-6">
      <div class ="password-input">
        <div class="card"  style="display:inline-block">
            <div class="card-content">
                <h4 class="card-title">Name: <span class="update-password-name"></span></h4>
                <div class="col-md-12">
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
    </div><!-- col-md-6 -->
    <div class="col-md-6">
      <div class ="password-input">
        <div class="card"  style="display:inline-block">
            <div class="card-content">
                <h4 class="card-title">Name: <span class="update-password-name"></span></h4>
                <div class="col-md-12">
                  <form class="form-horizontal">
                      <div class="form-group" style="margin-top:56px;">
                          <label class="control-label date-label">Role</label>
                          <select id="edit-role" data-style="select-with-transition" title="Choose Role" data-size="7">
                          </select>
                      </div>
                      <div style="margin-top:55px;margin-bottom:20px;text-align:center">
                        <button type="submit" id="update-role" class="btn btn-fill btn-success">Save</button>
                        <button type="button" id="" class="close-menu btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                  </form>
                </div>
            </div>
        </div><!-- card-->
      </div><!-- password-input -->
    </div><!-- col-md-6 -->
  </div><!-- row -->

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
                      <th class="disabled-sorting sn">Sn.</th>
                      <th>Name</th>
                      <th>Emp No.</th>
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
active('add-user', 'sub-link')
active('user-mgmt')
</script>

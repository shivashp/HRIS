<?php
  $page_permission = array("key" => "user_management_perm", "value" => "R");
  include('header.php');
?>

<div class="content">
 <div class="page-loader">
  <img src="img/loader.gif"><br>
  <div class="page-loader-text">Please Wait...</div>
</div><!-- page-loader-->
  <div class="card">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-content">
          <h4 class="card-title">Users</h4>
          <div class="material-datatables">
            <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
                <thead>
                    <tr>
                      <th class="disabled-sorting">Sn.</th>
                      <th>Name</th>
                      <th>Emp No.</th>
                      <th>Username</th>
                      <th>Role</th>
                      <th>Contact No.</th>
                      <th>Address</th>
                      <th>Country</th>
                      <th>Status</th>
                      <th>Actions</th>
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
<script src="scripts/users.js"></script>
<script>
active('users', 'sub-link')
active('user-mgmt')
</script>

<?php include('header.php'); ?>

<div class="content">
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
                      <th>Emp No.</th>
                      <th>Username</th>
                      <th>Name</th>
                      <th>Contact No.</th>
                      <th>Address</th>
                      <th>Country</th>
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
  active('settings')
</script>

<?php
$page_permission = array("key" => "agency_emp_perm", "value" => "R");
include('header.php');
?>
<div class="content">
<div class="agencyemp-write row">
  <a href="add-employee" class="btn btn-success pull-right sp-add-btn">Add</a>
</div><!-- row-->
 <div class="page-loader">
  <img src="img/loader.gif"><br>
  <div class="page-loader-text">Please Wait...</div>
</div><!-- page-loader-->
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
                        <th class="disabled-sorting">Sn.</th>
                        <th>Name</th>
                        <th>Emp No.</th>
                        <th>Address</th>
                        <th>Contact</th>
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
<script src="scripts/employee.js"></script>
<script>
active('employees', 'sub-link')
active('employee')
</script>

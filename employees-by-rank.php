<?php include('header.php'); ?>

<div class="content">
  <div class='row'>
    <div class="col-md-3 pull-right">
      <select data-style="btn btn-success btn-round" title="Choose Rank" id="rank" data-size="7">

      </select>
    </div>
  </div>
  <div class="card">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-content">
          <h4 class="card-title">Employee by Rank</h4>
          <div class="material-datatables">
            <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
                <thead>
                    <tr>
                      <th>Emp No.</th>
                      <th>Name</th>
                      <th>Address</th>
                      <!-- <th>Email</th> -->
                      <th>Contact</th>
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
<style>
table.dataTable > thead > tr > th, table.dataTable > tbody > tr > th, table.dataTable > tfoot > tr > th, table.dataTable > thead > tr > td, table.dataTable > tbody > tr > td, table.dataTable > tfoot > tr > td {
  padding-top: 16px !important;
  padding-bottom: 15px !important;
}
</style>
<script src="scripts/employee-by-rank.js"></script>
<script>
  active('employee-by-rank')
</script>

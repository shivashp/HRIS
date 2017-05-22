<?php include('header.php'); ?>

<div class="content">
  <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
              <div class="card-header" data-background-color="blue">
                  <i class="material-icons">store</i>
              </div>
              <div class="card-content">
                  <p class="category">Agency</p>
                  <h3 class="card-title">5</h3>
              </div>
              <div class="card-footer">
                  <div class="stats">
                      <i class="material-icons">update</i> Total Agencies added
                  </div>
              </div>
          </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
              <div class="card-header" data-background-color="orange">
                  <i class="material-icons">store</i>
              </div>
              <div class="card-content">
                  <p class="category">Branches</p>
                  <h3 class="card-title">10</h3>
              </div>
              <div class="card-footer">
                  <div class="stats">
                      <i class="material-icons">update</i> Total Branches added
                  </div>
              </div>
          </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
              <div class="card-header" data-background-color="rose">
                  <i class="material-icons">group</i>
              </div>
              <div class="card-content">
                  <p class="category">Employees</p>
                  <h3 class="card-title">5,521</h3>
              </div>
              <div class="card-footer">
                  <div class="stats">
                      <i class="material-icons">update</i> Total Employees added
                  </div>
              </div>
          </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
              <div class="card-header" data-background-color="green">
                  <i class="material-icons">group</i>
              </div>
              <div class="card-content">
                  <p class="category">Users</p>
                  <h3 class="card-title">245</h3>
              </div>
              <div class="card-footer">
                  <div class="stats">
                      <i class="material-icons">update</i> Total Users added
                  </div>
              </div>
          </div>
      </div>
  </div><!-- row  Cards-->
  <div class="row">
    <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="card">
          <div class="card-header card-header-icon" data-background-color="green">
              <i class="material-icons">perm_contact_calendar</i>
          </div>
          <div class="card-content">
              <h4 class="card-title">Leave Status</h4>
              <div class="table-responsive table-sales">
                  <table class="table leave-table">
                    <tr>
                      <td style="width:35px;"><i class="material-icons primary" style="color:#3498DB">notifications</i></td>
                      <td>Leaves Applied</td>
                      <td><span class="badge badge-info">10</span></td>
                    </tr>
                    <tr>
                      <td><i class="material-icons" style="color:#65BD77">thumb_up</i></td>
                      <td>Leaves Approved</td>
                      <td><span class="badge badge-success">10</span></td>
                    </tr>
                    <tr>
                      <td><i class="material-icons" style="color:#E85344">thumb_down</i></td>
                      <td>Leaves Rejected</td>
                      <td><span class="badge badge-danger">10</span></td>
                    </tr>
                    <tr>
                      <td><i class="material-icons" style="color:#F39C12">hourglass_full</i></td>
                      <td>Leaves Pending</td>
                      <td><span class="badge badge-warning">10</span></td>
                    </tr>
                  </table>
              </div>
          </div><!-- card-content -->
      </div><!--card -->
    </div>
  </div><!-- row -->
</div><!-- content -->
<style>
  .main-panel > .content {
    margin-top: 95px;
  }
  .leave-table .material-icons {
    font-size:19px;
  }
  .table-sales {
    margin-top: 20px;
  }
</style>
<?php include('footer.php'); ?>
<script>
  active('dashboard');
  $(".card").show();
</script>

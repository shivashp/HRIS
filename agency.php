<?php include('header.php'); ?>

<div class="content">
  <a href="add-agency.php" class="btn btn-success pull-right"><i class="fa fa-plus-circle"> </i> &nbsp;&nbsp;Add Agency</a>
  <div class="card">
      <div class="card-header card-header-text" data-background-color="rose">
          <h4 class="card-title"><span class="fa fa-home"> </span> Agencies</h4>
      </div>
      <div class="card-content">
          <div class="material-datatables">
              <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
                  <thead>
                      <tr>
                        <th>Facility Name</th>
                        <th>Facility Type</th>
                        <th>LLG</th>
                        <th>District</th>
                        <th>Province</th>
                        <th>Region</th>
                        <th class="disabled-sorting text-right">Actions</th>
                      </tr>
                  </thead>
                  <tbody id = "table-body">
                      <tr>
                          <td>Default Agency</td>
                          <td>Facility</td>
                          <td>Kapilvastu</td>
                          <td>Bagmati</td>
                          <td>Kathmandu</td>
                          <td>Central</td>
                          <td class="text-right">
                              <a href="#" class="edit btn btn-sm btn-success btn-icon like"><i class="material-icons">edit</i></a>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div> <!-- end content-->
  </div><!--  end card  -->
</div>
<?php include('footer.php'); ?>
<script>
  active('agency')
</script>

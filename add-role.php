<?php
  $page_permission = array("key" => "user_management_perm", "value" => "W");
  include('header.php');
?>


<div class="content user-write">
 <div class="page-loader">
  <img src="img/loader.gif"><br>
  <div class="page-loader-text">Please Wait...</div>
</div><!-- page-loader-->
  <div class="card">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-content">
          <h4 class="card-title" id="role-title">Add Role</h4>
          <form class="form-horizontal">
            <div class="row">
              <div class="col-md-6">
                <div class="row">
                    <label class="col-md-3 label-on-left">Title</label>
                    <div class="col-md-9">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="role-name" class="form-control" placeholder="Title">
                        </div>
                    </div>
                </div><!--row-->
              </div>
            </div><!--row -->
          </form>
      </div> <!-- end content-->
  </div> <!--  end card  -->

  <div class="card">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-content">
          <h4 class="card-title">Permissions</h4>
          <table id="datatables" class="table table-striped">
           <thead>
              <tr>
                 <th>Permission</th>
                 <th>None</th>
                 <th>Read</th>
                 <th>Write</th>
                 <th>Execute</th>
              </tr>
           </thead>
           <tbody>
             <tr>
                <td>Company Management</td>
                <td><input type="checkbox" class="company" name="company" value = "N" checked></td>
                <td><input type="checkbox" class="company" name="company" value = "R"></td>
                <td><input type="checkbox" class="company" name="company" value = "W"></td>
                <td><input type="checkbox" class="company" name="company" value = "E"></td>
             </tr>
              <tr>
                 <td>Division Management</td>
                 <td><input type="checkbox" class = "division" name="division" value = "N" checked></td>
                 <td><input type="checkbox" class = "division" name="division" value = "R"></td>
                 <td><input type="checkbox" class = "division" name="division" value = "W"></td>
                 <td><input type="checkbox" class = "division" name="division" value = "E"></td>
              </tr>
              <tr>
                 <td>Agency Mangement</td>
                 <td><input type="checkbox" class = "agency" name="agency" value = "N" checked></td>
                 <td><input type="checkbox" class = "agency" name="agency" value = "R"></td>
                 <td><input type="checkbox" class = "agency" name="agency" value = "W"></td>
                 <td><input type="checkbox" class = "agency" name="agency" value = "E"></td>
              </tr>
              <tr>
                 <td>Employee Management</td>
                 <td><input type="checkbox" class = "agency-employee" name="agency-employee" value = "N" checked></td>
                 <td><input type="checkbox" class = "agency-employee" name="agency-employee" value = "R"></td>
                 <td><input type="checkbox" class = "agency-employee" name="agency-employee" value = "W"></td>
                 <td><input type="checkbox" class = "agency-employee" name="agency-employee" value = "E"></td>
              </tr>
              <!-- <tr>
                 <td>Division Employee Management</td>
                 <td><input type="checkbox" class = "division-employee" name="employee" value = "N" checked></td>
                 <td><input type="checkbox" class = "division-employee" name="employee" value = "R"></td>
                 <td><input type="checkbox" class = "division-employee" name="employee" value = "W"></td>
                 <td><input type="checkbox" class = "division-employee" name="employee" value = "E"></td>
              </tr> -->
              <tr>
                 <td>User Management</td>
                 <td><input type="checkbox" class = "user" name="user" value = "N" checked></td>
                 <td><input type="checkbox" class = "user" name="user" value = "R"></td>
                 <td><input type="checkbox" class = "user" name="user" value = "W"></td>
                 <td><input type="checkbox" class = "user" name="user" value = "E"></td>
              </tr>
              <tr>
                 <td>Employee Configuration Management</td>
                 <td><input type="checkbox" class = "config" name="config" value = "N" checked></td>
                 <td><input type="checkbox" class = "config" name="config" value = "R"></td>
                 <td><input type="checkbox" class = "config" name="config" value = "W"></td>
                 <td><input type="checkbox" class = "config" name="config" value = "E"></td>
              </tr>
           </tbody>
        </table>

      </div> <!-- end content-->
      <div class="row">
          <div class="col-md-12" style = "text-align:center;margin-top:30px">
              <div class="form-group form-button">
                <span class="loader"><img src="img/loader.gif"></span><button type="submit" id="add" class="btn btn-fill btn-success sp-save-btn">Save</button>
                <a href="javascript:;" class="btn btn-fill btn-danger">Cancel</a>
              </div>
          </div>
      </div>
  </div> <!--  end card  -->
</div><!-- content -->
<?php include('footer.php'); ?>
<script src="scripts/add-role.js"></script>
<script>
active('add-role', 'sub-link')
active('user-mgmt')
</script>

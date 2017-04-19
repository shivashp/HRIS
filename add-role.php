<?php include('header.php'); ?>

<div class="content">
  <div class="card">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-content">
          <h4 class="card-title">Add Role</h4>
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
                <div class="row">
                    <label class="col-md-3 label-on-left">Code</label>
                    <div class="col-md-9">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="role-code" class="form-control" placeholder="Code">
                        </div>
                    </div>
                </div><!--row-->
                <br><br>
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
                <td><input type="radio" class="company" name="company" value = "0" checked></td>
                <td><input type="radio" class="company" name="company" value = "1"></td>
                <td><input type="radio" class="company" name="company" value = "2"></td>
                <td><input type="radio" class="company" name="company" value = "3"></td>
             </tr>
              <tr>
                 <td>Division Management</td>
                 <td><input type="radio" class = "division" name="division" value = "0" checked></td>
                 <td><input type="radio" class = "division" name="division" value = "1"></td>
                 <td><input type="radio" class = "division" name="division" value = "2"></td>
                 <td><input type="radio" class = "division" name="division" value = "3"></td>
              </tr>
              <tr>
                 <td>Agency Mangement</td>
                 <td><input type="radio" class = "agency" name="agency" value = "0" checked></td>
                 <td><input type="radio" class = "agency" name="agency" value = "1"></td>
                 <td><input type="radio" class = "agency" name="agency" value = "2"></td>
                 <td><input type="radio" class = "agency" name="agency" value = "3"></td>
              </tr>
              <tr>
                 <td>Employee Management</td>
                 <td><input type="radio" class = "employee" name="employee" value = "0" checked></td>
                 <td><input type="radio" class = "employee" name="employee" value = "1"></td>
                 <td><input type="radio" class = "employee" name="employee" value = "2"></td>
                 <td><input type="radio" class = "employee" name="employee" value = "3"></td>
              </tr>
              <tr>
                 <td>User Management</td>
                 <td><input type="radio" class = "user" name="user" value = "0" checked></td>
                 <td><input type="radio" class = "user" name="user" value = "1"></td>
                 <td><input type="radio" class = "user" name="user" value = "2"></td>
                 <td><input type="radio" class = "user" name="user" value = "3"></td>
              </tr>
           </tbody>
        </table>

      </div> <!-- end content-->
      <div class="row">
          <div class="col-md-12" style = "text-align:center;margin-top:30px">
              <div class="form-group form-button">
                <button type="submit" id="add" class="btn btn-fill btn-success sp-save-btn">Save</button>
                <a href="roles.php" class="btn btn-fill btn-danger">Cancel</a>
              </div>
          </div>
      </div>
  </div> <!--  end card  -->
</div><!-- content -->
<?php include('footer.php'); ?>
<script src="scripts/add-role.js"></script>
<script>
  active('user')
</script>

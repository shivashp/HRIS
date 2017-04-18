<?php include('header.php'); ?>

<div class="content">
  <div class="card">
      <div class="card-header card-header-icon" data-background-color="purple">
          <i class="material-icons">assignment</i>
      </div>
      <div class="card-content">
          <h4 class="card-title">Permissions</h4>
          <div id="permission-table">

          </div><!-- permission table -->
          <div class="row">
              <div class="col-md-12" style = "text-align:center;margin-top:30px">
                  <div class="form-group form-button">
                    <button type="button" id="save" class="btn btn-fill btn-success sp-save-btn">Save</button>
                    <button type="button" id="clear" class="btn btn-fill btn-danger sp-save-btn">Reset</button>
                  </div>
              </div>
          </div>
      </div> <!-- end content-->
  </div> <!--  end card  -->
</div><!-- content -->
<?php include('footer.php'); ?>
<script src="scripts/permissions.js"></script>
<script>
  active('permissions')
</script>

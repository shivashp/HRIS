<?php include('header.php'); ?>

<div class="content">
  <div class="form-section">
    <div class="card">
        <form method="get" action="#" class="form-horizontal">
            <div class="card-header card-header-text" data-background-color="rose">
                <h4 class="card-title">Add Agency</h4>
            </div>
            <div class="card-content">
                <div class="row">
                    <label class="col-sm-2 label-on-left">Health Facility Name</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="health-facility-name" class="form-control" placeholder = "Health Facility Name" value>
                        </div>
                    </div>
                </div><!--row-->
                <div class="row">
                  <label class="col-sm-2 label-on-left">Type of Health Facility</label>
                    <div class="col-sm-6">
                        <div class="form-group label-floating is-empty">
                          <select class="selectpicker" data-style="btn select-with-transition sp-select" id="type"  title="Choose Health Facility">
                            <option value="1">Level 1- Aid Post</option>
                            <option value="2">Level 2 - Community Health Post</option>
                            <option value="3">Level 3 - Rural Health Centre</option>
                            <option value="4">Level 3 -  Urban Health Centre</option>
                            <option value="5">Level 4 - District Hospital</option>
                            <option value="6">Level 5 - Provincial Hospital</option>
                            <option value="7">Level 6 - Regional Hospital</option>
                            <option value="8">Level 7 - National Referral Hospital</option>
                          </select>
                        </div>
                    </div>
                </div><!-- row -->
                <div class="row">
                    <label class="col-sm-2 label-on-left">Agency Code</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="agency-code" class="form-control" placeholder = "Agency Code" value>
                        </div>
                    </div>
                </div><!--row-->
                <div class="row">
                    <label class="col-sm-2 label-on-left">Email</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="email" class="form-control" placeholder = "Email" value>
                        </div>
                    </div>
                </div><!--row-->
                <div class="row">
                  <label class="col-sm-2 label-on-left">Agency</label>
                    <div class="col-sm-6">
                        <div class="form-group label-floating is-empty">
                          <select class="selectpicker" data-style="btn select-with-transition sp-select" id="agency"  title="Choose Agency">
                            <option value="church">Church Health Services</option>
                            <option value="government">Government</option>
                            <option value="private">Private/NGO</option>
                          </select>
                        </div>
                    </div>
                </div><!-- row -->
                <div class="row">
                  <label class="col-sm-2 label-on-left">LLG</label>
                    <div class="col-sm-6">
                        <div class="form-group label-floating is-empty">
                          <select class="selectpicker" data-style="btn select-with-transition sp-select" id="llg"  title="Choose LLG">
                            <option value="church">Afore Rural</option>
                            <option value="government">Agarabi Rural</option>
                            <option value="private">Ahi Rural</option>
                          </select>
                        </div>
                    </div>
                </div><!--row-->
                <div class="row">
                  <label class="col-sm-2 label-on-left">District</label>
                    <div class="col-sm-6">
                        <div class="form-group label-floating is-empty">
                          <select class="selectpicker" data-style="btn select-with-transition sp-select" id="district"  title="Choose District">
                            <option value="church">Afore Rural</option>
                            <option value="government">Agarabi Rural</option>
                            <option value="private">Ahi Rural</option>
                          </select>
                        </div>
                    </div>
                </div><!--row-->
                <div class="row">
                  <label class="col-sm-2 label-on-left">Province</label>
                    <div class="col-sm-6">
                        <div class="form-group label-floating is-empty">
                          <select class="selectpicker" data-style="btn select-with-transition sp-select" id="province"  title="Choose Province">
                            <option value="church">Autonomous Region of Bougainville</option>
                            <option value="government">Central</option>
                            <option value="private">Chimbu</option>
                          </select>
                        </div>
                    </div>
                </div><!--row-->
                <div class="row">
                  <label class="col-sm-2 label-on-left">Region</label>
                    <div class="col-sm-6">
                        <div class="form-group label-floating is-empty">
                          <select class="selectpicker" data-style="btn select-with-transition sp-select" id="region"  title="Choose Region">
                            <option value="church">Highlands Region </option>
                            <option value="government">Islands Region</option>
                            <option value="private">Momase Region</option>
                            <option value="southern">Southern Region </option>
                          </select>
                        </div>
                    </div>
                </div><!--row-->


                <div class="row sp-save-btn-row">
                  <button type="button" id="submit" class="btn btn-success">Save</button>
                </div>
            </div><!-- card-content -->
        </form>
    </div><!-- card -->
  </div><!-- form-section -->
</div><!-- content -->

<?php include('footer.php'); ?>
<script src="scripts/add-agency.js"></script>
<script>
  active('agency')
</script>

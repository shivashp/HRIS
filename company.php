<?php include('header.php'); ?>

<div class="content">
  <div class="form-section">
    <div class="card">
        <form method="get" action="#" class="form-horizontal">
            <div class="card-header card-header-text" data-background-color="rose">
                <h4 class="card-title">Company Setup</h4>
            </div>
            <div class="card-content">
                <div class="row">
                    <label class="col-sm-2 label-on-left">Company Name</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="name" class="form-control" placeholder = "Company Name" value>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-sm-2 label-on-left">Description</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <textarea id="desc" class="form-control" rows="3" placeholder="Description about company"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-sm-2 label-on-left">Currency Symbol</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                            <label class="control-label"></label>
                            <input type="text" id="symbol" class="form-control" placeholder="eg. $, €">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-sm-2 label-on-left">Currency Placement</label>
                    <div class="col-sm-10 checkbox-radios">
                        <div class="radio">
                            <label>
                                <input type="radio" id="prefix" name="currency_placement" value="prefix"> Prefix
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" id="suffix" name="currency_placement" value="suffix"> Suffix
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-sm-2 label-on-left">Established Date</label>
                    <div class="col-sm-10">
                        <div class="form-group label-floating is-empty">
                          <input type="text" id="date-picker" class="form-control datepicker" />
                        </div>
                    </div>
                </div>
                <div class="row">
                  <label class="col-sm-2 label-on-left">Country</label>
                    <div class="col-sm-3">
                        <div class="form-group label-floating is-empty">
                          <select class="selectpicker1" data-style="btn select-with-transition sp-select" id="country"  title="Choose Country">
                          </select>
                        </div>
                    </div>
                </div>
                <div class="row sp-save-btn-row">
                  <button type="button" id="submit" class="btn btn-success">Save</button>
                </div>
            </div><!-- card-content -->
        </form>
    </div><!-- card -->
  </div><!-- form-section -->
</div>

<?php include('footer.php'); ?>
<script src="scripts/company.js"></script>
<script>
  active('company');
</script>

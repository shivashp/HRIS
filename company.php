<?php
$page_permission = array("key" => "company_management_perm", "value" => "R");
include('header.php');
?>

<div class="content">
  <div class="row per division-write">
    <a href="company-setup.php" class="btn btn-success pull-right">Edit</a>
  </div><!-- row-->
   <div class="page-loader">
  <img src="img/loader.gif"><br>
  <div class="page-loader-text">Please Wait...</div>
</div><!-- page-loader-->
  <div class="card">
      <div class="card-header card-header-text" data-background-color="rose">
          <h4 class="card-title"><span class="fa fa-home"> </span> Company Details</h4>
      </div>
      <div class="card-content">
        <div class="row">
        <div class="col-md-6">
          <table class="table table-striped">
            <tr>
              <td>Company Name</td>
              <td> : </td>
              <td id="company-name"></td>
            </tr>
            <tr>
              <td>Company Code</td>
              <td> : </td>
              <td id="code"></td>
            </tr>
            <tr>
              <td>Code Description</td>
              <td> : </td>
              <td id="code-desc"></td>
            </tr>
            <tr>
              <td>Address 1</td>
              <td> : </td>
              <td id="address1"></td>
            </tr>
            <tr>
              <td>Address 2</td>
              <td> : </td>
              <td id="address2"></td>
            </tr>
            <tr>
              <td>Village</td>
              <td> : </td>
              <td id="village"></td>
            </tr>
            <tr>
              <td>LLG</td>
              <td> : </td>
              <td id="llg"></td>
            </tr>
            <tr>
              <td>District</td>
              <td> : </td>
              <td id="district"></td>
            </tr>
          </table>
        </div>

         <div class="col-md-6">
          <table class="table table-striped">
            <tr>
              <td>Province</td>
              <td> : </td>
              <td id="province"></td>
            </tr>
            <tr>
              <td>Region</td>
              <td> : </td>
              <td id="region"></td>
            </tr>
            <tr>
              <td>Country</td>
              <td> : </td>
              <td id="country"></td>
            </tr>
            <tr>
              <td>Web Address</td>
              <td> : </td>
              <td id="web"></td>
            </tr>
            <tr>
              <td>Email</td>
              <td> : </td>
              <td id="email"></td>
            </tr>
            <tr>
              <td>Contact Person Name</td>
              <td> : </td>
              <td id="contact-name"></td>
            </tr>
            <tr>
              <td>Contact Person Mobile</td>
              <td> : </td>
              <td id="contact-mobile"></td>
            </tr>
            <tr>
              <td>Contact Person Email</td>
              <td> : </td>
              <td id="contact-email"></td>
            </tr>

          </table>
        </div>

        </div><!-- row -->
      </div> <!-- end content-->
  </div><!--  end card  -->
  <div class="col-md-8">
    <div class="card">
        <div class="card-header card-header-text" data-background-color="rose">
            <h4 class="card-title"><span class="fa fa-home"> </span> Free Text</h4>
        </div>
        <div class="card-content">
          <table class="table table-striped" id="free-text-content">
            <tr id="free-text-1-container">
              <td>Free Text 1</td>
              <td> : </td>
              <td id="free-text-1"></td>
            </tr>
          </table>
        </div> <!-- end content-->
    </div><!--  end card  -->
  </div>

</div>
<?php include('footer.php'); ?>
<script src="scripts/company.js"></script>
<script>
active('ndoh', 'sub-link')
active('company');
</script>
<style media="screen">
.c-free-text {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    width: 100%;
    clear: both;
    overflow: hidden;
}
.c-free-text-label>h4 {
    font-weight: 400;
    font-size: 1.2em;
}
.c-free-text-label {
    float: left;
}
.c-free-text-value {
    float: left;
    margin-top: 12px;
    margin-left: 25px;
}
</style>

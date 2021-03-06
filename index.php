<?php
  if(isset($_COOKIE['token'])) {
    header("location:dashboard.php");
  }
?>
<!Doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>HRIS | Login</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />
    <link href="css/demo.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" />
    <link rel="stylesheet" href="css/main.css">
</head>
<style>
.card {
  display: inline-block;
}
</style>

<body id ="login">
  <div id="overlay"></div>
    <nav class="navbar navbar-primary navbar-transparent navbar-absolute">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- <a class="navbar-brand" href="../dashboard.html">HRIS</a> -->
            </div>
            <div class="collapse navbar-collapse">
              <div class="nav navbar-nav navbar-right"></div>
            </div>
        </div>
    </nav>
    <div class="wrapper wrapper-full-page">
        <div class="full-page login-page" filter-color="black">
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                            <form>
                                <div class="card card-login card-hidden">
                                    <div class="card-header text-center" data-background-color="rose">
                                        <h4 class="card-title"><span>Login Panel</span></h4>
                                    </div>
                                    <div class="card-content">
                                        <div class="sp-alert sp-alert-danger">Login Successful!</div>
                                        <div class="sp-alert sp-alert-success">Login Successful!</div>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">face</i>
                                            </span>
                                            <div class="form-group label-floating">
                                                <label class="control-label">Username</label>
                                                <input type="text" id="username" class="form-control">
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">lock_outline</i>
                                            </span>
                                            <div class="form-group label-floating">
                                                <label class="control-label">Password</label>
                                                <input type="password" id="password" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="footer text-center">
                                        <span class="loader"><img src="img/loader.gif" style = "width: 6%;margin-top: 38px;margin-bottom: 15px;"></span><button type="submit" id="login-btn" class="btn btn-login btn-success btn-wd">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </div>
</body>
<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script src="js/material.min.js" type="text/javascript"></script>
<script src="js/material-dashboard.js"></script>
<script src="js/demo.js"></script>
<script src="scripts/login.js"></script>
<script type="text/javascript">
    $().ready(function() {
        setTimeout(function() {
            $('.card').removeClass('card-hidden');
        }, 700)
    });
</script>

</html>

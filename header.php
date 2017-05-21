<?php
  if(!isset($_COOKIE['token'])) {
    header("location:index");
    die();
  }

  $PERMISSIONS = array('N' => 0, 'R' => 1, 'W' => 2, 'E' => 3);
  $USER_PERMISSIONS = json_decode($_COOKIE['permissions'], true);
  if(isset($page_permission)) {
    $key = $page_permission['key'];
    $value = $page_permission['value']; // Required Permission
    $user_value = $USER_PERMISSIONS[$key]; // Available Permission
    $req_val = $PERMISSIONS[$value];
    $aval_val = $PERMISSIONS[$user_value];
    if($req_val > $aval_val) {
      header("location:dashboard");
    }
  }
 ?>
<script>
  var TOKEN = localStorage.getItem('token');
</script>
<!Doctype html>
<html lang="en" class = "per1 per2">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>HRIS Admin</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />
    <link href="css/demo.css" rel="stylesheet" />
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" />
    <link rel="stylesheet" type="text/css" href="css/material-icons.css" />
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <div class="wrapper">
        <div class="sidebar" data-active-color="rose" data-background-color="black" data-image="img/sidebar-1.jpg">
          <div class="logo"> <a href="javascript:;" class="simple-text">
              <img src="img/ndoh_logo.png" id="ndoh-logo">
          </div>
          <div class="logo logo-mini"> <a href="#" class="simple-text"> HRIS </a> </div>
          <div class="sidebar-wrapper">
              <ul class="nav" id="main">
                  <li class="per link dashboard">
                      <a href="dashboard.php" class="menu" data-name = 'branch'> <i class="material-icons">dashboard</i>
                          <p>Dashboard</p>
                      </a>
                  </li>

                  <li class="link company panel per company-read">
                      <a data-toggle="collapse" data-parent = "#main" href="#companyManagement">
                          <i class="material-icons">account_balance</i>
                          <p>Company Management
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse" id="companyManagement">
                          <ul class="nav">
                            <li class="sub-link ndoh per4 company-write">
                                <a href="company.php">
                                    Company Details
                                </a>
                            </li>
                            <li class="sub-link region">
                                <a href="region.php">
                                    Regions
                                </a>
                            </li>
                            <li class="sub-link province">
                                <a href="province.php">
                                    Provinces
                                </a>
                            </li>
                            <li class="sub-link district">
                                <a href="district.php">
                                    Districts
                                </a>
                            </li>
                            <li class="sub-link llg">
                                <a href="llg.php">
                                    LLGs
                                </a>
                            </li>
                            <li class="sub-link facility">
                                <a href="facility.php">
                                    Facility Type
                                </a>
                            </li>
                          </ul>
                      </div><!-- company - management -->
                  </li><!-- company dropdown -->

                  <li class="link config panel per config-read">
                      <a data-toggle="collapse" data-parent = "#main" href="#employeeconfiguration">
                          <i class="material-icons">group</i>
                          <p>Employee Configuration
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse" id="employeeconfiguration">
                          <ul class="nav">
                            <li class="sub-link rank">
                                <a href="employee-category-rank.php">
                                    Ranks
                                </a>
                            </li>
                            <li class="sub-link category">
                                <a href="employee-categories.php" >
                                    Categories
                                </a>
                            </li>
                            <li class="sub-link type">
                                <a href="employment-type.php">
                                    Types
                                </a>
                            </li>
                            <li class="sub-link position-title">
                                <a href="position-title-setup.php">
                                    Position Title
                                </a>
                            </li>
                          </ul>
                      </div><!-- employee configuration -->
                  </li><!-- employee dropdown -->

                  <li class="link division panel per division-read agency-read">
                      <a data-toggle="collapse" data-parent = "#main" href="#divisionmgmt">
                          <i class="material-icons">domain</i>
                          <p>Division Management
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse" id="divisionmgmt">
                          <ul class="nav">
                            <li class="sub-link branch">
                                <a href="branch.php">
                                    Division / Branch
                                </a>
                            </li>
                            <li class="sub-link agency per agency-read">
                                <a href="agency.php">
                                    Agency
                                </a>
                            </li>
                          </ul>
                      </div><!-- Division Management -->
                  </li><!-- Division dropdown -->

                  <li class="link employee panel per agencyemp-read">
                      <a data-toggle="collapse" data-parent = "#main" href="#employee">
                          <i class="material-icons">group</i>
                          <p>Employee Management
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse" id="employee">
                          <ul class="nav">
                            <li class="sub-link employees agencyemp-read">
                                <a href="employee.php">
                                    Employees
                                </a>
                            </li>
                            <li class="sub-link add-employee agencyemp-write">
                                <a href="add-employee.php">
                                    Add Employee
                                </a>
                            </li>
                            <!-- <li class="sub-link add-employee agencyemp-write">
                                <a href="create-employee">
                                    Create Employee
                                </a>
                            </li> -->

                          </ul>
                      </div><!-- Agency Employee Management -->
                  </li><!-- Agency Employee dropdown -->

                  <li class="link user-mgmt panel per user-read">
                      <a data-toggle="collapse" data-parent = "#main" href="#usermanagement">
                          <i class="material-icons">account_circle</i>
                          <p>User Management
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse" id="usermanagement">
                          <ul class="nav">
                            <li class="sub-link users user-read">
                                <a href="users.php" class="menu">
                                    Users
                                </a>
                            </li>
                            <li class="sub-link add-user user-write">
                                <a href="add-user.php" class="menu">
                                    Add User
                                </a>
                            </li>
                            <li class = "sub-link roles user-read">
                                <a href="role.php" class="menu">
                                    Roles
                                </a>
                            </li>
                            <li class="sub-link add-role user-write">
                                <a href="add-role.php" class="menu">
                                    Add Role
                                </a>
                            </li>
                            <li class="sub-link password-policy user-write">
                                <a href="password-policy.php" class="menu">
                                    Password Policy
                                </a>
                            </li>
                          </ul>
                      </div><!-- User Management -->
                  </li><!-- User dropdown -->
              </ul>
          </div>
        </div>
        <nav class="navbar navbar-blue navbar-absolute navbar-fixed">
            <div class="container-fluid">
              <div class="navbar-minimize">
                <div class="main-header-section" id="company-display-name">
                </div>
              </div>
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
              </div>
                <div class="collapse navbar-collapse">
                  <ul class="nav navbar-nav navbar-right">
                      <li class="dropdown">
                          <a href="dashboard.html#" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="material-icons">account_circle</i> <span id="nav-username"></span> <b class="caret"></b>
                          </a>
                          <ul class="dropdown-menu">
                            <li>
                              <a href="change-password.php">Settings</a>
                            </li>
                            <li style="cursor:pointer">
                              <a class="logout">Logout</a>
                            </li>
                            <li style="display:none;">
                              <a href="#" id="refresh-control"></a>
                            </li>
                          </ul>
                      </li>
                      <li class="separator hidden-lg hidden-md"></li>
                  </ul>
                </div>
            </div>
        </nav>
        <div class="main-panel">

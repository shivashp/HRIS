<!Doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>EzyDeposit Admin</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />
    <link href="css/demo.css" rel="stylesheet" />
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" />
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <div class="wrapper">
        <div class="sidebar" data-active-color="rose" data-background-color="black" data-image="img/sidebar-1.jpg">
          <div class="logo"> <a href="javascript:;" class="simple-text">
              National Department<br> of Health</a>
          </div>
          <div class="logo logo-mini"> <a href="#" class="simple-text"> HRIS </a> </div>
          <div class="sidebar-wrapper">
              <ul class="nav">
                  <li class="link dashboard">
                      <a href="dashboard.php" class="menu" data-name = 'branch'> <i class="material-icons">dashboard</i>
                          <p>Dashboard</p>
                      </a>
                  </li>
                  <li class="link dashboard">
                      <a href="#" class="menu" data-name = 'branch'> <i class="material-icons">dashboard</i>
                          <p>My Profile</p>
                      </a>
                  </li>
                  <li class="link create-employees">
                      <a href="create-employee.php" class="menu">
                        <i class="material-icons">person</i>
                          <p>Add Employee</p>
                      </a>
                  </li>

                  <li class="nav-title"><i class="material-icons">person</i> Employees Listing</li>

                  <li class="link sub all-employees">
                      <a href="employee.php" class="menu">
                          <p>All Employees</p>
                      </a>
                  </li>
                  <li class="link sub employees-by-divisions">
                      <a href="employees-by-divisions.php" class="menu" >
                          <p>Employees By Divisions</p>
                      </a>
                  </li>
                  <li class="link sub employees-by-agencies">
                      <a href="employees-by-agencies.php" class="menu" >
                          <p>Employees By Agencies</p>
                      </a>
                  </li>
                  <li class="link sub employees-by-category">
                      <a href="employees-by-category.php" class="menu" >
                          <p>Employees By Category</p>
                      </a>
                  </li>
                  <li class="link sub employees-by-rank">
                      <a href="employees-by-rank.php" class="menu" >
                          <p>Employees By Rank</p>
                      </a>
                  </li>


                  <li class="nav-title"><i class="material-icons">book</i> Division Settings</li>
                  <li class="link sub branch">
                      <a href="branch.php" class="menu" data-name = 'branch'>
                          <p>Division Setup</p>
                      </a>
                  </li>
                  <li class="link sub agency">
                      <a href="agency.php" class="menu" data-name = 'branch'>
                          <p>Agency Setup</p>
                      </a>
                  </li>
                  <li class="link sub facility">
                      <a href="facility.php" class="menu" data-name = 'branch'>
                          <p>Facility Setup</p>
                      </a>
                  </li>

                  <li class="nav-title"><i class="material-icons">book</i> NDOH Settings</li>
                  <li class="link sub company">
                      <a href="company.php" class="menu" data-name = 'branch'>
                          <p>NDOH Setup</p>
                      </a>
                  </li>
                  <li class="link sub district">
                      <a href="district.php" class="menu" data-name = 'branch'>
                          <p>District Setup</p>
                      </a>
                  </li>
                  <li class="link sub province">
                      <a href="province.php" class="menu" data-name = 'branch'>
                          <p>Province Setup</p>
                      </a>
                  </li>
                  <li class="link sub region">
                      <a href="region.php" class="menu" data-name = 'branch'>
                          <p>Region Setup</p>
                      </a>
                  </li>
                  <li class="link sub llg">
                      <a href="llg.php" class="menu" data-name = 'branch'>
                          <p>Llg Setup</p>
                      </a>
                  </li>

                  <li class="nav-title"><i class="material-icons">person</i> Employee Settings</li>
                  <li class="link sub employee-category-rank">
                      <a href="employee-category-rank.php" class="menu" data-name = 'branch'>
                          <p>Rank Setup</p>
                      </a>
                  </li>
                  <li class="link sub employee-category">
                      <a href="employee-categories.php" class="menu" data-name = 'branch'>
                          <p>Category Setup</p>
                      </a>
                  </li>
                  <li class="link sub employment-type">
                      <a href="employment-type.php" class="menu" data-name = 'branch'>
                          <p>Type Setup</p>
                      </a>
                  </li>

                  <li class="nav-title"><i class="material-icons">book</i> Roles &amp; Permissions</li>
                  <li class="link sub role">
                      <a href="role.php" class="menu">
                          <p>Role Setup</p>
                      </a>
                  </li>
                  <li class="link sub permissions">
                      <a href="permissions.php" class="menu" >
                          <p>Permissions Setup</p>
                      </a>
                  </li>
              </ul>
          </div>
        </div>
        <div class="main-panel">
            <nav class="navbar navbar-transparent navbar-absolute">
                <div class="container-fluid">
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
                          <li>
                              <a href="charts.html#pablo" class="dropdown-toggle" data-toggle="dropdown">
                                  <i class="material-icons">person</i> User
                                  <p class="hidden-lg hidden-md">Profile</p>
                              </a>
                          </li>
                          <li class="separator hidden-lg hidden-md"></li>
                      </ul>
                    </div>
                </div>
            </nav>

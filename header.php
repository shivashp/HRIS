<script>
  var TOKEN = localStorage.getItem('token');
  if(TOKEN === undefined || TOKEN == '' || TOKEN == null){
    window.location.href = "index.html";
  }
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
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <div class="wrapper">
        <div class="sidebar" data-active-color="rose" data-background-color="black" data-image="img/sidebar-1.jpg">
          <div class="logo"> <a href="javascript:;" class="simple-text">
              HRIS
          </div>
          <div class="logo logo-mini"> <a href="#" class="simple-text"> HRIS </a> </div>
          <div class="sidebar-wrapper">
              <ul class="nav" id="main">
                  <li class="link dashboard">
                      <a href="dashboard.php" class="menu" data-name = 'branch'> <i class="material-icons">dashboard</i>
                          <p>Dashboard</p>
                      </a>
                  </li>

                  <li class="panel">
                      <a data-toggle="collapse" data-parent = "#main" href="#companyManagement">
                          <i class="material-icons">account_balance</i>
                          <p>Company Management
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse" id="companyManagement">
                          <ul class="nav">
                            <li>
                                <a href="company.php">
                                    NDOH Setup
                                </a>
                            </li>
                            <li>
                                <a href="district.php">
                                    District Setup
                                </a>
                            </li>
                            <li>
                                <a href="province.php">
                                    Province Setup
                                </a>
                            </li>
                            <li>
                                <a href="region.php">
                                    Region Setup
                                </a>
                            </li>
                            <li>
                                <a href="llg.php">
                                    LLG Setup
                                </a>
                            </li>
                            <li>
                                <a href="facility.php">
                                    Facility Setup
                                </a>
                            </li>
                          </ul>
                      </div><!-- company - management -->
                  </li><!-- company dropdown -->

                  <li class="panel">
                      <a data-toggle="collapse" data-parent = "#main" href="#employeeconfiguration">
                          <i class="material-icons">group</i>
                          <p>Employee Configuration
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse" id="employeeconfiguration">
                          <ul class="nav">
                            <li>
                                <a href="employee-category-rank.php">
                                    Rank Setup
                                </a>
                            </li>
                            <li>
                                <a href="employee-categories.php" >
                                    Category Setup
                                </a>
                            </li>
                            <li>
                                <a href="employment-type.php">
                                    Type Setup
                                </a>
                            </li>
                          </ul>
                      </div><!-- employee configuration -->
                  </li><!-- employee dropdown -->

                  <li class="panel">
                      <a data-toggle="collapse" data-parent = "#main" href="#divisionmgmt">
                          <i class="material-icons">domain</i>
                          <p>Division Management
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse" id="divisionmgmt">
                          <ul class="nav">
                            <li>
                                <a href="branch.php">
                                    Division Setup
                                </a>
                            </li>
                          </ul>
                      </div><!-- Division Management -->
                  </li><!-- Division dropdown -->

                  <li class="panel">
                      <a data-toggle="collapse" data-parent = "#main" href="#agencymgmt">
                          <i class="material-icons">location_city</i>
                          <p>Agency Management
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse" id="agencymgmt">
                          <ul class="nav">
                            <li>
                                <a href="agency.php">
                                    Agency Setup
                                </a>
                            </li>
                          </ul>
                      </div><!-- Agency Management -->
                  </li><!-- Agency dropdown -->

                  <li class="panel">
                      <a data-toggle="collapse" data-parent = "#main" href="#employee">
                          <i class="material-icons">group</i>
                          <p>Employee Management
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse" id="employee">
                          <ul class="nav">
                            <li class="emp-read">
                                <a href="employee.php">
                                    Employees
                                </a>
                            </li>
                            <li class="emp-execute">
                                <a href="create-employee.php">
                                    Add Employee
                                </a>
                            </li>

                          </ul>
                      </div><!-- Agency Employee Management -->
                  </li><!-- Agency Employee dropdown -->

                  <li class="panel">
                      <a data-toggle="collapse" data-parent = "#main" href="#usermanagement">
                          <i class="material-icons">account_circle</i>
                          <p>User Management
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse" id="usermanagement">
                          <ul class="nav">
                            <li class="user-read">
                                <a href="users.php" class="menu">
                                    Users
                                </a>
                            </li>
                            <li class="user-write">
                                <a href="add-user.php" class="menu">
                                    Add User
                                </a>
                            </li>
                            <li class = "user-read">
                                <a href="role.php" class="menu">
                                    Roles
                                </a>
                            </li>
                            <li class="user-write">
                                <a href="add-role.php" class="menu">
                                    Add Role
                                </a>
                            </li>
                          </ul>
                      </div><!-- User Management -->
                  </li><!-- User dropdown -->
              </ul>
          </div>
        </div>
        <div class="main-panel">
            <nav class="navbar navbar-blue navbar-absolute">
                <div class="container-fluid">
                  <div class="navbar-minimize">
                    <div class="main-header-section">
                        National Department of Health</a>
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
                                <i class="material-icons">account_circle</i> Administrator <b class="caret"></b>
                              </a>
                              <ul class="dropdown-menu">
                                <li>
                                  <a href="#">Settings</a>
                                </li>
                                <li>
                                  <a class="logout">Logout</a>
                                </li>
                              </ul>
                          </li>
                          <li class="separator hidden-lg hidden-md"></li>
                      </ul>
                    </div>
                </div>
            </nav>

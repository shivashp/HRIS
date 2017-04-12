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
          <div class="logo"> <a href="javascript:;" class="simple-text"> HRIS</a> </div>
          <div class="logo logo-mini"> <a href="#" class="simple-text"> HRIS </a> </div>
          <div class="sidebar-wrapper">
              <div class="user">
                  <div class="photo">
                      <img src="https://s-media-cache-ak0.pinimg.com/564x/97/f1/1e/97f11ea8bf2b7ec3545420e537af0e88.jpg" />
                  </div>
                  <div class="info">
                      <a data-toggle="collapse" href="calendar.html#collapseExample" class="collapsed">
                          Tania Andrew
                          <b class="caret"></b>
                      </a>
                      <div class="collapse" id="collapseExample">
                          <ul class="nav">
                              <li>
                                  <a href="#">My Profile</a>
                              </li>
                              <li>
                                  <a href="#">Edit Profile</a>
                              </li>
                              <li>
                                  <a href="#">Settings</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <ul class="nav">
                  <li class="link dashboard">
                      <a href="dashboard.php" class="menu" data-name = 'branch'> <i class="material-icons">dashboard</i>
                          <p>Dashboard</p>
                      </a>
                  </li>
                  <li class="link branch">
                      <a href="branch.php" class="menu" data-name = 'branch'> <i class="material-icons">book</i>
                          <p>Branches</p>
                      </a>
                  </li>
                  <li class="link agency">
                      <a href="agency.php" class="menu" data-name = 'branch'> <i class="material-icons">dashboard</i>
                          <p>Agencies</p>
                      </a>
                  </li>
                  <li class="link employee">
                      <a data-toggle="collapse" href="#employee">
                          <i class="material-icons">people</i>
                          <p>Employees
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse" id="employee">
                          <ul class="nav">
                              <li>
                                  <a href="single-employee.php">Single Employee</a>
                              </li>
                              <li>
                                  <a href="employee-category-rank.php">Employee Category Rank</a>
                              </li>
                              <li>
                                  <a href="employee-categories.php">Employee Categories</a>
                              </li>
                              <li>
                                  <a href="employment-type.php">Employment Type</a>
                              </li>
                              <li>
                                  <a href="employee.php">Employees</a>
                              </li>
                          </ul>
                      </div>
                  </li>
                  <li class="link settings">
                      <a data-toggle="collapse" href="#setup">
                          <i class="material-icons">settings</i>
                          <p>Settings
                              <b class="caret"></b>
                          </p>
                      </a>
                      <div class="collapse" id="setup">
                          <ul class="nav">
                              <li>
                                  <a href="company.php">Company Setup</a>
                              </li>
                              <li>
                                  <a href="district.php">District Setup</a>
                              </li>
                              <li>
                                  <a href="province.php">Province Setup</a>
                              </li>
                              <li>
                                  <a href="region.php">Region Setup</a>
                              </li>
                              <li>
                                  <a href="llg.php">LLG Setup</a>
                              </li>
                              <li>
                                  <a href="facility.php">Facilities Setup</a>
                              </li>
                          </ul>
                      </div>
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
                                  <i class="material-icons">dashboard</i>
                                  <p class="hidden-lg hidden-md">Dashboard</p>
                              </a>
                          </li>
                          <li class="dropdown">
                              <a href="charts.html#" class="dropdown-toggle" data-toggle="dropdown">
                                  <i class="material-icons">notifications</i>
                                  <span class="notification">5</span>
                                  <p class="hidden-lg hidden-md">
                                      Notifications
                                      <b class="caret"></b>
                                  </p>
                              </a>
                              <ul class="dropdown-menu">
                                  <li>
                                      <a href="charts.html#">Mike John responded to your email</a>
                                  </li>
                                  <li>
                                      <a href="charts.html#">You have 5 new tasks</a>
                                  </li>
                                  <li>
                                      <a href="charts.html#">You're now friend with Andrew</a>
                                  </li>
                                  <li>
                                      <a href="charts.html#">Another Notification</a>
                                  </li>
                                  <li>
                                      <a href="charts.html#">Another One</a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a href="charts.html#pablo" class="dropdown-toggle" data-toggle="dropdown">
                                  <i class="material-icons">person</i>
                                  <p class="hidden-lg hidden-md">Profile</p>
                              </a>
                          </li>
                          <li class="separator hidden-lg hidden-md"></li>
                      </ul>
                      <form class="navbar-form navbar-right" role="search">
                          <div class="form-group form-search is-empty">
                              <input type="text" class="form-control" placeholder="Search">
                              <span class="material-input"></span>
                          </div>
                          <button type="submit" class="btn btn-white btn-round btn-just-icon">
                              <i class="material-icons">search</i>
                              <div class="ripple-container"></div>
                          </button>
                      </form>
                    </div>
                </div>
            </nav>

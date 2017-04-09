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
                      <img src="http://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/avatar.jpg" />
                  </div>
                  <div class="info">
                      <a data-toggle="collapse" href="calendar.html#collapseExample" class="collapsed">
                          Tania Andrew
                          <b class="caret"></b>
                      </a>
                      <div class="collapse" id="collapseExample">
                          <ul class="nav">
                              <li>
                                  <a href="calendar.html#">My Profile</a>
                              </li>
                              <li>
                                  <a href="calendar.html#">Edit Profile</a>
                              </li>
                              <li>
                                  <a href="calendar.html#">Settings</a>
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
                  <li class="link company">
                      <a href="company.php" class="menu" data-name = 'denomination'> <i class="material-icons">note</i>
                          <p>Company Setup</p>
                      </a>
                  </li>
                  <li class="link users">
                      <a href="#" class="menu" data-name = 'users' > <i class="material-icons">people</i>
                          <p>User Setup</p>
                      </a>
                  </li>
                  <li class="link branch">
                      <a href="agencies.php" class="menu" data-name = 'users' > <i class="material-icons">people</i>
                          <p>Agencies</p>
                      </a>
                  </li>
                  <li class="link settings">
                      <a href="#"> <i class="material-icons">settings</i>
                          <p>Settings</p>
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

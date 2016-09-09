<script>
<header class="navbar navbar-inverse navbar-fixed-top heading" role="banner">
<script>
    //        var d = new Date();
    //        d.setYear(d.getFullYear()+2);
    //        type: "premium";
    //        var expirationDate = new Date();
    //        expirationDate.setYear(d.getFullYear());
    //        console.log(expirationDate.getFullYear());
</script>
<div class="container">
<div class="navbar-header">
<button type="button" class="navbar-toggle togglebutton" data-toggle="collapse" data-target=".navbar-collapse">
<span class="sr-only">Toggle</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>


</button>


<a class='shym-logo'> <img src='images/homePage/logo-shym.png' alt='Shym'/></a>
<ul class='shym-social-icons'>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
<li><a href="#"><i class="fa fa-youtube"></i></a></li>
</ul>
</div>


<div class="collapse navbar-collapse menubar" ng-controller="AuthCtrl">
<ul class="nav navbar-nav navbar-right">
<li class="dropdown"><a href="homePage" class='dropdown-toggle' data-toggle='dropdown'><i class="fa fa-fw fa-home" ng-click="homePage"></i>خانه</a>
<ul class="dropdown-menu">
<li>
<a href="#">Bootstrap Templates</a></li>
<li><a href="#">Single page website </a></li>
<li><a href="#">Landing Page</a>
<li><a href="#">Admin Templates</a></li>
<li><a href="#">Login Page </a></li>
</ul>

</li>
<li><a class="page-scroll"  href="#contactInfo"><i class="fa fa-fw fa-support"></i>تماس با ما</a></li>
<!--<li class='dropdown'><a href="#contact-form" class='dropdown-toggle' data-toggle='dropdown'><i class="fa fa-fw fa-support"></i>تماس با ما</a>-->
    <!--<ul class='dropdown-menu'>-->
<!--<li><a href="#">Megamenu</a></li>-->
<!--<li><a href="#">Menu Bar</a>-->
<!--<li><a href="#">Accordion</a></li>-->
<!--<li><a href="#">Tabs</a>-->

<!--</li>-->
<!--</ul>-->

<li><a href="shop"><i class="fa fa-shopping-cart"  ng-click="shop"></i>فروشگاه</a></li>
<li><a href="gallery"><i class="fa fa-fw fa-th" ng-click="gallery"></i>گالری تصاویر</a></li>
<li><a href="#"><i class="fa fa-fw fa-bar-chart-o"></i>محصولات اخیر</a></li>
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-fw fa-users"></i>پروفایل من<i class="icon-angle-down"></i></a>
<ul class="dropdown-menu">
<li><a href="#">Career</a></li>
<li><a href="#">Blog Single</a></li>
<li><a href="#">Pricing</a></li>
<li><a href="#">404</a></li>
<li><a href="#">Registration</a></li>
<li class="divider"></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms of Use</a></li>
</ul>
</li>
<li><a href="login" ng-show="loggedIn()"><i class="fa fa-sign-out" ng-click="logout()" ></i>خروج</a></li>
<script>
console.log(loggedIn());
</script>
<li><a href="/login" ng-show="!loggedIn()"><i class="fa fa-sign-in"  ></i>ورود</a></li>

</ul>
</div>

</div>
</header><!---->

</script>
$(document).foundation();


angular.module("Schwiftology", ["ngRoute", "ngResource", "MyControllers", "MyServices"]);
angular.module("ngRoute", []);
angular.module("ngResource", []);
angular.module("MyControllers", []);
angular.module("MyServices", []);

class HomeController {
  constructor() {
      this.message = "Schwiftology"
    }
  }
}

 angular.module("MyControllers").controller("homeController", HomeController);

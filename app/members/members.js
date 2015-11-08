angular.module('gdgXBoomerang')
    .controller('MembersController', function (Config, NavService, $firebaseArray) {
        var vm = this;
        vm.loading = false;
        NavService.setNavTab(6);
        var ref = new Firebase('https://fiery-inferno-9596.firebaseio.com/gdg/' + Config.name + '/apps');

        vm.apps = $firebaseArray(ref);

        vm.submitApp = function () {
            vm.apps.$add(vm.newApp);
            // TODO clear the form
        };

        vm.removeApp = function (app) {
            vm.apps.$remove(app);
        };
    });

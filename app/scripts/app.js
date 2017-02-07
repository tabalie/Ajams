(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            //to display clean URLs to user without hashbang
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        //to allow ui-view to load template associated with landing, album, and collection states
        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: '/templates/landing.html'
            })

            .state('album', {
                url: '/album',
                templateUrl: '/templates/album.html'
            })

            .state('collection', {
                url: '/',
                templateUrl: '/templates/collection.html'
            });
    }

    angular
    .module('blocJams', ['ui.router'])
    .config(config);
})();

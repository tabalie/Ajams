(function() {
    function timecode() {

        return function(seconds) {
            var seconds = seconds;

            if (seconds == "NaN") {
                return "--:--"
            } else {
                var output = buzz.toTimer(seconds);
            }

            return output;
        }

    }

    angular
        .module('blocJams')
        .filter('timecode', timecode);
})();

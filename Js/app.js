define([
    'backbone',
    'router',
    'jquery',
    'templates',
    'bootstrap'
], function(Backbone, Router, $, Templates, bootstrap) {
    var initialize = function() {
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});

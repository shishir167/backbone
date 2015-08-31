define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'page/:id': 'showPage',
            'users': 'showUsers',

            // Default
            '*actions': 'defaultAction'
        },

        showUsers: function() {
            console.log('In users');
        },

        showPage: function(id) {
            console.log('In page ' + id);
        },

        defaultAction: function(actions){
          console.log(actions);
        }

        //To-do: 404 error
    });

    var initialize = function() {
        var app_router = new AppRouter;

        // app_router.on("route:showUsers", function(page) {
        //     console.log('In users');
        // });

        Backbone.history.start();

        // app_router.navigate('page/22', {
        //     trigger: true
        // });

        // app_router.navigate('users', {
        //     trigger: true
        // });

    };
    return {
        initialize: initialize
    };
});

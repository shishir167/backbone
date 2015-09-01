define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function($, _, Backbone, Templates, Bootstrap) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'mobile': 'showMobile',
            'desktop': 'showDesktop',
            'step1': 'showStep1',
            'step2': 'showStep2',
            'step4': 'showStep3',

            // Default
            '*actions': 'defaultAction'
        },

        showMobile: function() {
            $("#content").load("Templates/mobileMain.html", function() {
                //toggle menu
                $(document).ready(function() {
                    $('[data-toggle="offcanvas"]').click(function() {
                        console.log("Toggle");
                        $('.row-offcanvas').toggleClass('active')
                    });
                });
            });

        },

        showDesktop: function() {
            console.log('In Desktop');
            $('#templateContainer').empty().append('<h1>Welcome Desktop User</h1>');
        },

        showStep1: function() {
            require(['views/applicantInformationView'], function(Applicant) {
                Applicant.initialize($('#mobileContent'));
            });
        },


        defaultAction: function(actions) {
            $('#templateContainer').html('<h1>Error 404</h1>');
        }

    });

    var initialize = function() {
        var app_router = new AppRouter;

        // app_router.on("route:showUsers", function(page) {
        //     console.log('In users');
        // });

        Backbone.history.start();

        app_router.navigate('desktop', {
            trigger: true
        });

        // app_router.navigate('users', {
        //     trigger: true
        // });

    };
    return {
        initialize: initialize
    };
});

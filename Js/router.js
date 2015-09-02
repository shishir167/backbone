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
            'step3': 'showStep3',
            'complete': 'showComplete',

            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function() {
        var app_router = new AppRouter();

        app_router.on("route:showMobile", function() {
            app_router.navigate('step1', {
                trigger: true
            });
            $("#content").load("Templates/mobileMain.html", function() {
                //toggle menu
                $(document).ready(function() {
                    $('[data-toggle="offcanvas"]').click(function() {
                        console.log("Toggle");
                        $('.row-offcanvas').toggleClass('active');
                    });
                });
            });
        });

        app_router.on("route:showStep1", function() {
            require(['views/applicantInformationView'], function(Applicant) {
                $('#viewTemplate').empty();
                Applicant.initialize($('#viewTemplate'));
            });
        });

        app_router.on("route:showStep2", function() {
            require(['views/contactInfoView'], function(ContactInfo) {
                $('#viewTemplate').empty();
                ContactInfo.initialize($('#viewTemplate'));
            });
        });

        app_router.on("route:defaultAction", function() {
            $('#content').empty().append('<h1>Error 404</h1>');
        });

        app_router.on("route:showDesktop", function() {
            $("#content").load("Templates/desktopMain.html", function() {
                require(['views/applicantInformationView', 'views/contactInfoView'], function(Applicant, ContactInfo) {
                Applicant.initialize($('#userInformation'));
                ContactInfo.initialize($('#contactInformation'));
            });
            });
        });

        Backbone.history.start();

        app_router.navigate('mobile', {
            trigger: true
        });

    };
    return {
        initialize: initialize
    };
});

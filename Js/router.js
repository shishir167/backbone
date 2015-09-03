/* global require, define */
define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'mobileDetection'
], function($, _, Backbone, Templates, MobileDetection) {
    'use strict';

    var _mobileDetection = new MobileDetection();

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'step1': 'showStep1',
            'step2': 'showStep2',
            'step3': 'showStep3',
            'complete': 'showComplete',
            'exams': 'showExams',
            'home': 'showHome',
            'mobilehome': 'showMobileHome',

            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function() {
        var app_router = new AppRouter();

        app_router.on("route:showHome", function() {
            $('#firstTemplate').empty().append('<h1>Hello Desktop User</h1>');
            $('#secondTemplate').empty();
            $('#thirdTemplate').empty();
        });

        app_router.on("route:showMobileHome", function() {
            console.log("showMobileHome");
            $('#firstTemplate').empty().append('<h1>Hello Mobile User</h1>');
        });

        app_router.on("route:showStep1", function() {
            require(['views/applicantInformationView'], function(Applicant) {
                $('#firstTemplate').empty();
                Applicant.initialize($('#firstTemplate'));
            });
        });

        app_router.on("route:showStep2", function() {
            require(['views/contactInfoView'], function(ContactInfo) {
                $('#firstTemplate').empty();
                ContactInfo.initialize($('#firstTemplate'));
            });
        });

        app_router.on("route:defaultAction", function() {
            $('#firstTemplate').empty().append('<h1>Error 404</h1>');
        });

        app_router.on("route:showExams", function() {
            require(['views/applicantInformationView', 'views/contactInfoView'], function(Applicant, ContactInfo) {
                Applicant.initialize($('#firstTemplate'));
                ContactInfo.initialize($('#secondTemplate'));
            });
        });

        Backbone.history.start();

        // Determine browser device type.
        var isMobileWebBrowser = _mobileDetection.IsMobileWebBrowser();

        if (isMobileWebBrowser === true) {
            $("#content").load("Templates/mobileMain.html", function() {
                //toggle
                $('[data-toggle="showLeftPush"]').click(function() {
                    $('body').toggleClass('cbp-spmenu-push-toleft');
                    $('#cbp-spmenu-s2').toggleClass('cbp-spmenu-open');
                });

                app_router.navigate('mobilehome', {
                    trigger: true
                });
            });
        } else {
            $("#content").load("Templates/desktopMain.html", function() {
                $('body').toggleClass('cbp-spmenu-push-toright');
                app_router.navigate('home', {
                    trigger: true
                });
            });


        }

    };
    return {
        initialize: initialize
    };
});

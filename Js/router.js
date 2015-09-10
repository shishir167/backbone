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
            console.log("got home");
            $('#firstTemplate').empty().append('<h1>Hello Desktop User</h1>');
            $('#secondTemplate').empty();
            $('#thirdTemplate').empty();
        });

        app_router.on("route:showMobileHome", function() {
            console.log("showMobileHome");
            $('#firstTemplate').empty().append('<h1>Hello Mobile User</h1>');
        });

        app_router.on("route:showStep1", function() {
            require(['views/step1View'], function(Step2View) {
                $('#firstTemplate').empty();
                Step2View.initialize($('#firstTemplate'));
            });
        });

        app_router.on("route:showStep2", function() {
            require(['views/step2View'], function(ContactInfo) {
                $('#firstTemplate').empty();
                ContactInfo.initialize($('#firstTemplate'));
            });
        });

        app_router.on("route:showStep3", function() {
            require(['views/step3View'], function(Step3View) {
                $('#firstTemplate').empty();
                Step3View.initialize($('#firstTemplate'));
            });
        });

        app_router.on("route:defaultAction", function() {
            $('#firstTemplate').empty().append('<h1>Error 404</h1>');
        });

        app_router.on("route:showExams", function() {
            require(['views/step1View', 'views/step2View', 'views/step3View'], function(Step1View, Step2View, Step3View) {
                Step1View.initialize($('#secondTemplate'));
                Step2View.initialize($('#firstTemplate'));
                Step3View.initialize($('#thirdTemplate'));

            });
        });

        Backbone.history.start();

        // Determine browser device type.
        var isMobileWebBrowser = _mobileDetection.IsMobileWebBrowser();
        console.log(_mobileDetection.IsNativeApp());

        if (isMobileWebBrowser === true) {
            $("#content").load("Templates/mobileMain.html", function() {
                //code to toggle navbar in mobile
                $('[data-toggle="showLeftPush"]').click(function() {
                    $('body').toggleClass('cbp-spmenu-push-toleft');
                    $('#cbp-spmenu-s2').toggleClass('cbp-spmenu-open');
                });

                $('[data-toggle="showRightPush"]').click(function() {
                    $('body').toggleClass('cbp-spmenu-push-toright');
                    $('#cbp-spmenu-s1').toggleClass('cbp-spmenu-open');
                });


                $('#firstTemplate').empty().append('<h1>Hello Mobile User</h1>');

            });
        } else {
            $("#content").load("Templates/desktopMain.html", function() {
                $('#content').attr('style', 'padding-left: 250px !important'); //Moving body for the static sidebar in desktop
                $('#firstTemplate').empty().append('<h1>Hello Desktop User</h1>');
            });

        }

    };
    return {
        initialize: initialize
    };
});

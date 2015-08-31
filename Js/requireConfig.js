require.config({
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'templates': {
            deps: ['handlebars'],
            exports: 'Templetes'
        },
        'underscore': {
            exports: '_'
        }
    },

    paths: {
        "backbone": "../bower_components/backbone/backbone-min",
        "underscore": "../bower_components/underscore/underscore-min",
        "jquery": "../bower_components/jquery/dist/jquery.min",
        "text": "../bower_components/requirejs-text/text",
        "examTemplate": "../Templates/Exam.html",
        "handlebars.runtime": "../bower_components/handlebars/handlebars.runtime.min", //for manual template precompilataion
        "handlebars": "../bower_components/handlebars/handlebars.runtime.min", //for grunt precompilation plugin
        "templates": "../Templates/precompiled.handlebars"
    }
    

});

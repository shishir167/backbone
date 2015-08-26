require.config({
    paths: {
        "backbone": "../bower_components/backbone/backbone-min",
        "underscore": "../bower_components/underscore/underscore-min",
        "jquery": "../bower_components/jquery/dist/jquery.min"
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(["requireConfig"], function() {
    'use strict';
    //Global require
    require(['app'], function(App) {
        App.initialize();

        // $(document).on("pagebeforeshow", function() {
        //     pageID = $('pageId');

        //     require(["./Js/PageScripts" + pageID + ".js"], function() {
        //         require("./Scripts/myECFMG." + pageID + ".js");
        //     });

        // });
    });
});

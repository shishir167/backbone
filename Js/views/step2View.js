define([
    'jquery',
    'backbone',
    'templates',
    'ecfmgHandlebarsHelpers'
], function($, Backbone, Templates, EcfmgHandlebarsHelpers) {

    var information = {
        "ReceiveDate": "2006-08-06T00:00:00",
        "AcceptedDate": "2006-08-07T00:00:00",
        "EligibilityStart": "2006-10-01T00:00:00",
        "EligibilityEnd": "2007-03-31T00:00:00",
        "PermitIssuedDate": "2006-12-10T00:00:00",
        "ScoreExamDate": "2006-12-22T00:00:00",
        "ScoreReportDate": "2007-01-17T00:00:00",
        "SRAvailableUntil": null,
        "NoShowMessage": "",
        "ScoreReportURL": null,
        "TestingRegion": "United States and Canada",
        "ApplicationStatus": "Accepted",
        "ExamHistory": [
            "2006-12-22T00:00:00"
        ]
    };

    var TemplateView = Backbone.View.extend({
        render: function(data) {
            var template = Templates["Templates/templates/exams_step2.handlebars"];
            var html = template(data);
            this.$el.html(html);
            return this;
        }
    });

    var initializeAndRender = function(Container) {
        var templateview = new TemplateView();
        templateview.$el = Container;
        templateview.render(information);

    };
    return {
        initialize: initializeAndRender
    };

});

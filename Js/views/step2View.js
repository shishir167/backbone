define([
    'jquery',
    'backbone',
    'templates'
], function($, Backbone, Templates) {

    var information = {
        "ReceiveDate": "2006-04-28T00:00:00",
        "AcceptedDate": "2006-05-18T00:00:00",
        "EligibilityStart": "2006-06-01T00:00:00",
        "EligibilityEnd": "2006-08-31T00:00:00",
        "PermitIssuedDate": "2006-08-08T00:00:00",
        "ScoreExamDate": "2006-08-23T00:00:00",
        "ScoreReportDate": "2006-09-13T00:00:00",
        "SRAvailableUntil": null,
        "NoShowMessage": "",
        "ScoreReportURL": null,
        "TestingRegion": "United States and Canada",
        "ApplicationStatus": "Accepted",
        "ExamHistory": [
            "2006-08-23T00:00:00"
        ]
    };

    var TemplateView = Backbone.View.extend({
        render: function() {
            var template = Templates["Templates/templates/exams_step1.handlebars"];
            var html = template(information);
            this.$el.html(html);
            return this;
        }
    });

    var render = function(Container) {
        var templateview = new TemplateView();
        templateview.$el = Container;
        templateview.render();

    };
    return {
        initialize: render
    };

});

define([
    'jquery',
    'backbone',
    'templates'
], function($, Backbone, Templates) {

    var information = {
        "ReceiveDate": "2007-02-02T00:00:00",
        "AcceptedDate": "2007-02-05T00:00:00",
        "EligibilityStart": "2007-02-11T00:00:00",
        "EligibilityEnd": "2008-02-11T00:00:00",
        "PermitIssuedDate": "2007-02-05T00:00:00",
        "ScoreExamDate": "2007-03-06T00:00:00",
        "ScoreReportDate": "2007-04-25T00:00:00",
        "SRAvailableUntil": null,
        "NoShowMessage": "",
        "ScoreReportURL": null,
        "TestingRegion": "",
        "ApplicationStatus": "Accepted",
        "ExamHistory": [
            "2007-03-06T00:00:00",
            "2006-12-12T00:00:00"
        ]
    };

    var TemplateView = Backbone.View.extend({
        render: function() {
            var template = Templates["Templates/templates/exams_step3.handlebars"];
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

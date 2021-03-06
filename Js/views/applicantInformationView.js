define([
    'jquery',
    'backbone',
    'templates'
], function($, Backbone, Templates) {

    var information = {
        "Biographics": {
            "UsmleID": "04230439",
            "LastName": "Quinones",
            "RestOfName": "Lucas",
            "GenSuffix": "",
            "Gender": "Male",
            "SSN": "738617625",
            "BirthDay": "23",
            "BirthMonth": "3",
            "BirthYear": "1976",
            "DateOfBirth": "1976-3-23T00:00:00",
            "CredsStatusCode": "C",
            "GraduateStatus": "Y"
        },
        "Address": {
            "AddressID": 654888,
            "AddressReceiptDate": "2003-06-03T00:00:00",
            "ValidFromDate": null,
            "SentToFlag": "",
            "Address1": "19673 Sussex",
            "Address2": "",
            "Address3": "",
            "Address4": "",
            "City": "Livonia",
            "StateCode": "MI",
            "StateName": "MICHIGAN",
            "Zip_PostalCode": "48152",
            "CountryCode": "099",
            "CountryName": "USA"
        },
        "ContactInfo": {
            "Phone": "313-282-4676",
            "PhoneExtentsion": "",
            "Fax": null,
            "Email": "bniraula@ecfmg.org"
        },
        "DegreeSchool": {
            "ApplicantMedSchoolID": 411965,
            "MedSchoolCode": "748090",
            "MedSchoolName": "De La Salle Health Sciences Institute College of Medicine",
            "CountryCode": "748",
            "CountryName": "PHILIPPINES",
            "AttendedFrom": null,
            "AttendedTo": null,
            "NumberOfYearsAttended": "",
            "GraduationMonth": "",
            "GraduationYear": "",
            "DegreeMonth": "",
            "DegreeYear": "1986",
            "DegreeName": "Doctor of Medicine",
            "EMSWPPrograms": "Credentials Verification",
            "CreditsTransferred": "No"
        },
        "OtherSchools": null
    };

    var TemplateView = Backbone.View.extend({
        render: function() {
            this.$el.html(Templates["Templates/templates/applicantInfo.handlebars"](this.model));
            return this;
        }
    });

    var render = function(Container) {
        var templateview = new TemplateView({model: information});
        templateview.$el = Container;
        templateview.render();

    };
    return {
        initialize: render
    };

});

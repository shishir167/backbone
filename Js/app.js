define([
    'backbone',
    'router',
    'jquery',
    'templates',
], function(Backbone, Router, $, Templates) {
    var initialize = function() {
        // Pass in our Router module and call it's initialize function
        Router.initialize();

        var information = {
            "Biographics": {
                "UsmleID": "04230439",
                "LastName": "Quinones",
                "RestOfName": "Luchi Sanchez",
                "GenSuffix": "",
                "Gender": "Female",
                "SSN": "376196336",
                "BirthDay": "20",
                "BirthMonth": "12",
                "BirthYear": "1961",
                "DateOfBirth": "1961-12-20T00:00:00",
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
        }

        console.log(Templates);

        var TemplateView = Backbone.View.extend({
            render: function(){
                var source = $('templateContainer').html;
                var template = Templates["Templates/templates/applicantInfo.handlebars"];
                var html = template(information);
                this.$el.html(html);
            }
        });

        var templateview = new TemplateView();

        templateview.$el = $('#templateContainer');
        templateview.render();


    };

    return {
        initialize: initialize
    };
});

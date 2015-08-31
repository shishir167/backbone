require([
    'backbone',
    'jquery',
    'templates',
], function(Backbone, $, Templates) {

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



        // var RecentNews = Backbone.Model.extend({
        //  url: 'http://www.ecfmg.org/news/?json=get_recent_posts&page=1',
        //  sync: function(method, collection, options) {
        //         // By setting the dataType to "jsonp", jQuery creates a function
        //         // and adds it as a callback parameter to the request, e.g.:
        //         // [url]&callback=jQuery19104472605645155031_1373700330157&q=bananarama
        //         // If you want another name for the callback, also specify the
        //         // jsonpCallback option.
        //         // After this function is called (by the JSONP response), the script tag
        //         // is removed and the parse method is called, just as it would be
        //         // when AJAX was used.
        //         options.dataType = "jsonp";
        //         return Backbone.sync(method, collection, options);
        //     }
        // });
        // // var News = Backbone.Collection.extend({
        // //     model: RecentNews,
        // //     url: 'http://www.ecfmg.org/news/?json=get_recent_posts&page=1',
        // //     sync: function(method, collection, options) {
        // //         // By setting the dataType to "jsonp", jQuery creates a function
        // //         // and adds it as a callback parameter to the request, e.g.:
        // //         // [url]&callback=jQuery19104472605645155031_1373700330157&q=bananarama
        // //         // If you want another name for the callback, also specify the
        // //         // jsonpCallback option.
        // //         // After this function is called (by the JSONP response), the script tag
        // //         // is removed and the parse method is called, just as it would be
        // //         // when AJAX was used.
        // //         options.dataType = "jsonp";
        // //         return Backbone.sync(method, collection, options);
        // //     }
        // // });
        // // var news = new News();
        // var recentNews = new RecentNews();
        // // news.add(recentNews);
        // recentNews.fetch();
        // console.log(recentNews);
        // console.log(recentNews.get("count"));




});

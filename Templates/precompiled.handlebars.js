define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["Templates/templates/applicantInfo.handlebars"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<h3>User Information</h3>\r\n\r\n<table class=\"applicantInfo\">\r\n    <tbody>\r\n        <tr>\r\n            <th class=\"applicantInfo\">Last Name(s):</th>\r\n            <td>\r\n                <span id=\"lastName\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.Biographics : depth0)) != null ? stack1.LastName : stack1), depth0)) != null ? stack1 : "")
    + "</span>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <th>Rest of Name:</th>\r\n            <td>\r\n                <span id=\"restOfName\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.Biographics : depth0)) != null ? stack1.RestOfName : stack1), depth0)) != null ? stack1 : "")
    + "</span>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <th>Generational Suffix:</th>\r\n            <td>\r\n                <span id=\"suffix\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Biographics : depth0)) != null ? stack1.GenSuffix : stack1), depth0))
    + "</span>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <th>Date of Birth:</th>\r\n            <td>\r\n                <span id=\"dob\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Biographics : depth0)) != null ? stack1.DateOfBirth : stack1), depth0))
    + "</span>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <th>Gender:</th>\r\n            <td>\r\n                <span id=\"gender\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Biographics : depth0)) != null ? stack1.Gender : stack1), depth0))
    + "</span>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n";
},"useData":true});

this["JST"]["Templates/templates/contactInfo.handlebars"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<h3>Contact Information</h3>\r\n\r\n<table class=\"applicantInfo\">\r\n    <tbody>\r\n        <tr>\r\n            <th>Address of Residence:</th>\r\n\r\n            <td>\r\n                <span id=\"address\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Address : depth0)) != null ? stack1.Address1 : stack1), depth0))
    + "</span>\r\n                <!--<span id=\"address2\"></span>\r\n                                    <span id=\"address3\"></span>\r\n                                    <span id=\"address4\"></span>-->\r\n                <span id=\"city\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Address : depth0)) != null ? stack1.City : stack1), depth0))
    + "</span>\r\n                <span id=\"state\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Address : depth0)) != null ? stack1.State : stack1), depth0))
    + "</span>\r\n                <span id=\"zip\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Address : depth0)) != null ? stack1.Zip : stack1), depth0))
    + "</span>\r\n                <span id=\"country\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Address : depth0)) != null ? stack1.Country : stack1), depth0))
    + "</span>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <th>E-mail Address:</th>\r\n\r\n            <td>\r\n                <span id=\"email\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ContactInfo : depth0)) != null ? stack1.Email : stack1), depth0))
    + "</span>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <th>Telephone:</th>\r\n\r\n            <td>\r\n                <span id=\"phone\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ContactInfo : depth0)) != null ? stack1.Phone : stack1), depth0))
    + "</span>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <th>Fax:</th>\r\n\r\n            <td>\r\n                <span id=\"fax\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ContactInfo : depth0)) != null ? stack1.Fax : stack1), depth0))
    + "</span>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>";
},"useData":true});

this["JST"]["Templates/templates/exams_step1.handlebars"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h3>USMLE Step 1</h3>\r\n\r\n<div id=\"maincontentExamsStep1\">\r\n<div id=\"emptymessage_step1\"></div>\r\n\r\n<h3>Most Recent Application</h3>\r\n<div id=\"examMostRecentApplication1\">\r\n    <table id=\"tbl\" class=\"applicantInfo\">\r\n        <tr>\r\n            <th>Date Received:</th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.ReceiveDate || (depth0 != null ? depth0.ReceiveDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ReceiveDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Processing Status:</th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.ApplicationStatus || (depth0 != null ? depth0.ApplicationStatus : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ApplicationStatus","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Date Accepted:</th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.AcceptedDate || (depth0 != null ? depth0.AcceptedDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"AcceptedDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Eligibility Period:</th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.EligibilityStart || (depth0 != null ? depth0.EligibilityStart : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"EligibilityStart","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.EligibilityEnd || (depth0 != null ? depth0.EligibilityEnd : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"EligibilityEnd","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Testing Region:</th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.TestingRegion || (depth0 != null ? depth0.TestingRegion : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"TestingRegion","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Scheduling Permit Issued:</th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.PermitIssuedDate || (depth0 != null ? depth0.PermitIssuedDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"PermitIssuedDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n    </table>\r\n\r\n    <p>\r\n        To access scheduling permits, visit <a href=\"\" onclick=\r\n        \"var ref=window.open('https://secure2.ecfmg.org/emain.asp?app=iwa','_system','location=yes');return false;\">\r\n        IWA</a> on the ECFMG website. Please note that you must bring your scheduling permit\r\n        to the test center on your exam date.\r\n    </p>\r\n</div>\r\n\r\n<h3>Step 1 Exam History</h3>\r\n<div id=\"examHistoryStep1\">\r\n    <table id=\"tblExam\" class=\"applicantInfo\">\r\n        <tr>\r\n            <th>Date Exam Taken:  </th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.ExamHistory || (depth0 != null ? depth0.ExamHistory : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ExamHistory","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n<h3>Most Recent Score Report</h3>\r\n<div id=\"examScoreReportStep1\">\r\n    <table class=\"applicantInfo\">\r\n        <tbody>\r\n            <tr>\r\n                <th>Exam Date:</th>\r\n                <td>"
    + alias3(((helper = (helper = helpers.ScoreExamDate || (depth0 != null ? depth0.ScoreExamDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ScoreExamDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr></tr>\r\n            <tr>\r\n                <th>Score Report Issued:</th>\r\n                <td>"
    + alias3(((helper = (helper = helpers.ScoreReportDate || (depth0 != null ? depth0.ScoreReportDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ScoreReportDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <p>\r\n        To access score reports, visit <a href=\"\" rel=\"external\" class=\"applicantInfo\" onclick=\"var ref=window.open('https://oasis2.ecfmg.org','_system','location=yes'); return false;\">OASIS</a> on the ECFMG website. Score reports are available in OASIS for approximately 120 days.\r\n    </p>\r\n</div>";
},"useData":true});

this["JST"]["Templates/templates/exams_step2.handlebars"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h3>USMLE Step 2 Clinical Knowledge (CK)</h3>\r\n\r\n<div id=\"emptymessage_step2ck\"></div>\r\n\r\n<h3>Most Recent Application</h3>\r\n<div>\r\n    <table id=\"tbl\" class=\"applicantInfo\">\r\n        <tr>\r\n            <th>Date Received:</th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.ReceiveDate || (depth0 != null ? depth0.ReceiveDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ReceiveDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Processing Status:</th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.ApplicationStatus || (depth0 != null ? depth0.ApplicationStatus : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ApplicationStatus","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Date Accepted:</th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.AcceptedDate || (depth0 != null ? depth0.AcceptedDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"AcceptedDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Eligibility Period:</th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.EligibilityStart || (depth0 != null ? depth0.EligibilityStart : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"EligibilityStart","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.EligibilityEnd || (depth0 != null ? depth0.EligibilityEnd : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"EligibilityEnd","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Testing Region:</th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.TestingRegion || (depth0 != null ? depth0.TestingRegion : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"TestingRegion","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Scheduling Permit Issued:</th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.PermitIssuedDate || (depth0 != null ? depth0.PermitIssuedDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"PermitIssuedDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n    </table>\r\n\r\n    <p>\r\n    To access scheduling permits, visit <a href=\"\" onclick=\"var ref=window.open('https://secure2.ecfmg.org/emain.asp?app=iwa','_system','location=yes');return false;\">IWA</a> on the ECFMG website. Please note that you must bring your scheduling permit to the test center on your exam date.\r\n    </p>\r\n</div>\r\n\r\n<h3>Step 2 CK Exam History</h3>\r\n<div id=\"examHistoryStep2CK\">\r\n    <table id=\"tblExam\" class=\"applicantInfo\">\r\n        <tr>\r\n            <th>Date Exam Taken: </th>\r\n            <td>"
    + alias3(((helper = (helper = helpers.ExamHistory || (depth0 != null ? depth0.ExamHistory : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ExamHistory","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n<h3>Most Recent Score Report</h3>\r\n<div id=\"examScoreReportStep2CK\">\r\n    <table class=\"applicantInfo\">\r\n        <tbody>\r\n            <tr>\r\n                <th>Exam Date:</th>\r\n                <td>"
    + alias3(((helper = (helper = helpers.ScoreExamDate || (depth0 != null ? depth0.ScoreExamDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ScoreExamDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr></tr>\r\n            <tr>\r\n                <th>Score Report Issued:</th>\r\n                <td>"
    + alias3(((helper = (helper = helpers.ScoreReportDate || (depth0 != null ? depth0.ScoreReportDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ScoreReportDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <p>\r\n        To access score reports, visit <a href=\"\" rel=\"external\" class=\"applicantInfo\" onclick=\"var ref=window.open('https://oasis2.ecfmg.org','_system','location=yes'); return false;\">OASIS</a> on the ECFMG website. Score reports are available in OASIS for approximately 120 days.\r\n    </p>\r\n</div>";
},"useData":true});

this["JST"]["Templates/templates/exams_step3.handlebars"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<h3>USMLE Step 2 Clinical Skills (CS)</h3>\r\n<div id=\"maincontentExamsStep2CS\">\r\n    <div id=\"emptymessage_step2cs\"></div>\r\n    <h3>Most Recent Application</h3>\r\n    <div id=\"examMostRecentApplicationCS\">\r\n        <table id=\"tbl\" class=\"applicantInfo\">\r\n            <tr>\r\n                <th>Date Received:</th>\r\n                <td>"
    + alias3(((helper = (helper = helpers.ReceiveDate || (depth0 != null ? depth0.ReceiveDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ReceiveDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <th>Processing Status:</th>\r\n                <td>"
    + alias3(((helper = (helper = helpers.ApplicationStatus || (depth0 != null ? depth0.ApplicationStatus : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ApplicationStatus","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <th>Date Accepted:</th>\r\n                <td>"
    + alias3(((helper = (helper = helpers.AcceptedDate || (depth0 != null ? depth0.AcceptedDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"AcceptedDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <th>Eligibility Period:</th>\r\n                <td>"
    + alias3(((helper = (helper = helpers.EligibilityStart || (depth0 != null ? depth0.EligibilityStart : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"EligibilityStart","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.EligibilityEnd || (depth0 != null ? depth0.EligibilityEnd : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"EligibilityEnd","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <th>Scheduling Permit Issued:</th>\r\n                <td>"
    + alias3(((helper = (helper = helpers.PermitIssuedDate || (depth0 != null ? depth0.PermitIssuedDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"PermitIssuedDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n        </table>\r\n        <p>\r\n            To access scheduling permits, visit <a href=\"\" onclick=\"var ref=window.open('https://secure2.ecfmg.org/emain.asp?app=iwa','_system','location=yes');return false;\">IWA</a> on the ECFMG website. Please note that you must bring your scheduling permit to the test center on your exam date.\r\n        </p>\r\n    </div>\r\n    <h3>Step 2 CS Exam History</h3>\r\n    <div id=\"examHistoryStep2CS\">\r\n        <table id=\"tblExam\" class=\"applicantInfo\">\r\n            <tr>\r\n                <th>Date Exam Taken: </th>\r\n                <td>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.ExamHistory : depth0)) != null ? stack1['0'] : stack1), depth0))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <th>Date Exam Taken: </th>\r\n                <td>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.ExamHistory : depth0)) != null ? stack1['1'] : stack1), depth0))
    + "</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <h3>Most Recent Score Report</h3>\r\n    <div id=\"examScoreReportStep2CS\">\r\n        <table>\r\n            <tbody>\r\n                <tr>\r\n                    <th>Exam Date:</th>\r\n                    <td>"
    + alias3(((helper = (helper = helpers.ScoreExamDate || (depth0 != null ? depth0.ScoreExamDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ScoreExamDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n                </tr>\r\n                <tr></tr>\r\n                <tr>\r\n                    <th>Score Report Issued:</th>\r\n                    <td>"
    + alias3(((helper = (helper = helpers.ScoreReportDate || (depth0 != null ? depth0.ScoreReportDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ScoreReportDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <p>\r\n            To access score reports, visit <a href=\"\" rel=\"external\" class=\"applicantInfo\" onclick=\"var ref=window.open('https://oasis2.ecfmg.org','_system','location=yes'); return false;\">OASIS</a> on the ECFMG website. Score reports are available in OASIS for approximately 120 days.\r\n        </p>\r\n    </div>\r\n</div>";
},"useData":true});

return this["JST"];

});
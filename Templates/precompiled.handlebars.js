define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["Templates/templates/applicantInfo.handlebars"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<table class=\"applicantInfo\">\r\n    <tbody>\r\n        <tr>\r\n            <th class=\"applicantInfo\">Last Name(s):</th>\r\n            <td>\r\n                <span id=\"lastName\">"
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
    return "<h3>Contact Information</h3>\r\n\r\n                    <table class=\"applicantInfo\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <th>Address of Residence:</th>\r\n\r\n                                <td>\r\n                                    <span id=\"address\"></span>\r\n                                    <!--<span id=\"address2\"></span>\r\n                                                        <span id=\"address3\"></span>\r\n                                                        <span id=\"address4\"></span>-->\r\n                                    <span id=\"city\"></span>\r\n                                    <span id=\"state\"></span>\r\n                                    <span id=\"zip\"></span>\r\n                                    <span id=\"country\"></span>\r\n                                </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                                <th>E-mail Address:</th>\r\n\r\n                                <td>\r\n                                    <span id=\"email\"></span>\r\n                                </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                                <th>Telephone:</th>\r\n\r\n                                <td>\r\n                                    <span id=\"phone\"></span>\r\n                                </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                                <th>Fax:</th>\r\n\r\n                                <td>\r\n                                    <span id=\"fax\"></span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>";
},"useData":true});

return this["JST"];

});
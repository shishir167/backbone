/* global define, getDateFromApplicationJSON */
define(['handlebars'], function(Handlebars) {
    'use strict';

    Handlebars.registerHelper('formateDateFromData', function(date) {
        var formattedDate = getDateFromApplicationJSON(date);
        return formattedDate;
    });

    function getDateFromApplicationJSON(data) {
        if (data === null || data === undefined || data === "") {
            return "";
        } else {
            return formatDateForeign(data);
        }
    }

    function formatDateForeign(arg1) {
        if (arg1) {
            if (arg1 === null || arg1.length === 0) return "";
        }

        var month = "";
        var newdate = "";

        if (arg1.indexOf("T") > 0) {
            var temp = arg1.substring(0, arg1.indexOf("T"));
            newdate = new Date(temp.replace(/-/g, "/"));

        } else {
            newdate = new Date(newdate.replace(/-/g, "/"));
        }

        month = parseInt(newdate.getMonth()) + 1;
        var newdate2 = "";

        newdate2 = newdate.getDate() + " " + getMonth(parseInt(month), "short") + " " + newdate.getFullYear();
        return newdate2;
    }

    function getMonth(monthNumber, monthFormat) {
        /*
            monthNumber:  starts with 1
            monthFormat:  'short' or 'long'
        */

        if (monthFormat == "short") {
            switch (monthNumber) {
                case 1:
                    return "Jan";
                case 2:
                    return "Feb";
                case 3:
                    return "Mar";
                case 4:
                    return "Apr";
                case 5:
                    return "May";
                case 6:
                    return "Jun";
                case 7:
                    return "Jul";
                case 8:
                    return "Aug";
                case 9:
                    return "Sep";
                case 10:
                    return "Oct";
                case 11:
                    return "Nov";
                case 12:
                    return "Dec";
            }

        } else {
            switch (monthNumber) {
                case 1:
                    return "January";
                case 2:
                    return "February";
                case 3:
                    return "March";
                case 4:
                    return "April";
                case 5:
                    return "May";
                case 6:
                    return "June";
                case 7:
                    return "July";
                case 8:
                    return "August";
                case 9:
                    return "September";
                case 10:
                    return "October";
                case 11:
                    return "November";
                case 12:
                    return "December";
            }
        }
    }


    // http://stackoverflow.com/questions/11327617/handlebars-custom-if-helper-else-is-undefined
    Handlebars.registerHelper('isNull', function(value, options) {
        var fnTrue = options.fn,
            fnFalse = options.inverse;
        return ((value === null) || (typeof value === 'undefined')) ? fnTrue(this) : fnFalse(this);
    });

    Handlebars.registerHelper('if_eq', function(a, b, opts) {
        if (a == b) // Or === depending on your needs
            return opts.fn(this);
        else
            return opts.inverse(this);
    });
});

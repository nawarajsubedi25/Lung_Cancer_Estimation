$(document).ready(function() {
    calculateRisk();
});

function calculateRisk() {

    SmokingHabit();
    var age = 0;
    var race = 0;
    var education = 0;
    var weight = 0;
    var height = 0;
    var bmi = 0;
    var copd = 0;
    var hxca = 0;
    var fmhca = 0;
    var smoker = 0;
    var cigarettesperday = 0;
    var yearssmoking = 0;
    var yearssincequittingsmoking = 0;

    age = Number(document.getElementById("age").value);
    race = Number(document.getElementById("race").value);
    education = Number(document.getElementById("education").value);

    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value.split(".");
    // BMI Calculator
    height = parseInt(height[0]) + (0.0833333 * parseInt(height[1]));
    bmi = ((weight * 0.453592) / (Math.pow(0.3048 * height, 2))).toFixed(2);
    document.getElementById("bmi").value = bmi;

    if ($('#copd').is(":checked") == true) {
        copd = 0.3553063;
    }
    if ($('#historyOfCancer').is(":checked") == true) {
        hxca = 0.4589971;
    }
    if ($('#familyHistoryOfLungCancer').is(":checked") == true) {
        fmhca = 0.587185;
    }



    smoker = Number(document.getElementById("smokingHabit").value);
    cigarettesperday = Number(document.getElementById("cigarettesPerDay").value);
    yearssmoking = Number(document.getElementById("yearsSmoking").value);
    yearssincequittingsmoking = Number(document.getElementById("yearSinceQuittingSmoking").value);


    var xx = copd + hxca + fmhca;
    //document.getElementById('yearSinceQuittingSmoking').value = xx;

    // Risk calculation
    Log_odds = (0.0778868 * (age - 62)) + race - (0.0812744 * (education - 4)) - (0.0274194 * (bmi - 27)) + copd + hxca + fmhca + smoker - (1.822606 * ((10 / cigarettesperday) - 0.4021541613)) + (0.0317321 * (yearssmoking - 27)) - (0.0308572 * (yearssincequittingsmoking - 10)) - 4.532506;
    var risk = (100 * (eTo(Log_odds) / (1 + eTo(Log_odds)))).toFixed(2);

    document.getElementById('lungRiskScore').value = risk;

}

function eTo(x) {
    return Math.exp(x);
}

function SmokingHabit() {

    if (document.getElementById("smokingHabit").value == "0.2597431") {
        var number = Number(0);
        $('#yearSinceQuittingSmoking').val(number);
    }

    if (document.getElementById("smokingHabit").value == "0") {

        if (document.getElementById("yearSinceQuittingSmoking").value == "0") {
            $('#yearSinceQuittingSmoking').val('');
        }
    }


}


$(document).ready(function() {

    $('#riskEstimation').bootstrapValidator({
            container: 'popover',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok-circle',
                invalid: 'glyphicon glyphicon-remove-circle',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                race: {
                    group: '.col-xs-3',
                    validators: {
                        notEmpty: {
                            message: 'Rcae is required and can\'t be empty'
                        }
                    }
                },
                education: {
                    group: '.col-xs-3',
                    validators: {
                        notEmpty: {
                            message: 'Education is required and can\'t be empty'
                        }
                    }
                },

                smokingHabit: {
                    group: '.col-xs-3',
                    validators: {
                        notEmpty: {
                            message: 'Smoking habit is required and can\'t be empty'
                        }
                    }
                },

                age: {
                    group: '.col-xs-2',
                    validators: {
                        between: {
                            min: 55,
                            max: 74,
                            message: 'Age must be between 55 to 74'
                        },
                        notEmpty: {
                            message: 'Provide your age'
                        },
                        integer: {
                            message: 'Value should be a integer'
                        },
                        stringLength: {
                            min: 1,
                            max: 5,
                            message: 'Age should be 2-3 digit number'
                        }
                    }
                },
                weight: {
                    group: '.col-xs-2',
                    validators: {
                        notEmpty: {
                            message: 'Provide your weight'
                        },
                        numeric: {
                            message: 'Value should be a numeric'
                        },
                        stringLength: {
                            min: 1,
                            max: 6,
                            message: 'Number should be 2-3 digit number'
                        }
                    }
                },
                height: {
                    group: '.col-xs-2',
                    validators: {
                        notEmpty: {
                            message: 'Provide your height'
                        },
                        numeric: {
                            message: 'Value should be a numberic'
                        },
                        stringLength: {
                            min: 1,
                            max: 3,
                            message: 'Height should be less than 10'
                        }
                    }
                },
                cigarettesPerDay: {
                    group: '.col-xs-3',
                    validators: {
                        notEmpty: {
                            message: 'How many cigarettes a day'
                        },
                        integer: {
                            message: 'Value should be a integer'
                        },
                        stringLength: {
                            min: 1,
                            max: 5,
                            message: 'Number should be 2-3 digit number'
                        }
                    }
                },
                yearsSmoking: {
                    group: '.col-xs-3',
                    validators: {
                        notEmpty: {
                            message: 'Years Smoking'
                        },
                        integer: {
                            message: 'Value should be a integer'
                        },
                        stringLength: {
                            min: 1,
                            max: 5,
                            message: 'Number should be 2-3 digit number'
                        }
                    }
                },
                yearSinceQuittingSmoking: {
                    group: '.col-xs-3',
                    validators: {
                        notEmpty: {
                            message: 'Years Since Quit Smoking'
                        },
                        integer: {
                            message: 'Value should be a integer'
                        },
                        stringLength: {
                            min: 1,
                            max: 5,
                            message: 'Number should be 2-3 digit number'
                        }
                    }
                },
            }
        })

        // Enable submit button all the time
        .on('status.field.bv', function(e, data) {
            // $(e.target)  --> The field element
            // data.bv      --> The BootstrapValidator instance
            // data.field   --> The field name
            // data.element --> The field element

            data.bv.disableSubmitButtons(false);
        });

});
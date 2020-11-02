jQuery(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $('#preloader').fadeOut('slow', function () {
            });
        },2000);

    });


   $('#cancerCases').load("./images/CancerCasesInUS.html");
   $('#earlyScanning').load("./images/CancerCasesInUS.html");



   var parameters = location.search.substring(1).split("&");
           var x = 0;

           var formValues = String(parameters);

           if (formValues.includes("copd")) {
               x = x + 1;
           }
           if (formValues.includes("historyOfCancer")) {
               x = x + 1;
           }
           if (formValues.includes("familyHistoryOfLungCancer")) {
               x = x + 1;
           }

           // Display age
           var age = parameters[0].split("=");
           document.getElementById('age').innerHTML = unescape(age[1]);

           // Display race
           var race = parameters[3].split("=");
           if (unescape(race[1]) == "-0.7434744") {
               document.getElementById('race').innerHTML = "Hispanic";
           } else if (unescape(race[1]) == "-0.466585") {
               document.getElementById('race').innerHTML = "Asian";
           } else if (unescape(race[1]) == "1.027152") {
               document.getElementById('race').innerHTML = "Hawaiian";
           } else if (unescape(race[1]) == "0.3944778") {
               document.getElementById('race').innerHTML = "Black";
           } else {
               document.getElementById('race').innerHTML = "White/Alaskan";
           }

           // Smoker
           var smoker = parameters[x + 5].split("=");
           if (unescape(smoker[1]) == "0.2597431") {
               document.getElementById('smoker').innerHTML = "Current Smoker";
           } else {
               document.getElementById('smoker').innerHTML = "Former Smoker";
           }

           // Cigarettes per day
           var cigarettesperday = parameters[x + 6].split("=");
           document.getElementById('cigarettesperday').innerHTML = unescape(cigarettesperday[1]);

           // Years Smoking
           var yearssmoking = parameters[x + 7].split("=");
           document.getElementById('yearssmoking').innerHTML = unescape(yearssmoking[1]) + " Years";


           // Years since quitting smoking
           var yesrssincequittingsmoking = parameters[x + 8].split("=");
           document.getElementById('yesrssincequittingsmoking').innerHTML = unescape(yesrssincequittingsmoking[1]) + " Years";

           // Risk Score
           var risk = parameters[x + 9].split("=");
           document.getElementById('risk').innerHTML = unescape(risk[1]) + "%";


           // bmi
           var bmi = parameters[x + 10].split("=");
           document.getElementById('bmi').innerHTML = unescape(bmi[1]) + " kg/m2";
});
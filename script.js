var source = {
    "math_grade_3": {
        "description": "123. Doortellen en terugtellen, met sporangen van 3 of meer dan 10 en zelfs meer dan 100",
        "number_of_top_pupils": 16,
        "number_of_average_pupils": 24,
        "number_of_failed_pupils": 0
    },
    "math_grade_4": {
        "description": "201. Splitsend vermenigvuldingen (6 x 32 = 6837) En nog meer rekenen dan je zou willen",
        "number_of_top_pupils": 3,
        "number_of_average_pupils": 34,
        "number_of_failed_pupils": 3
    },
    "math_grade_5": {
        "description": "123. Doorstellen en terugtellen, met sprongen van 1, 2, 4 en 6",
        "number_of_top_pupils": 3,
        "number_of_average_pupils": 34,
        "number_of_failed_pupils": 3
    }
}

var app = new Vue({
    el: '#app',
    data: {
        source: source,
        selected: '',
        pupilArray: [],
        topGradePupil: {
            divClass: 'content__pupils--pupil topgrade'
        },
        averageGradePupil: {
            divClass: 'content__pupils--pupil average'
        },
        failedPupil: {
            divClass: 'content__pupils--pupil failed'
        },
    }, 
    methods: {
        fillPupilArray: function (numberOfPupils, pupilType) {
            for (var i = 0; i < numberOfPupils; i++) {
                this.pupilArray.push(pupilType);
            }
        },
        completePupilArray: function (numberOfTopGrades, numberOfAverageGrades, numberOfFailed) {
            app.fillPupilArray(numberOfTopGrades, this.topGradePupil);
            app.fillPupilArray(numberOfAverageGrades, this.averageGradePupil);
            app.fillPupilArray(numberOfFailed, this.failedPupil);
        },
        initiateFill: function (selection) {
            this.pupilArray = [];
            switch (selection) {
                case 'grade3':
                    app.completePupilArray(source.math_grade_3.number_of_top_pupils, source.math_grade_3.number_of_average_pupils, source.math_grade_3.number_of_failed_pupils);
                    break;
                case 'grade4':
                    app.completePupilArray(source.math_grade_4.number_of_top_pupils, source.math_grade_4.number_of_average_pupils, source.math_grade_4.number_of_failed_pupils);
                    break;
                case 'grade5':
                    app.completePupilArray(source.math_grade_5.number_of_top_pupils, source.math_grade_5.number_of_average_pupils, source.math_grade_5.number_of_failed_pupils);
                    break;
            }
        }
    }
})
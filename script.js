var app = new Vue({
    el: '#app',
    data: {
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
                    app.completePupilArray(16, 24, 0);
                    break;
                case 'grade4':
                    app.completePupilArray(3, 34, 3);
                    break;
                case 'grade5':
                    app.completePupilArray(3, 34, 3);
                    break;
            }
        }
    }
})
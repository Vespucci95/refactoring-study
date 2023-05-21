const score = (candidate, medicalExam, scoringGuide) => new Score(candidate, medicalExam, scoringGuide).exec();

class Score {
    #candidate
    #medicalExam
    #scoringGuide
    #result
    #healthLevel
    #highMedicalRiskFlag
    #certificationGrade
    constructor(candidate, medicalExam, scoringGuide) {
        this.#candidate = candidate
        this.#medicalExam = medicalExam
        this.#scoringGuide = scoringGuide
    }
    scoreSmoking() {
        if (this.#medicalExam.isSmoker) {
            this.#healthLevel += 10
            this.#highMedicalRiskFlag = true
        }
    }

    certificationGrade() {
        this.#certificationGrade = 'regular'
        if (this.#scoringGuide.stateWithLowCertification(this.#candidate.originState)) {
            this.#certificationGrade = 'low'
            this.result -= 5
        }
    }

    exec() {
        this.#healthLevel = 0
        this.#highMedicalRiskFlag = false
        this.#result = 0

        this.scoreSmoking();
        this.certificationGrade();

        this.result -= Math.max(this.#healthLevel - 5, 0)
        return {
            result: this.#result,
            certificationGrade: this.#certificationGrade,
            highMedicalRiskFlag: this.#highMedicalRiskFlag
        }
    }
}

const scoringGuide = {stateWithLowCertification: state => state === 'CA' || state === 'ME'}
console.log(score({originState: 'CA'}, {isSmoker: true}, scoringGuide))
console.log(score({originState: 'NY'}, {isSmoker: false}, scoringGuide))

class PerformanceCalculator {
    constructor(aPerformance, aPlay) {
        this.performance = aPerformance;
        this.play = aPlay;
    }

    get volumeCredits() {
        let result = 0 // 적립 포인트.
        result += Math.max(this.performance.audience - 30, 0)
        if (this.play.type === 'comedy') {
            result += Math.floor(this.performance.audience / 5)
        }
        return result;
    }

    get amount() {
        throw new Error(`서브클래스에서 처리하도록 설계되었습니다.`);
    }
}

class TragedyCalculator extends PerformanceCalculator {
    get amount() {
        let result = 40000;
        if (this.performance.audience > 30) {
            result += 1000 * (this.performance.audience - 30)
        }
        return result;
    }
}

class ComedyCalculator extends PerformanceCalculator {
    get amount() {
        let result = 30000;
        if (this.performance.audience > 20) {
            result += 10000 + 500 * (this.performance.audience - 20)
        }
        result += 300 * this.performance.audience
        return result;
    }
}

const createPerformanceCalculator = (aPerformance, aPlay) => {
    switch (aPlay.type) {
        case "tragedy" :
            return new TragedyCalculator(aPerformance, aPlay);
        case "comedy" :
            return new ComedyCalculator(aPerformance, aPlay);
        default:
            return new PerformanceCalculator(aPerformance, aPlay);
    }
};

const createStatementData = (invoice, plays) => {
    const playFor = aPerformance => plays[aPerformance.playID];

    const totalAmount = performances => performances.reduce((total, p) => total + p.amount, 0);

    const totalVolumeCredits = performances => performances.reduce((total, p) => total + p.volumeCredits, 0);

    const enrichPerformance = aPerformance => {
        const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
        const result = {...aPerformance}
        result.play = playFor(result);
        result.amount = calculator.amount;
        result.volumeCredits = calculator.volumeCredits;
        return result;
    }

    const enrichPerformances = invoice.performances.map(enrichPerformance);
    return {
        customer: invoice.customer,
        performances: enrichPerformances,
        totalAmount: totalAmount(enrichPerformances),
        totalVolumeCredits: totalVolumeCredits(enrichPerformances),
    };
};

export default createStatementData;

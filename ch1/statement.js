const renderPlainText = (data, plays) => {
    const usd = aNumber => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(aNumber / 100);

    let result = `청구 내역 (고객명: ${data.customer})\n`
    for (let perf of data.performances) {
        result += `  ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`
    }

    result += `총액: ${usd(data.totalAmount)}\n`
    result += `적립 포인트: ${data.totalVolumeCredits}점\n`
    return result
}

const createStatementData = (invoice, plays) => {
    const playFor = aPerformance => plays[aPerformance.playID];

    const amountFor = aPerformance => {
        let result = 0
        switch (aPerformance.play.type) {
            case 'tragedy': {
                result = 40000
                if (aPerformance.audience > 30) result += 1000 * (aPerformance.audience - 30)
                break
            }
            case 'comedy': {
                result = 30000
                if (aPerformance.audience > 20) result += 10000 + 500 * (aPerformance.audience - 20)
                result += 300 * aPerformance.audience
                break
            }
            default:
                throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`)
        }
        return result;
    }

    const volumeCreditsFor = aPerformance => {
        let result = 0 // 적립 포인트.
        result += Math.max(aPerformance.audience - 30, 0)
        if (aPerformance.play.type === 'comedy') {
            result += Math.floor(aPerformance.audience / 5)
        }
        return result;
    }

    const totalAmount = performances => performances.reduce((total, p) => total + p.amount, 0);

    const totalVolumeCredits = performances => performances.reduce((total, p) => total + p.volumeCredits, 0);

    const enrichPerformance = aPerformance => {
        const result = {...aPerformance}
        result.play = playFor(result);
        result.amount = amountFor(result);
        result.volumeCredits = volumeCreditsFor(result);
        return result;
    }

    const enrichPerformances = invoice.performances.map(enrichPerformance);
    return {
        customer: invoice.customer,
        performances: enrichPerformances,
        totalAmount: totalAmount(enrichPerformances),
        totalVolumeCredits: totalVolumeCredits(enrichPerformances),
    };
}

const statement = (invoice, plays) => {
    return renderPlainText(createStatementData(invoice, plays), plays);
}

export default statement;

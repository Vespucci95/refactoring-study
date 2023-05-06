class Rating {
    constructor(voyage, history) {
        this.voyage = voyage
        this.history = history
    }

    get value() {
        // 투자 등급
        const vpf = this.voyageProfitFactor
        const vr = this.voyageRisk
        const chr = this.captainHistoryRisk
        if (vpf * 3 > vr + chr * 2) return 'A'
        return 'B'
    }
    get voyageRisk() {
        // 항해 경로 위험요소
        let result = 1
        if (this.voyage.length > 4) result += 2
        if (this.voyage.length > 8) result += this.voyage.length - 8
        if (['중국', '동인도'].includes(this.voyage.zone)) result += 4
        return Math.max(result, 0)
    }

    get captainHistoryRisk() {
        // 선장의 항해이력 위험요소
        let result = 1
        if (this.history.length < 5) result += 4
        result += this.history.filter(v => v.profit < 0).length
        if (this.voyage.zone === '중국' && this.hasChina(this.history)) result -= 2
        return Math.max(result, 0)
    }

    get voyageProfitFactor() {
        // 수익 요인
        let result = 2
        if (this.voyage.zone === '중국') result += 1
        if (this.voyage.zone === '동인도') result += 1
        if (this.voyage.zone === '중국' && this.hasChina(this.history)) {
            result += 3
            if (this.history.length > 10) result += 1
            if (this.voyage.length > 12) result += 1
            if (this.voyage.length > 18) result -= 1
        } else {
            if (this.history.length > 8) result += 1
            if (this.voyage.length > 14) result -= 1
        }
        return result
    }

    get hasChina() {
        return this.history.some(v => v.zone === '중국')
    }
}



const voyage = {zone: '서인도', length: 10}
const histories = [
    {zone: '동인도', profit: 5},
    {zone: '서인도', profit: 15},
    {zone: '중국', profit: -2},
    {zone: '서아프리카', profit: 7},
]
const rating = new Rating(voyage, histories)
console.log({
    voyageRisk: rating.voyageRisk,
    captainHistoryRisk: rating.captainHistoryRisk,
    voyageProfitFactor: rating.voyageProfitFactor,
    myRating: rating.value,
})

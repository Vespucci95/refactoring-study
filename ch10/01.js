import dayjs from 'dayjs'

const plan = {
    summerStart: dayjs('2021-07-01'),
    summerEnd: dayjs('2021-08-31'),
    summerRate: 1000,
    regularRate: 1100,
    regularServiceCharge: 100,
}

const summer = (aDate) => !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
const charges = {
    summer: quantity => quantity * plan.regularRate,
    regular: quantity => quantity * plan.summerRate + plan.regularServiceCharge
}

const getCharge = (quantity, aDate) => charges[summer(aDate) ? "summer" : "regular"](quantity)


console.log(getCharge(10, dayjs('2021-06-29')))
console.log(getCharge(10, dayjs('2021-08-15')))

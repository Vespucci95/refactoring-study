import cloneDeep from 'lodash/cloneDeep.js'

const RECORDS = [
    {
        name: '애크미 보스턴',
        location: 'Malden MA',
        customer: {
            name: '애크미 산업',
            billingPlan: 'plan-451',
            paymentHistory: {
                weeksDelinquentInLastYear: 7,
            },
        },
    },
    {
        name: '물류창고 15',
        location: 'Malden MA',
        customer: '미확인 고객',
    },
]
const registry = {billingPlans: {basic: ''}}

class Site {
    _customer
    get customer() {
        return this._customer
    }
}

const enrichSite = site => {
    const result = _.cloneDeep(site);
    const unknownCustomer = {
        isUnknown: true,
        name: '거주자',
        billingPlan: registry.billingPlans.basic.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
        },
    };

    if (isUnknown(result.customer)) {
        result.customer = unknownCustomer
    } else {
        result.customer.isUnknown = false;
    }
    return result;
}

const isUnknown = customer => customer === '미확인 고객' ? true : customer.isUnknown;

const acquireSiteData = () => new Site()

const client1 = () => {
    const site = acquireSiteData()
    const customer = site.customer
    const customerName = customer.name
}
const client2 = () => {
    const customer = acquireSiteData().customer
    const plan = registry.billingPlans.basic
}
const client3 = () => {
    const customer = acquireSiteData().customer
    const weeksDelinquent = customer.paymentHistory.weeksDelinquentInLastYear
}

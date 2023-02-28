import {describe, it} from "mocha";
import {assert} from "chai";
import cloneDeep from "lodash/cloneDeep.js";
import {enrichReading} from "./10.js";

describe('check reading', () => {
    it('baseReading', () => {
        const baseReading = {
            customer: 'ivan',
            quantity: 10,
            month: 5,
            year: 2017,
        }
        const oracle = cloneDeep(baseReading)
        enrichReading(oracle)
        assert.deepEqual(baseReading, oracle);
    });
})

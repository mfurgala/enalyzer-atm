import { ATM } from '../backend/ATM'

describe('ATM Class', () => {
    let atm: ATM

    beforeEach(() => {
        atm = new ATM()
    });

    test('withdraw should return correct notes and coins', () => {
        const result = atm.withdraw(1382)
        expect(result).toEqual({
            notes: { 1000: 1, 200: 1, 100: 1, 50: 1 },
            bigCoins: { 2: 1, 20: 1 },
            smallCoins: { 10: 1 }
        });
    })

    test('withdraw should return correct currencies for an amount without coins', () => {
        const result = atm.withdraw(1800)
        expect(result).toEqual({
            notes: { 1000: 1, 500: 1, 200: 1, 100: 1 },
            bigCoins: {},
            smallCoins: {}
        })
    })

    test('atm should withdraw only coins', () => {
        const result = atm.withdraw(37)
        expect(result).toEqual({
            notes: {},
            bigCoins: { 2: 1, 5: 1, 20: 1 },
            smallCoins: { 10: 1 }
        })
    })

    test('atm should handle withdrawing 0', () => {
        const result = atm.withdraw(0)
        expect(result).toEqual({
            notes: {},
            bigCoins: {},
            smallCoins: {}
        })
    })

    test('withdraw should handle small amounts', () => {
        const result = atm.withdraw(3)
        expect(result).toEqual({
            notes: {},
            bigCoins: { 2: 1 },
            smallCoins: { 1: 1 }
        })
    })

    test('withdraw should return correct notes for large amounts', () => {
        const result = atm.withdraw(6532);
        expect(result).toEqual({
            notes: { 1000: 6, 500: 1 },
            bigCoins: { 2: 1, 20: 1 },
            smallCoins: { 10: 1, }
        })
    })

    test('atm withdraw should handle negative amounts', () => {
        const result = atm.withdraw(-100)
        expect(result).toEqual({
            notes: {},
            bigCoins: {},
            smallCoins: {}
        })
    })

    test('atm should handle one coin', () => {
        const result = atm.withdraw(1)
        expect(result).toEqual({
            notes: {},
            bigCoins: {},
            smallCoins: { 1: 1 }
        })
    })
})
import { withdrawLeast } from '../types'

export class ATM {
    static readonly notes = [50, 100, 200, 500, 1000]
    static readonly bigCoins = [2, 5, 20]
    static readonly smallCoins = [1, 10]
    private readonly _currency = [...ATM.notes, ...ATM.bigCoins, ...ATM.smallCoins]

    constructor() {
        this._currency.sort((a, b) => b - a) // sort in descending order, also takes care of adding new currency
    }

    withdraw(amount: number): withdrawLeast {
        let result: withdrawLeast = { notes: {}, bigCoins: {}, smallCoins: {} }
        let _amount = amount
        this._currency.forEach(currency => {
            const count = Math.trunc(_amount / currency)
            if (count > 0) {
                if (ATM.notes.includes(currency))
                    result.notes[currency] = count

                else if (ATM.bigCoins.includes(currency))
                    result.bigCoins[currency] = count

                else
                    result.smallCoins[currency] = count
                _amount = _amount % currency
            }
        })
        if (_amount !== 0)
            throw new Error("Amount cannot be withdrawn")
        return result
    }
}
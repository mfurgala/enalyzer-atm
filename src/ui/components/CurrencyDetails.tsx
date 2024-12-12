import "./CurrencyDetails.css"
import billIcon from "../../assets/bill-icon.png"
import { currencyCount } from "../../types"
import { ATM } from "../../backend/ATM"

type props = {
    currency: currencyCount
    currencyType: "notes" | "smallCoins" | "bigCoins"
}

export function CurrencyDetails({ currency, currencyType }: props) {
    const allAvailableCurrency = ATM[currencyType].sort((a, b) => b - a)
    return (
        <>
            {Object.keys(currency).length > 0 && <div className="currencyColumnContainer">
                {allAvailableCurrency.map((key, _) => {
                    if (!currency[key]) return null
                    const value = currency[key]
                    return (
                        <div className="currencyElementContainer" key={`${currencyType}${key}`}>
                            {currencyType === "notes" ? <img alt="billImage" className="billImage" src={billIcon} /> : <div className="circleContainer"><div className="circle" /></div>}
                            <span className="currencyDetailsText">{value} x {key}</span>
                        </div>)
                })}
            </div >
            }
        </>

    )

}
import "./CurrencyDetails.css"
import billIcon from "../../assets/bill-icon.png"
import { currencyCount } from "../../types"

type props = {
    currency: currencyCount
    currencyType: "notes" | "smallCoins" | "bigCoins"
}

export function CurrencyDetails({ currency, currencyType }: props) {
    let allAvailableCurrency;
    switch (currencyType) {
        case "notes":
            allAvailableCurrency = [50, 100, 200, 500, 1000]
            break;
        case "bigCoins":
            allAvailableCurrency = [2, 5, 20]
            break;
        case "smallCoins":
            allAvailableCurrency = [1, 10]
            break;
    }
    allAvailableCurrency.sort((a, b) => b - a)
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
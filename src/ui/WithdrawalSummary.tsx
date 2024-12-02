import "./WithdrawalSummary.css"
import { CurrencyDetails } from "./components/CurrencyDetails"
import backArrowIcon from "../assets/back-arrow-icon.png"


type props = {
    setAmount: (amount: number) => void
    amount: number
}
export function WithdrawalSummary({ amount, setAmount }: props) {
    const withdrawal = {
        notes: { 50: 2, 100: 1, 200: 2, 500: 10, 1000: 44 },
        bigCoins: { 2: 3, 5: 3, 20: 2 },
        smallCoins: { 1: 2, 10: 1 }
    }
    function handleBackButtonClick() {
        setAmount(0)
    }
    return (
        <>
            <div className="withdrawalTopContainer">
                <button className="imageButton withdrawalBackArrowButton" onClick={handleBackButtonClick}>
                    <img alt="backArrow" className="backArrowImage" src={backArrowIcon} />
                </button>
                <span className="withdrawalText withdrawalSummaryText">Withdrawal summary</span>
            </div>
            <div className="withdrawalCurrencyContainer">
                <span className="currencyText">£ {amount}</span>
            </div>
            <div className="currencyDetailsContainer">
                <CurrencyDetails currency={withdrawal.notes} currencyType={"notes"} />
                <CurrencyDetails currency={withdrawal.bigCoins} currencyType={"bigCoins"} />
                <CurrencyDetails currency={withdrawal.smallCoins} currencyType={"smallCoins"} />
            </div>
            <div className="withdrawalThanksContainer">
                <span className="withdrawalText">Thank you for using</span>
                <span className="withdrawalText withdrawalTextBlock">Enalyzer ATM</span></div>
        </>
    )

}
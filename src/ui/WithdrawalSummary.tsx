import "./WithdrawalSummary.css"
import { CurrencyDetails } from "./components/CurrencyDetails"
import backArrowIcon from "../assets/back-arrow-icon.png"
import { ATM } from "../backend/ATM"

type props = {
    setAmount: (amount: number) => void
    amount: number
}
export function WithdrawalSummary({ amount, setAmount }: props) {
    const atm = new ATM()
    const withdrawal = atm.withdraw(amount)

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
import "./InputForm.css"
import { FormEvent, useRef, useState, KeyboardEvent, ChangeEvent } from "react"
import backArrowIcon from "../assets/back-arrow-icon.png"

type props = {
    setAmount: (amount: number) => void
}
export function InputForm({ setAmount }: props) {
    const [inputAmount, setInputAmount] = useState("")
    const [makeActive, setMakeActive] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const pinNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const keyboardKeys = [...pinNumbers, "0", "Backspace"]

    function onSubmitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const parsedAmount = parseInt(inputAmount)
        setAmount(parsedAmount)
    }
    function onKeyDownForm(e: KeyboardEvent<HTMLFormElement>) {
        if (e.key === "Enter")
            onSubmitForm(e)
    }
    function onKeyDownInput(e: KeyboardEvent<HTMLInputElement>) {
        if (keyboardKeys.includes(e.key))
            setMakeActive(e.key)
        else
            e.preventDefault()
    }
    function onKeyUpInput(e: KeyboardEvent<HTMLInputElement>) {
        if (keyboardKeys.includes(e.key))
            setMakeActive("")
    }
    function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
        if (inputAmount.length === 0 && e.target.value === "0") return
        setInputAmount(e.target.value)
    }
    function onClickPinNumber(number: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        inputRef.current?.focus()
        if (inputAmount.length === 6) return
        setInputAmount(prev => prev + number)
    }
    function onClickImageButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        inputRef.current?.focus()
        setInputAmount(prev => prev.slice(0, prev.length - 1))
    }
    function onClick0PinNumber(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        inputRef.current?.focus()
        if (inputAmount.length === 0 || inputAmount.length === 6) return
        setInputAmount(prev => prev + "0")
    }

    return (
        <>
            <div className="selectAmountContainer">
                <span className="selectAmountText">Select amount</span>
            </div>
            <form onSubmit={onSubmitForm} onKeyDown={onKeyDownForm}>
                <div className="currencyInputContainer">
                    <span className="currencyText">£ </span>
                    <input maxLength={6} className="numberInput" ref={inputRef} autoFocus type="text" value={inputAmount}
                        onKeyDown={onKeyDownInput}
                        onKeyUp={onKeyUpInput}
                        onChange={onChangeInput} />
                </div>
                <div className="pinNumbersContainer">
                    {pinNumbers.map(number =>
                        <button key={`pin${number}`} className={`baseCircleButton numberButton ${makeActive === number && "makeActive"}`} onClick={(event) => onClickPinNumber(number, event)}>{number}</button>)}
                    <button className="imageButton" onClick={onClickImageButton}>
                        <img alt="backArrow" src={backArrowIcon} className="backArrowImage" /></button>
                    <button className={`baseCircleButton numberButton ${makeActive === "0" && "makeActive"}`} onClick={onClick0PinNumber}>0</button>
                </div>
                <button type="submit" className="baseCircleButton submitButton" disabled={!inputAmount}>submit</button>
            </form>
        </>
    )
}
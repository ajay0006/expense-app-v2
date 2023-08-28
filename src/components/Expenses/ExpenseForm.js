import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = () => {
    let userInputObj = {
        title: "",
        amount: '',
        date: ''
    }

    const [userInput, setuserInput] = useState({
        userInputObj
    })


    function titleChangeHandler(e) {
        setuserInput({
            ...userInput,
            title: e.target.value
        })
    }

    const amountChangeHandler = (e) => {
        setuserInput({
            ...userInput,
            amount: e.target.value
        })
    }

    function dateChangeHandler(e) {
        setuserInput({
            ...userInput,
            date: e.target.value
        })
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label> Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label> Amount </label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label> Date</label>
                    <input type='date' min='2000-01-01' max={Date(Date.now()).toString()} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
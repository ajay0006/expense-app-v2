import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const [isHidden, setIsHidden] = useState(false)

    function titleChangeHandler(e) {
        setTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }

    function dateChangeHandler(e) {
        setDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title,
            amount,
            date: new Date(date)
        }
        // so now i am passing the expense data from the form to the function that was bound to the props that was passed down to the child component aka ExpenseForm
        // from the parent component NewExpense, this will result in the function being run from the NewExpense component aka parent component, therefore the data will be
        // accessible above this component

        props.onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <>
            <form hidden={isHidden} onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label> Title</label>
                        <input type='text' value={title} onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label> Amount </label>
                        <input type='number' value={amount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label> Date</label>
                        <input type='date' value={date} min='2000-01-01' max={Date(Date.now()).toString()}
                               onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='cancel' onClick={() => setIsHidden(true)}> Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
            <button hidden={isHidden !== true} onClick={() => setIsHidden(false)} type='submit'>Add Expense</button>

        </>
    )
}

export default ExpenseForm
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
import {useState} from "react";

function NewExpense(props) {
    // const [isHidden, setIsHidden] = useState("")
    // this is the function i am binding to the props onSaveExpenseData for the sake of passing data from child to parent
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }

    // const isHiddenHandler = () => {
    //     setIsHidden(true)
    // }

    // eslint-disable-next-line no-lone-blocks
    {/*
        const isHiddenHandlerReverse = () => {
            setIsHidden(false)
        }
    */}
    return (
        <div className='new-expense'>
            {/* here i am passing data upwards, remember i can pass data from parent to child (downwards) using props
              but in this case to pass data from child to parent i will have to use functions passed as props
              so i am passing the prop onSaveExpenseData which points to the function in the parent component
              to the child ExpenseForm */}

            {/* !isHidden && <button onClick={isHiddenHandler}> Add New Expense</button>*/}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense
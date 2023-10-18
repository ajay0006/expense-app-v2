import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense(props) {
    // this is the function i am binding to the props onSaveExpenseData for the sake of passing data from child to parent
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }
    return (
        <div className='new-expense'>
            {/* here i am passing data upwards, remember i can pass data from parent to child (downwards) using props
              but in this case to pass data from child to parent i will have to use functions passed as props
              so i am passing the prop onSaveExpenseData which points to the function in the parent component
              to the child ExpenseForm */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense
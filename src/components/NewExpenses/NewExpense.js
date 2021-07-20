import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpense) =>{
        props.onAddExpense(enteredExpense);

    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;
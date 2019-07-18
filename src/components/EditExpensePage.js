import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

const EditExpensePage = (props)=> {
    return (
    <div>
        <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
            // console.log('updated', expense)
            props.dispatch(startEditExpense(props.expense.id,
                expense))
            props.history.push('/dashboard')
        }}
        />
        <button 
        onClick={() => {
            props.dispatch(startRemoveExpense({id: props.expense.id}))
            props.history.push('/dashboard')
        }
        }>Remove</button>
    </div>
)}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage)
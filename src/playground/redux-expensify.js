import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note, 
        amount, 
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } ={}) => ({
    type: 'REMOVE_EXPENSE', 
    expense: {
        id
    }
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({ 
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})


// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'amount'
})

// SET_START_DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

// SET_END_DATE
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

// Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'REMOVE_EXPENSE':
            return state.filter((expense)=>{
                return expense.id != action.expense.id
            })     
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (action.id === expense.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date 
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date 
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) 
    
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        } else {
            throw('Invalid sort by passed')
        }
    })
}

// Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(()=> {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ 
    description: 'Rent', 
    amount: 1000, 
    createdAt: -21000
}))

const expenseTwo = store.dispatch(addExpense({ 
    description: 'Coffee', 
    amount: 300, 
    createdAt: -1000
}))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500 } ))

// store.dispatch(setTextFilter('Rent'))


// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))

// const demoState = {
//     expenses: [{
//         id:'sdgksdgf',
//         description: 'January Rent',
//         note: 'This was the final payment for that address',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'Rent',
//         sortBy: 'amount', // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// }
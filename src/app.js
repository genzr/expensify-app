import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

// addExpense -> water bill
store.dispatch(addExpense({ description: 'Water Bill', amount:200 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount:2000, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Rent', amount:109500 }))

const state = store.getState()

// use getVisibleExpenses function and print visible ones to screen
console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
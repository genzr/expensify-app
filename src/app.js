import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import './firebase/firebase'
import { startSetExpenses } from './actions/expenses'
import { firebase } from './firebase/firebase'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('Logged in')
    } else {
        console.log('Logged out')
    }
})
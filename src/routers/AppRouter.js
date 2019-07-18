import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ExpenseDashboardPage from "./../components/ExpenseDashboardPage"
import AddExpensePage from "./../components/AddExpensePage"
import EditExpensePage from "./../components/EditExpensePage"
import HelpPage from "./../components/HelpPage"
import NotFoundPage from "./../components/NotFoundPage"
import Header from "./../components/Header"
import LoginPage from '../components/LoginPage'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter

// 1. Create LoginPage component with Login button
// 2. Show login component at root of app
// 3. Show ExpenseDashboardPage at /dashboard
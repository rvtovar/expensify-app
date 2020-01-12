import React from 'react'
import ReactDom from 'react-dom'
import AppRouter from './routers/AppRouter'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss'

const store = configureStore()


const ex1 = store.dispatch(addExpense({description:'Power Bill', amount:20000,createdAt:9000}))
const ex2 = store.dispatch(addExpense({description:'Rent', amount:77500, createdAt:4500}))
const ex3 = store.dispatch(addExpense({description:'Coffee', amount:400, createdAt:1000}))


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDom.render(jsx, document.querySelector('#app'))



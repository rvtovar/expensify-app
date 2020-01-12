import React from 'react'
import ReactDom from 'react-dom'
import AppRouter from './routers/AppRouter'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDom.render(jsx, document.querySelector('#app'))



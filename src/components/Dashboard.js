import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFIlters'

const Dashboard = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default Dashboard
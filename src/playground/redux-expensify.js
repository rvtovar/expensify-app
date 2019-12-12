import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

//Add Expense
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
//Remove Expense
const removeExpense = ({id} = {}) => ({
    type:'REMOVE_EXPENSE',
    id
})
//Edit Expense
const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
})
//Set Text filter

const setTextFilter = (text = '') => ({
    type:'SET_TEXT_FILTER',
    text
})
//Sort by Date
const sortByDate = () => ({
    type:'SORTBY_DATE'
})
//Sort by amount
const sortByAmount = () => ({
    type:'SORTBY_AMOUNT',
})

//Set Start Date
const setStartDate = (startDate) => ({
    type:'SET_START_DATE',
    startDate
}) 
//Set end date
const setEndDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
})

// Expenses Reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
           return [...state,action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter((item) => item.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((item) => {
                if(item.id === action.id){
                    return {
                        ...item,
                        ...action.updates
                    }
                }else{
                    return item
                }
            })
        default:
            return state
    }
}

const filterReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filterReducer = (state=filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'SORTBY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }
        case 'SORTBY_DATE':
             return{
                ...state,
                sortBy:'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
    })
)


store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})

const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) => {
    return expenses.filter((item) => {
        const startDateMatch = typeof startDate !== 'number' || item.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || item.createdAt <= endDate
        const textMatch = item.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
}
const ex1 = store.dispatch(addExpense({description:'coffee', amount:775,createdAt:-9000}))
const ex2 = store.dispatch(addExpense({description:'coffee', amount:77500, createdAt:-1000}))

// store.dispatch(removeExpense({id:ex1.expense.id}))
// store.dispatch(editExpense(ex2.expense.id,{ amount: 500}))
//store.dispatch(setTextFilter('rent'))
//store.dispatch(setTextFilter('coffee'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

//store.dispatch(setStartDate(-2000))
// store.dispatch(setStartDate())

//store.dispatch(setEndDate(2000))
// store.dispatch(setEndDate())
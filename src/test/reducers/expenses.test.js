import moment from 'moment'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenes'

test('should set default state', () => {
    const state = expensesReducer(undefined,{type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action)

    expect(state).toEqual([expenses[0], expenses[2]])
})


test('should not remove expenses if id not found', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses,action)

    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense:{
            id:'4',
            description:'Waffles',
            note:'',
            amount:450,
            createdAt:moment(0).add(10, 'days').valueOf()
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses,action.expense])
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates:{
            amount:100000,
            createdAt: moment(0).subtract(2, 'days').valueOf()
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1]).toEqual({
        id:'2',
        amount:100000,
        description:'Rent',
        note:'',
        createdAt: moment(0).subtract(2, 'days').valueOf()
    })
})

test('should not edit expense if expense not found', () => {
    const action = {
        type:'EDIT_EXPENSE',
        id:'4',
        updates:{
            amount:100000,
            createdAt: moment(0).subtract(2, 'days').valueOf()
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})
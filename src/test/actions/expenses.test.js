import {addExpense,editExpense,removeExpense} from '../../actions/expenses'

test('should set up remove expense action object', () => {
    const action = removeExpense({id:'123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})

test('should set up edit expense action object', () => {
    const action = editExpense('123abc',{note:'New Update'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note:'New Update'
        }
    })
})

test('should set up add expense action object with data', () => {
    const expenseData = {
        description:'rent',
        amount:77500,
        createdAt: 1000,
        note: 'Last Months Rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should set up add expense action object with default data', () => {
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id:expect.any(String),
            description:'',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})
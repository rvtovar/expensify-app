import React from 'react'
import {shallow} from 'enzyme'
import {EditPage} from '../../components/EditPage'
import expenses from '../fixtures/expenes'

let editExpense, removeExpense, wrapper, history

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<EditPage 
                        editExpense={editExpense} 
                        removeExpense={removeExpense} 
                        history={history}
                        expense={expenses[0]}
                    />)
})

test('should render editPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should edit expense' , () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
})

test('should remove expense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id)
})
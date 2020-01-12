import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList} from '../../components/ExpenseList'
import expenses from '../fixtures/expenes'

test('should render expenseList with given expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense list with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})
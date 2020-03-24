import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProgrammersIndex from '../ProgrammersIndex'

Enzyme.configure({ adapter: new Adapter() })

it('ProgrammersIndex renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgrammersIndex />, div)
})

it('ProgrammersIndex renders content', () => {
  const ProgrammersIndex = mount(<ProgrammersIndex />)
  expect(ProgrammersIndex.find('p').text()).toEqual('All the programmers.')
})
import React from 'react'
import { shallow } from 'enzyme'
import Counter from './index'

describe('Test Counter Container', () => {
  let counterContainer: any = null
  beforeAll(() => {
    counterContainer = shallow(<Counter />)
  })
  describe('Inital State', () => {
    test('counter must be 0', () => {
      expect(counterContainer.state().counter).toEqual(0)
    })
    test('test snapshot init state', () => {
      expect(counterContainer).toMatchSnapshot()
    })
  })
  describe('Add State', () => {
    beforeAll(() => {
      const oldCouter = counterContainer.state().counter
      counterContainer.instance().handlerAddCounter(oldCouter)
    })
    test('counter must be 1', () => {
      expect(counterContainer.state().counter).toEqual(1)
    })
    test('test snapshot add state', () => {
      expect(counterContainer).toMatchSnapshot()
    })
  })
  describe('Sub State', () => {
    beforeAll(() => {
      const oldCouter = counterContainer.state().counter
      counterContainer.instance().handlerSubCounter(oldCouter)
    })
    test('counter must be 0', () => {
      expect(counterContainer.state().counter).toEqual(0)
    })
    test('test snapshot add state', () => {
      expect(counterContainer).toMatchSnapshot()
    })
  })
  describe('Click Add Button', () => {
    beforeAll(() => {
      const addBtn = counterContainer.find('button').at(0)
      addBtn.simulate('click')
    })

    test('counter must be 1', () => {
      expect(counterContainer.state().counter).toEqual(1)
    })
    test('test snapshot add state', () => {
      expect(counterContainer).toMatchSnapshot()
    })
  })
  describe('Click Sub Button', () => {
    beforeAll(() => {
      const subBtn = counterContainer.find('button').at(1)
      subBtn.simulate('click')
    })

    test('counter must be 1', () => {
      expect(counterContainer.state().counter).toEqual(0)
    })
    test('test snapshot add state', () => {
      expect(counterContainer).toMatchSnapshot()
    })
  })
})

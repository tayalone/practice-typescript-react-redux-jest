import React from 'react'
import { shallow } from 'enzyme'
import BookList from './index'

describe('Test BookList Container', () => {
  let bookListContainer: any = null
  beforeAll(async () => {
    //console.log(`beforeAll`)
    jest.setTimeout(10000)
    jest.useFakeTimers()
    bookListContainer = shallow(<BookList />, { disableLifecycleMethods: true })
  })
  test('title must be Loading', () => {
    expect(bookListContainer.state().title).toEqual('Loading')
  })
  test('after 4 second title must be Loading', async () => {
    const instance = bookListContainer.instance() // you assign your instance of the wrapper
    // console.log(`--------`)
    // console.log(`after 4 second title must be Loading`)
    instance.componentDidMount()
    // jest.runAllTimers(3000)
    jest.advanceTimersByTime(4000)
    await Promise.resolve()
    bookListContainer.update()
    expect(bookListContainer.state().title).toEqual('Loading')
  })
  test('after 5 second title must be Loading', async () => {
    // console.log(`after 5 second title must be Loading`)
    jest.advanceTimersByTime(1001)
    await Promise.resolve()
    bookListContainer.update()
    expect(bookListContainer.state().title).toEqual('done')
  })
})

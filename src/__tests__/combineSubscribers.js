/* eslint-env jest */
'use strict'

const createTransition = require('../utils/transition')
const { combineSubscribers } = require('../index')

describe('combineSubscribers', function() {
  test('should ignore undefined effects from nested subscribers', function() {
    const nullSubscriber = transition => {}
    const transition = createTransition({ state: 1 }, { state: 2 })
    const combinedSubscriber = combineSubscribers({ state: nullSubscriber })
    const effects = combinedSubscriber(transition)
    expect(effects).toEqual([])
  })
})

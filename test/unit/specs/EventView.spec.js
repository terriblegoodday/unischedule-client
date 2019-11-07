import EventView from '@/components/EventView'

describe('EventView.vue', () => {
  it('has a close function', () => {
    expect(typeof EventView.methods.closeWindow).toBe('function')
  })
})

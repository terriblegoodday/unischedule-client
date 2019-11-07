import Vue from 'vue'
import Header from '@/components/Header'

describe('Header.vue', () => {
  it('has the default data', () => {
    expect(Header.data()).toEqual({
      dropdownOptions: {
        width: '200px',
        height: '40px',
        inputClass: 'study-group',
        dropdownClass: 'dropdown-inner',
        placeholder: 'Группа',
        itemContainerClass: 'item-container',
        activeItemClass: 'active-item'
      }
    })
  })

  it('has getGroupByCode function which returns 1 by default', () => {
    expect(Header.methods.getGroupByCode(null)).toEqual(1)
  })

  it('has didChangeWeek function', () => {
    expect(typeof Header.methods.didChangeWeek).toBe('function')
  })

  it('has didChangeGroup function', () => {
    expect(typeof Header.methods.didChangeGroup).toBe('function')
  })

  it('has didChangeDay function', () => {
    expect(typeof Header.methods.didChangeDay).toBe('function')
  })
})

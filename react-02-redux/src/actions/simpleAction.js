import * as types from '../constants/simpleConstants'


export function handleDropdownChange(value) {
  return {
    type: types.DROPDOWN_CHANGE,
    value: value
  }
}


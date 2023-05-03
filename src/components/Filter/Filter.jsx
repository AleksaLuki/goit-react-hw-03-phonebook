import React from 'react'
import propTypes from 'prop-types';
import css from '../Filter/Filter.module.css'

export function Filter({handleChange, value}) {
  return (
    <div>
      <input className={css.inputName} type="text" value={value} onChange={handleChange} name={'filter'}/>
    </div>
  )
}

Filter.propTypes = {
    value: propTypes.string, 
 };
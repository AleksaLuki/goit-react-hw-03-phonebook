import React from 'react'
import propTypes from 'prop-types';
import css from '../ContactsList/ContactsList.module.css'

export function ContactsList({contacts, deleteContact}) {
  return (
    <ul className={css.list}>
        {contacts.map(contact => {
            return (
                <li className={css.items} key={contact.id}>
                <span className={css.span}>{contact.name}</span>:
                <span className={css.span}>{contact.number}</span>
                <button className={css.itemBtn} onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
            )
        })}
    </ul>
  )
}

ContactsList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.shape),
};
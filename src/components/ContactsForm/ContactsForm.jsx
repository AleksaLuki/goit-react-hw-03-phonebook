import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import propTypes from 'prop-types';
import css from '../ContactsForm/ContactsForm.module.css'

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('submit')
    const isContactExists = this.props.addContact({id: nanoid(6), ...this.state});
    if(!isContactExists) {
      this.reset()
    }
  };

  handleChange = (e) => {
   this.setState({
    [e.target.name]:e.target.value
   })
  }

  reset = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
    return (
      <form className={css.form} onSubmit = {this.handleSubmit}>
        <label className={css.label}>
        Name
        <input className={css.input}
        onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
        />
        </label>
       <label className={css.label}>
        Number
       <input className={css.input}
       onChange={this.handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
        />
       </label>
       <button className={css.addBtn} type='submit'>Add Contact</button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  name: propTypes.string,
  number: propTypes.string,
};
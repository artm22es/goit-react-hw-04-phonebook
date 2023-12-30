import { Component } from 'react';
import { ContactFormWrapper, ButtonForm } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addContact(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <ContactFormWrapper onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </ContactFormWrapper>
    );
  }
}
